import Joi from "joi";
import removePrefix from "./removePrefixFromString";

// form fields
export const emailValidation = Joi.string()
  .email({ tlds: { allow: false } })
  .required();
export const phoneValidation = Joi.string().length(10).required();

export const otpValidation = Joi.string().length(4).required();

// validation function
export const joiValidation = (schema = {}, data = {}) => {
  const validationData = Joi.object(schema).validate(data);
  let error = "";
  if (validationData.error !== undefined) {
    error = removePrefix(validationData.error.toString(), "ValidationError: ");
    console.error(error);
  }

  return error;
};
