import { AbstractControl } from "@angular/forms";

export const PasswordMatchValidator = (passwordControlName:string,confirmPasswordControlName:string)=> {
    const validator = (form:AbstractControl)=>{
        const passwordControl = form.get(passwordControlName) //find password inside the form
        const confirmPasswordControl = form.get(confirmPasswordControlName) 
        
       // If not matched we create an error and if we have the same value we remove
        if(!passwordControl || !confirmPasswordControl) return; 
        if(passwordControl.value != confirmPasswordControl.value){
            confirmPasswordControl.setErrors({noMatch:true});
        }else{
            const errors = confirmPasswordControl.errors;
            if(!errors) return;
            delete errors["noMatch"]; //delete a property from an object
            confirmPasswordControl.setErrors(errors);
        }

    }
    return validator;
}
