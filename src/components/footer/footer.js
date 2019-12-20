import * as React from 'react'
import './footer.css'
import { translate} from 'react-multi-lang'

class Footer extends React.Component {

  render() {
    return (     
          <div className="app-footer row">
              <div className="col-lg-6">
              <img className="slim-menu-logo" src={require('../../images/logo.png')} />
                {'\u00A9'} 2019 {this.props.t('content.title', {param: 'react'})}
              </div>
            
            <div className="col-lg-6 text-right footer-menu">
            <img  src={require('../../images/github.png')} />
            <img  src={require('../../images/twitter.png')} />
            <img  src={require('../../images/facebook.png')} />
                    <label> {this.props.t('footer.support', {param: 'react'})}</label>
                    <label>{this.props.t('footer.terms', {param: 'react'})}</label>
                    <label>{this.props.t('footer.privacy', {param: 'react'})}</label>  
                    <label>{this.props.t('footer.contactus', {param: 'react'})}</label>
            </div>
          </div>           

    )
  }
}

export default translate(Footer)
