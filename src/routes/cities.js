const { cities } = require("../endpoints.js");
const router = require("express").Router();
const { findCities } = require("../services/citiesServices.js");
// const { citiesDummy } = require("../../dummyData.js");
router.get(cities, async (req, resp) => {
  // console.log("api response");
  try {
    const cities = await findCities();
    console.log(cities, "cities");
    return resp.status(200).json({ cities });
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
});

module.exports = router;
