import React, { useEffect, useState } from 'react'
import './services.scss'

function Services() {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:4200/')
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            })
    }, [])

    console.log(services);


    return (
        <>
            <section id='services'>
                <div className="services">
                    {services.map((service) => (
                        <div className="service" key={service._id}>
                            <img src={service.icon} alt="" />
                            <h2>{service.title}</h2>
                            <p>{service.about}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Services