const Favourite = require("../models/favourites");

async function getAllFavourites() {
  const favourites = await Favourite.find();
  return favourites;
}

async function createFavourite(cityName) {
  const created = await Favourite.create({ cityName });
  return created;
}

async function deleteFavourite(cityName) {
  const deleted = await Favourite.findOneAndDelete({ cityName });
  return deleted;
}

module.exports = {
  getAllFavourites,
  createFavourite,
  deleteFavourite,
};
