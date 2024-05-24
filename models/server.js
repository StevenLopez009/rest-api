import express from "express";
import cors from "cors";
import userRoutes from "../routes/user.js";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000; // Proveer un valor por defecto
    this.usuariosPath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // Rutas
    this.routes();
  }

  middlewares() {
    // Directorio público
    this.app.use(express.static("public"));

    // CORS
    this.app.use(cors());

    // Parseo del cuerpo de las solicitudes
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosPath, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}
