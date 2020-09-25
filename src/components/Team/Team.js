import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
const Team =()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="We love where we live." tClass="t_color3" TitleP="'personal message from company owners'"/>
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
                </div>
            </div>
        </section>
        
    )
}
export default Team;