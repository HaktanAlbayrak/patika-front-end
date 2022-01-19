import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WheatherContext = createContext();

export const WheatherProvider = ({ children }) => {

    const [wheatherList, setWheatherList] = useState([])

    const [country, setCountry] = useState("Adana")

    const values = { country, setCountry, wheatherList }

    const getData = async (country) => {

        await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${country}&lang=tr&units=metric&cnt=7&appid=9920b49eed20fd102c6531ea1d3397fe`).then(
            (response => setWheatherList(response.data.list))
        );

    };

    useEffect(() => {

        getData(country)

    }, [country])

    return (
        <WheatherContext.Provider value={values}>{children}</WheatherContext.Provider>
    )
}



