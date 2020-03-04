import { Template } from 'meteor/templating';
import { Todos } from '../../../lib/collections';
import { Meteor } from 'meteor/meteor'
 
import './todo-item.html';

Template.todo.helpers({
    'isCompleted': function(completed) {
        if (completed == true) {
            return false;
        } else {
            return true;
        }
    }
})

Template.todo.events({
    'click .deleteButton': function() {
        Meteor.call('todos.remove', this)
        return false;
    },
    'click .completeButton': function() {
        Meteor.call('todos.complete', this)
    }
})