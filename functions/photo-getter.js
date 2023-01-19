exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: `My key is ${process.env.PHOTO_KEY}`,
  };
};
