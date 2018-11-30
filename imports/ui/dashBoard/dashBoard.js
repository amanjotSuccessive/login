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
    target.text.value = '';
  },
});

Template.dashBoard.helpers({
cUser : () => {
  console.log("sss")
  return (Meteor.user().username + ',</t>') ;

},
tasks() {
  return Tasks.find({}, { sort: { createdAt: -1 } });
},
});
