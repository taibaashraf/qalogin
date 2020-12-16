import React, { Component } from 'react';
import Spacer from 'react-add-space';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


import './contactUs.css';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import bgImage from '../Images/aboutUs.png';


class ContactUs extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img className="img-responsive" src={bgImage} style={{ height: '585.5px', width: '100%' }} />
                    <div className="top-left"><i className="fa fa-signal" style={{ color: '#F89E12' }} />
                        <Spacer amount={1} />
                    VAP IoT lab</div>
                    <div className="top-left" style={{ left: '48%', fontFamily: "Myriad pro Semibold", fontSize: '14px', top: '27px' }}>Home</div>
                    <div className="top-left" style={{ left: '54%', fontFamily: "Myriad pro Semibold", fontSize: '14px', top: '27px' }}>About</div>
                    <div className="top-left" style={{ left: '60%', fontFamily: "Myriad pro Semibold", fontSize: '14px', top: '27px' }}>Forum</div>
                    <div className="top-left" style={{ left: '66%', fontFamily: "Myriad pro Semibold", color: '#F89E12', fontSize: '14px', top: '27px' }}>Contact</div>
                    <div className="top-left" style={{ left: '72%', fontFamily: "Myriad pro Semibold", fontSize: '14px', top: '27px' }}>FAQs</div>
                    <button className="top-left" id="btn" style={{ fontFamily: "Myriad pro Semibold" }}>Logout</button>


                    <div className="section">

                        <div className="top-center">
                            <i><hr style={{
                                backgroundColor: '#F89E12',
                                height: '1.5px',
                                width: '75px',
                                // marginLeft:'-70px',
                                // marginTop:'20%'
                            }} /></i>

                            <h2> contact us</h2>
                            <p className="message">Drop us a message and we will get back to you</p>
                        </div>


                        <div id="container" style={{ width: '80%', left: '18%', position: 'absolute', top: '27%' }}>
                            <div className="rowC" >
                                <div className="columnC" style={{ height: '360px', backgroundColor: 'white', width: '50%' }}>
                                    {/* <!-- Material form register --> */}
                                    <div className="">
                                        {/* <!--Card content--> */}
                                        <div className="card-body px-lg-5 pt-0">

                                            {/* <!-- Form --> */}
                                            <form className="" action="#!" style={{ paddingTop: '1%', paddingLeft: '3%' }}>

                                                <div className="form-row">
                                                    <div className="col">
                                                        {/* <!-- First name --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormFirstName">First name</label>
                                                            <input type="text" id="materialRegisterFormFirstName" className="form-control" placeholder="Ayesha" style={{ width: '90%' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        {/* <!-- Last name --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormLastName">Last name</label>
                                                            <input type="email" id="materialRegisterFormLastName" className="form-control" placeholder="Naseer" style={{ width: '90%' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />

                                                <div className="form-row">
                                                    <div className="col">
                                                        {/* <!-- E-mail --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormFirstName">E-mail</label>
                                                            <input type="text" id="materialRegisterFormEmail" className="form-control" placeholder="ayeshanaseer@gmail.com" style={{ width: '90%' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        {/* <!-- Phone --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormFirstName">Phone</label>
                                                            <input type="text" id="materialRegisterFormPhone" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" placeholder="+92 - " style={{ width: '90%' }} />
                                                        </div>
                                                    </div>


                                                </div>
                                                <br />

                                                {/* <!-- Subject --> */}
                                                <div className="md-form">
                                                    <label for="materialRegisterFormSubject">Subject</label>
                                                    <input type="tel" id="materialRegisterFormSubject" className="form-control" aria-describedby="materialRegisterFormSubjectHelpBlock" placeholder="Title of your query" style={{ width: '44%' }} />
                                                </div>

                                                <br />
                                                <div className="vertical">Information</div>

                                                { /* Message */}
                                                <div className="md-form">
                                                    <label for="materialRegisterFormMessage">Message</label>
                                                    <textarea id="materialRegisterFormMessage" className="form-control" aria-describedby="materialRegisterFormMessageHelpBlock" placeholder="Type your Query here" style={{ width: '95%', height: '80px', backgroundColor: '#efefef' }}></textarea>
                                                </div>

                                                <br />
                                                {/* <!-- Submit button --> */}
                                                <button id="btnSubmit" className="" type="submit">Submit</button>

                                            </form>
                                            {/* <!-- Form --> */}
                                        </div>  
                                    </div>
                                    {/* <!-- Material form register --> */}
                                </div>
                                <div className="columnC" style={{ height: '360px', backgroundColor: '#1e1e1e', width: '35%', }}>

                                    {/* <div className="iconss" style={{color:'white', fontSize:'14px', fontWeight:'lighter'}}>
                                        <ion-icon name="mail" className="mail" id="" style={{ padding:'2px',color: '#F89E12', fontSize:'20px', border:'1px solid grey', borderRadius:'5px' }}></ion-icon>
                                       <Spacer amount={3} />VapIotlab@pk.com
                                        <br />
                                        <br />
                                        <ion-icon name="call" className="call" id="" style={{ color: '#F89E12', fontSize:'20px',padding:'2px', border:'1px solid grey', borderRadius:'5px'}}></ion-icon>
                                        <Spacer amount={3} />0337-7874554
                                        <br />
                                        <br />
                                        <ion-icon name="location" className="location" id="" style={{ color: '#F89E12', fontSize:'20px',padding:'2px', border:'1px solid grey', borderRadius:'5px' }}></ion-icon>
                                        <Spacer amount={3} />Silverback Pvt Ltd. Plot No. 27. 3rd Floor , Sarah Plaza, E-11/3, Islamabad
                                    </div> */}

                                    <div className="iconss" style={{color:'white', fontSize:'14px', fontWeight:'lighter'}}>

                                        <div className="vertical1">Reach us</div>

                                        <div className="column">
                                            <ion-icon name="mail" className="mail" id="" style={{ padding:'2px',color: '#F89E12', fontSize:'20px', border:'1px solid grey', borderRadius:'5px' }}></ion-icon>
                                            <Spacer amount={3} /> VapIotlab@pk.com

                                        </div>
                                       
                                        <br/>
                                        <div className="column">
                                            <ion-icon name="call" className="call" id="" style={{ color: '#F89E12', fontSize:'20px',padding:'2px', border:'1px solid grey', borderRadius:'5px'}}></ion-icon>
                                            <Spacer amount={3} />  0337-7874554
                                        </div>
                                       
                                        <br/>
                                        <div className="column" >
                                            <ion-icon name="location" className="location" id="" style={{ color: '#F89E12', fontSize:'20px',padding:'2px', border:'1px solid grey', borderRadius:'5px' }}></ion-icon>
                                            <Spacer amount={3} />   Silverback Pvt Ltd. Plot No. 27. 3rd Floor , Sarah Plaza, E-11/3, Islamabad

                                        </div>

                                        

                                    </div>








                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="footer" style={{ backgroundColor: 'black', paddingTop: '4px' }}>
                        <div className="Row1" style={{ paddingLeft: '30px', width: '90%' }}>
                            <div className="Column" style={{ color: 'white', fontSize: '15px' }}>
                                2019  VAP IoT Lab , All Rights  Reserved
                        </div>
                            <div className="Column" style={{ color: 'white', fontSize: '12px', paddingLeft: '15%' }}>
                                Follow us on <br />
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12', fontSize: 'large' }} />|</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12', fontSize: 'large' }} />|</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12', fontSize: 'large' }} />  </a>
                            </div>
                            <div className="Column">
                                <a href="#" style={{ color: 'white', paddingLeft: '95%' }} >  <i className="fa fa-commenting-o" style={{ border: '8px solid orange', color: 'white', backgroundColor: '#f89e12', fontSize: '30px' }} />  </a>
                            </div>
                        </div>
                    </div>

                </div>


            </div >
        )
    }


}

export default ContactUs;