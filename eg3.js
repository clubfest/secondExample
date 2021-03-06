if (Meteor.isClient) {

  var isMyTurn = true;

  Template.hello.events({
    'click .board-button' : function (evt) {
      if (isMyTurn){
        evt.currentTarget.textContent = "X";
      } else {
        evt.currentTarget.textContent = "O";
      }
      isMyTurn = !isMyTurn;
    },
    'click #clear-board': function(evt) {
      $('.board-button').text("_");
    }
  });

  Template.chat.events({
    'click button': function(evt){
      var comment = $("textarea");
      $("#comment-display").text(comment.val());
    }
  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
