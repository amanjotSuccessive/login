import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');
export const ApiInsert = new Mongo.Collection('apiInsert');

//required in case of pub sub 
if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('tasks', function tasksPublication() {
      return Tasks.find();
    });
  }


Meteor.methods({
  'tasks.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
    },

  'ApiInsert'(data){
    if(!Meteor.userId()){
      throw new Meteor.Error('not-authorized');
    }
    ApiInsert.insert(data);
    console.log("Insert....server.......",data)

  },

  'ApiFind'(){
    if(!Meteor.userId()){
      throw new Meteor.Error('not-authorized');
    }
   const apiFind = ApiInsert.find();
   console.log("Find...server......",apiFind);
   return  apiFind.fetch();
  }

});
