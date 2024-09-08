const express = require('express');
const router = express.Router();

let notas = [];


/**
 * @swagger
 * /nota/registrar:
 *   post:
 *     summary: Registrar una nueva nota
 *     tags: [Notas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estudianteId:
 *                 type: integer
 *                 example: 1
 *               nota:
 *                 type: number
 *                 example: 95
 *     responses:
 *       200:
 *         description: Nota registrada correctamente
 *       500:
 *         description: Error del servidor
 */
router.post('/nota/registrar', (req, res) => {
    const nota = req.body;
    notas.push(nota);
    res.send('Ruta: /nota/registrar');
});

module.exports = router;
