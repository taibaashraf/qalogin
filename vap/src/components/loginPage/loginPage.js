import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Spacer from 'react-add-space';


import './loginPage.css';
import './responsiveLogin.css';


import BImage from '../Images/BackgroundImage.png';
import { Form } from 'react-bootstrap';

<meta name="viewport" content="width=device-width" />

class LoginPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className="img-responsive" src={BImage} id="vapBg" style={{}} />
                    {/* <br />
                    <br /> */}
                    <div className="top-left"><i className="fa fa-signal" style={{ color: ' #F89E12' }} />VAP IoT lab</div>

                    <div id="container" style={{ backgroundColor: 'white' }}>
                        <div id="example">
                            <div><a href="#"><i className="fa fa-times-circle-o" id="closeIcon" /></a></div>
                            <div className="top-center"><i className="fa fa-signal" style={{ color: ' #F89E12' }} />VAP IoT lab</div>
                            {/* <br /> */}
                            {/*
                            <br/>
                            <br/> */}
                            <h1 className="wlcome" >Welcome</h1>
                            <br/>
                            <i> <p className="p1" style={{ backgroundColor: 'white' }} >Login here and <b><i>experience</i></b> the <b><i>intengibility</i></b> of <b><i>IoT's</i></b> </p></i>
                            <br />
                            {/* <br />
                            <br /> */}
                            <form action="#" className="form1">
                                <div className="form-group" id="div1" style={{  }}>
                                    <input type="email" className="form-control" id="email" placeholder="Registeration#/Email" name="email" />
                                </div>
                                <br />
                                <div className="form-group" id="div2" style={{  }}>
                                    <input type="password" className="form-control" id="pwd" placeholder="Password" name="pwd" style={{ height: '38px' }} />
                                    <ion-icon name="eye" id="eyePwd"  style={{ }}></ion-icon>
                                </div>

                            </form>
                            <i> <p className="p2test" style={{ backgroundColor: 'white' }}> <i className="fa fa-circle" style={{ color: ' #F89E12' }} /> Login with the credentials provided by the university </p></i>
                             <br /> {/*<br /> */}
                            <Form className="frm2">
                                <Button className="btn">Login<ion-icon id="rightArrow" name="arrow-forward"></ion-icon></Button>
                            </Form>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            
                            {/* <br />
                            <br />
                            <br />
                            <br /> */}
                            <p className="p3" style={{ backgroundColor: 'white' }}>New Memeber? Sign up</p >
                        </div>


                    </div>
                    <div className="vap">2019 VAP IoT Lab, All Rights Reserved</div>

                </div>
            </div>



        );
    }
}
export default LoginPage;