import * as React from 'react'
import './tableformat.css'
import { translate, setLanguage } from 'react-multi-lang'

class TableFormat extends React.Component {

    render() {
        return (
            <div className="row dsprow">
                <div className="col-lg-4 right-border">
                <div className="row">
                <div className="col-lg-3 logo-container remove-padding">
                <img className="dsplogo" src={this.props.dsp.brandingLogo} />
                
                </div>
                <div className="col-lg-9 remove-padding">
                  <b>{this.props.dsp.packageName}</b> 
                 {this.props.dsp.active==1 && <label className="dsp-active-status">{this.props.t('content.active', {param: 'react'})}</label>}
                 {this.props.dsp.active!=1 && <label className="dsp-inactive-status">{this.props.t('content.inactive', {param: 'react'})}</label>}
                    <p className="orange-text">{this.props.t('content.service', {param: 'react'})}: {this.props.dsp.dappService?this.props.dsp.dappService:"--"}
                        <br></br>
                        {this.props.t('content.email', {param: 'react'})}: {this.props.dsp.email?this.props.dsp.email:"--"}
                    </p>
                    
                </div>
                
            </div>                             
            <div className="row">
              
                <div className="col-lg-12">
                <p className="countryname">
                    <img style={{height:'21px'}} src={require('../../../images/country.png')} /> {this.props.dsp.address?this.props.dsp.address:"--"}
                </p>
                                                      
                    <p className="orange-text">{this.props.t('content.website', {param: 'react'})}: {this.props.dsp.website?this.props.dsp.website:"--"}</p>
                    <p>{this.props.dsp.description}</p>
                    <p>  
                      {this.props.dsp.facebookId && <a href={this.props.dsp.facebookId} target="_blank"><img src={require('../../../images/facebook-s.png')} /></a>}&nbsp;
                      {this.props.dsp.wechatId && <a href={this.props.dsp.wechatId} target="_blank"><img src={require('../../../images/wechat-s.png')} /></a>}&nbsp;                        
                      {this.props.dsp.twitterId && <a href={this.props.dsp.twitterId}  target="_blank"><img src={require('../../../images/twitter-s.png')} /></a>}&nbsp;                                                
                      {this.props.dsp.youtubeId && <a href={this.props.dsp.youtubeId}  target="_blank"><img src={require('../../../images/youtube-s.png')} /></a>}&nbsp;                                                
                      {this.props.dsp.githubId && <a href={this.props.dsp.githubId}  target="_blank"><img src={require('../../../images/github-s.png')} /></a>}&nbsp;                                              
                      {this.props.dsp.redditId && <a href={this.props.dsp.redditId}  target="_blank"><img src={require('../../../images/reddit-s.png')} /></a>}&nbsp;                                              
                      {this.props.dsp.keybaseId && <a href={this.props.dsp.keybaseId}  target="_blank"><img src={require('../../../images/keybase-s.png')} /></a>}&nbsp;                                                                      
                      {this.props.dsp.telegramId && <a href={this.props.dsp.telegramId}  target="_blank"><img src={require('../../../images/instagram-s.png')} /></a>}&nbsp;                                                                      
                      {this.props.dsp.steemitId && <a href={this.props.dsp.steemitId}  target="_blank"><img src={require('../../../images/steemit-s.png')} /></a>}&nbsp;                                                                                            
                    </p>
                </div>
                
                </div>
            </div>

                <div className="col-lg-4 right-border remove-padding table-responsive">
                    <table className="dsppackageinfotable">
                        <tbody>
                        <tr><td>{this.props.t('content.packagename', {param: 'react'})}</td><td>{this.props.dsp.dspName?this.props.dsp.dspName:"--"}</td></tr>
                        <tr><td>{this.props.t('content.packageid', {param: 'react'})}</td><td>{this.props.dsp.dspPackageName?this.props.dsp.dspPackageName:"--"}</td></tr>
                        <tr><td>{this.props.t('content.provider', {param: 'react'})}</td><td>{this.props.dsp.packageperiod?this.props.dsp.packageperiod:"--"}</td></tr>
                        <tr><td>{this.props.t('content.quota', {param: 'react'})}</td><td>{this.props.dsp.quota?this.props.dsp.quota:"--"}</td></tr>
                        <tr><td>{this.props.t('content.packageperiod', {param: 'react'})}</td><td>{this.props.dsp.packageperiod?this.props.dsp.packageperiod:"--"}</td></tr>
                        <tr><td>{this.props.t('content.minimumunstakeperiod', {param: 'react'})}</td><td>{this.props.dsp.unstakePeriod?this.props.dsp.unstakePeriod:"--"}</td></tr>
                        <tr><td>{this.props.t('content.minimumstakequantity', {param: 'react'})}</td><td>{this.props.dsp.minDappStakeRequired?this.props.dsp.minDappStakeRequired:"--"}</td></tr>                        
                        <tr><td colSpan="2">{this.props.t('content.servicelevelagreement', {param: 'react'})}</td></tr>                        
                        <tr><td>{this.props.t('content.availabilityuptime', {param: 'react'})}</td><td>{this.props.dsp.availabilityUptime?this.props.dsp.availabilityUptime:"--"}</td></tr>                        
                        <tr><td>{this.props.t('content.performance', {param: 'react'})} 95</td><td>{this.props.dsp.performance?this.props.dsp.performance:"--"}</td></tr>                                          
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4 table-responsive">
                    <table className="dsppackageinfotable">
                        <tbody>
                        <tr><td>{this.props.t('content.apiendpoint', {param: 'react'})}</td><td>{this.props.dsp.apiEndPoint?this.props.dsp.apiEndPoint:"--"}</td></tr>
                    <tr><td>{this.props.t('content.packagejsonurl', {param: 'react'})}</td><td>{this.props.dsp.apiEndPoint?this.props.dsp.apiEndPoint:"--"}</td></tr>                   
                    <tr><td>{this.props.t('content.dspjsonuri', {param: 'react'})}</td><td>{this.props.dsp.dspJsonUri?this.props.dsp.dspJsonUri:"--"}</td></tr>
                    <tr><td>{this.props.t('content.codeofconduct', {param: 'react'})}</td><td>{this.props.dsp.codeofconduct?this.props.dsp.codeofconduct:"--"}</td></tr>
                    <tr><td>{this.props.t('content.ownershipdisclousre', {param: 'react'})}</td><td>{this.props.dsp.ownershipDisclouser?this.props.dsp.ownershipDisclouser:"--"}</td></tr>
                    
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default translate(TableFormat)
