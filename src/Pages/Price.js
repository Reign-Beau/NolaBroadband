import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import ServicePrice from '../components/Features/SecurityPrice';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const Price = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Broadband Package Prices" Pdescription="No contracts. No hidden fees. Just you, connected."/>
            <ServicePrice/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Price;