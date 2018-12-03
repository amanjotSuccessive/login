import './get.html'
import { Template } from 'meteor/templating';
import { HTTP } from 'meteor/http'
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ReactiveVar } from 'meteor/reactive-var';
//import { ApiInsert } from '../../../api/task.js';
let ob = null;
const Obj = new Mongo.Collection(null);
//1 const ApiInsertClient = new Mongo.Collection('apiInsert')
let _title = new ReactiveVar(false);

Template.get.events({
    'click .click'(event) {
        event.preventDefault();
        _title.set(event.target.value)

    },
    'click #getHit'(event) {
        event.preventDefault();
        let val = $('#getInput').val()
        HTTP.call('GET', val || 'https://jsonplaceholder.typicode.com/posts/', {
            params: {
                "id": 5
            }
        }, function (error, response) {
            if (error) {
            } else {
                ob = response.data;
                console.log("ob", ob)
                if (!ob.length) {
                    console.log("in if block")
                    Meteor.call('ApiInsert', ob)
                }
                else {
                    console.log("in else block")
                    ob.forEach(element => {
                        let data = {
                            // _id: element.id.toString(),
                            userId: element.id,
                            title: element.title
                        }
                        //Obj.insert(data);   doing it when Mongo.Collection(null) else

                        Meteor.call('ApiInsert', data, (error, result) => {
                            if (error) {
                                console.log('error ::', error)
                            }
                            else
                                console.log('result :: ', result)
                        });
                    })
                }
                Meteor.call('ApiFind', (err, res) => {
                    console.log('err--'.err);
                    console.log('res--'.res);
                })
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

Template.get.helpers({
    Obj() {
        Meteor.call('ApiFind', (error, result) => {
            if (error) {
                console.log('error: apIFind:: ', error)
            }
            else {
                console.log('result:apiFind:: ', result);
            }
        })
        //1 return ApiInsertClient.find({})
        //return Obj.find({});
    },
    redirect() {
        FlowRouter.go('/login');
    },
    active(id) {
        return Number(_title.get()) === id
    }
})
