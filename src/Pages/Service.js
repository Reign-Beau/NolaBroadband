import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import ResidentialService from '../components/Service/ResidentialService';
import PrototypeService from '../components/Service/Sservice/PrototypeService';
import Partner from '../components/Partner';
import ServiceSubscribe from '../components/ServiceSubscribe';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';

const Service = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Residential Services" Pdescription="Are you tired of dealing with terrible customer service? We have your answer. To the big guys, you're just another number. To us, you're part of the team. Scroll down for more info."/>
            <ResidentialService ServiceData={ServiceData}/>
            <PrototypeService/>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>
            <ServiceSubscribe sClass="s_form_info_two"/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default Service;