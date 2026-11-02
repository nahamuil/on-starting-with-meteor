import { Meteor } from "meteor/meteor";

SimpleSchema.defineValidationErrorTransform((error) => {
    return new Meteor.Error("validation-error", error.message, error.details);
});
