const Favourite = require("../models/favourites");

async function getAllFavourites() {
  const favourites = await Favourite.find();
  return favourites;
}

async function createFavourite(cityName) {
  const upserted = await Favourite.findOneAndUpdate(
    { cityName },
    { cityName },
    { upsert: true, new: true});
  return upserted;
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
