import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Contacts from '../components/Contacts';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Contact Us" Pdescription="A site survey will determine what speeds we can get and any coverage obstacles we will need to work around.  Fill out the form below and an agent will contact you within 48 hours."/>
            <Contacts/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;