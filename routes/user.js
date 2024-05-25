import { Router } from "express";
import {
  usuariosDelete,
  usuariosGet,
  usuariosPost,
  usuariosPut,
} from "../controllers/user.js";

const router = Router();

router.get("/api/users", usuariosGet);

router.put("/api/users/:id", usuariosPut);

router.post("/api/users", usuariosPost);

router.delete("/api/users", usuariosDelete);

export default router;
