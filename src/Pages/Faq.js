import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FaqSection from '../components/FaqSection';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const Faq = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Frequently Asked Questions" Pdescription="Answers to our most common questions are listed below. Have a question that you don't see answered? Fill out our #CONTACT# form and we'll get back to you."/>
            <FaqSection/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Faq;