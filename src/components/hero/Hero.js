import React from 'react'

import mountain from '../../assets/mountain2.png'
import bg from '../../assets/bg.png'
import freeshipping from '../../assets/freeshipping.png'
import cloud from '../../assets/cloud.png'


// import freeshipping from '../../assets/freeshipping.png'
import './Hero.scss'
import Fade from 'react-reveal/Fade';


const Hero = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active banner" style={{ backgroundImage: `url(${mountain})` }}>
                    <div className="carousel-caption text">
                        <Fade right>
                            <img src={cloud} alt="" className="cloud" />
                        </Fade>
                        <Fade left>
                            <img src={cloud} alt="" className="cloud1" />
                        </Fade>
                        <Fade bottom>
                            <h2>Winter</h2>
                        </Fade>
                        <Fade bottom delay={700}>
                            <h4>collection</h4>
                            <p><a href="/shop">shop now</a></p>
                        </Fade>
                    </div>
                </div>
                <div className="carousel-item banner2" style={{ backgroundImage: `url(${freeshipping})` }}>
                    <div className="carousel-caption text">
                        <Fade right>
                            <h2>january sale</h2>
                        </Fade>
                        <Fade right delay={200}>
                            <h4>over $1 free shipping</h4>
                        </Fade>
                        <Fade right delay={400}>
                            <p><a href="/shop">shop now</a></p>
                        </Fade>
                    </div>
                </div>
                {/* <div className="carousel-item">
                    
                    <img class="d-block w-100" src={bg} />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>test <sapn>23</sapn></h2>
                        <p>asdkjbaskdjbakjwbdawjkbdpwjhdoawi</p>
                        <p><a href="#">shop now</a></p>
                    </div>

                </div> */}
                {/* <div className="carousel-item">
                    <div className="banner" style={{ backgroundImage: `url(${})` }}></div>
                    <div className="carousel-caption d-none d-md-block">
                    <h2>test <sapn>23</sapn></h2></div>
                    <p>asdkjbaskdjbakjwbdawjkbdpwjhdoawi</p>
                    <p><a href="#">shop now</a></p>
                </div> */}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div >
    )
}

export default Hero
