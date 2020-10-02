import React from 'react';
import Sectitle from "../Title/Sectitle";

const CloudFeatures =()=>{
    return(
        <section className="design_developers_area sec_pad">
            <div className="container">
                <Sectitle Title="We were born in NOLA." TitleP="We’re proud to be working everyday to bring a new type of internet to the area."
                 sClass="sec_title text-center mb_70"/>
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <div className="design_img wow fadeInRight" data-wow-delay="0.2s">
                            <img className="img-fluid" src={require("../../img/home5/design1.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 d-flex align-items-center">
                        <div className="design_img_two wow fadeInRight" data-wow-delay="0.4s">
                            <img className="img-fluid"  src={require("../../img/home5/design2.png")} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="text-center wow fadeInUp" data-wow-delay="0.4s">
                    <a href="/#" className="btn_hover btn_four mt_70">Residential</a>
                    <a href="/#" className="btn_hover btn_four mt_70">Business</a>
                </div>
            </div>
        </section>
    )
}
export default CloudFeatures;