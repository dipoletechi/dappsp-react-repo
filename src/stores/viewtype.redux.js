import {createStore} from "redux"

class ViewTypeRedux{
    static viewTypeStore;
  constructor(){
    this.createViewTypeStore();
  }
    viewTypeReducer(state,action){
        switch(action.type){
            case "SETVIEWTYPE":
                break;
        }
        state=action.selectedViewType;
        return state;
    }

   
    getViewTypeStore(callback){
        return ViewTypeRedux.viewTypeStore;
    }

    createViewTypeStore(){
        ViewTypeRedux.viewTypeStore=createStore(this.viewTypeReducer,0);
    }

    selectedViewTypeDispatcher(selectedViewType){
        ViewTypeRedux.viewTypeStore.dispatch({
            type:"SETVIEWTYPE",
            selectedViewType:selectedViewType
        });
    }
    
}

export default ViewTypeRedux;