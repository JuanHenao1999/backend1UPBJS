import { Router } from "express";
import userCtrl from "../controllers/ejemplo.controllers.js";

const route = Router();

route.get("/", userCtrl.getData);
route.get("/:id", userCtrl.getDataById);

route.post("/", userCtrl.saveData);
route.put("/:id", userCtrl.actualizar)
route.delete("/:id", userCtrl.eliminar)

export default route;