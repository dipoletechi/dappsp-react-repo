import {createStore} from "redux"
import DSPService from "../apiservice/dspservice"
class DspFilterRedux{
    static filterStore;        
     
    constructor(){
              
    }
    
   
    FilterReducer(state={sortorder:'asc',sortordertype:'pp',networktype:'1',keyword:'',pagenumber:1,pagesize:5,isLoading:false},action){
             console.log(action.type);
        switch(action.type){
            case "setordertype":
                state.sortorder=action.payload; 
            break;
            case "setsorttype":
                state.sortordertype=action.payload; 
            break;
            case "setpagenumber":
                state.pagenumber=action.payload; 
            break;           
            case "setkeyword":
                state.keyword=action.payload; 
            break;
            case "setnetworktype":
                state.networktype=action.payload; 
            break;
            case "setpagesize":
                state.pagesize=action.payload; 
            break;

        }      
        console.log("after payload read",state);                 
        return state;
    }


    GetFilterStore(callback){
        return DspFilterRedux.filterStore;
    }


  

    CreateStores(){     
        DspFilterRedux.filterStore=createStore(this.FilterReducer);        
    }



    SetSortOrderDispatcher(sortorder){
        DspFilterRedux.filterStore.dispatch({
            type:"setordertype",
            payload:sortorder
        });
    }

    SetSortTypeDispatcher(sorttype){
        DspFilterRedux.filterStore.dispatch({
            type:"setsorttype",
            payload:sorttype
        });
    }

    SetPageNumberDispatcher(pagenumber){
        DspFilterRedux.filterStore.dispatch({
            type:"setpagenumber",
            payload:pagenumber
        });
    }

    SetKeywordDispatcher(keyword){
        DspFilterRedux.filterStore.dispatch({
            type:"setkeyword",
            payload:keyword
        });
    }

  
    SetNetworkTypeDispatcher(networktype){
        DspFilterRedux.filterStore.dispatch({
            type:"setnetworktype",
            payload:networktype
        });
    }

    SetPageSizeDispatcher(pagesize){
        DspFilterRedux.filterStore.dispatch({
            type:"setpagesize",
            payload:pagesize
        });
    }

}

export default DspFilterRedux;