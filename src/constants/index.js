import "dotenv";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const alternativeCityNamesLookup = {
  "bangalore urban": "bangalore",
  "bengaluru": "bangalore",
};

export { GOOGLE_MAPS_API_KEY, alternativeCityNamesLookup };
