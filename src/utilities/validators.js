const ObjectId = require("mongoose").Types.ObjectId;


let isValidRequestBody = function (body) {
  if (Object.keys(body).length === 0) return false;
  return true;
};

let isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

let isValidObjectId = function (objectId) {
  if (!ObjectId.isValid(objectId)) return false;
  return true;
};

let isValidEmail = function (email) {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

let isValidMobile = function (phone) {
  let mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(phone);
};

let isValidName = function (name) {
  let nameRegex = /^[A-Za-z\s]{1,}[A-Za-z\s]{0,}$/;
  return nameRegex.test(name);
};

let isValidPassword = function (password) {
  let regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  return regexPassword.test(password);
};

let isValidPrice = function (price) {
  let priceRegex = /^(\d+(\.\d+)?)$/;
  return priceRegex.test(price);
};


let isValidEnum = function (value) {
  let availableSizes = ["S", "XS", "M", "X", "L", "XXL", "XL"];
  return availableSizes.includes(value);
};

const isValidNum = (number) => {
  if (/^\d+$/.test(number)) {
    return true;
  } else {
    return false;
  }
};

const isValidFile = function (files) {
  let imageRegex = /.*\.(jpeg|jpg|png)$/;
  return imageRegex.test(files);
};

const isValidStatus = (status) => {
  let correctStatus = ["pending", "completed", "cancled"];
  return correctStatus.includes(status);
};

const isValidSize = (Size) => {
  let correctSize = ["S", "XS", "M", "X", "L", "XXL", "XL"];
  return correctSize.includes(Size);
};

module.exports = {
  isValidStatus,
  isValidSize,
  isValidRequestBody,
  isValidNum,
  isValidFile,
  isValid,
  isValidObjectId,
  isValidEmail,
  isValidMobile,
  isValidName,
  isValidPassword,
  isValidPrice,
  isValidEnum,
};