export default{
    show:(state,payload)=>{
        console.log(payload);
        if (payload) {
            state.flog = false;
        } else {
            state.flog = true;
        }
    }     
}