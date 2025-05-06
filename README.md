# Ecorec Frontend

Proyecto frontend para Ecorec, soluciones ecológicas y sostenibles.

## Estructura del proyecto

```
├── dist/               # Archivos compilados
│   └── css/            # CSS compilado
├── src/                # Código fuente
│   ├── images/         # Imágenes
│   ├── js/             # JavaScript
│   └── styles/         # Archivos SASS
│       ├── _variables.scss  # Variables (colores, tipografía)
│       └── main.scss   # Archivo SASS principal
├── index.html          # Página principal HTML
├── package.json        # Dependencias del proyecto
└── README.md           # Este archivo
```

## Paleta de colores

- Blanco: #F8F8F8
- Amarillo: #F7CB68
- Morado: #D58DCC
- Azul oscuro: #2F2056
- Azul: #3957BF
- Gris claro: #EAEAEA

## Tipografía

- Familia: Poppins
- Pesos: Regular (400) y Bold (700)

## Instalación

1. Clona este repositorio
2. Instala las dependencias:

```
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo y compilar los archivos SASS:

```
npm run sass
npm start
```

## Compilación para producción

Para compilar los archivos para producción:

```
npm run build
``` 