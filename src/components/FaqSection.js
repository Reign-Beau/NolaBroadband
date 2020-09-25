import React from 'react';

const FaqSection =()=>{
    return(
        <section className="faq_area bg_color sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pr_50">
                        <div className="faq_tab">
                            <h4 className="f_p t_color3 f_600 f_size_22 mb_40">Quick Navigation</h4>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="generalfaq-tab" data-toggle="tab" href="#generalfaq" role="tab" aria-controls="generalfaq" aria-selected="true">General FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="gettingstartedfaq-tab" data-toggle="tab" href="#gettingstartedfaq" role="tab" aria-controls="gettingstartedfaq" aria-selected="false">Getting Started</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="installationfaq-tab" data-toggle="tab" href="#installationfaq" role="tab" aria-controls="installationfaq" aria-selected="false">Installation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="gettingsupportfaq-tab" data-toggle="tab" href="#gettingsupportfaq" role="tab" aria-controls="gettingsupportfaq" aria-selected="false">Getting Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content faq_content" id="myTabContent">
                            <div className="tab-pane fade show active" id="generalfaq" role="tabpanel" aria-labelledby="generalfaq-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">General FAQ</h3>
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    How does NOLA Broadband provide service?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                            NOLA Broadband is a hybrid ISP providing both wireless (WISP) service and fiber service. Fiber can take months to install due to permitting with the city and parish, whereas wireless can be rolled out much quicker, so we often try to service fiber customers with wireless as an intermediate step.</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    What is wireless internet?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                            Wireless Internet is similar to other internet providers, but instead of using coax or copper wire to get you onto the Internet we use long range wireless radios. Data is sent over a radio frequency where it hits our tower and then goes out through our Carrier Grade fiber optic backbone to the world wide web.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    What is a WISP?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                            A WISP stands for Wireless Internet Service Provider. Some ISPs provide connectivity through cable, others through the phone line. We think providing you internet through the air offers more options and lowers cost.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingfour">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                    How fast will my internet be?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                            <div className="card-body">
                                            Your internet speeds will depend on two things:<br /><br />

                                            Your level of Service with us.<br />
                                            The distance and line of sight from the install location to our towers.<br /><br />

                                            If you are further away, you might not be able to get our higher speed tiers of service. The speeds you can get will be determined by the Site Survey.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingfive">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                    What affects my signal quality?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                                            <div className="card-body">
                                            Bad weather should not affect the strength of the signal, and we have had customers see no issues during tropical storms. Radio Interference from baby monitors, HAM radio operators, microwave towers, or any 5Ghz wireless device that is poor quality can affect signal as well, but we use RF armor to greatly reduce the effects. The site survey will help us determine the level of interference in your area, and helps us plan around any issues.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="accordion2">
                                    <div className="card">
                                        <div className="card-header" id="headingsix">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                    Do trees and buildings affect my signal quality?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsesix" className="collapse" aria-labelledby="headingsix" data-parent="#accordion2">
                                            <div className="card-body">
                                            Absolutely, our radios work best when we can get line of sight to one of our towers. The Site Survey helps us determine the quality of the signal we can get.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="gettingstartedfaq" role="tabpanel" aria-labelledby="gettingstartedfaq-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Getting Started</h3>
                                <div id="accordion3">
                                    <div className="card">
                                        <div className="card-header" id="heading10">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse10" aria-expanded="true" aria-controls="collapse10">
                                                    Site Survey<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse10" className="collapse show" aria-labelledby="heading10" data-parent="#accordion3">
                                            <div className="card-body">
                                            A trip to your location is needed to determine the signal strength you can get. You might be within range of our tower, but there could be other issues that might affect your service such as buildings or thick trees in your line of sight. Don’t self-exclude however, we have several installs where our tower is not visible but the customer has great service.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading11">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                    How do I set up an account with NOLA Broadband?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordion3">
                                            <div className="card-body">
                                                If you’re looking to start a conversation with a member of our sales team you can call us at 504-208-5432, fill out our Contact Form, or stop by our office at 1612 Barataria Blvd Marrero, LA 70072. Once we make contact, our staff will determine your eligibility for services based on your location. After checking if we service your area, a site survey is needed to prepare for the install.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading12">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                    What do I need to setup an account?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse12" className="collapse" aria-labelledby="heading12" data-parent="#accordion3">
                                            <div className="card-body">
                                            To receive services from NOLA Broadband, all we need is as follows:<br /><br />
                                            The address of where you will receive service.<br />
                                            A credit/debit card OR a voided check for ACH payments.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading13">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                                    Is there any contract or committment?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse13" className="collapse" aria-labelledby="heading13" data-parent="#accordion3">
                                            <div className="card-body">
                                            Not at all! We are happy to work with you on a month to month basis, though we do offer some business contract options that have incentives for multi-year contracts.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="installationfaq" role="tabpanel" aria-labelledby="installationfaq-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Installation</h3>
                                <div id="accordion4">
                                    <div className="card">
                                        <div className="card-header" id="heading15">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse15" aria-expanded="true" aria-controls="collapse15">
                                                Do I need to purchase any equipment?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse15" className="collapse show" aria-labelledby="heading15" data-parent="#accordion4">
                                            <div className="card-body">
                                            In most cases NOLA Broadband will provide a wireless radio at no cost to you. The radio is installed on your home and is considered the property of NOLA Broadband and should not be tampered with in anyway. For certain business installs Radios will be purchased by the customer, depending on your level of service with us.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading16">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                                    What is the install like?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse16" className="collapse" aria-labelledby="heading16" data-parent="#accordion4">
                                            <div className="card-body">
                                            For wireless, an antenna is installed on your home (typically on the roof pointing to our closest tower). An Ethernet cable is run from the radio to inside your home, hooking into your wireless router. Custom installations can be arranged for an extra fee, let our sales staff know during your initial consultation. An authorized individual 18 years of age or older must be home for the duration of the install (2-3 hours). For Fiber installations it’s best to Contact Us to get an idea of the install process.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading17">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                                    How much is the initial setup fee?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse17" className="collapse" aria-labelledby="heading17" data-parent="#accordion4">
                                            <div className="card-body">
                                                The setup fee varies depending on difficulty of mounting the hardware. Installs start at $150, but in rare cases where non-pentration mounts (meaning no holes are made in your structure) are used, we need to cover the costs of the mount and difficulty of lifting the mount and weights into position.  If higher power/gain equipment is necessary, this may also affect the setup fee. We’ll let you know the needs after a site survey.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading18">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                                    How long do I have to wait for NOLA Broadband to install my service?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse18" className="collapse" aria-labelledby="heading18" data-parent="#accordion4">
                                            <div className="card-body">
                                            We strive to complete installs within 7 business days, but the time can vary depending on equipment availability or if weather conditions prevent us from installing the radio.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading19">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                                    Will my current router work with NOLA Broadband?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse19" className="collapse" aria-labelledby="heading19" data-parent="#accordion4">
                                            <div className="card-body">
                                                While it is possible to use your current router, we strongly prefer to use ours as we can remotely troubleshoot any issues you may be having. We also offer “smart routers”, where you can easily update your wifi name and password from your phone, as well as limit service to certain devices during certain hours for “homework mode” or similar.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="gettingsupportfaq" role="tabpanel" aria-labelledby="gettingsupportfaq-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">Getting Support</h3>
                                <div id="accordion6">
                                    <div className="card">
                                        <div className="card-header" id="heading24">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse24" aria-expanded="true" aria-controls="collapse24">
                                                    How do I get support?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse24" className="collapse show" aria-labelledby="heading24" data-parent="#accordion6">
                                            <div className="card-body">
                                            Our network is monitored 24 hours a day, 7 days a week. When issues crop up, our engineers are aware of it soon after it happens. For residential customers, you can call 504-208-5432 during business hours to reach our support team, you may also open a ticket using our customer portal (which you get access to when you sign up). For business customers, support is 24/7.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading25">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                                    How do I stay aware of planned maintenance or networking issues?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse25" className="collapse" aria-labelledby="heading25" data-parent="#accordion6">
                                            <div className="card-body">
                                            Occasionally we have to take down parts of the network for ongoing maintenance. We do our best to alert the affected customers  of planned maintenance via Email or SMS. You can also check our network status page at http://status.nolabroadband.com. Any network outages will be reported there, and it is updated as frequently as possible.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading26">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
                                                    Will NOLA Broadband fix my computer, router, or other network device?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse26" className="collapse" aria-labelledby="heading26" data-parent="#accordion6">
                                            <div className="card-body">
                                            We do our best to provide a great experience for our customers, but we do not officially support networking equipment that is not installed by us. If you are having issues connecting a device to the internet, we will do our best to help you troubleshoot over the phone but we are unable to provide on-site support for your internal network devices. We are happy to refer you to a trusted third party to help you with any issues.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FaqSection;