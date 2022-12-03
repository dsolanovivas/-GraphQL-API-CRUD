const { Schema, model } = require("mongoose");

const TareasSchema = new Schema({
  titulo: { type: String, require: true },
  descripcion: { type: String },
});

module.exports = model("tareas", TareasSchema);
