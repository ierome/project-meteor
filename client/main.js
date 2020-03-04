import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Todos } from '../lib/collections';
import './main.html';
import './components/navbar/';
import './components/todo-item/todo-item'
import './components/todo-add/todo-add'

Template.body.helpers({
  todos(){
    return Todos.find({completed: false})
  },
  completedTodos(){
    return Todos.find({completed: true})
  },
  'isValid': function(arr){
    let count = Todos.find({completed: true}).count()
    if (count == 0) {
      return false;
    } else {
      return true;
    }
  }
})
