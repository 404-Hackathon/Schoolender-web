const userModel = require("../models/user");
const bodyParser = require("body-parser");
const Joi = require("@hapi/joi");

module.exports = async (req, res) => {
  console.log("im in register");
  const { username, email, password } = req.body;
  const bodySchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });
  const validationResult = bodySchema.validate(req.body);

  if (validationResult.error) {
    res.statusCode = 400;
    res.send(validationResult.error.details[0].message);
    return;
  }
  try {
    const newUser = new userModel({
      username,
      email,
      password,
    });

    await newUser.save();

    res.send(newUser);
  } catch (error) {
    res.statusCode = 400;
    res.send(error.message);
  }
};
