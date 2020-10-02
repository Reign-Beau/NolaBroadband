import React, { Component } from 'react';
import CloudServiceItem from './CloudServiceItem';

class CloudService extends Component{
    render(){
        return(
            <section className="software_featured_area">
                <div className="container">
                    <h2 className="f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp" data-wow-delay="0.3s">To the big guys, you're just a number.<br />To us, you’re a part of the team. A free site survey will determine what we can do for you.</h2>
                    <div className="row software_featured_info">
                        <CloudServiceItem icon="icon1.png" sTitle="Local" Sp="We love New Orleans – but let’s face facts: there are times where this city struggles to keep up with you. NOLA Broadband does not use the same infrastructure as those big Internet Service Providers (ISPs), and because of that, we won’t experience the same outages."
                        sbtn="Learn More"/>
                        <CloudServiceItem icon="icon3.png" sTitle="Reliable" Sp="Our aim is to solve issues before they become incidents. Our 24/7 networking monitoring allows us to be proactive in handling problems before they affect your service. When was the last time Cox called you because your router went offline? That’s what we thought."
                        sbtn="Learn More"/>
                        <CloudServiceItem icon="icon2.png" sTitle="Fast" Sp="Don’t let slow speed prevent your work or play."
                        sbtn="Learn More"/>
                    </div>
                </div>
            </section>
        )
    }
}
export default CloudService;