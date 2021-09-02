var MongoClient = require('mongodb');
var url = "mongodb://localhost:27017/EPORTAL_DB";

//https://mongodb.github.io/node-mongodb-native/api-generated/collection.html?highlight=findone#findOne

//mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var connection={};

connection.getConnection = function(){
    return  MongoClient
            .connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(function(database){
                return database.db();
            })
            .catch(function (error) {
                throw new Error("Could not connect to Database");
            });
};
module.exports=connection;