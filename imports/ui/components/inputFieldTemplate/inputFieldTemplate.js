import './inputFieldTemplate.html';
import { Template } from 'meteor/templating';
import validate from './helper';

Template.inputField.onCreated(function () {
  this.low = new ReactiveVar(false);
});
Template.inputField.helpers({
  error: () => {
   // if (Template.instance().low.get()) return "Error";
   return Template.instance().low.get();
  }
});
/* Template.inputField.events({
  'change'(event) {
    event.preventDefault();
    console.log(event.target.value);
    //console.log("Template.instance()", Template.instance().data.validate) //low.get()
    console.log(Template.instance().data.id)
    let errorVar = validate(Template.instance().data.id);
    Template.instance().low.set(errorVar);
  }
}); */















































/* Template.inputField.events({
  'change' (event) {
    event.preventDefault();
    console.log(Template.instance())
    let parent = document.getElementById(this.id);
    let targetEle = parent.id+'Error';
    document.getElementById(targetEle).innerHTML = ''; 
   
      // const data = Template.instance().data;
      console.log(parent.id);
      let username = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{3,15})$/;
      let password = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/; 
    /*  ^	                  The password string will start this way
       (?=.*[a-z])	        The string must contain at least 1 lowercase alphabetical character
       (?=.*[A-Z])	        The string must contain at least 1 uppercase alphabetical character
       (?=.*[0-9])	        The string must contain at least 1 numeric character
       (?=.*[!@#\$%\^&\*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
       (?=.{8,})           	The string must be eight characters or longer 
    
      //console.log(test, '=>', event.target.value, ' => ', this.validate, ' => ', this);
  
    /*  if(!test){
    document.getElementById(targetEle).innerHTML = 'ERROR';
    }
    else {
      document.getElementById(targetEle).innerHTML = '';
    }  
    Blaze.currentView.parentView.parentView.templateInstance().low.set("ERRORS");
  }
});
 */