import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/index';
/*
function for defining route 'Login'
Shown as default/home page.
*/

FlowRouter.route('/login', {
  action: () => {
    BlazeLayout.render('mainLayout', { header: 'header', main: 'login' });
    // BlazeLayout.render('login');
  },
  name: 'login',
});

/*
function for defining route 'SignUp'
If a user is not registered he has to sign up using this function.
*/
FlowRouter.route('/signUp', {
  action: () => {
    BlazeLayout.render('mainLayout', { header: 'header', main: 'signUp' });
  },
  name: 'signUp',
});


FlowRouter.route('/get', {
  action: () => {
    BlazeLayout.render('mainLayout', { header: 'header', main: 'get', 'temp': 'checking' });
  },
  name: 'get',
});
/*
function for defining route 'DashBoard'
This feature is only available for registered Users.
If some non logged user try to access this URL then they will be directed to login page.
*/
FlowRouter.route('/dashBoard', {
  action: () => {
    BlazeLayout.render('mainLayout', { header: 'header', main: 'dashBoard' });
  },
  name: 'dashBoard',
});

/*
helper function of triggersEnter function.
trigger at the end when user hit '/' route.
*/
function trackRouteClose(context) {
  // console.log('action() skipped : trackRouteClose');
  // Mixpanel.track('move-from-home', context.queryParams);
}

/*
function for redirecting  route '/' to route '/logn'
*/
FlowRouter.route('/', {
  // triggersEnter: [trackRouteEntry],
  triggersEnter: [function(context, redirect) {
  // BlazeLayout.render('mainLayout', { top: 'header', main: 'login' });
    redirect('/login');
  }],
  action: () => {
  // alert ('hello');
  // control won't come here
  },
  name: 'login',
  triggersExit: [trackRouteClose],
});
