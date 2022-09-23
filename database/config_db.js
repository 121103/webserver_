const mongoose = require("mongoose")

const dbConection=async() => {
    try {
        await mongoose.connect(process.env.MONGO_CNN,{})   
        console.log("Conexion exitosa")     
    } catch (error) {
        console.log("Error al iniciar la BD",error)
        throw new Error("Error al iniciar la BD")
    }
}

module.exports={
    dbConection
}