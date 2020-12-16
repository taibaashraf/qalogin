import React, { Component } from 'react';
import './welcomeBootstrap.css';

import Spacer from 'react-add-space';

import { Navbar, Nav, Button } from 'react-bootstrap';
import BImage from '../Images/BImage.png';
import BImage1 from '../Images/BImage1.png';

class WelcomeBootstrap extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Navbar expand="lg" style={{ height: '0' }}>
                        <Navbar.Brand href="#home"><i className="fa fa-signal" id="vap" style={{ fontSize: 'medium' }} /><a style={{ color: 'white', fontSize: 'small' }}>VAP IoT lab</a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" >
                                <Nav.Link href="#home" style={{ color: '#F89E12', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>Home</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>About</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>Forum</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>Contact</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontfamily: "Myriad pro Semibold" }}><b>FAQs</b></Nav.Link><Spacer amount={20} />
                                <button type="button" className="mr-auto" id="btn" style={{marginleft:'-40%'}}>Logout</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>   {/*  Navbar ends */}
                <div style={{ margin: '0' }} >
                    <div className="col-md-12" id="pp" >
                        <img className="img-responsive" src={BImage} style={{ height: '330px', width: '45%' }} />

                        <div style={{ paddingLeft: '45%' }}>
                            <div className="centered" style={{ top: '105px', position: 'absolute', fontSize: '16.19px' }} >Online Education</div>
                            <div className="centered" style={{ top: '135px', left: '65%', postion: 'absolute', fontSize: '67.35px', fontWeight: 'light' }}>Welcome</div>
                            <div className="centered" style={{ top: '180px', postion: 'absolute', fontSize: '36.41px', left: '65%', fontWeight: 'bold' }}>TO VAP IoT Lab</div>
                            <div className="centered" style={{ top: '210px', postion: 'absolute', fontSize: '13.47px', left: '68%', fontWeight: 'light', textAlign: 'center' }}>(Virtually Accessible Physical)</div>
                            <div className="centered" style={{ top: '242px', postion: 'absolute', paddingTop: '5px', fontSize: '13.47px', left: '70%', fontWeight: 'light', border: '1px solid grey', borderRadius: '5px', width: '115px', height: '30px', textAlign: 'center', paddingBottom: '6px' }}><ion-icon name="caret-forward" id="filledArrow" style={{ color: 'black', borderRadius: '50%', backgroundColor: '#F89E12', border: '1px solid #F89E12' }}></ion-icon><Spacer amount={1} />Read More
                         </div>
                        </div>



                        <img className="img-responsive" src={BImage1} style={{
                            width: '15%', height: '330px',
                            position: 'absolute', top: '-1px', left: '86%'
                        }} />
                    </div>
                </div>
                <div style={{marginLeft:'10%'}}>
                    <div className="Row" style={{ color: 'white', width: '75%', }}>
                        <div className="Column" style={{ textAlign: 'right',  }}>
                            <h5 style={{ textAlign: 'right', fontSize: '24px', fontWeight: 'lighter' }}>
                                Our speciality
                            </h5>
                                Connect with the real hardware virtually
                                <br />
                            <br />
                                The basic technology we will<br /> be using is remote access<br /> to different IoT boards.
                        </div>
                        <div className="Column" style={{ backgroundColor: 'white', color: 'black' }}>
                            <div className="row">
                                <ion-icon name="settings" style={{ fontSize: '25px', color: '#f89e12', top: '4px' }}></ion-icon><Spacer amount={1} />
                                <h5 style={{ textAlign: 'center', fontSize: '12px', marginTop: '8px' }}>
                                    <b style={{ color: 'black', }}>Hands-On</b>
                                </h5>
                            </div>
                            <p style={{ fontSize: '11px', textAlign: 'center',marginTop:'-14px' }}>
                                <br />Access to IoT boards<br />by burning the codes.
                            </p>
                        </div>
                        <div className="Column" style={{ backgroundColor: 'white', color: 'black' }}>
                            <div className="row" >
                                <ion-icon name="clipboard" style={{ fontSize: '25px', color: '#f89e12', top: '4px' }}></ion-icon><Spacer amount={1} />
                                <h5 style={{ textAlign: 'center', fontSize: '12px' , marginTop: '8px'}}>
                                    <b style={{ color: 'black' }}>Training & Boards</b>
                                </h5>
                            
                            <p style={{ fontSize: '11px', textAlign: 'center', marginTop:'-16px'}}>
                                <div style={{ paddingLeft:'72px', }}><br />Preparing students for<br />rapidly changing world.</div>
                            </p></div>
                        </div>
                        <div className="Column" style={{ backgroundColor: '#feb33e', color: 'black' }}>
                          <div className="row">
                          <ion-icon name="reader"style={{ fontSize: '25px', top: '4px' }}></ion-icon><Spacer amount={1} />
                          <h5 style={{ textAlign: 'center', fontSize: '12px', marginTop: '8px' }}>                           
                                <b style={{ color: 'black' }}>Lectures</b>
                        </h5>
                          </div>
                            <p style={{ fontSize: '11px', textAlign: 'center', marginTop:'-16px' }}>
                                <br />IoT Lab related to guide<br />lines and lectures.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer" style={{ backgroundColor: 'black' }}>
                    <div className="Row1" style={{ paddingLeft: '30px', width: '90%' }}>
                        <div className="Column" style={{ color: 'white', fontSize: '15px' }}>
                            2019  VAP IoT Lab , All Rights  Reserved
                        </div>
                        <div className="Column" style={{ color: 'white', fontSize: '12px', paddingLeft: '15%' }}>
                            Follow us on <br />
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12', fontSize: 'large' }} /> |</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12', fontSize: 'large' }} />|</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12', fontSize: 'large' }} />  </a>
                        </div>
                        <div className="Column">
                            <a href="#" style={{ color: 'white', paddingLeft: '95%' }} >  <i className="	fa fa-commenting-o" style={{ border: '8px solid orange', color: 'white', backgroundColor: '#f89e12', fontSize: '30px' }} />  </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeBootstrap;