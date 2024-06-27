import { connect } from "mongoose";

(async () => {
try{
const db = await connect("mongodb+srv://juanjgc0609:Yte4sqbPK1TSCMqC@gamerhubdatabase.rjb9fkl.mongodb.net/?retryWrites=true&w=majority&appName=GamerHubDatabase");

console.log("database connected to", db.connection.name);
} catch (error) {
    console.error(error);
}

})();