import { response, request } from "express";

const usuariosGet = (req = request, res = response) => {
  const query = req.query;
  res.json({
    msg: "get API-Controlador",
    query,
  });
};

const usuariosPost = (req, res) => {
  const body = req.body;
  res.json({
    msg: "post API-Controlador",
    body,
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "put API-Controlador",
    id,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API-Controlador",
  });
};

export { usuariosGet, usuariosPost, usuariosPut, usuariosDelete };
