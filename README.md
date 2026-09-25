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
4. Ajusta **Copias por Infrecuente** y **Las raras son exclusivas** si tu cubo fisico
   tiene mas de dos copias de cada carta. Se recuerda por cubo.
5. Pulsa **Comenzar Draft**.

## Estructura de datos esperada

Cada cubo vive en `cubes/<slug>/`:

| Archivo | Contenido |
|---------|-----------|
| `mainboard.csv` | Marca la carpeta como cubo valido |
| `meta.json` | Titulo del cubo (`title`) y `uncommon_copies` (copias fisicas por carta) |
| `archetypes.csv` | Arquetipos con columna `decks` (mapeo explicito, `;` entre slugs) |
| `enriched.json` | Metadatos de cartas (imagenes, Scryfall ID) |
| `decks/<slug>/deck.json` | Lista del deck; `pitch` opcional evita leer `analysis.md` |
| `decks/<slug>/analysis.md` | Analisis del deck (pitch en seleccion de variaciones) |
| `decks/<slug>/deck.tsv` | Imagenes de tierras basicas y exportacion |
| `decks/<slug>/deck.mwDeck` | Exportacion |

Sin la columna `decks` la app no muestra ningun arquetipo para ese cubo.

Las cartas de `deck.json` pueden venir repetidas por copia, con `qty`, o ambas cosas:
la app cuenta `max(filas, qty)` por nombre y board, asi que cualquiera de las tres
formas da el numero correcto de copias.

## Importar cubos nuevos

Despues de copiar una carpeta de cubo desde el generador:

```bash
node scripts/import-cubes.mjs --check   # valida sin escribir
node scripts/import-cubes.mjs           # escribe uncommon_copies y pitch
node scripts/map-archetypes.mjs         # genera la columna decks
```

`map-archetypes.mjs` puntua cada par (arquetipo, deck) y permite que un deck
pertenezca a varios arquetipos; ningun deck queda huerfano. Ajusta el agrupamiento
con `MAP_RELATIVE_FLOOR` y `MAP_MAX_ARCHETYPES`, y comprueba la calidad contra un
mapeo hecho a mano con `--calibrate`.

## Copia en espanol

```bash
node scripts/translate-cube-copy.mjs extract <cube>   # escribe scripts/i18n-source/*.en.json
# traduce cada archivo a <mismo-nombre>.es.json
node scripts/translate-cube-copy.mjs apply <cube>
node scripts/audit-i18n.mjs                           # que no falte nada
```

Los decks se reparten en trozos (`I18N_CHUNK_SIZE`, 15 por defecto) porque un cubo
puede tener mas de cien. Cuando falta el espanol, la interfaz usa el ingles.

## Build de produccion

```bash
npm run build
npm run preview
```

La app sigue siendo 100% cliente: en produccion tambien necesitas elegir la carpeta de cubos desde el navegador.
