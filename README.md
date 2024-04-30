
# Bienvenido a React Todo

[React Todo](https://ulternae.github.io/ReactTodo/) es una aplicación desarrollada con React que permite a los usuarios gestionar sus tareas más importantes. Los usuarios pueden añadir, editar, y eliminar tareas, así como crear y personalizar su propio perfil.

## Características

-   **Navegación con React Router**: Gestiona rutas y navegación de manera eficiente.
-   **Gestión de Estado**: Utiliza `createContext` y React para manejar el estado global de la aplicación.
-   **Autenticación de Usuarios**: Permite a los usuarios crear y personalizar su perfil único.

## Tecnologías Usadas

-   React y React Router para la construcción de la interfaz de usuario y la gestión de rutas.
-   CSS para el estilo de la aplicación.
-   gh-pages para la publicación y despliegue de la aplicación.

## Cómo iniciar el proyecto

1.  **Clona el repositorio:**

    `git clone https://github.com/Ulternae/ReactTodo.git` 
    
2.  **Instala las dependencias:**
    
    `npm i` 
    
3.  **Ejecuta el proyecto:**
    
    `npm run start` 
    
    Accede a la aplicación en `http://localhost:3000/ReactTodo`.

## Estructura del Proyecto

Descripción de cómo los archivos y carpetas están organizados en el proyecto:

### `Assets`

Contiene recursos gráficos como imágenes y SVGs.

### `Components`

Incluye todos los componentes de React usados en la aplicación, como:

-   **Buttons**: Botones con iconos para ejecutar acciones específicas.
-   **Inputs**: Componentes para la búsqueda y edición de tareas.
-   **Titles**: Utilizados para mostrar títulos en la aplicación.

### `Context`

Maneja el estado global con Context API, incluyendo:

-   **icons.js**: Iconos disponibles para la personalización de perfiles.
-   **section.js**: Gestión de las secciones de tareas.

### `Global`

Administra la información global, como imágenes y almacenamiento local.

### `Listener`

Gestiona eventos como `AddTodo` que se activan mediante interacciones del usuario.

### `Logic`

Lógica y composición de los componentes.

### `Modal`

Componentes para la visualización de modales.

### `Pages`

Vistas individuales de la aplicación.

### `PagesGlobal`

Componentes compartidos entre diferentes páginas.

### `Routes`

Rutas y validaciones para mostrar información dependiendo del estado del usuario.

### `Styles`

Estilos globales de la aplicación, organizados por componente.

## Vista General de la Interfaz de Usuario

![image](https://github.com/Ulternae/ReactTodo/assets/164533943/19e76115-c155-4170-abca-b9f0583d745b)
![image](https://github.com/Ulternae/ReactTodo/assets/164533943/bbfb48b1-a7a8-4479-a262-ac1c4a23a69f)
