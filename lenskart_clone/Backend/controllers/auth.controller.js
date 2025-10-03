const { signinService, signupService } = require("../services/auth.service");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    let result = await signinService(email, password);
    res
      .cookie("token", result.token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .status(200)
      .json(result);
  } catch (error) {
    console.error(error);
  }
};

const registerController = async (req, res) => {
  try {
    const { email, password } = req.body;
    let result = await signupService(email, password);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
  }
};

const logoutController = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 0,
  });
  res.status(200).json({ message: "Logged out successfully!" });
};

const meController = async (req, res) => {
  try {
    const user = req?.user?.user;
    if (user) {
      return res
        .status(200)
        .json({ message: "User data", user, success: true });
    }
  } catch (error) {
    console.log("🚀 ~ meController ~ error:", error);
  }
};

module.exports = {
  loginController,
  registerController,
  logoutController,
  meController,
};
