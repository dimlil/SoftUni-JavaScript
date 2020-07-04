module.exports = {
    development: {
        port: process.env.PORT || 4000,
        databaseUrl: `mongodb+srv://DimVen:${process.env.DB_PASS}@cube.yywaz.mongodb.net/Cube?retryWrites=true&w=majority`
    },
    production: {}
};