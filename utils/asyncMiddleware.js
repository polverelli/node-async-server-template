const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(e => {
      const date = new Date()

      console.log(`${date} - ${e}`)
      res.sendStatus(500)
    });
};

export default asyncMiddleware
