# Práctica de fundamentos de React

En esta práctica, he creado una aplicación de tipo dashboard que sirve como interfaz gráfica para gestionar el API de anuncios Nodepop.

## Backend

He utilizado el siguiente proyecto como backend: [Nodepop API](https://github.com/davidjj76/nodepop-api). Una vez que lo he tenido en marcha, el backend ha estado disponible en el puerto 3001. He podido probar los diferentes endpoints y ver cómo pasar los datos en las peticiones utilizando el swagger disponible en la ruta `/swagger`.

Los endpoints que he utilizado son:

- `/api/auth/signup`: POST: Para crear usuarios.
- `/api/auth/me`: GET: Para obtener la información del usuario autenticado.
- `/api/auth/login`: POST: Para obtener un token de acceso cuando se proporciona un correo electrónico y contraseña válidos.
- `/api/v1/adverts`: 
  - GET: Para obtener un listado de anuncios con la posibilidad de aplicar filtros a través de la URL. He utilizado los filtros `name`, `sale`, `price` y `tags`.
  - POST: Para crear un anuncio.
- `/api/v1/adverts/tags`: GET: Para obtener el listado de tags disponibles.
- `/api/v1/adverts/:id`:
  - GET: Para obtener un único anuncio por su Id.
  - DELETE: Para borrar un anuncio por su Id.

He tenido que enviar el token proporcionado en el endpoint de login en la cabecera de la petición de la siguiente forma: `Header['Authorization'] = 'Bearer ${token}'`.

Los datos del backend se almacenan en una base de datos SQLite en el directorio `/data`, y las fotos cargadas en el backend se almacenan en el directorio `/uploads` y se sirven como contenido estático en la ruta `/public`.

## Frontend

He desarrollado la aplicación frontend como una SPA (Single Page Application) utilizando React como librería principal. He creado la aplicación utilizando `create-react-app` para evitar tener que preocuparme por la inicialización del proyecto.

En la aplicación he implementado una serie de rutas divididas en dos grupos: Públicas y Protegidas. Cada ruta renderiza un componente principal según se explica a continuación:

### Rutas Públicas

- `/login`: `LoginPage`

### Rutas Protegidas

- `/`: Redirecciona a `/adverts`
- `/adverts`: `AdvertsPage`
- `/adverts/:id`: `AdvertPage`
- `/adverts/new`: `NewAdvertPage`
- Cualquier otra URL que no coincida redirecciona al componente `NotFoundPage`.

Funcionalidad de cada página-componente:

- `LoginPage`:
  - Formulario con campos para recoger el correo electrónico y la contraseña del usuario.
  - Checkbox "Recordar contraseña" para guardar en localStorage la información de inicio de sesión y evitar tener que introducir las credenciales en cada visita al sitio.

- `AdvertsPage`:
  - Listado de anuncios. Cada anuncio muestra el nombre, precio, si es de compra o venta y los tags.
  - Se muestra un enlace a la página de creación de anuncios cuando no hay ningún anuncio para mostrar.
  - Cada anuncio tiene un enlace al detalle del anuncio (ruta `/adverts/:id`).
  - Zona de filtros: Formulario con distintos campos donde se pueden introducir los filtros que se desean aplicar al listado de anuncios. A medida que se seleccionan filtros, el número de anuncios mostrados se reduce, mostrando solo los anuncios que cumplan todos los filtros seleccionados.

- `AdvertPage`:
  - Detalle de un anuncio identificado por su Id. Muestra la foto del anuncio o un marcador de posición si no existe una foto asociada.
  - Si el anuncio no existe, se redirecciona al `NotFoundPage`.
  - Botón para borrar el anuncio. Se muestra una confirmación al usuario antes de borrar el anuncio. Después del borrado, se redirecciona al listado de anuncios.

- `NewAdvertPage`:
  - Formulario con todos los campos necesarios para crear un nuevo anuncio.
  - Todos los campos, excepto la foto, son requeridos para crear un anuncio. Se manejan las validaciones con React, deshabilitando el botón de envío hasta que se pasen todas las validaciones.
  - Después de crear el anuncio, se redirecciona a la página del anuncio.

Además de estos componentes, he creado un componente `LogoutButton` que se muestra cuando el usuario ha iniciado sesión y permite cerrar sesión.

He utilizado React Router para manejar las rutas y Axios para realizar las peticiones HTTP al backend. También he utilizado Styled Components para los estilos de los componentes.

## Instalación y ejecución

Para instalar las dependencias, he utilizado el comando `npm install` en el directorio raíz del proyecto.

Para ejecutar la aplicación, he utilizado el comando `npm start`. La aplicación estará disponible en `http://localhost:3000`.

## Mejoras

Algunas mejoras que se podrían realizar en el futuro son:

- Implementar paginación en el listado de anuncios para manejar grandes cantidades de datos.
- Añadir funcionalidad de edición de anuncios existentes.
- Mejorar el manejo de errores y mostrar mensajes de error al usuario en caso de fallos en las peticiones al backend.
- Implementar autenticación y autorización más avanzada utilizando tokens JWT.
- Mejorar la experiencia de usuario con animaciones y transiciones suaves entre páginas.
