import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Todos = new Mongo.Collection('todos')

Meteor.methods({
    'todos.insert'(name){
        check(name, String)
        if(!Meteor.userId()) {
            throw new Meteor.Error('Not authorized')
        }
        Todos.insert({
            name: name,
            completed: false,
            owner: Meteor.userId(),
            username: Meteor.user().username,
        })
    },
    'todos.remove'(todo){
        check(todo._id, String)

        Todos.remove(todo._id)
    },
    'todos.complete'(todo){
        check(todo._id, String)

        Todos.update(todo._id, { $set: {completed: true}})
    }
})