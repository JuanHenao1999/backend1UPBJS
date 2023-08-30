import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.set("Port", 4000);

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(app.get("Port"), () => {
    console.log("Servidor escuchando por el puerto", app.get("Port"));
})
