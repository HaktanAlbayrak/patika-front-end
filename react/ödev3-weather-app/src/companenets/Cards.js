import React, { useContext } from 'react'
import { WheatherContext } from '../context/WeatherContext'
import "./style.css"


const dayString = ['Pazartesi', 'Salı', 'Çarşanba', 'Perşenbe', 'Cuma', 'Cumartesi', 'Pazar'];

export const Cards = () => {

    const { country, setCountry, wheatherList } = useContext(WheatherContext)

    const getIcon = (iconId) => {

        return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    };

    const getDescription = (description) => {

        const words = description.split(" ");   

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
            
        description = words.join(" ")
        
        return description
    };

    return (

        <div className='cards'>

            {
                wheatherList.map((data, index) => (
                    
                    <div key={index} className="card">
                        {console.log(data)}
                        <div className="card-header">{dayString[index]}</div>
                        <div className="card-main">
                            <img src={getIcon(data.weather[0].icon)} alt="Loading" ></img>
                            <div className="main-description">{getDescription(data.weather[0].description)}</div>
                        </div>
                    </div>

                ))
            }


        </div>
    )
}
