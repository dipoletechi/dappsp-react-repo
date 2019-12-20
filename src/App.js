import * as React from 'react'
import './App.css'
import { translate, setLanguage, getLanguage } from 'react-multi-lang'
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import DspFilterRedux from '../src/stores/dspfilter.redux'

class App extends React.Component {
  
  constructor(props){
    super(props);
    new DspFilterRedux().CreateStores();  
  }


  changeLang(lang) {
    setLanguage(lang)
  }

  state = {
    toDashboard: false,
  }
  getroute() {
    console.log("route clicked");
    this.setState(() => ({
      toDashboard: true
    }))

  }
  render() {

    return (
      <React.Fragment>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </React.Fragment>

      /* <Router>
           <div>
     
           
             <nav>
               <ul>
                 <li>
                   <Link to="/">Home</Link>
                 </li>
                 <li>
                   <Link to="/header/">Wallet</Link>
                 </li>
                 <li>
                   <Link to="/footer/">Account</Link>
                 </li>
               </ul>
             </nav>
     
             <Route path="/" exact component={Header} />
             <Route path="/header/" component={Header} />
             <Route path="/footer/" component={Footer} />
           </div>
         </Router>
            */

    )
  }
}

export default translate(App)
