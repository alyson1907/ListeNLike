const { join } = require('path')

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false },
  entities: ['src/models/**/*.ts'],
  // entities: ['build/**/*.entity.{ts,js}'],
  migrations: ['src/migration/**/*.{ts,js}'],
  subscribers: ['src/subscriber/**/*.{ts,js}'],
  logging: true,
  synchronize: true,
}
