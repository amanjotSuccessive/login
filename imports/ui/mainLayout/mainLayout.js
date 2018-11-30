import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './mainLayout.html';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../../node_modules/materialize-css/dist/js/materialize.min.js'
//import materializecss from 'materialize-css';



Template.mainLayout.helpers({
  cUser: () => {
    return ('Hi ' + Meteor.user().username.toUpperCase() + ',</t>');

  }
});
Template.mainLayout.events({
    'click #logoutget'(event){
      event.preventDefault
        Meteor.logout(function(err) {
            if (err) {
              alert('Something went wrong'); }
            else {
                console.log(2)
              FlowRouter.go('/login');
            }
          });
    }
});