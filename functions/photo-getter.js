const fetch = require("node-fetch")

// code adapted from montezume and their images.js gist:
// https://gist.github.com/montezume/a4fb62d949d67549b952afd2872e8113#file-images-js

exports.handler = async (event) => {
  const querystring = event.queryStringParameters;
  const country = querystring.country;
  const headers = {
    Accept: "application/json",
    Authorization: `Client-ID ${process.env.PHOTO_KEY}`,
  };

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${country}`,
      { headers }
    );

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
