import AllowedOrigins from "../config/allowedOrigins.js";

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (AllowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

export default credentials;
