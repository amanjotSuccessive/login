import './dashBoard.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../../api/tasks.js';
import './task.js';

Template.dashBoard.onCreated(function bodyOnCreated() {
  Meteor.subscribe('tasks');
});


Template.dashBoard.events({
  'click .form-group'(event) {
    event.preventDefault();
    console.log("Logout")
    Meteor.logout(function(err) {
      if (err) {
        alert('Something went wrong'); }
      else {
        FlowRouter.go('/login');
      }
    });
  },

  'submit .new-task'(event) { 
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Meteor.call('tasks.insert', text);

/*  below commented code is usable only when meteor security is not applied    
 Tasks.insert({
      text,
      createdAt: new Date(), // current time
    }); */
 
    // Clear form
    target.text.value = '';
  },
});

Template.dashBoard.helpers({
cUser : () => {
  return (Meteor.user().username + ',</t>') ;
},
tasks() {
  // Show newest tasks at the top
  console.log("hello")
  return Tasks.find({}, { sort: { createdAt: -1 } });
},
});
