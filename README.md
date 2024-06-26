# Prueba-Tecnica
# Proyecto Full-Stack con Node.js, Express, TypeScript, MySQL y React

Este proyecto es una aplicación full-stack que utiliza Node.js con Express y TypeScript en el backend, y React con TypeScript en el frontend. La base de datos es MySQL y está hosteada en un servicio gratuito, lo que impone ciertas limitaciones en la cantidad de lecturas y escrituras permitidas.

## Tabla de Contenidos
- [Requisitos](#requisitos)
- [Instalación](#instalación)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Configuración](#configuración)
- [Uso](#uso)
- [Características](#características)
- [Proyecto_Java](#proyecto-java)
- [Notas](#notas)
## Requisitos
- Node.js
- npm
- MySQL
- Java 17.0.11

## Instalación

### Backend

1. Clonar el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Abrir el workspace del backend y navegar al directorio del proyecto.
3. Instalar las dependencias:
    ```sh
    npm install
    ```
4. Crear el archivo `.env` en la raíz del proyecto con la siguiente información:
    ```env
    # Puerto en que se ejecuta el proyecto localmente
    PORT=3124

    # URL del servidor
    DATABASE_URL='mysql://root:ywYbCSySrsxMdthQWnrwmlmqUKmZEobH@viaduct.proxy.rlwy.net:31618/railway'

    # Clave para permisos de administrador
    CLAVE="PERMISOS ADMIN"

    # Usuario externo
    USUARIO_EXTERNO="Cliente"
    ```
5. Construir el proyecto:
    ```sh
    npm run build
    ```
6. En una terminal, iniciar el servidor en modo desarrollo:
    ```sh
    npm run dev
    ```

### Frontend

1. Clonar el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Abrir el workspace del frontend y navegar al directorio del proyecto.
3. Instalar las dependencias:
    ```sh
    npm install
    ```
4. Construir el proyecto:
    ```sh
    npm run build
    ```
5. Iniciar el servidor:
    ```sh
    npm run start
    ```

## Configuración

El archivo `.env` debe contener la configuración necesaria para conectar con la base de datos y otros parámetros del servidor. Asegúrate de crear este archivo en la raíz del proyecto backend.

## Uso

1. Ejecutar el backend y el frontend como se indica en la sección de instalación.
2. El frontend se ejecutará en `http://localhost:3000`.
3. Registrarse como un usuario normal para ver las vistas correspondientes.
4. Para acceder a las opciones de administrador, usar las siguientes credenciales:
    - Email: `admin@admin`
    - Contraseña: `123456`

## Características

- **Autenticación de Usuarios**: Las contraseñas se manejan encriptadas. En el frontend se usa SHA-512 y en el backend bcrypt.
- **Gestión de Productos**: 
  - Ver, actualizar, eliminar y crear productos mediante un SKU único.
  - Los productos se pueden crear siempre y cuando el SKU no exista en la base de datos.
  - Los productos se pueden actualizar de forma ilimitada.
  - Los productos solo se pueden borrar si el stock es cero.


# Proyecto Java 

## Caracteristicas

Este proyecto es una aplicacion que Utiliza Java para su funcionamiento, el proposito de este es el calculo del pago de quincena tiendo en cuenta dias habiles y festivos.

## Instalación

1. Clonar el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Ejecutar desde el entorno de desarrollo de preferencia.

## Notas

- Debido a las limitaciones de la base de datos gratuita, solo se han agregado los primeros 10 productos.
- El proyecto está configurado para ejecutarse localmente en los puertos 3124 (backend) y 3000 (frontend).

Para cualquier duda o contribución, por favor, abre un issue o envía un pull request en el repositorio.

---
