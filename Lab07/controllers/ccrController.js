const express = require("express");
const db = require("../models/database");
const router = express.Router();

// Rotas para os CCRs
router.get("/", (req, res) => {
  res.json(db.ccrs);
});

router.post("/", (req, res) => {
  const { id, nome } = req.body;
  const novoCCR = { id, nome };
  db.ccrs.push(novoCCR);
  res.status(201).send("CCR adicionado");
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const novoCCR = req.body;

  const ccrEncontrado = db.ccrs.findIndex((ccr) => ccr.id === id);

  if (ccrEncontrado) {
    db.ccrs[ccrEncontrado] = novoCCR;
    res.status(201).send("CCR atualizado");
  } else {
    res.status(404).send("CCR não encontrado");
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const ccrEncontrado = db.ccrs.findIndex((ccr) => ccr.id === id);
  
  if (ccrEncontrado) {
    db.ccrs.splice(ccrEncontrado, 1);
    res.status(201).send("CCR removido com sucesso");
  } else {
    res.status(404).send("CCR não encontrado");
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const ccrEncontrado = db.ccrs.find((ccr) => ccr.id == id);
  if (ccrEncontrado) {
    res.json(ccrEncontrado);
  } else {
    res.status(404).send("CCR não encontrado");
  }
});
module.exports = router;