import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
import Reveal from 'react-reveal';
const AppTeam =()=>{
    return(
        <section className="experts_team_area sec_pad" id="team">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="Team Leadership" tClass="t_color3" TitleP="Find out more about the people working for you."/>
                <Reveal bottom cascade>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="team_01.jpg" memberN="Phillip Anthropy" memberd="Company Owner"/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="team_02.jpg" memberN="Gordon Norman" memberd="Lead Engineer"/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="team_03.jpg" memberN="Dylan Meringue" memberd="Sales Expert"/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="team_04.jpg" memberN="Bailey Wonger" memberd="Network Technician"/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <a href=".#" className="learn_btn">Meet All Team <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
        
    )
}
export default AppTeam;