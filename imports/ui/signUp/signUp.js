import './signUp.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
// import info from '../../api/tasks.js';

Template.signUp.helpers({
 error: () =>{
   return Template.instance().low.get()
   }
});

Template.signUp.events({
  /*
  Function to insert data on successful signIn
  gets the data from text field of the form
  */
  'submit .signUpForm'(event) {
    event.preventDefault();
    // console.log('signUpForm');
    // const target = event.target;
    const { target } = event;
    const userSignUp = target.userSignUp.value;
    const citySignUp = target.citySignUp.value;
    const addressSignUp = target.addressSignUp.value;
    const ageSignUp = Number(target.ageSignUp.value);
    const agreeSignUp = target.agreeSignUp.value;
    const passwordSignUp = target.passwordSignUp.value;

    Meteor.call('registerUser', userSignUp, citySignUp, addressSignUp, ageSignUp, passwordSignUp, (err, res) => {
      if (err) {
         console.log(err);
      } else {
         console.log(res);
      }
    });
  },
});

// element3.value = (document.getElementById("readCheck").checked) ? "Read" : "Unread";
