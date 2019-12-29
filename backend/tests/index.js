const express = require("express");

const server = express();

server.use(express.json());

const users = ["Pedro", "Luis", "Tulio", "Joao", "Walter"];

server.get("/user/:id", (req, res) => {
  // console.log("teste");

  /*
    /user
    url: http://localhost:3000/user?nome=Piique33
  */
  const name = req.query.nome;
  /*
    /user/:id
    http://localhost:3000/user/PedroVila%C3%A7a
  */
  const id = req.params.id;

  return res.json({ message: `Hello ${id}` });
});

// get specific user by index
server.get("/users/:index", (req, res) => {
  const index = req.params.index;

  return res.json({ user: users[index] });
});

//get all users
server.get("/users/all", (req, res) => {
  return res.json(users);
});

// create new user
server.post("/users", (req, res) => {
  const { name } = req.body; // const name = req.body.name

  if (users.indexOf(name) == -1) {
    users.push(name);
    return res.json(users);
  } else {
    return res.json({ erro: "Usuário já existe!" });
  }
});

server.listen(3000);
