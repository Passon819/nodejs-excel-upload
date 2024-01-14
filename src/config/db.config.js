

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Password123456",
    DB: "demo_excel",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};