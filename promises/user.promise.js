import { pool } from '../config/database'

const get = (id) => {
  return pool.query(`
    SELECT *
    FROM user
    WHERE id = ?
  `, id)
}

export default { get }
