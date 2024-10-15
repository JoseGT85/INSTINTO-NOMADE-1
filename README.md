# TurismoReact

Este es un proyecto de una página web de turismo creado con React y Vite.

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (normalmente viene con Node.js)

## Instalación

1. Clona este repositorio o descomprime el archivo ZIP en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```
   npm install
   ```

## Ejecución del proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite. Abre tu navegador y ve a `http://localhost:5173` para ver la aplicación.

## Estructura del proyecto

- `src/`: Contiene todo el código fuente de la aplicación
  - `components/`: Componentes de React
  - `contexts/`: Contextos de React (como ThemeContext)
  - `styles/`: Estilos CSS
- `public/`: Archivos estáticos que se servirán directamente

## Características

- Modo oscuro/claro
- Slider de imágenes
- Sección de reseñas
- Formulario de contacto
- Diseño responsivo

## Construcción para producción

Para construir la aplicación para producción, ejecuta:

```
npm run build
```

Esto generará una versión optimizada de la aplicación en el directorio `dist/`.