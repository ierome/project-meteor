import { Template } from 'meteor/templating';
import { Todos } from '../../../lib/collections';
import { Meteor } from 'meteor/meteor';
 
import './todo-add.html';

Template.add.events({
    'submit .add-todo': function() {
      event.preventDefault();
      Meteor.call('todos.insert', event.target.todoInput.value)
      event.target.todoInput.value = '';
    }
})