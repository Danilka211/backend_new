const gamesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");

const {findAllGames, createGame, findGameById, updateGame, checkIsGameExists, deleteGame, 
    checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable,} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById, 
    sendGameUpdated, sendGameDeleted} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  );
gamesRouter.delete( "/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;