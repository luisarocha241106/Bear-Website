# Comandos Esenciales de HTML
## Tablas
Las tablas en HTML se utilizan para mostrar datos tabulares de manera organizada.

- **`<table>`**: El elemento `<table>` contendrá todos los datos tabulares que planeamos mostrar.
- **`<tr>`**: Utilizando el elemento de fila de la tabla `<tr>` para definir filas.
- **`<td>`**: Agregar datos usando el elemento de datos de tabla `<td>`.
- **`<th>`**: Puede utilizar el elemento de encabezado de tabla `<th>` para encabezados.
  - `scope="row"`: Este valor deja claro que el encabezado es para una fila.
  - `scope="col"`: Este valor deja claro que el encabezado es para una columna.

Ejemplo básico de tabla:
```html
<table>
  <tr>
    <th scope="col">Encabezado 1</th>
    <th scope="col">Encabezado 2</th>
  </tr>
  <tr>
    <td>Dato 1</td>
    <td>Dato 2</td>
  </tr>
</table>
```

## Formularios
Los formularios permiten enviar información a un servidor.

- **`<form>`**: Que enviará información a `example.html` como una solicitud POST.
  - `action`: El atributo `action` determina dónde se envía la información (ej. `action="example.html"`).
  - `method`: Al atributo `method` se le asigna un verbo HTTP que se incluye en la solicitud HTTP (ej. `method="POST"`).

Otros elementos comunes en formularios incluyen `<input>`, `<textarea>`, `<button>`, etc.

Ejemplo de formulario:
```html
<form action="example.html" method="POST">
  <input type="text" name="nombre">
  <button type="submit">Enviar</button>
</form>
```

## HTML Semántico
El HTML semántico introduce significado a una página a través de elementos específicos que proporcionan contexto sobre lo que hay entre las etiquetas. Es un estándar moderno que hace que un sitio web sea accesible para las personas que usan lectores de pantalla y mejora el SEO.

- **`<header>`**: Define el encabezado de la página o sección.
- **`<nav>`**: Contiene enlaces de navegación.
- **`<main>`**: Representa el contenido principal del documento.
- **`<footer>`**: Define el pie de página.
- **`<section>`**: Define elementos de un documento, como capítulos, encabezados o cualquier otra área del documento con el mismo tema.
- **`<article>`**: Contiene contenido que tiene sentido por sí mismo, como artículos, blogs, comentarios, etc.
- **`<aside>`**: Contiene información relacionada con el contenido principal, pero que no es necesaria para comprender la información dominante.
- **`<figure>`**: Encapsula todo tipo de medios.
- **`<figcaption>`**: Se utiliza para describir los medios en `<figure>`.

Ejemplo de estructura semántica:
```html
<header>
  <nav>...</nav>
</header>
<main>
  <section>
    <article>...</article>
    <aside>...</aside>
  </section>
</main>
<footer>...</footer>
```

## Elementos Multimedia
Para archivos multimedia, se utilizan los siguientes elementos:

- **`<video>`**: Para videos.
- **`<audio>`**: Para audio.
- **`<embed>`**: Para incrustar contenido multimedia (como videos de YouTube o archivos Flash, aunque obsoleto en favor de `<iframe>`).

Ejemplo de video:
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  Tu navegador no soporta el elemento video.
</video>
```

## Otros Elementos Esenciales
Para completar la lista de comandos esenciales, aquí hay algunos elementos básicos adicionales:

- **`<html>`**: Raíz del documento HTML.
- **`<head>`**: Contiene metadatos, como `<title>`, `<meta>`, enlaces a CSS/JS.
- **`<body>`**: Contiene el contenido visible de la página.
- **`<h1>` a `<h6>`**: Encabezados jerárquicos.
- **`<p>`**: Párrafos.
- **`<a>`**: Enlaces (con atributo `href`).
- **`<img>`**: Imágenes (con atributo `src` y `alt`).
- **`<div>`**: Contenedor genérico para agrupar elementos.
- **`<span>`**: Contenedor en línea para texto o elementos.
- **`<ul>`, `<ol>`, `<li>`**: Listas desordenadas, ordenadas y elementos de lista.
- **`<br>`**: Salto de línea.
- **`<strong>` y `<em>`**: Texto en negrita y cursiva (semánticos).


