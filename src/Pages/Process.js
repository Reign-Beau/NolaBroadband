import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
const Process = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="What To Expect" Pdescription="We're here for you, every step of the way. Here's an idea of how works and how long it will take. We're happy to answer any further questions."/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="We set up a time to come to your home for a free site survey" descriptions="This will allow us to work our magic and determine any obstacles than may prevent or degrade service.  This process typically takes 30 minutes and involves inspecting the area to ensure there aren't trees or buildings in our line of sight. We've still managed several successful installs when this was the case!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Choose your pricing plan and subscribe to our service" descriptions="Now that we know what's available, let's get you started. Make a payment and have peace of mind that you can change your mind later with our no-contract approach."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="The hardware installation" 
                        descriptions="For wireless, an antenna is installed on your home, typically on the roof pointing to our closest tower. An Ethernet cable is run from the radio to inside your home, hooking into your wireless router.  For Fiber installations it’s best to #CONTACT# us to get an idea of the install process."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="Can we fit 1 or 2 more of these?" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_5.png" iImg="icon_05.png" ftitle="That's fine if not" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Process;