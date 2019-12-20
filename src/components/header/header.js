import * as React from 'react'
import './header.css'
import { translate, setLanguage } from 'react-multi-lang'
import ViewTypeRedux from '../../stores/viewtype.redux';
import DspFilterRedux from '../../stores/dspfilter.redux';
import AppStorage from '../../stores/appstorage';
class Header extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    viewtype: 0,//square -0 and table 1     
    languageSelected:'en',
    networktype:1
 }
  this._viewTypeRedux=new ViewTypeRedux();  
  this._dspFilterRedux=new DspFilterRedux();        
}

componentDidMount() {
  var selectedLanguage=AppStorage.GetLanguage();  
  
  if(!selectedLanguage){
    this.setSelectedLanguage("en");    
  }
  else{
    this.setSelectedLanguage(selectedLanguage); 
  }

  
  var seletedViewType=AppStorage.GetViewType();  
 
  if(!seletedViewType){
    this.selectedView(0); 
  }
  else{
    this.selectedView(seletedViewType); 
  }
}

selectLanguage(event){    
  event.persist()  
  this.setSelectedLanguage(event.target.value); 
}

setSelectedLanguage(selectedLanguage){    
  this.setState({ languageSelected: selectedLanguage },
    () => {    
      setLanguage(this.state.languageSelected); 
      AppStorage.SetLanguage(this.state.languageSelected);
  });
 
}


selectedView(viewtype){
  console.log("view type is ",viewtype);
  this.setState({ viewtype: viewtype },
    () => {    
      console.log("view type is- ",this.state.viewtype);
      AppStorage.SetViewType(this.state.viewtype); 
      this._viewTypeRedux.selectedViewTypeDispatcher(this.state.viewtype);
  });
 
}

selectNetworkType(event){
  this.setState({ networktype: event.target.value },
    () => {    
            
      this._dspFilterRedux.SetNetworkTypeDispatcher(this.state.networktype);
  });
}

  render() {
    return (
      <React.Fragment>
        <div className="header">      
          <nav className="navbar navbar-expand-lg">
            <a href="#"><img className="logoimg" src={require('../../images/logo-top.png')} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars menu-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mr-auto">


              </div>

              <div className="navbar-nav">

              {this.state.viewtype==0 &&  <a className="nav-item nav-link" href="#" onClick={()=>this.selectedView(1)}> <img src={require('../../images/squareo-l.png')} /></a>}
              {this.state.viewtype!=0 &&  <a className="nav-item nav-link" href="#" onClick={()=>this.selectedView(0)}> <img src={require('../../images/square-l.png')} /></a>}                      
              {this.state.viewtype!=1 &&  <a className="nav-item nav-link" href="#" onClick={()=>this.selectedView(1)}> <img src={require('../../images/menuw-l.png')} /></a>}
              {this.state.viewtype==1 &&  <a className="nav-item nav-link" href="#" onClick={()=>this.selectedView(0)}> <img src={require('../../images/menuo-l.png')} /></a>} 
              
                <div className="nav-item nav-link">
               
                <select className="form-control header-dropdown-menu"  value={this.state.languageSelected} onChange={this.selectLanguage.bind(this)}>
                    <option value="en">English</option>
                    <option value="hn">हिंदी</option>                                        
                  </select>
                </div>
              
                <div className="nav-item nav-link">
                   <select className="form-control header-dropdown-menu"  value={this.state.networktype} onChange={this.selectNetworkType.bind(this)}>
                    <option value="1"> {this.props.t('header.mainnet', {param: 'react'})}</option>
                    <option value="0"> {this.props.t('header.testnet', {param: 'react'})}</option>                    
                    </select>
                </div>


                <div className="nav-item nav-link">
              
                   <select className="form-control header-dropdown-menu wallet-selector">
                    <option> {this.props.t('header.scatter', {param: 'react'})}</option>                    
                    </select>
                </div>

              </div>
            </div>
          </nav>
        </div>


        <div id="navbar">
            <nav className="navbar navbar-expand-lg top-menu-slim">
            <a href="#"><img className="slim-menu-logo" src={require('../../images/logo.png')} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars menu-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mr-auto">
              </div>

              <div className="navbar-nav">

                {this.state.viewtype==0 &&  <a className="nav-item nav-link" href="#" onClick={()=>this.selectedView(1)}> <img src={require('../../images/squareo-l.png')} /></a>}
                {this.state.viewtype!=0 &&  <a className="nav-item nav-link" href="#" onClick={()=>this.selectedView(0)}> <img src={require('../../images/square-l.png')} /></a>}                      
                {this.state.viewtype!=1 &&  <a className="nav-item nav-link" href="#" onClick={()=>this.selectedView(1)}> <img src={require('../../images/menuw-l.png')} /></a>}
                {this.state.viewtype==1 &&  <a className="nav-item nav-link" href="#" onClick={()=>this.selectedView(0)}> <img src={require('../../images/menuo-l.png')} /></a>} 
                
         
                <div className="nav-item nav-link">
                <select className="form-control header-dropdown-menu"  value={this.state.languageSelected} onChange={this.selectLanguage.bind(this)}>
                    <option value="en">English</option>
                    <option value="hn">हिंदी</option>                                        
                  </select>
                </div>
              
                <div className="nav-item nav-link">
                  <select className="form-control header-dropdown-menu">
                      <option> {this.props.t('header.mainnet', {param: 'react'})}</option>
                      <option> {this.props.t('header.testnet', {param: 'react'})}</option>
                    </select>
                </div>
                
                <div className="nav-item nav-link">              
                  <select className="form-control header-dropdown-menu wallet-selector">
                      <option> {this.props.t('header.scatter', {param: 'react'})}</option>                    
                  </select>
                </div>
              </div>
            </div>


          </nav>        
        </div>

      </React.Fragment>

    )
  }
}

export default translate(Header)
