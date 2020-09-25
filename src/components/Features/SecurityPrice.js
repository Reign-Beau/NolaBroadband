import React, {Component} from 'react';

class ServicePrice extends Component {
    constructor(){
        super();
        this.state= {
            list: [
                {
                    id: 1,
                    adTitle: "Stream HD Movies",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 2,
                    adTitle: "Stream Music",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 3,
                    adTitle: "Check Email",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 4,
                    adTitle: "Online Gaming",
                    icon: 'icon_check_alt2',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 5,
                    adTitle: "Great for multiple devices",
                    icon: 'icon_close',
                    icon2: 'icon_check_alt2',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 6,
                    adTitle: "Great for power uploading",
                    icon: 'icon_close',
                    icon2: 'icon_close',
                    icon3: 'icon_check_alt2',
                },
                {
                    id: 7,
                    adTitle: "Download speeds up to",
                    stringDisplay: '25 Megabit',
                    stringDisplay2: '50 Megabit',
                    stringDisplay3: '100 Megabit',
                },
                {
                    id: 8,
                    adTitle: "Upload speeds up to",
                    stringDisplay: '5 Megabit',
                    stringDisplay2: '7 Megabit',
                    stringDisplay3: '10 Megabit',
                },
            /*     ###FIX, for loop? */
            ]
        }
    }
    render(){
        return(
            <section className="pricing_area_four sec_pad">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>NOLA Broadband Service Packages</span> A site survey will determine what's available for you.</h2>
                </div>
                <div className="price_info_two price_info_three">
                    <div className="price_head">
                        <div className="p_head time">
                            <h4>Features</h4>
                        </div>
                        <div className="p_head">
                            <h5>Silver</h5>
                            <p>$79.99 / mo</p>
                        </div>
                        <div className="p_head">
                            <h5>Gold</h5>
                            <p>$124.99 / mo</p>
                        </div>
                        <div className="p_head">
                            <h5>Platinum</h5>
                            <p>$174.99 / mo</p>
                        </div>
                    </div>
                    <div className="price_body">
                        {
                            this.state.list.map( list => {
                                return(
                                    <div className="pr_list" key={list.id}>
                                        <div className="price_item">
                                        <h5 className="pr_title" data-toggle="tooltip" data-placement="top" title="" data-original-title="NOLA Broadband Pricing Tiers">{list.adTitle}</h5>
                                        </div>
                                        <div className="price_item" data-title="Silver">
                                            <h5 className="check">{
                                                list.stringDisplay ? list.stringDisplay : <i className={list.icon}></i> 
                                            }</h5>
                                            </div>
                                            <div className="price_item" data-title="Gold">
                                            <h5 className="check">{
                                                list.stringDisplay ? list.stringDisplay : <i className={list.icon2}></i> 
                                            }</h5>
                                            </div>
                                            <div className="price_item" data-title="Platinum">
                                            <h5 className="check">{
                                                list.stringDisplay ? list.stringDisplay : <i className={list.icon3}></i> 
                                            }</h5>
                                            </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default ServicePrice;