import express from "express";
import cors from "cors";
import morgan from "morgan";
// ruta de usuarios
import userRoute from "./routes/ejemplo.route.js"

const app = express();

app.set("Port", 4000);

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/usuarios", userRoute)

app.listen(app.get("Port"), () => {
    console.log("Servidor escuchando por el puerto", app.get("Port"));
})