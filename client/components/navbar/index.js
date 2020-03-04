import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
 
import './navbar.html';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
})