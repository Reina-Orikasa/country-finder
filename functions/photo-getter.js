// import { createClient } from "pexels";

// const client = createClient(
//     process.env.PHOTO_KEY
// );
// const query = "Japan";

// client.photos.search({ query, per_page: 1 }).then((photos) => {});

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: `My key is ${process.env.PHOTO_KEY}`,
  };
};
