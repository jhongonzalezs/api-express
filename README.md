# API de Estudiantes y Notas

Esta es una API básica construida con Express que permite gestionar estudiantes y sus notas. La API está documentada con Swagger para facilitar su uso y pruebas.

## Requisitos del Sistema

Antes de comenzar, asegúrate de que tu máquina cumple con los siguientes requisitos:

- **Sistema Operativo**: Windows, macOS, o Linux
- **Node.js**: Versión 12 o superior
- **npm**: Viene incluido con Node.js
- **Git**: Para clonar el repositorio

## Instalación de Herramientas

### 1. Instalar Node.js y npm

Si no tienes Node.js y npm instalados, puedes descargarlos e instalarlos desde el sitio oficial:

- [Descargar Node.js](https://nodejs.org/)

Para verificar la instalación, abre una terminal o consola de comandos y ejecuta:

```bash
node -v
npm -v
```

Clonar el Repositorio

Una vez que tengas las herramientas instaladas, clona el repositorio:

```bash
git clone https://github.com/jhongonzalezs/api-express.git
cd api-express
```

Instalación de Dependencias

En el directorio raíz del proyecto (donde se encuentra el archivo package.json), instala las dependencias necesarias ejecutando

```bash
npm install
node index.js
```

Puedes abrir tu navegador e ir a http://localhost:3000 para verificar que el servidor esté corriendo.



Documentación de la API con Swagger

La API está documentada con Swagger. Para acceder a la documentación, dirígete a:
```
http://localhost:3000/api-docs
```

Rutas de la API
Estudiantes

    Crear Estudiante - POST /estudiante/crear
    Listar Estudiantes - GET /estudiante/listar

Notas

    Registrar Nota - POST /nota/registrar

