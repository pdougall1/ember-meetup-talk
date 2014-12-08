import Ember from 'ember';

export default Ember.ArrayController.extend({

  dougs: function () {
    debugger; // <6> CALL THE COMPUTED PROPERTY
    return 'HERE I AM!';
  }.property(),

});


// <0> MAKE A CLASS
// <1> THIS IS WHERE CLASS IS DEFINED
// <2> THIS APPLIES EACH ARGUMENT TO THE NEW CLASS
// <3> CREATE A MIXIN FROM OBJECT
// <4> APPLY EVERYTHING
// <5> ArrayController INITIALIZED HERE!
// <6> ArrayProxy INITIALIZED HERE!
