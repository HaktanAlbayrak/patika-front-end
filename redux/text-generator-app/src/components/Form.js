import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../style.css'

export const Form = () => {


    const [number,setNumber] = useState(1)
    const [format,setFormat] = useState("text")
    const [text,setText] = useState("")

    useEffect(() => {
        updateText();
    }, [])

    useEffect(() => {
        updateText();

    }, [number,format])


    const updateText = async () => {
        await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${number}&format=${format}`).then((res) => setText(res.data));
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }

    const handleHTMLChange = (e) => {

        setFormat(e.target.value);
    }

    return (
        <div>
            <div className="form">

                <div>
                    <div>
                        <span>Paragraphs</span>
                    </div>
                    <div>
                        <input value={number} onChange={(e) => handleNumberChange(e)} className='input' type={"number"} min={1} />
                    </div>
                </div>

                <div>
                    <div>
                        <span>HTML</span>
                    </div>
                    <div>
                        <select onChange={(e) => handleHTMLChange(e)}>
                            <option value="text">No:</option>
                            <option value="html">Yes</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className='parag'>
                {text}
            </div>
        </div>



    )
}
