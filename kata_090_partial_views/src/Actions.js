export default class Actions {

    constructor(model){
        this.model = model
    }

    hidePartialView3(){
        this.model.HidePartialView3 = true;
    }
    
    showPartialView3(){
        this.model.HidePartialView3 = false;
    }

    togglePartialView3(){
        console.log("togglePartialView3", "ModelActions")
        this.model.HidePartialView3 = !this.model.HidePartialView3;
    }

    setFirst(data){
        this.model.First = data;
    } 

}