import React, {Component} from 'react';
import Slider from 'react-slick';
class AgencyAbout extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        let ServiceData = this.props.ServiceData;
        return(
            <section className="agency_about_area d-flex bg_color">
                <div className="col-lg-6 about_content_left ">
                    <div className="about_content mb_30">
                        <h2 className="f_size_30 f_700 l_height45 mb_20">We were born in NOLA.</h2>
                        <p className="f_size_15 f_400 mb_40">With a collective 45 years of IT experience, our team came together with the sole purpose of providing affordable, reliable, and fast internet service to those who need it. We are an independent and privately owned local business. We’re proud to be working everyday to bring a new type of internet to our area.</p>
                        <a href="/Team" className="about_btn">Meet Your Team</a>
                    </div>
                </div>
                <div className="col-lg-6 about_img">
                    <a href=".#" className="pluse_icon"><i className="ti-plus"></i></a>
                    <Slider className="about_img_slider" {...settings}>
                        <div className="item">
                            <div className="about_item w45">
                                <img src={require('../../img/home4/team1.jpg')} alt=""/>
                                <div className="about_text">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext1}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext2}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext3}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="about_item w45">
                                <img src={require('../../img/home4/team1.jpg')} alt=""/>
                                <div className="about_text">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext1}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext2}</h5>
                                </div>
                            </div>
                            <div className="about_item w55">
                                <img src={require('../../img/home4/team2.jpg')} alt=""/>
                                <div className="about_text text_two">
                                    <span className="br"></span>
                                    <h5 className="f_size_18 l_height28 mb-0">{ServiceData.agtext3}</h5>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}
export default AgencyAbout;
