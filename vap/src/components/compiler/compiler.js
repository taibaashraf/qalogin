import React, { Component, useState } from 'react';
import Spacer from 'react-add-space';
import AdaptiveImage from 'react-adaptive-image';



import './compiler.css';

import './responsive.css';
import { Navbar, Nav, } from 'react-bootstrap';
import bImage from '../Images/backgroundImg.png';


import compilerBar from '../Images/compilerBar.jpg';
import LiveView from '../Images/liveView.PNG';






const index = 0;

const items = [

    {
        value: 'surili-wifi',
        arguments: " '1', '2' , '3' "
    },
    {
        value: 'surili-gsm',
        arguments: " '4', '5' , '6' "
    },
    {
        value: 'PIC',
        arguments: " '7', '8' , '9' "
    },
    {
        value: 'Adiuno',
        arguments: " '10', '11' , '12' "
    }
]

class Compiler extends Component {

    handleClick = () => {
        console.log('Click happened');

    }

    render() {
        return (
            <div className="">
                <div className="bgImage">
                    <Navbar expand="lg" style={{ height: '0' }}>
                        <Navbar.Brand href="#home" ><i className="fa fa-signal" id="vap" style={{ fontSize: 'medium' }} /><a id="navHead"> VAP IoT lab</a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home" style={{ color: 'white', fontSize: 'small' }}>Home</Nav.Link>
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: 'small' }}>About</Nav.Link>
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: 'small' }}>Forum</Nav.Link>
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: 'small' }}>Contact</Nav.Link>
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: 'small' }}>FAQs</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div style={{ marginTop: '-1.5%', }} className="section">
                    <div className="row">
                        <div className="column" id="column1">
                            <div className="navPt2">
                                <ul className="nav nav-tabs" id="tabs">
                                    <li style={{ backgroundColor: '#1e1e1e', }} ><a href="#" className="Index">Index.cls-sfdx <Spacer amount={10}/><i className="fa fa-close" id="closedd"/></a></li>
                                    <li className="dDown">
                                        <select id="dDmenu">
                                            <option className="bghover-o" id="boardOptions">Select Iot Boards</option>
                                            {items.map((item, index) => (
                                                <option id="boardOptions" key={item.index} value={item.value}>
                                                    {item.value}
                                                </option>
                                            ))}
                                        </select>
                                    </li>
                                    <Spacer amount={2} />
                                    <li className="port">
                                        <textarea className="portA" style={{ resize: 'none' }}>
                                            Port 0
                                        </textarea>
                                    </li>
                                    <Spacer amount={4} />
                                    <div className="symbols" >
                                        <a href="#serial"><i className="fas fa-adjust" title="serial" onClick={items.arguments} id="" style={{ color: '#f89e12' }}> </i></a>
                                        <Spacer amount={4} />
                                        <a href="#download"><i className="fas fa-download" title="Theme" id="" style={{ color: '#f89e12' }}></i></a>
                                        <Spacer amount={4} />
                                        <a href="#check"><i className="fas fa-check" title="Theme " id="" style={{ color: '#f89e12' }}></i></a>
                                        <Spacer amount={4} />
                                        <a href="#circle"><i className="fas fa-arrow-alt-circle-right" title="run" onClick={this.handleClick} id="" style={{ color: '#f89e12' }}></i></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="column" id="column2" style={{ }}>
                            <div className="div3" style={{ border: '1px solid black' }}>
                                <form>
                                    <br />
                                    <div className="Tbtn">
                                        <Spacer amount={5} /> <input type="text" className="In"></input>
                                        <button type="button" className="btn btn-warning" id="btn">Send</button>
                                    </div>
                                </form>
                                <div className="container-fluid">
                                    <ul className="Ulist">
                                        <li>Enter LED Number 0 to 9 or X to clear</li>
                                        <li>CLeared</li>
                                        <li>Turned on LED 0</li>
                                        <li>Turned on LED 3</li>
                                        <li>Turned on LED 5</li>
                                    </ul>
                                </div>
                                <br /><br />
                            </div>
                            <div id="divAuto" className="row">
                                <p id="autoScroll"> <Spacer amount={8} /><i className="fa fa-square-o" style={{ border: '1px solid white', color: '#f89e12', backgroundColor: '#f89e12' }} /> <Spacer amount={2} />AutoScroll</p>
                                <Spacer amount={15} />
                                <select id="icons" className="options" style={{ backgroundColor: 'white', color: 'black', }}>
                                    <option className="bghover-o" id="o1">No line Ending</option>
                                    <option className="bghover-o" id="o2">Option 1</option>
                                    <option className="bghover-o" id="o3">Option 2</option>
                                    <option className="bghover-o" id="o4">Option 3</option>
                                    <option className="bghover-o" id="o5">Option 4</option>
                                </select>
                                <select id="icons" className="option1" style={{ backgroundColor: 'white', color: 'black', }}>
                                    <option className="bghover-o" id="o6">g600 bauds</option>
                                    <option className="bghover-o" id="o7">Option 1</option>
                                    <option className="bghover-o" id="o8">Option 2</option>
                                    <option className="bghover-o" id="o9">Option 3</option>
                                    <option className="bghover-o" id="o10">Option 4</option>
                                </select>
                                <button type="button" className="btn btn-warning" id="btnClear">Clear output</button>
                            </div>
                            <div clasName="livePart">
                                <p id="liveView" style={{  }}><Spacer amount={2}/><i className="fa fa-circle" style={{ color: 'green' }} /><Spacer amount={2}/> live view</p>
                                <img src={LiveView} className="img-responsive" id="Imagee" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="twoMains" >
                        <div className="footerA">
                            Ouptput
                        </div>
                        <div className="footerB">
                            <p>This is a heading one</p>
                            <p>This is a heading two</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Compiler;