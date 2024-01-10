import React from 'react'
import Navbar from '../../layout/Navbar'
import './home.scss'
import Services from '../../components/Services'

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <section id='slider'>
                <div className="text">
                    <span> <p></p> COMMITTED TO SUCCES</span>
                    <h1>We help to grow your business</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ad voluptatem praesentium natus quidem asperiores, accusamus esse, explicabo dolorem repellendus labore a officia voluptas similique?</p>
                    <div>OUR SERVICES</div>
                </div>
            </section>
            <Services></Services>
            <section id='best'>
                <div className="container">
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png.webp" alt="" />
                    <div className="text">
                        <h3><p></p> OUR TOP SERVICES</h3>
                        <h1>Our Best Services</h1>
                        <div className="about">
                            <p>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>
                            <span>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</span>
                        </div>
                        <div className="btn">MORE ABOUT US</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home