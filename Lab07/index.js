const express = require("express");
const cursoController = require("./controllers/cursoController");
const ccrController = require("./controllers/ccrController");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static("public"));
app.use("/cursos", cursoController);
app.use("/ccrs", ccrController);
app.listen(3001, () => console.log("Servidor online na porta 3001"));

// Rota para a pagina HTML
app.get("/index", (req, res) => {
  const filePath = path.join(__dirname, "views", "index.html");
  res.sendFile(filePath);
});
