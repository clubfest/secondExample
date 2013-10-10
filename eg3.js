if (Meteor.isClient) {

  var isMyTurn = true;

  Template.hello.events({
    'click button' : function (evt) {
      if (isMyTurn){
        evt.currentTarget.textContent = "X";
      } else {
        evt.currentTarget.textContent = "O";
      }
      isMyTurn = !isMyTurn;
    }
  });

  Template.chat.events({
    'click button': function(evt){
      $("#comment-display").text("hi");
    }
  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
