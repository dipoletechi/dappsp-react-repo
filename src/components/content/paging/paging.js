import * as React from 'react'
import './paging.css'
import { translate } from 'react-multi-lang'
import DspFilterRedux from '../../../stores/dspfilter.redux';
class Paging extends React.Component {

constructor(props) {
  super(props);
 
  this.state = {
      pageNumber:1,
      isMore:true      
  }   
  this._dspFilterRedux=new DspFilterRedux();        
}

componentDidMount() {
  console.log("Paging props",this.props);

}

prevPage(){    
  var pageNumber=this.state.pageNumber;
  pageNumber=pageNumber-1;
  if(pageNumber<=0){
    pageNumber=1;
  }
 
 this.setState({ pageNumber:pageNumber },
  () => {         
    this._dspFilterRedux.SetPageNumberDispatcher(this.state.pageNumber);                     
});  
}

nextPage(){    
  var pageNumber=this.state.pageNumber;
  pageNumber=pageNumber+1;   
 this.setState({ pageNumber:pageNumber },
  () => {        
    console.log("page number",this.state.pageNumber);
    this._dspFilterRedux.SetPageNumberDispatcher(this.state.pageNumber);                     
});  
}


  render() {
    return (
      <React.Fragment>
      <div className="row paging">
               <div className="col-lg-12">
                {this.state.pageNumber>1  &&   <label onClick={this.prevPage.bind(this)}><i className="fas fa-angle-double-left"></i> Prev</label> }
                  &nbsp;&nbsp;
               <label className="pagenumber">{this.state.pageNumber}</label>   
                  &nbsp;&nbsp;
               {this.state.isMore &&    <label onClick={this.nextPage.bind(this)}>Next <i className="fas fa-angle-double-right"></i> </label>}
               </div>
      </div>
      </React.Fragment>

    )
  }
}

export default translate(Paging)
