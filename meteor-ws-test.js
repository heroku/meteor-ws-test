Pings = new Meteor.Collection("ping");

if (Meteor.isClient) {
    Template.stats.ping = function () {
        if (Pings.find().count() == 0) {
            return "0";
        } else {
            return Pings.find().fetch()[0]["date"];
        }
    };

    Meteor.subscribe("pings");
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Pings.find().count() == 0) {
            Pings.insert({date: new Date()});
        }

        Meteor.setInterval(function() {
            Pings.update((Pings.find().fetch())[0]._id, {$set: {date: new Date()}});
        }, 1000);
    });

    Meteor.publish("pings",
                   function () {
                       return Pings.find();
                   });
}
