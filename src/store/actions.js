export  default{
    show:({commit,state})=>{
        if(state.flog){
            commit('show',true);
        }else{
            commit('show',false);
        }
       
    }
}