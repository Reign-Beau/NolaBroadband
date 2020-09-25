import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
/* import Sservice from '../components/Service/Sservice/Sservice'; */
import AgencyAbout from '../components/About/AgencyAbout';
import Partner from '../components/Partner';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Us" Pdescription="We're here to ensure our community stays connected and up-to-date. That needs to be affordable and reliable."/>
{/*             <Sservice/> */}
            <AgencyAbout ServiceData={ServiceData}/>
            <Partner pClass="partner_logo_area_five bg_color"/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;