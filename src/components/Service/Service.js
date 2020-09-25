import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const Service = () => {
    return(
        <React.Fragment>
            <section className="seo_service_area sec_pad">
                <div className="container">
                    <SeoTitle Title='What do we offer?' TitleP="Check below to see the services we offer. Have a special event, project, or need something not listed? #CONTACT# us! We're up for the challenge."/>
                    <div className="row seo_service_info">
                        <Fade bottom duration={500}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon1.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Residential Service</h4>
                                    </a>
                                    <p>Want internet at your house? Let us arrange that. Simple pricing, no contracts.</p>
                                    <a href="/Service"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon2.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Business Service</h4>
                                    </a>
                                    <p>Don’t let internet outage stop you from doing business. Use us as a backup or a primary connection.</p>
                                    <a href="/BusinessService"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon5.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Phone Service</h4>
                                    </a>
                                    <p>From standard phone service to complex phone systems, we will help you say, “Hello.”</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <div className="col-lg-12 text-center mt_40">
                            <a href="/Price" className="seo_btn seo_btn_one btn_hover">Pricing and Plans</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="seo_features_img">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2>Residential Broadband Service</h2>
                                    <p>NOLA Broadband focuses on providing quality internet for home and businesses, with no cable or DSL needed, as well as a backup solution to existing providers (who often go “down” at the worst times). We believe that everyone deserves access to the same kind of reliable, fast internet service, no matter where they live.<br /><br />
                                        Our aim is to solve issues before they become incidents. Our 24/7 networking monitoring allows us to be proactive in handling problems before they affect your service. When was the last time Cox called you because your router went offline? That’s what we thought.</p>
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Keep It Simple</h3>
                                            <p>We bring internet to your home, securely. It's that simple. No contracts, no gimmicks.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon two"><img src={require('../../img/seo/icon3.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>No Worries</h3>
                                            <p>Our customer service representatives are professionals. We're ready when you need us the most.</p>
                                            <a href="./service/ResidentialService" className="seo_btn seo_btn_one btn_hover wow fadeInUp">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="seo_features_img seo_features_img_two">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img_two.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2 className="wow fadeInUp">Business Broadband Service</h2>
                                    <h6 className="wow fadeInUp">Relied on by local businesses throughout NOLA, we're an easy choice when it comes to reliability.</h6>
                                    <p className="wow fadeInUp">We love New Orleans – but let’s face facts: there are times where this city struggles to keep up with you.  We deal with crumbling infrastructure, power outages, potholes, and boil water advisories on a regular basis. On top of that, we have become accustomed to the internet being “down.” <br /><br /> Despite all of this, you still have work to do. NOLA Broadband does not use the same infrastructure as those big Internet Service Providers (ISPs), and because of that, we won’t experience the same outages (excluding Natural Disasters or a Mad Max-style societal crumbling).</p>
                                    <a href="./BusinessService" className="seo_btn seo_btn_one btn_hover wow fadeInUp">Learn More</a>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Service;
