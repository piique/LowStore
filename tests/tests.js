const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const obj = require("./teste.json");
const server = express();

server.use(express.json());
const users = [
  "Pedro",
  "Luis",
  "Tulio",
  "Joao",
  "Walter",
  "Bleme",
  "Anna",
  "Andrew"
];

// Middleware global
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd("Request");
});

// app.use(bodyParser.json());
server.get("/file", function(req, res) {
  fs.readFile("teste.json", "utf8", function(erro, conteudoArquivo) {
    if (erro) {
      console.log(erro);
    }
    console.log(typeof conteudoArquivo);
    var variavel = JSON.parse(conteudoArquivo);
    res.send(variavel);
  });
});

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

//get all users
server.get("/users", (req, res) => {
  return res.json(users);
});

// get specific user by index
server.get("/users/:index", (req, res) => {
  const index = req.params.index;

  return res.json({ user: users[index] });
});

// create new user
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;
  if (users.indexOf(name) == -1) {
    users.push(name);
    return res.json(users);
  } else {
    return res.json({ erro: "User already exists" });
  }
});

// update user
server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

// delete user by index
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
});

// delete user by name
server.delete("/users", (req, res) => {
  const { name } = req.body;
  const index = users.indexOf(name);

  if (index != -1) {
    users.splice(index, 1);
    return res.json({ message: `Usuário ${name} deletado`, users: users });
  } else {
    return res.json({ erro: "User doesn't exist to be delete" });
  }
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" });
  }

  return next();
}

server.listen(3000, function() {
  console.log("Servidor rodando na porta 3000.");
});
