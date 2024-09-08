const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const PORT = process.env.PORT || 3000;



const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Estudiantes y Notas',
            version: '1.0.0',
            description: 'API para manejar estudiantes y notas',
            contact: {
                name: 'Tu Nombre',
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                },
            ],
        },
    },
    apis: ['./routes/*.js'], // Rutas para escanear anotaciones de Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));




app.use(express.json());

// Importar las rutas
const estudiantesRoutes = require('./routes/estudiantes');
const notasRoutes = require('./routes/notas');

// Usar las rutas
app.use(estudiantesRoutes);
app.use(notasRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Estudiantes y Notas');
});
