import React, { useState } from "react";
import CompletedMadlib from './CompletedMadlib';

function MadlibForm(){
    const initialState = {
        noun: '',
        noun2: '',
        adjective: '',
        color: '',
    }
    
    const [ madlib, setMadlib ] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;
        setMadlib(madlib => ({
            ...madlib,
            [name]: value
        }));
    }

    const [submitted, setSubmitted] = useState(false);

    const createMadlib = e => {
        e.preventDefault();
        setSubmitted(true);
        return e.target;
    }

    if(submitted===true){
        const { noun, noun2, adjective, color } = madlib;
        const reset = () => {
            setMadlib(initialState);
            setSubmitted(false);
        }
        return <CompletedMadlib 
                noun={noun} 
                noun2={noun2} 
                adjective={adjective} 
                color={color}
                reset={reset}/>
    }

    return (
        <div>
            <form onSubmit={createMadlib}>
                <label htmlFor="noun">Noun:</label>
                <input
                id='noun'
                name='noun'
                type='text'
                placeholder='Noun'
                onChange={handleChange}
                value={madlib.noun}
                />
                <label htmlFor="noun2">Second Noun:</label>
                <input
                id='noun2'
                name='noun2'
                type='text'
                placeholder='Second Noun'
                onChange={handleChange}
                value={madlib.noun2}
                />
                <label htmlFor="adjective">Adjective:</label>
                <input
                id='adjective'
                name='adjective'
                type='text'
                placeholder='Adjective'
                onChange={handleChange}
                value={madlib.adjective}
                />
                <label htmlFor="color">Color:</label>
                <input
                id='color'
                name='color'
                type='text'
                placeholder='Color'
                onChange={handleChange}
                value={madlib.color}
                />
                <button>Get Story!</button>
            </form>
        </div>
    )    
}

export default MadlibForm;