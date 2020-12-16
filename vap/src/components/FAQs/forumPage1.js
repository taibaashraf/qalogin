import React, { Component } from 'react';
import Spacer from 'react-add-space';
// import ReactTable from "react-table"; 

import './forumPage1.css';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import bgImage from '../Images/aboutUs.png';


class ForumPage1 extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img className="img-responsive" src={bgImage} style={{ height: '585.5px', width: '100%' }} />
                    <div className="top-left"><i className="fa fa-signal" style={{ color: ' #F89E12' }} />
                        <Spacer amount={1} />
                    VOP IoT lab</div>
                    <div className="top-left" style={{ left: '48%', fontSize: '14px', top: '27px' }}>Home</div>
                    <div className="top-left" style={{ left: '54%', fontSize: '14px', top: '27px' }}>About</div>
                    <div className="top-left" style={{ left: '60%', fontSize: '14px', top: '27px' }}>Blogs</div>
                    <div className="top-left" style={{ left: '66%', fontSize: '14px', top: '27px' }}>Forum</div>
                    <div className="top-left" style={{ left: '72%', fontSize: '14px', top: '27px' }}>Contact</div>
                    <button className="top-left" id="btnlogout" style={{}}>Logout</button>

                    <div className="section">

                        <div id="container" style={{ backgroundColor: '', }}>
                            <div id="" style={{
                                position: 'absolute',
                                top: '10%',
                                left: '23%',
                                padding: '5px',
                                height:'400px',
                                width:'60%'
                                                            
                            }}>
                                <table className="table" >
                                <thead>
                                    <tr style={{
                                    color: 'black',
                                    background:'white',
                                    backgroundImage:"linear-gradient('white','#F89E12' )" ,
                                    // textAlign:'center'                                   
                                }} >
                                        <th><b>Serial</b></th>
                                        <th><b>Topic</b></th>
                                        <th><b>Comments</b></th>
                                        <th><b>Last comment</b></th>
                                        <th><b>Users Type</b></th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: '#1e1e1e', color: 'white' }}>
                                    <tr style={{padding:'50px'}}>
                                        <td style={{textAlign:'center', padding:'30px'}}><i className="fa fa-square-o" style={{border:'1px solid white' , color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td style={{fontSize:'14px'}}>VAPIoT-HANDS ON /COMPILER
                                        <p style={{fontSize:'11px'}}>VAPIoT community related topics</p>
                                            
                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td>453</td>
                                        <td>By Kauf.H<br />
                                            <i className="fa fa-calendar" /> sep 23,2018 5:35
                                            </td>
                                        <td>
                                            <i className="fa fa-mail-forward" />Faculty
                                            </td>

                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'center', padding:'30px'}}><i className="fa fa-square-o" style={{ border:'1px solid white' ,color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td style={{fontSize:'14px'}}>EN-GENERAL
                                            <p style={{fontSize:'11px'}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td>134</td>
                                        <td>By Kauf.H<br />
                                            <i className=" fa fa-calendar" /> sep 23,2018 5:35
                                            </td>
                                        <td><i className="fa fa-circle" />Student</td>

                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'center', padding:'30px'}}><i className="fa fa-square-o" style={{ border:'1px solid white' ,color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td style={{fontSize:'14px'}}>VAPIoT-HANDS ON /COMPILER<br />
                                        <p style={{fontSize:'11px'}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td>45</td>
                                        <td>By Kauf.H<br />
                                            <i className=" fa fa-calendar" /> sep 23,2018 5:35
                                            </td>
                                        <td>
                                            <i className="fa fa-circle" />Student
                                            </td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'center', padding:'30px'}}><i className="fa fa-square-o" style={{ border:'1px solid white' ,color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td style={{fontSize:'14px'}}>EN-GENERAL
                                        <p style={{fontSize:'11px'}}>VAPIoT community related topics</p>

                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td>76</td>
                                        <td>By Kauf.H<br />
                                            <i className=" fa fa-calendar" /> sep 23,2018 5:35
                                            </td>
                                        <td><i className="fa fa-mail-forward" />Faculty</td>

                                    </tr>
                                    <tr>
                                        <td style={{textAlign:'center', padding:'30px'}}><i className="fa fa-square-o" style={{ border:'1px solid white' ,color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        
                                        <td style={{fontSize:'14px'}}>VAPIoT-HANDS ON / COMPILER
                                        <p style={{fontSize:'11px'}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>
                                                Moderator. Ben Jhone. ST
                                            </p>
                                        </td>
                                        <td>345</td>
                                        <td>By Kauf.H<br />
                                            <i className="fa fa-calender" /> sep 23,2018 5:35
                                            </td>
                                        <td><i className="fa fa-circle" />
                                            Student
                                        </td>

                                    </tr>
                                    {/* <tr>
                                        <td><i className="fa fa-square-o" style={{ border:'1px solid white' ,color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td>EN-GENERAL<br />
                                            <p style={{ backgroundColor: 'white' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td>789</td>
                                        <td>By Kauf.H<br />
                                            <i className="fa fa-calender" /> sep 23,2018 5:35
                                            </td>
                                        <td><i className="fa fa-circle" />Student</td>
                                    </tr> */}

                                </tbody>
                            </table>
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
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12', fontSize: 'medium' }} /> |</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12', fontSize: 'medium' }} />|</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12', fontSize: 'medium' }} />  </a>
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

export default ForumPage1;