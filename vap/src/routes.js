import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

// import NavBar from './components/NavBar/navBar';
// import WelcomePage from './components/welcomePage/welcomePage';
// import WelcomeBootstrap from './components/welcomeBootstrap/welcomeBootstrap';
import LoginPage from './components/loginPage/loginPage';
// import Compiler from './components/compiler/compiler';
// import AboutUs from './components/aboutUs/aboutUs';
// import ForumPage1 from './components/FAQs/forumPage1';
// import ForumPage2 from './components/FAQs2/forumPage2';
// import ContactUs from './components/contactUs/contactUs';
// import Flex from './components/flex/flex';
// import Grid from './components/grid/grid';




class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                    {/* <Route path="/" exact component={NavBar} /> */}
                    {/* <Route path="/Compiler" exact component={Compiler} /> */}
                    {/* <Route path="/flex" exact component={Flex} /> */}
                    {/* <Route path="/grid" exact component={Grid} /> */}


                    {/* <Route path="/welcome" exact component={WelcomePage} /> */}
                    {/* <Route path="/welcomeBootstrap" exact component={WelcomeBootstrap} /> */}
                    <Route path="/login" exact component={LoginPage} />
                     {/* <Route path="/aboutus" exact component={AboutUs} />       { /*some issues with it    */} */}
                    {/* <Route path="/formPage1" exact component={ForumPage1} /> */}
                    {/* <Route path="/formPage2" exact component={ForumPage2} />  */}
                    {/* <Route path="/contactus" exact component={ContactUs} />  */}





                </Switch>
            </BrowserRouter>
                
            
        )
    }
}
export default Routes;