const bodyParser = require("body-parser");
const db = require("./database");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3001, () => console.log("Servidor online"));

// Rotas para os Cursos
app.get("/cursos", (req, res) => {
  res.json(db.cursos);
});

app.post("/curso", (req, res) => {
  const { id, nome, turno, idCampus } = req.body;
  const novoCurso = { id, nome, turno, idCampus };
  db.cursos.push(novoCurso);
  res.status(201).send("Curso adicionado");
});

app.put("/curso", (req, res) => {
  const { id, nome, turno, idCampus } = req.body;
  let indice;

  db.cursos.forEach((curso, key) => {
    if (curso.id == id) {
      indice = key;
    }
  });

  db.cursos[indice] = {
    id: id,
    nome: nome,
    turno: turno,
    idCampus: idCampus,
  };
  res.status(201).send("Curso atualizado");
});

app.delete("/curso", (req, res) => {
  const { id } = req.body;
  let indice;

  db.cursos.forEach((curso, key) => {
    if (curso.id == id) {
      indice = key;
    }
  });

  db.cursos.splice(indice, 1);
  res.status(201).send("Curso removido com sucesso");
});

app.get("/curso/:id", (req, res) => {
  const id = req.params.id;
  let cursoEncontrado = db.cursos.find((curso) => curso.id == id);
  if (cursoEncontrado) {
    res.json(cursoEncontrado);
  } else {
    res.status(404).send("Curso não encontrado");
  }
});

// Rotas para os CCRs
app.get("/ccrs", (req, res) => {
  res.json(db.ccrs);
});

app.post("/ccrs", (req, res) => {
  const { id, nome } = req.body;
  db.ccrs.push({
    id: id,
    nome: nome,
  });
  res.status(201).send("CCR adicionado");
});

app.put("/ccrs", (req, res) => {
  const { id, nome } = req.body;
  let indice;

  db.ccrs.forEach((ccr, key) => {
    if (ccr.id == id) {
      indice = key;
    }
  });

  db.ccrs[indice] = {
    id: id,
    nome: nome,
  };
  res.status(201).send("CCR atualizado");
});

app.delete("/ccrs", (req, res) => {
  const { id } = req.body;
  let indice;

  db.ccrs.forEach((ccr, key) => {
    if (ccr.id == id) {
      indice = key;
    }
  });

  db.ccrs.splice(indice, 1);
  res.status(201).send("CCR removido com sucesso");
});

app.get("/ccrs/:id", (req, res) => {
  const id = req.params.id;
  let ccrEncontrado = db.ccrs.find((ccr) => ccr.id == id);
  if (ccrEncontrado) {
    res.json(ccrEncontrado);
  } else {
    res.status(404).send("CCR não encontrado");
  }
});
