const express = require("express");
const router = express.Router();

const db_cursos = require("./dbController.js");

async function query(sql, params) {
  try {
    const result = await client.query(sql, params);
    return result;
  } catch (error) {
    console.error('Erro ao executar consulta:', error);
    throw error;
  }
}

// Rotas para os Cursos
router.get('/', async (req, res) => {
  try {
    const cursos = await db_cursos.query('SELECT * FROM cursos');
    res.status(200).json(cursos.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id_curso = parseInt(req.params.id);
  try {
    const curso = await db_cursos.query('SELECT * FROM cursos WHERE id_curso = $1', [id_curso]);

    if (curso.rows.length === 0) {
      res.status(404).json({ message: 'Curso não encontrado' });
      return;
    }

    res.status(200).json(curso.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const {id_curso, nome_curso, desc_curso } = req.body;

  try {
    await db_cursos.query('INSERT INTO cursos (id_curso, nome_curso, desc_curso) VALUES ($1, $2, $3)', [id_curso, nome_curso, desc_curso]);
    res.status(201).json({ message: 'Curso criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const id_curso = parseInt(req.params.id);
  const { nome_curso, desc_curso } = req.body;

  try {
    await db_cursos.query('UPDATE cursos SET nome_curso = $1, desc_curso = $2 WHERE id_curso = $3', [id_curso, nome_curso, desc_curso]);
    res.status(200).json({ message: 'Curso atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const idCurso = parseInt(req.params.id);

  try {
    await db_cursos.query('DELETE FROM cursos WHERE id_curso = $1', [idCurso]);
    res.status(200).json({ message: 'Curso deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;