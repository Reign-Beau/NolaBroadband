import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const Service2 = () => {
    return(
        <React.Fragment>
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
                                    <p className="wow fadeInUp">Our pricing models are designed to save you money - whether it's fiber, wireless, or phone service. Click below to find out more.</p>
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

export default Service2;
