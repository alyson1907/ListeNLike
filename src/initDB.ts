import { createConnection } from 'typeorm'

const config = {
  url: process.env.DATABASE_URL,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DBNAME,
}

console.log(config)

// createConnection(config)
