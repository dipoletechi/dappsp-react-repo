import axios from 'axios';

class ApiService{
  
    static Get(url,params=null){
        if(params){
            return axios.get(url, {
                params:params 
              }) ;         
        }else{
            return axios.get(url) ;         
        }
        
    }    
    
}

export default ApiService;