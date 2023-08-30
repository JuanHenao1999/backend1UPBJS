import { response } from "../helpers/Response.js";

let data = [
  {
    _id: "1",
    name: "Jose",
    lastname: "trujillo",
    age: 30,
  },
  {
    _id: "2",
    name: "Juan",
    lastname: "Henao",
    age: 23,
  },
  {
    _id: "3",
    name: "Carolina",
    lastname: "Henao",
    age: 22,
  },
];

const userCtrl = {}

userCtrl.getDatagetData = (req, res) => {
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
    response(res, 200, true, user, "test");
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
    data.push({ _id, name, lastname, age: parseInt(age) });
    response(res, 201, true, { name, lastname, age }, "registro guardado");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};

userCtrl.actualizar = (req, res) => {
  try {
    const { id } = req.params;
    const { _id, name, lastname, age } = req.body;
    const newData = data.map((item) => item._id === id ? {...req.body, age:parseInt(age)} : item);
    data = newData
    response(res, 200, true, "", "Usuario actualizado");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};

userCtrl.eliminar = (req, res) => {
  try {
    const { id } = req.params;
    // ** devolver a todos menos al que voy a eliminar
    const newData = data.filter((item) => item._id !== id);
    data = newData;
    response(res, 200, true, id, "usuario eliminado");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};

export default userCtrl
