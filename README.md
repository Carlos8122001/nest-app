# Desarrollar aplicacion que permita registrarse, iniciar sesion, cerrar sesion, crear posts y visualizarlos al entrar.
# Consideraciones:
1- Debe ser en React, React Router Dom
2- Cualquier framework / biblioteca UI
3- Debe de tener un formulario de registro, donde al finalizar el registro debe haber un boton que lo rediriga al login.
4- Debe de tener un formulario de login, adicionalmente debe tener
    un enlace para registrarse donde se vera el formulario del paso 3.
5- En el formulario del login debe mostrar los errores retornados por el api 
    ejemplo: error de contraseña o nombre de usuario, Lo mismo para el formulario de registro.
6- En la pantalla de inicio, debe de tener una navegacion con un logo en la parte izquierda, y la parte derecha debe de salir el email del usuario en sesion, al clickear en el email debe desplegarse un menu donde le indicara el cierre de sesion (Logout).
7- En la pantalla inicial debe de traer desde el api todos los posts registrados por el usuario en sesion.
8- Registro de nuevos posts, formulario y una nueva ruta para registrarlos o usar un modal, a tu decision.
9- Permite cerrar sesion y volver al login automaticamente.

# Url del api donde podras ver la documentacion de los endpoint a usar:
# Api: https://nest-api-posts.onrender.com/api/v1/