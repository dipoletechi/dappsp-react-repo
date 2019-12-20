import ApiService from '../apiservice/apiservice'
import RouterHelper from '../constants/routehelper'
class DSPService{
  
    static GetDsps(pagenumber,limit,sortby,sortorder,networktype,keyword){
        return ApiService.Get(RouterHelper.dspurl+"/"+pagenumber+"/"+limit+"/"+sortby+"/"+sortorder+"/"+networktype+"/"+keyword);
    }    
    
}

export default DSPService;