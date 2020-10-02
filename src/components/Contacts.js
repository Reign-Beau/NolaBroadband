import React, {Component} from 'react';

class Contacts extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        // const {name, email, subject, message, emailStatus} = this.state;
        return(
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
                                <p className="f_400 f_size_15">1612 Barataria Blvd<br /> Marrero, Louisiana 70072</p>
                            </div>
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Mailing Address</h6>
                                <p className="f_400 f_size_15">PO BOX 3466,<br /> Harvey, Louisiana 70059</p>
                            </div>
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone Sales:</span> <a href="tel:18334386652">1-833-GET-NOLA</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone Support:</span> <a href="tel:18336652638">1-833-NOLA-NET</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone Local:</span> <a href="tel:15042085432">504-208-5432</a></p><br />
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email Sales:</span> <a href="mailto:sales@nolabroadband.com">sales@nolabroadband.com</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">Email Support:</span> <a href="mailto:info@nolabroadband.com">info@nolabroadband.com</a></p>
                            </div>
                        </div>
                        <div className="contact_form col-lg-9">
                            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Get in touch, or get a free Site Survey.</h2>
                            <p>Please include your address, a contact number, and your company name (if applicable).</p>
                            <form onSubmit={this.submitForm} className="contact_form_box" method="post" id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" id="name" name="name" placeholder="Your Name" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" name="email" id="email" placeholder="Your Email" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" id="subject" name="subject" placeholder="Subject" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <textarea onChange={this.handleChange} name="message" id="message" cols="30" rows="10" placeholder="Enter Your Message . . ."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn_three">Send Message</button>
                            </form>
                            {/* {emailStatus ? emailStatus : null} */}
                            <div id="success">Your message succesfully sent!</div>
                            <div id="error">Opps! There is something wrong. Please try again</div>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Contacts;
