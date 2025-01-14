const City = require("../models/CitySchema");
// import { citiesDummy } from "../../dummyData";
const { citiesDummy } = require("../../dummyData");

async function findCities() {
  const cities = await City.find({}, { stops: 0, _id: 0, __v: 0 });
  return cities;
}

module.exports = { findCities };
