import { join } from 'path'

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false },
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: ['src/migration/**/*.{ts,js}'],
  subscribers: ['src/subscriber/**/*.{ts,js}'],
}
