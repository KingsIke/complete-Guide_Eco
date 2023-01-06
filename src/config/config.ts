import { DataTypes, Sequelize } from 'sequelize'
import dotenv from "dotenv"

dotenv.config();


// export const db = new Sequelize(process.env.DB_URL!, { logging: false })


export const db = new Sequelize("kingsike", "postgres", "453622", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
});




export const connectDB = async () => {
    try {
        // await db.sync({ force: true })
        await db.sync()

        console.log("DATABASE CONNECTED SUCCESSFULLY")
    } catch (err) {
        console.log(err)
    }

}