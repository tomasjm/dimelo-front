# Dimelo.pw Front-end

![alt text](https://github.com/tomasjm/dimelo-front/blob/master/mainphoto.png?raw=true)


Aplicación front-end de Dimelo.pw, desarrollado en Angular 6.

Se utilizó Bootstrap 4 para el diseño.

## Servidor de testing

Para poder usar este codigo, deberás instalar Angular-Cli desde su página oficial.
Una vez realizado esto, abre una terminal en la carpeta del proyecto y ejecuta:
`npm install`
`ng serve -o`
Se abrirá una página con la dirección de `localhost:4800` donde se podrá utilizar esta aplicación.

## Componentes y rutas

El proyecto tiene 2 secciones de componentes y sus rutas respectivas.

### Componente Auth

Este componente está bajo la ruta /auth/, contiene algunos componentes hijos como:

#### Login /auth/login
Obviamente, este está destinado a un formulario de ingreso.

#### Register /auth/login

Formulario de registro.

#### Shared navbar and footer

Componentes incluidos sobre el `<router-outlet>` del AuthComponent.

### Componente Users

Este componente está bajo la ruta /u/ y contiene componentes hijos:

#### Main /u/{usuario}

Aca se cargan un componente principal, el cual sería la página en general con la descripción de perfil con 2 sub componentes que son la sección de comentarios y el formulario para enviar un comentario.

### Paneles del Navbar

Estos paneles están bajo funciones y modals (bootstrap) dentro del componente navbar perteneciente al SharedComponent de UsersComponent.

