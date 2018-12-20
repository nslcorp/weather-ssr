module.exports = () => {
  process.on('unhandledRejection', ex => {
    console.log('unhandledRejection', ex)
    throw ex;
  });

};
