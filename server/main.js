import { Meteor } from 'meteor/meteor';
import '../imports/api/user/users';
import '../imports/api/user/methods';
import '../imports/api/tasks.js';
Meteor.startup(() => {
 // process.env.MONGO_URL = 'http://localhost:3001';
});
