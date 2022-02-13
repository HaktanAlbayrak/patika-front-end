import React from 'react'
import { useSelector } from 'react-redux'
import { Bars, Chart, Dots, Lines } from 'rumble-charts'
import { Box } from './Box'
import "./style.css"

export const BoxList = () => {

    const confirmed = useSelector((state) => state.info.confirmed)
    const recovered = useSelector((state) => state.info.recovered)
    const deaths = useSelector((state) => state.info.deaths)
    const lastUpdate = useSelector((state) => state.info.lastUpdate)

    console.log(deaths)

    const series = [{
        data: [confirmed.value]
    }, {
        data: [recovered.value]
    }, {
        data: [deaths.value]
    }];

    return (
        <div >
            <div style={{ marginTop: "50px"}}>
                <h2 style={{ marginTop: "10px", fontStyle: "italic" }}> Last Update = {lastUpdate}</h2>

                <Box item={{ name: "Confirmed", value: confirmed.value }} />
                <Box item={{ name: "Recovered", value: recovered.value }} />
                <Box item={{ name: "Deaths", value: deaths.value }} />

            </div>

            <Chart style={{ marginTop: "50px"}} width={600} height={250} series={series} >
                <Bars innerPadding={5} groupPadding={10} />
            </Chart>;
       
        </div>




    )
}
