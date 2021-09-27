<img class="w-1/4" src="./assets/logo-bootstrap.svg" alt="Logo Bootstrap">

# Bootstrap 5

---

## ¿Qué es Bootsrap? <!-- {_class="rosa"} -->
<ul>
    <li class="fragment">Es el kit de herramientas <strong>open source</strong> para <em>Front-end</em> más popular del mundo.</li>    
    <li class="fragment">Es un framework <strong>CSS</strong>.</li>
    <li class="fragment">Mayoritariamente utiliza <strong>clases de utilidad</strong>.</li>
    <li class="fragment">Fue creado por <strong>Twitter</strong>.</li>
</ul>

--

<h2 class="verde">¿Qué es un framework CSS?</h2>

Un **framework** es una cantidad de código ya creado que nos aporta una funcionalidad extra sin tener que reescribir todo ese código.
***
Podemos hacer nuestro propio framework CSS sin problema.
***
Simplemente creamos un conjunto de clases con unos nombres descriptivos que nos ayuden a maquetar más rápidamente.

👨‍🏫 <small class="rosa">Muestra de creación de un framework</small>

<!-- .slide: style="font-size: 28px" -->

---

## Competencia <!-- {_class="azul"} -->
<div class="grid grid-cols-2">

<div class="fragment current-visible semi-fade-out">
    <h3>Foundation</h3>
    <img class="w-1/4" src="./assets/logo-foundation.png">
</div>

<div class="fragment current-visible semi-fade-out">
    <h3>Stylus</h3>
    <img class="w-1/3" src="./assets/logo-stylus.svg">
</div>

</div>

<div class="fragment">
    <h3>Tailwind CSS</h3>
    <img class="w-1/3" src="./assets/logo-tailwindcss.svg">
</div>


---

## ¿Por qué Bootstrap? <!-- {_class="lila !mb-12"} -->


<ul>
    <li class="fragment">Es el framework que más se utiliza. 👏</li>
    <li class="fragment">A nivel laboral lo piden mucho. 💶</li>    
    <li class="fragment">En entornos colaborativos ayuda que todo el mundo conozca el mismo código. 🤝</li>
    <li class="fragment">Para trabajar en Angular lo utilizaréis mucho para maquetar rápido</li>
</ul>

---

## Versión 5 de Bootstrap <!-- {_class="lila" style="font-size: 43px"} -->

|| Bootstrap 4 | Bootstrap 5
--- | :---: | :---:
**jQuery** | ✅ |  ❌ 
**Columnas** | 5 👉 XS - SM - MD - LG - XL	| 6 👉 Se añade **XXL**
**Internet Explorer** | ✅ | ❌
**Iconos** | Librerías externas <br> (Font-Awesome)	| De serie <br> <a target="_blank" href="https://icons.getbootstrap.com/">https://icons.getbootstrap.com/</a>

<!-- .slide: style="font-size: 20px" -->

---

## Cómo usarlo <!-- {_class="amarillo"} -->

---

## Forma básica <!-- {_class="lila" style="margin-bottom: 2rem"} --> <span style="font-size: 0.6em">*Sin customización*</span> 

--

Se añade la etiqueta `<link>` con la url del archivo **CSS** que nos da Bootstrap:

```html []
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
```

--

Añadimos el archivo **JavaScript** que necesitemos:

1.- Archivo `bundle.js` si lo queremos al completo.

```html []
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
```

2.- Archivos `popper.js` o `bootstrap.js` según lo que queramos.

```html []
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
```

👨‍🏫 <small class="rosa">Crear primer proyecto</small>

---

## Documentación de bootstrap

https://getbootstrap.com/docs/5.1/getting-started/introduction/

---

## Breakpoints <!-- {_class="azul"} -->

### ¡¡Bootstrap es *mobile first*!!

Es decir, en estado normal, todas las clases sirven para tamaños **más pequeños a 576px**.

--

## Small - SM  <!-- {_class="amarillo"} -->

El infijo `.sm` (de small) se usa para tamaños **entre 576px y 767px**. 

--

## Medium - MD  <!-- {_class="lila"} -->

El infijo `.md` (de medium) se usa para tamaños **entre 768px y 991px**. 

--

## Large - LG  <!-- {_class="rosa"} -->

El infijo `.lg` (de large) se usa para tamaños **entre 992px y 1199px**.

--

## Extra Large - XL  <!-- {_class="verde"} -->

El infijo `.xl` (de extra large) se usa para tamaños **entre 1200px y 1399px**. 

--

## Extra Extra Large - XXL  <!-- {_class="azul"} -->

El infijo `.xxl` (de extra extra large) se usa para tamaños **de 1400px o más**. 

--

## Tabla de breakpoints  <!-- {_class="amarillo"} -->

<table class="table">
  <thead>
    <tr>
      <th>Breakpoint</th>
      <th>-infijo-</th>
      <th>Dimensiones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>X-Small</td>
      <td><em>None</em></td>
      <td>&lt;576px</td>
    </tr>
    <tr>
      <td>Small</td>
      <td><code>-sm-</code></td>
      <td>≥576px</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td><code>-md-</code></td>
      <td>≥768px</td>
    </tr>
    <tr>
      <td>Large</td>
      <td><code>-lg-</code></td>
      <td>≥992px</td>
    </tr>
    <tr>
      <td>Extra large</td>
      <td><code>-xl-</code></td>
      <td>≥1200px</td>
    </tr>
    <tr>
      <td>Extra extra large</td>
      <td><code>-xxl-</code></td>
      <td>≥1400px</td>
    </tr>
  </tbody>
</table>

---

## Clases para el sistema de rejilla (o grid system)  <!-- {_class="verde"} -->

--

### .container  <!-- {_class="rosa"} -->
Es el elemento más básico de bootstrap. Envuelve el contenido en un contenedor centrado que varía de tamaño según el tamaño de pantalla.

![Container bootstrap](./assets/container.png) 

--

### .container-fluid  <!-- {_class="rosa"} -->
Es el mismo container pero que ocupa en todo momento el 100% del ancho de la pantalla. <!-- {_style="margin-bottom: 4rem"} -->


<h3>.container-<span class="rosa" style="font-size:0.6em; font-style: italic; vertical-align: middle;">infijo</span></h3>

Es un tipo de container que va a ocupar el 100% de la pantalla hasta que llegue al breakpoint que hemos colocado.<br> *Ej.:* `.container-md`

--

### .row  <!-- {_class="lila"} -->
Bootstrap necesita que creemos un `.row` para poder utilizar el *grid system* que nos ofrece.

#### Grid System <!-- {_class="amarillo"} -->
Básicamente lo que nos hace bootstrap es dividir cada `.row` en 12 columnas para poder meter el contenido de la forma que queramos.

![Grid System Bootstrap](./assets/grid-system.png)

--

### .col <!-- {_class="verde"} -->
Para utilizar el sistema de columnas creado por el `.row` usaremos etiquetas con la clase `.col`, `.col-{numero}`, `.col-{infijo}` y `.col-{infijo}-{numero}`:

👇 <!-- {_class=" mt-12 text-center text-5xl"} -->


--

`.col` 👉 Al utilizar esta clase dividirá el tamaño del `.row`a partes iguales. Es decir, si pongo tres `.col` seguidos, los pondrá de 4 columnas cada una para hacer los 12 necesarios.   
<div class="tres-cols-image fragment"></div>

<style>
.tres-cols-image {
    background-image: url(./assets/tres-cols.png); 
    height: 270px; 
    background-repeat: no-repeat;
    background-size: contain;}
.tres-cols-image:hover {
    background-image: url(./assets/tres-cols-rejilla.png); }
</style>

--

`.col-{numero}` 👉 Así crearemos cajas utilizando el número de columnas que queramos.
<div class="columnas-distintas fragment"></div>
<style>
.columnas-distintas {
    background-image: url(./assets/columnas-distintas.png); 
    height: 270px; 
    background-repeat: no-repeat;
    background-size: contain;}
.columnas-distintas:hover {
    background-image: url(./assets/columnas-distintas-rejilla.png); }
</style>

--

`.col-{infijo}` y `.col-{infijo}-{número}` 👉 Como todos los infijos, su funcionamiento es para decirle que queremos que trabaje con las columnas de la forma que queramos pero **a partir del breakpoint determinado**.

<p class="text-xl">Ej.: <code>.col-lg</code> repartirá automáticamente las columnas pero a partir de <em>large</em></p>

<p class="text-xl">Ej.: <code>.col-lg-4</code> le dirá a bootstrap que a partir de <em>large</em> esa caja medirá 4 columnas.</p>

--

### .col-auto <!-- {_class="amarillo"} -->
Esta clase sirve para hacer que la caja se adapte al contenido que tiene, no al sistema de columnas.
<div class="col-auto fragment"></div>
<style>
.col-auto {
    background-image: url(./assets/col-auto.png); 
    height: 270px; 
    background-repeat: no-repeat;
    background-size: contain;}
.col-auto:hover {
    background-image: url(./assets/col-auto-rejilla.png); }
</style>

--

### .row .row-cols-{número} <!-- {_class="rosa"} -->
Sin necesidad de ponerle clases a las columnas, si le ponemos esta clase al `.row`, nos organizará el interior automáticamente en el número de columnas que digamos.
![row-cols](./assets/row-cols.png)

--

### Rows dentro de otros rows <!-- {_class="lila" style="margin-top: 2rem !important"} -->

Si añadimos un `.row` dentro de otro, éste tendrá otro sistema de 12 columnas completamente nuevo (obviamente más pequeño).
![row-cols](./assets/nested-rows.png)

--

### .g- Gutters <!-- {_class="amarillo"} -->
El gutter es el espaciado que hay entre las columnas. Hay del 1 al 5:
- `.g-{número}` cambia el gutter en todos los ejes.
- `.gx-{número}` cambia el gutter en el eje X.
- `.gy-{número}` cambia el gutter en el eje Y.

<p class="rosa relative -bottom-24" style="font-size: 0.8em">👨‍🏫 Ejercicio 01-Columnas</p>

---

## Alineamiento vertical <!-- {_class="verde"} -->
Gracias a flexbox podemos alinear verticalmente:

<p class="text-2xl">Todas las cajas a la vez 👉 <code>.align-items-{start|center|end}</code> </p>

<div class="flex flex-wrap gap-2 justify-center">
<img class="" style="margin:0 !important; flex-shrink: 0; width: 45%" src="./assets/align-start.png">
<img class="" style="margin:0 !important; flex-shrink: 0; width: 45%" src="./assets/align-center.png">
<img class="" style="margin:0 !important; flex-shrink: 0; width: 45%" src="./assets/align-end.png">
</div>

--

<p class="text-2xl">Cada caja individualmente 👉 <code>.align-self-{start|center|end}</code> </p>
<img class="" style="" src="./assets/align-self.png">

---

## Alineamiento horizontal <!-- {_class="lila"} -->
Y también podemos alinear horizontalmente:

<div class="flex items-center"><code style="width:260px; flex-shrink: 0; font-size: 0.6em !important">.justify-content-start</code><div style="margin-bottom: 1rem"><img style="margin: 0 !important;" class="" src="./assets/justify-start.png"></div></div>
<div class="flex items-center"><code style="width:260px; flex-shrink: 0; font-size: 0.6em !important">.justify-content-center</code><div style="margin-bottom: 1rem"><img style="margin: 0 !important;" class="" src="./assets/justify-center.png"></div></div>
<div class="flex items-center"><code style="width:260px; flex-shrink: 0; font-size: 0.6em !important">.justify-content-end</code><div style="margin-bottom: 1rem"><img style="margin: 0 !important;" class="" src="./assets/justify-end.png"></div></div>

--

<div class="flex items-center"><code style="width:260px; flex-shrink: 0; font-size: 0.6em !important">.justify-content-around</code><div style="margin-bottom: 1rem"><img style="margin: 0 !important;" class="" src="./assets/justify-around.png"></div></div>
<div class="flex items-center"><code style="width:260px; flex-shrink: 0; font-size: 0.6em !important">.justify-content-evenly</code><div style="margin-bottom: 1rem"><img style="margin: 0 !important;" class="" src="./assets/justify-evenly.png"></div></div>
<div class="flex items-center"><code style="width:260px; flex-shrink: 0; font-size: 0.6em !important">.justify-content-between</code><div style="margin-bottom: 1rem"><img style="margin: 0 !important;" class="" src="./assets/justify-between.png"></div></div>

---

## Offset <!-- {_class="azul"} -->
Con el offset podemos mover cajas hacia la derecha un determinado número de columnas. Lo que hace es añadir un margen izquierdo a la caja.

<img style="" class="" src="./assets/offset-cuatro.png">

<p class="text-xl">❗ Asegurarse de restablecer el offset con <code>.offset-**-0</code> en breakpoints superiores. ❗</p>

---

## Alinear con margins <!-- {_class="verde"} -->
También podemos usar los *margins* para mover cajas, ya que flexbox las empuja hasta el final si utilizamos `margin: auto;`

<img style="" class="" src="./assets/margin-auto.png">

<p class="rosa" style="font-size: 0.8em">👨‍🏫 Ejercicio 02-Rejilla</p>

---

### A partir de aquí hay que utilizar la documentación para conocer la class de cada estilo CSS que conocemos <!-- {_class="rosa"} -->
