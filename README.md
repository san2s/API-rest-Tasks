**API de Gestión de Tareas**

Este repositorio contiene el código fuente de una API de gestión de tareas desarrollada utilizando Node.js, Express y JSON Web Tokens (JWT). La API proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en una lista de tareas, así como funciones de autenticación para proteger ciertas rutas.

### Características principales:

- Gestión de tareas: Permite crear, leer, actualizar y eliminar tareas.
- Autenticación basada en tokens JWT: Protege ciertas rutas de la API requiriendo autenticación con tokens JWT.
- Documentación clara y concisa: Incluye una guía de uso y documentación de las funciones principales.

### Uso:

1. Clona este repositorio:

```
git clone https://github.com/san2s/API-ret-Tasks.git 
```
2. Instala las dependencias:
```
cd API-rest-Tasks
npm install
```
3. Configura las variables de entorno:

Crea un archivo .env en el directorio raíz del proyecto y define las siguientes variables:
```
SECRET_KEY=your_secret_key
```
Ejecuta la aplicación:
```
npm start
