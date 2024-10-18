import React from 'react'
import { useState } from 'react';

function Form() {
    // Basic..-------------------------------------------------------
    // Initializing state for form inputs
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    // // Handler for form submission
    // const handleSubmit = (event) => {
    //     event.preventDefault(); // Prevent the default form submission

    //     // Here, you can handle the collected form data
    //     console.log(`Name: ${name}, Email: ${email}`);

    //     // Optionally, reset the form after submission
    //     setName('');
    //     setEmail('');
    // };


    // Advance.-------------------------------------------------------

    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChangeName = (event) => {
        setFormData((prevData) => ({...prevData, name : event.target.value}));
    }


    const handleChangeEmail = (event) => {
        setFormData((prevData) => ({...prevData, email : event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log(`Name: ${formData.name}, Email: ${formData.email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(event) => handleChangeName(event)}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(event) => handleChangeEmail(event)}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form