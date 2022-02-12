import React from 'react'
import '../style.css'
import { Form } from './Form'
import { Header } from './Header'


export const Container = () => {
    return (

        <div className='container'>
            <Header/>
            <Form/>
        </div>
    )
}
