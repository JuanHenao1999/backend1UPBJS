import { data } from "../fakeDb/data.js";
import { response } from "../helpers/Response.js";

const userCtrl = {};

userCtrl.getData = (req, res) => {
  try {
    response(res, 200, true, data, "lista de usuarios");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};

userCtrl.getDataById = (req, res) => {
  try {
    const { id } = req.params;

    const user = data.find((item) => item._id === id);
    if (!user) {
      return response(res, 404, false, "", "usuario no encontrado");
    }
    response(res, 200, true, user, "Usuario encontrado");
    res.json({
      ok: true,
      data: id,
    });
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};

userCtrl.saveData = (req, res) => {
  try {
    const { _id, name, lastname, age } = req.body;

    // const userExists = data.find((item) => item._id === _id);
    const userExists = data.find((item) => item._id === _id);

    if(userExists){
      return response(res, 409, false, "", "Id duplicado, intente con otro")
    }

    data.push({ _id, name, lastname, age: parseInt(age) });

    response(res, 201, true, { name, lastname, age }, "Usuario guardado correctamente");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};

userCtrl.actualizar = (req, res) => {
  try {
    const { id } = req.params;
    // const { _id, name, lastname, age } = req.body;
    // const newData = data.map((item) => item._id === id ? {...req.body, age:parseInt(age)} : item);
    // data = newData

    const userIndex = data.findIndex((item) => item._id === id);

    if (userIndex === -1) {
      return response(res, 404, false, "", "usuario no encontrado");
    }

    data[userIndex] = {
      ...data[userIndex],
      ...req.body,
      age: parseInt(req.body.age),
    };

    response(res, 200, true, "", "Usuario actualizado correctamente");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};

userCtrl.eliminar = (req, res) => {
  try {
    const { id } = req.params;
    // ** devolver a todos menos al que voy a eliminar
    // const newData = data.filter((item) => item._id !== id);
    // data = newData;

    const userIndex = data.findIndex((item) => item._id === id);

    if (userIndex === -1) {
      return response(res, 404, false, "", "usuario no encontrado");
    }

    data.splice(userIndex, 1);
    response(res, 200, true, "", "usuario eliminado correctamente");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};

export default userCtrl;