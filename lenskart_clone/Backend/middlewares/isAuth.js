const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "No access token!" });
  }

  try {
    const decoded = jwt.verify(token, "zxcvbnm");
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token!" });
  }
};

module.exports = { isAuth };
