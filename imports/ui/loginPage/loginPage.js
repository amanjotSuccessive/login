import './loginPage.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
// import { Tasks } from '../../api/tasks.js';

/*
function to verify user login credentials
*/
Template.login.onRendered(function() {
  
});
Template.login.events({
  'submit .loginForm'(event) {
    event.preventDefault();

    const target = event.target;
    const loginName = target.nameLogin.value;
    const loginPassword = target.passwordLogin.value;
    Meteor.loginWithPassword(loginName, loginPassword, function(err, response) {
      if (err) {
        alert('Something went wrong');
      }
      else {
        FlowRouter.go('/get');
      //  $('body').ready(function () {
       //   alert('Only Numbers');
       // }); 
      }
    });
  },
});