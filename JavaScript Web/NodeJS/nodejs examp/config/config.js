module.exports = {
    development: {
        port: process.env.PORT || 4000,
        privateKey: 'SOFT-UNI-WORKSHOP',
        // databaseUrl: `mongodb+srv://user:softuni-password@softuni-5daup.mongodb.net/exam?retryWrites=true&w=majority`
        // databaseUrl: `mongodb+srv://DimVen:testuserpass@cluster0.vzh6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        databaseUrl: `mongodb://localhost:27017/examp`
    },
    production: {}
};