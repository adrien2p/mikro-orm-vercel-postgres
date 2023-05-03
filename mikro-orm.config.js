const {Test} = require("./dist-db/entities/test");
module.exports = {
    dbName: "verceldb",
    debug: process.env.APP_ENV === 'development',
    entities: [Test],
    baseDir: process.cwd(),
    host: "ep-sparkling-shadow-723955-pooler.us-east-1.postgres.vercel-storage.com",
    migrations: {
        path: '../../dist-db/migrations/*.js',
        tableName: 'migrationsHistory',
        transactional: true
    },
    driverOptions: {
        connection: { ssl: true },
    },
    password: "RIau6mtA4qiC",
    port: Number(process.env.POSTGRES_PORT),
    tsNode: process.env.APP_ENV === 'development',
    type: 'postgresql',
    user: "default"
}