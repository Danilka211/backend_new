const pagesRouter = require("express").Router();
const { sendDashboard, sendIndex } = require("../controllers/auth.js");
const { checkAuth, checkCookiesJWT} = require("../middlewares/auth.js");

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 
pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;