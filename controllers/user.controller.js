import userPromise from '../promises/user.promise.js'
import asyncMiddleware from '../utils/asyncMiddleware'

async function get(req, res) {
  const { id } = req.params

  const user = await userPromise.get(id)

  res.send(user);
}

export default { get }
