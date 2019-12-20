import * as React from 'react'
import './filter.css'
import DspFilterRedux from '../../../stores/dspfilter.redux';
import { translate} from 'react-multi-lang'

class Filter extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            sortOrder: 'asc',
            sortBy: 'pp',          
            keyword:'',
            limit:5
         }  

         this._dspFilterRedux=new DspFilterRedux();  
    }
    
    componentDidMount() {              
    }

    setPageSize(event){    
        event.persist();
        this.setState({ limit: event.target.value },
            () => {    
              console.log("page size: ",this.state.limit);  
              this._dspFilterRedux.SetPageSizeDispatcher(this.state.limit);                     
          });   
        
    }
    
    setSortOrder(sortOrder){
        
        this.setState({ sortOrder: sortOrder },
          () => {              
            this._dspFilterRedux.SetSortOrderDispatcher(this.state.sortOrder);                     
        });
       
    }


    setSortType(event){
        event.persist();
        this.setState({ sortBy: event.target.value },
          () => {    
            console.log("sortOrder is- ",this.state.sortBy);  
            this._dspFilterRedux.SetSortTypeDispatcher(this.state.sortBy);                     
        });
       
    }

    searchkeyword(event){

        if(event.key=='Enter'){
            this.setState({ keyword: event.target.value },
                () => {    
                  
                  this._dspFilterRedux.SetKeywordDispatcher(this.state.keyword);                     
              });
        }
    }

    
    render() {
        return (
          <div className="row">
                 <div className="col-lg-7">
                 <div className="row">
                        
                        <div className="col-lg-5 remove-padding text-left paging-text">
                            {this.props.t('content.pagingtext', {param: 'react'})}  &nbsp;&nbsp;

                            <select className="header-dropdown-menu paging-dropdown" value={this.state.limit} onChange={this.setPageSize.bind(this)}>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>                            
                            </select>                          
                        </div>
                                                                  
                </div>
                        
                        
              
                 </div>
                    <div className="col-lg-3">
                        <div className="row">
                        
                        <div className="col-lg-6 remove-padding text-right sortyby-text">
                            {this.props.t('content.sortby', {param: 'react'})}
                              <br></br>
                              <label onClick={()=>this.setSortOrder('asc')} className={this.state.sortOrder=="asc"?'sortorder selected-text':'sortorder'}>{this.props.t('content.ascending', {param: 'react'})}</label> <label  onClick={()=>this.setSortOrder('desc')} className={this.state.sortOrder!="asc"?'sortorder selected-text':'sortorder'}>{this.props.t('content.decending', {param: 'react'})}</label>
                        </div>
                        

                        <div className="col-lg-6 remove-padding text-left">
                        <select className="header-dropdown-menu sortby-dropdown" value={this.state.sortBy} onChange={this.setSortType.bind(this)}>
                                <option value="pp">{this.props.t('content.packageperiod', {param: 'react'})}</option>
                                <option value="mup">{this.props.t('content.minimumunstakeperiod', {param: 'react'})}</option>
                                <option value="msq">{this.props.t('content.minimumstakequantity', {param: 'react'})}</option>
                        </select>
                        </div>                      
                        </div>
                        
                        
                        
                    </div>
                 <div className="col-lg-2">
                     <input type="text" className="form-control search-box" onKeyDown={this.searchkeyword.bind(this)} placeholder={this.props.t('content.search', {param: 'react'})}></input>
                 </div>
          </div>
        )
    }
}

export default translate(Filter)
