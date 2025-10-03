const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const UsersModel = require("../models/user.model");
require("dotenv").config();

//signup
const signupService = async (email, password) => {
  try {
    if (!email || !password) {
      return {
        status: 409,
        message: "Please fill all field ⚠️",
        success: false,
      };
    }
    let isExist = await UsersModel.findOne({ email });
    if (isExist) {
      return {
        status: 401,
        message: "Email is allready Exist ⚠️",
        success: false,
      };
    }
    let hashPassword = await bcrypt.hash(password, 8);
    let user = await UsersModel.create({
      email,
      password: hashPassword,
    });
    return {
      status: 201,
      message: "Signup Successfully 🎉",
      data: user,
      success: true,
    };
  } catch (error) {
    console.error(error.message);
    return {
      status: 500,
      message: "server error",
      error: error.message,
      success: false,
    };
  }
};

//login
const signinService = async (email, password) => {
  try {
    if (!email || !password) {
      return {
        status: 409,
        message: "Please fill all field ⚠️",
        success: false,
      };
    }
    let isExist = await UsersModel.findOne({ email });
    if (!isExist) {
      return {
        status: 401,
        message: "Email is not found ⚠️",
        success: false,
      };
    }

    let checkPassword = await bcrypt.compare(password, isExist.password);
    if (!checkPassword) {
      return {
        status: 409,
        message: "Password is invalide ⚠️",
        success: false,
      };
    }
    var token = await jwt.sign({ user: isExist }, "zxcvbnm");
    return {
      status: 201,
      message: "Signin Successfully 🎉",
      data: isExist,
      token: token,
      success: true,
    };
  } catch (error) {
    console.error(error.message);
    return {
      status: 500,
      message: "server error",
      error: error.message,
      success: false,
    };
  }
};
module.exports = { signupService, signinService };
