# Proyecto de Realidad Aumentada con AR.js

Este proyecto utiliza AR.js, una solución de realidad aumentada basada en la web, para crear una experiencia de realidad aumentada que puede ser vista a través de un navegador web.

## Estructura del Proyecto

El proyecto consta de dos archivos principales:

1. `index.html`: Este archivo contiene la estructura básica de la página web y carga los scripts necesarios para AR.js y A-Frame.

2. `script.js`: Este archivo contiene el código JavaScript que crea la escena de realidad aumentada, los marcadores y los modelos 3D.

## Cómo Funciona

El código JavaScript en `script.js` se ejecuta cuando se carga la página. Primero, se crea una escena de A-Frame y se configura para usar AR.js. Luego, para cada objeto en el array `models`, se crea un marcador y un modelo 3D.

Cada objeto en el array `models` tiene dos propiedades:

- `model`: La ruta al archivo del modelo 3D en formato `.glb`.
- `marker`: La ruta al archivo del marcador en formato `.patt`.

Para cada objeto en `models`, se crea un marcador de tipo 'pattern' con la URL del archivo `.patt` correspondiente. Luego, se crea un modelo 3D con la URL del archivo `.glb` correspondiente y se añade al marcador. Finalmente, el marcador (con el modelo 3D) se añade a la escena.

## Cómo Añadir Nuevos Modelos y Marcadores

Para añadir nuevos modelos y marcadores, simplemente añade nuevos objetos al array `models` en `script.js`. Cada objeto debe tener las propiedades `model` y `marker`, que deben ser las rutas a los archivos del modelo 3D y del marcador, respectivamente.

Por ejemplo, para añadir un nuevo modelo y marcador, podrías añadir el siguiente objeto al array `models`:

```javascript
{
    "model": "./models/newModel.glb",
    "marker": "./markers/newMarker.patt"
}
```

Asegúrate de que los archivos del modelo 3D y del marcador existen en las rutas especificadas.

## Consideraciones de Rendimiento

Ten en cuenta que tener un gran número de marcadores y modelos puede afectar al rendimiento de la aplicación. Cada marcador y modelo requiere procesamiento y memoria, por lo que es posible que la aplicación se ralentice o incluso se vuelva inutilizable en dispositivos con menos capacidad de procesamiento o memoria.

Además, tener muchos marcadores en la vista de la cámara al mismo tiempo puede dificultar el seguimiento de todos ellos por parte de AR.js. Por lo tanto, aunque técnicamente puedes tener muchos marcadores y modelos, es importante tener en cuenta las limitaciones de rendimiento y diseñar tu aplicación de manera que funcione bien en el rango de dispositivos que tienes en mente. Esto puede implicar limitar el número de marcadores y modelos, o implementar alguna forma de carga y descarga dinámica de modelos según sea necesario. 

## Compatibilidad

Este proyecto es compatible con dispositivos Android versión 5.0 o superior y dispositivos iOS versión 11 o superior. Sin embargo, el rendimiento puede variar dependiendo de las capacidades del dispositivo, como la potencia de procesamiento y la memoria disponible. Por lo tanto, aunque un dispositivo pueda soportar técnicamente AR.js, la experiencia del usuario puede no ser óptima si el dispositivo es de gama baja. 

Además, debes tener en cuenta que AR.js utiliza WebRTC para capturar el vídeo, y aunque iOS 11 y versiones posteriores soportan WebRTC, puede haber algunas limitaciones dependiendo de la versión exacta del sistema operativo y del navegador que se esté utilizando. 

Por último, si estás desarrollando una aplicación para WebView, debes asegurarte de que la versión de WebView en el dispositivo del usuario también es compatible con AR.js. Esto puede requerir que el usuario mantenga su sistema operativo y su aplicación WebView actualizados a las últimas versiones disponibles. 

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. 

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en este repositorio. 

¡Esperamos que disfrutes usando este proyecto de realidad aumentada con AR.js!
