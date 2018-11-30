import { Template } from 'meteor/templating';
import { HTTP } from 'meteor/http'
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ReactiveVar } from 'meteor/reactive-var';
const Obj = new Mongo.Collection(null);
import './get.html'
let ob = null;
let _title= new ReactiveVar(false);

Template.get.events({

    'click .click'(event){
        event.preventDefault();
        _title.set(event.target.value)
        
    },
    'click #getHit'(event) {
        event.preventDefault();
        let val = $('#getInput').val()
        HTTP.call('GET', val || 'https://jsonplaceholder.typicode.com/posts/', {
            params: {
              // "id": 5
            }
        }, function (error, response) {
            if (error) {
            } else {
                ob = response.data;
                ob.forEach(element => {
                    let data = {
                        _id: element.id.toString(),
                        userId: element.id,
                        title: element.title
                    }
                    Obj.insert(data);
                });
            }
        });
    },
    'click #logoutget'(event) {
        Meteor.logout(function (err) {
            if (err) {
                alert('Something went wrong');
            }
            else {
                FlowRouter.go('/login');
            }
        });
    }
});

Template.get.onCreated(function () {
    //console.log('-------', Template.currentData());
})

Template.get.helpers({
    Obj() {
        return Obj.find({});
    },

    redirect() {
        FlowRouter.go('/login');
    
    },
    active(id) {
        //  Blaze.render('clickDisplay', document.getElementsByTagName("body"))
        //return `  <strong>${_title.get()}</strong>`
        console.log("active",_title.get(),id)
        console.log(Number(_title.get())===id)
        return Number(_title.get())===id
    }
})