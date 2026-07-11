# Cube Drafter

Interfaz de draft de arquetipos para cubos de set (Innistrad Remastered, Dominaria Remastered, etc.). Lee los datos directamente desde archivos estructurados en disco — sin servidor Python.

## Requisitos

- **Node.js** 18+
- **Navegador Chromium** (Chrome o Edge) — usa la File System Access API para leer carpetas locales

## Inicio rapido

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (normalmente `http://localhost:5173`).

## Configurar un draft

1. Haz clic en **Elegir carpeta** o arrastra la carpeta que contiene tus cubos.
2. La app busca automaticamente una subcarpeta `cubes/`; si no existe, usa la carpeta elegida directamente.
3. Selecciona el cubo, el numero de jugadores y arquetipos por jugador.
4. Pulsa **Comenzar Draft**.

## Estructura de datos esperada

Cada cubo vive en `cubes/<slug>/`:

| Archivo | Contenido |
|---------|-----------|
| `mainboard.csv` | Marca la carpeta como cubo valido |
| `meta.json` | Titulo del cubo (`title`) |
| `archetypes.csv` | Arquetipos con columna `decks` (mapeo explicito) |
| `enriched.json` | Metadatos de cartas (imagenes, Scryfall ID) |
| `decks/<slug>/deck.json` | Lista del deck |
| `decks/<slug>/analysis.md` | Analisis del deck (pitch en seleccion de variaciones) |

## Build de produccion

```bash
npm run build
npm run preview
```

La app sigue siendo 100% cliente: en produccion tambien necesitas elegir la carpeta de cubos desde el navegador.
