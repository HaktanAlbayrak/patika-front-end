import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setConfirmed, setDeaths, setLastUpdate, setRecovered } from '../redux/infoSlice'
import "./style.css"

export const Form = () => {

    const [countrys, setCountrys] = useState([])
    const [country, setCountry] = useState("Turkey")
    const dispatch = useDispatch()

    useEffect(async () => {

        const data = await axios.get("https://covid19.mathdro.id/api/countries").then((res) => res.data.countries);
        setCountrys(data)

    }, [])

    useEffect(async () => {

        const data = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`).then((res) => res.data);

        dispatch(setConfirmed(data.confirmed))
        dispatch(setRecovered(data.recovered))
        dispatch(setDeaths(data.deaths))
        dispatch(setLastUpdate(data.lastUpdate))

    }, [,country])

    return (
        <div className='select'>

            {countrys.length > 0 ?

                <select value={country} onChange={(e) => setCountry(e.target.value)}>

                    {
                        countrys.map((country, indx) => (
                            <option key={indx} value={country.name}>{country.name}</option>
                        ))
                    }

                </select> :
                <>Loading...</>
            }
        </div>
    )
}
