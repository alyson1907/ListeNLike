module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['src/models/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
}
