const mongoose = require("mongoose");

class Database{

    constructor() {
        this.connect();

}

    connect(){
        mongoose.connect("mongodb+srv://arjuun:arjuun@project-arjuun.yufzu.mongodb.net/project-arjuunDB?retryWrites=true&w=majority")
        .then(()=>{
        console.log("database connection successful");
        })
        .catch((err)=>{
        console.log("database connection error "+err);
        })
    }
}
module.exports = new Database();