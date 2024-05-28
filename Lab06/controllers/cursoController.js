const express = require("express");
const db = require("../models/database");
const router = express.Router();

// Rotas para os Cursos
router.get("/", (req, res) => {
  res.json(db.cursos);
});

router.post("/", (req, res) => {
  const { id, nome, turno, idCampus } = req.body;
  const novoCurso = { id, nome, turno, idCampus };
  db.cursos.push(novoCurso);
  res.status(201).send("Curso adicionado");
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const novoCurso = req.body;

  const cursoEncontrado = db.cursos.findIndex((curso) => curso.id === id);

  if (cursoEncontrado) {
    db.cursos[cursoEncontrado] = novoCurso;
    res.status(201).send("Curso atualizado");
  } else {
    res.status(404).send("Curso não encontrado");
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log("Received ID:", id);

  const cursoEncontrado = db.cursos.findIndex((curso) => curso.id === id);

  if (cursoEncontrado) {
    db.cursos.splice(cursoEncontrado, 1);
    res.status(201).send("Curso removido com sucesso");
  } else {
    res.status(404).send("Curso não encontrado");
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  let cursoEncontrado = db.cursos.find((curso) => curso.id == id);
  if (cursoEncontrado) {
    res.json(cursoEncontrado);
  } else {
    res.status(404).send("Curso não encontrado");
  }
});
module.exports = router;