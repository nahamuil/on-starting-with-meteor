import { Meteor } from "meteor/meteor";
import "../imports/api/collections/ContactsCollection";
import "../imports/api/collections/TransactionsCollection";
import "../imports/api/collections/WalletsCollection";
import "../imports/api/ContactsMethods";
import "../imports/api/TransactionsMethods";
import "../imports/api/ContactsPublications";
import "../imports/api/WalletsPublications";
import { WalletsCollection } from "../imports/api/collections/WalletsCollection";
import "../infra/CustomError";

Meteor.startup(() => {
    if (!WalletsCollection.find().count()) {
        WalletsCollection.insert({
            createdAt: new Date(),
        });
    }
});
