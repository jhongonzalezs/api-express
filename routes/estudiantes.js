const express = require('express');
const router = express.Router();

let estudiantes = [];


/**
 * @swagger
 * /estudiante/crear:
 *   post:
 *     summary: Crear un nuevo estudiante
 *     tags: [Estudiantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               nombre:
 *                 type: string
 *                 example: "Juan Perez"
 *               edad:
 *                 type: integer
 *                 example: 20
 *     responses:
 *       200:
 *         description: Estudiante creado correctamente
 *       500:
 *         description: Error del servidor
 */
router.post('/estudiante/crear', (req, res) => {
    const estudiante = req.body;
    estudiantes.push(estudiante);
    res.send('Ruta: /estudiante/crear');
});


/**
 * @swagger
 * /estudiante/listar:
 *   get:
 *     summary: Listar todos los estudiantes
 *     tags: [Estudiantes]
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Juan Perez"
 *                   edad:
 *                     type: integer
 *                     example: 20
 */
router.get('/estudiante/listar', (req, res) => {
    res.json(estudiantes);
});

router.put('/estudiante/update', (req, res) => {
    const { id, nombre, edad } = req.body;
    const estudiante = estudiantes.find(e => e.id === id);

    if (estudiante) {
        estudiante.nombre = nombre || estudiante.nombre;
        estudiante.edad = edad || estudiante.edad;
        res.send('Ruta: /estudiante/update');
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
});

module.exports = router;
