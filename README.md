"build": "rm -rf dist && NODE_ENV=production babel src/lib --out-dir dist --copy-files",
"start": "cross-env WEBPACK_IS_DEV_SERVER=true NODE_ENV=development webpack serve --config webpack.config.babel.js",
