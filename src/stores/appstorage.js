
class AppStorage{
  
    static SetViewType(viewtype){
        localStorage.setItem("viewtype",viewtype)
    }

    static GetViewType(viewtype){
       return localStorage.getItem("viewtype")
    }


    static SetLanguage(language){
        localStorage.setItem("language",language)
    }

    static GetLanguage(language){
       return localStorage.getItem("language")
    }
    
}

export default AppStorage;