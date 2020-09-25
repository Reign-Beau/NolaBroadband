import React from 'react';
import Sectitle from '../Title/Sectitle';
import ResidentialServiceItems from './HostingServiceitem';

const HostingService =()=> {
    return(
        <section className="hosting_service_area sec_pad">
            <div className="container">
                <Sectitle sClass="hosting_title text-center" Title="Designed for developers. Built for business." TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!"/>
                <div className="row">
                    <ResidentialServiceItems hostingicon="icon1.png" hostingserviceTitle="Shared Hosting" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>
                    <ResidentialServiceItems hostingicon="icon2.png" hostingserviceTitle="Domain Sale" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>
                    <ResidentialServiceItems hostingicon="icon3.png" hostingserviceTitle="Reduce complexity" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>
                    <ResidentialServiceItems hostingicon="icon4.png" hostingserviceTitle="Access globally" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>
                    <ResidentialServiceItems hostingicon="icon5.png" hostingserviceTitle="Move faster" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>
                    <ResidentialServiceItems hostingicon="icon6.png" hostingserviceTitle="Easily integrate" hostingservicedescription="Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"/>
                </div>
            </div>
        </section>
    )
}
export default HostingService;