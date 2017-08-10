'use strict';

const mongoose = require('mongoose');
const questionsSchema = mongoose.Schema({
  language: {type:String},
  questions: {type:Array, ref:'ActualQuestions' },
});

const actualQuestionsSchema = mongoose.Schema({
  question:{type:String, required:true},
  translation:{type:String, required:true},
  answer:{type:String, required:true}
})
questionsSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    language: this.language,
    questions: this.questions
  };
};

const userSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  accessToken: {type: String},
  name: {type: String},
  score: Number
  //questions
});

userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    googleId: this.googleId,
    name: this.name,
    score: this.score
  };
};



const User = mongoose.model('User', userSchema);
const Question = mongoose.model('Question', questionsSchema);
const ActualQuestions = mongoose.model('ActualQuestions', actualQuestionsSchema);
module.exports = {User, Question};
