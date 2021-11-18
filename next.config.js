const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  images: {
    domains: ['images.ctfassets.net', 'downloads.ctfassets.net', ''],
  },
  env: {
    GOOGLE_FORM_ACTION: process.env.GOOGLE_FORM_ACTION,
    GOOGLE_FORM_MESSAGE_ID: process.env.GOOGLE_FORM_MESSAGE_ID,
    GOOGLE_FORM_STUDIO_LOCATION_ID: process.env.GOOGLE_FORM_STUDIO_LOCATION_ID,
    GOOGLE_FORM_AGE_OR_SERVICE_ID: process.env.GOOGLE_FORM_AGE_OR_SERVICE_ID,
    GOOGLE_FORM_EMAIL_ID: process.env.GOOGLE_FORM_EMAIL_ID,
    GOOGLE_FORM_NAME_ID: process.env.GOOGLE_FORM_NAME_ID,
    GOOGLE_FORM_PHONE_ID: process.env.GOOGLE_FORM_PHONE_ID,
  }
});

// module.exports = {
//   
// }