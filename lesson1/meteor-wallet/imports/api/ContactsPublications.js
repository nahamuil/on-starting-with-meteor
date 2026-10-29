import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish(
    "allContacts",
    (publishAllContacts = () => {
        return ContactsCollection.find();
    }),
);
