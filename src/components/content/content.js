import * as React from 'react'
import './content.css'
import { translate } from 'react-multi-lang'
import CardFormat from './cardformat/cardformat'
import TableFormat from '../content/tableformat/tableformat'
import Paging from '../content/paging/paging'
import ViewTypeRedux from '../../stores/viewtype.redux';
import DspFilterRedux from '../../stores/dspfilter.redux';
import DSPService from '../../apiservice/dspservice';
import Filter from './filter/filter'

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewtype: 0,
            pagenumber: 1,
            limit: 5,
            sortby: "pp",
            sortorder: "asc",
            networktype: 1,
            keyword: " ",
            dspdata:[],
            ismore:true,
            isLoading:false           
        }
    
    }

    componentDidMount() {      
         ViewTypeRedux.viewTypeStore.subscribe(this.getSelectedViewType.bind(this));       
         DspFilterRedux.filterStore.subscribe(this.getFilterValues.bind(this));  
         this.GetDsps();       
    }

    getFilterValues() {
        var filtervalues = DspFilterRedux.filterStore.getState();
       
        this.setState({
            pagenumber: filtervalues.pagenumber,
            limit: filtervalues.pagesize,
            sortby: filtervalues.sortordertype,
            sortorder: filtervalues.sortorder,
            networktype: filtervalues.networktype,
            keyword: filtervalues.networktype                
        },
        () => {
                this.GetDsps();
        });
          
    }

    GetDsps(){
        this.setState({isLoading:true});
        DSPService.GetDsps(this.state.pagenumber, this.state.limit, this.state.sortby, this.state.sortorder, this.state.networktype, this.state.keyword).then(response => {
         console.log("dsp data",response);           
                if(response.data.isSuccess){
                this.setState({dspdata:response.data.responseData,isLoading:false})            
            }else{
                this.setState({isLoading:false});
            }        
        })
        
    }
   
    getSelectedViewType() {
        this.setState({ viewtype: ViewTypeRedux.viewTypeStore.getState() });
    }
    
    render() {
        return (
            <div className={this.state.viewtype == 1 ? 'container' : 'container-fluid'}>
                <Filter></Filter>

                <div className="row">
                {
                    this.state.isLoading && <div className="col-lg-12">
                        <center>
                        <img src={require('../../images/loader.gif')} /> &nbsp; Please wait..
            
                        </center>
                    </div>}
               {!this.state.isLoading && this.state.dspdata.map(function(dsp,i){
                    return <React.Fragment key={i}>
                                {this.state.viewtype == 0 && <div className="col-lg-4"><CardFormat dsp={dsp}></CardFormat></div>}                    
                                {this.state.viewtype == 1 && <TableFormat dsp={dsp}></TableFormat>}                
                         </React.Fragment>
                      }.bind(this))}
                </div>
      
             
               <Paging ismore={this.state.ismore}></Paging>
               
            </div>
        )
    }
}

export default translate(Content)
