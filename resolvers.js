const Tareas = require("./models/Tareas");

const resolvers = {
  Query: {
    hello: () => "Hola Mundo",
    getAllTareas: async () => {
      const tareas = await Tareas.find();
      return tareas;
    },
    async getTarea(_, { id }) {
      return await Tareas.findById(id);
    },
  },

  Mutation: {
    async createTarea(parent, { tarea }, context, info) {
      const { titulo, descripcion } = tarea;
      const nuevaTarea = new Tareas({ titulo, descripcion });
      await nuevaTarea.save();
      return nuevaTarea;
    },
    async updateTarea(_, { id, tarea }) {
      const { titulo, descripcion } = tarea;
      const nuevaTarea = await Tareas.findByIdAndUpdate(
        id,
        {
          $set: {
            titulo,
            descripcion,
          },
        },
        {
          new: true,
        }
      );

      return nuevaTarea;
    },
    async deleteTarea(_, { id }) {
      await Tareas.findByIdAndDelete(id);
      return "Tarea Eliminada con exito";
    },
  },
};

module.exports = { resolvers };
