import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish("allContacts", function () {
    return ContactsCollection.find();
});

Meteor.publish("contacts", function () {
    return ContactsCollection.find({ archived: { $ne: true } });
});
