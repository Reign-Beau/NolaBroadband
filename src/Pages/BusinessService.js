import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import BusinessService from '../components/Service/BusinessService';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const Faq = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Business Services" Pdescription="Reliable internet is the backbone of the modern business. If the network goes down it can affect productivity, customer satisfaction, and your bottom line."/>
            <BusinessService/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Faq;