module.exports = (err, req, res, next) => {
  // console.error(err.message, err);
  console.log(err);

  res.status(500).send('Error middleware: \n' + err.message);
};

// async.js
//imitate express-async-errors
// module.exports = handler => async (req, res, next) => {
//   try {
//     await handler(res, res, next);
//   } catch (error) {
//     next(error);
//   }
// };
