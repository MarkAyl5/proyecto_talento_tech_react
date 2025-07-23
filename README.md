# KalisHardware

Tienda de hardware con carrito, panel de administración y autenticación simulada.

## Instalación y uso

1. Clona el repositorio:

```bash
git clone <URL_DEL_REPO>
cd KalisHardware
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el proyecto en desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

## Estructura principal
- `src/` Código fuente de la app
- `public/` Imágenes y recursos estáticos
- `README.md` Este archivo
- `.gitignore` Ignora node_modules, dist, logs, etc.

## Deploy en GitHub

1. Crea un repositorio en GitHub y sube el código:

```bash
git init
git remote add origin <URL_DEL_REPO>
git add .
git commit -m "Proyecto inicial"
git push -u origin main
```

2. (Opcional) Para deploy en GitHub Pages, puedes usar [Vite + gh-pages](https://vitejs.dev/guide/static-deploy.html#github-pages):

```bash
npm install --save-dev gh-pages
```

Agrega en `package.json`:

```json
"homepage": "https://<usuario>.github.io/<repo>"
```

Y los scripts:

```json
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Luego ejecuta:

```bash
npm run deploy
```

---

## Notas
- Login admin: usuario `admin`, contraseña `admin123`.
- MockAPI: https://68268799397e48c91316632f.mockapi.io/products
