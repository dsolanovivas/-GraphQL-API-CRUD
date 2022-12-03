const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Tarea {
    id: ID
    titulo: String
    descripcion: String
  }

  type Query {
    hello: String
    getAllTareas: [Tarea]
    getTarea(id: ID): Tarea
  }

  input TareaInput {
    titulo: String
    descripcion: String
  }

  type Mutation {
    createTarea(tarea: TareaInput): Tarea
    updateTarea(id: ID, tarea: TareaInput): Tarea
    deleteTarea(id: ID): String
  }
`;

module.exports = { typeDefs };
