import { Mongo } from "meteor/mongo";
import { SimpleSchema } from "simpl-schema/dist/SimpleSchema";

export const ContactsCollection = new Mongo.Collection("contacts");

const ContactsSchema = new SimpleSchema({
    name: String,
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
    },
    imageUrl: {
        type: String,
        optional: true,
    },
    walletId: {
        type: String,
        // regEx: SimpleSchema.RegEx.Id,
    },
    createdAt: Date,
});

ContactsCollection.attachSchema(ContactsSchema);
