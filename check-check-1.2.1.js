if (Meteor.isClient) {

  Template.hello.events({
    'click button': function () {
      const data = {
        "_id": undefined,
        "title": "test123",
        "description": "description here",
        "orgId": "95Wct9LbcLovDn55b",
        "tagIds": undefined,
      };

      Meteor.call("fun/fun/fun", data, (error, result) => {
        console.log(error, result);
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    "fun/fun/fun"(args) {
      console.log('validating:', args);
      check(args, {
        _id: Match.OneOf(String, undefined),
        title: String,
        description: String,
        orgId: String,
        tagIds: Match.OneOf([String], undefined),
      });
    },
  })
}
