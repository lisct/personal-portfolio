# Personal Portfolio

https://www.lisbelcruz.com

This is my personal portfolio where you can find a collection of my work. This website has a fully working contact form and a login side. I focused in micro interactions which are more notorious in desktop version.

## Repository

1. Install dependencies

```bash
yarn install or npm install
```

2. Run Build Development (Compile Public folder)

```bash
yarn run build:dev or npm run build:dev
```

3. Run Development Server (Test server ambience)

```bash
yarn run dev-server or npm run dev-server
```

Running local

```bash
http://localhost:8080
```


## Backend (express, nodemailer for the contact form)

Run Backend(functions) and Frontend (public)

```bash
sudo firebase serve --only functions,hosting
```

```bash
http://localhost:5000
```

## Production

Run Build (Compile Public folder)

```bash
yarn run build:prod or npm run build:prod
```


## Deploy

```bash
This project has been deployed on firebase. Be sure to edit the .firebaserc before deploying.
```


## Analytics

```bash
Google Analytics general tag and custom tracker has been added.
```


## Packages Frontend

* "babel-cli": "6.24.1",
* "babel-core": "^6.26.0",
* "babel-loader": "^7.1.4",
* "babel-plugin-transform-class-properties": "6.24.1",
* "babel-polyfill": "^6.26.0",
* "babel-preset-env": "1.5.2",
* "babel-preset-es2015": "^6.24.1",
* "babel-preset-react": "6.24.1",
* "babel-preset-stage-0": "^6.24.1",
* "css-loader": "0.28.4",
* "extract-text-webpack-plugin": "3.0.0",
* "file-loader": "^1.1.11",
* "firebase": "^5.0.4",
* "firebase-tools": "^3.19.0",
* "flexboxgrid": "^6.3.1",
* "gsap": "^2.0.1",
* "live-server": "^1.2.0",
* "node-sass": "^4.9.0",
* "normalize.css": "7.0.0",
* "prop-types": "^15.6.1",
* "re-base": "^3.2.3",
* "react": "^16.4.0",
* "react-dom": "^16.4.0",
* "react-ga": "^2.5.3",
* "react-router-dom": "4.2.2",
* "sass-loader": "6.0.6",
* "style-loader": "0.18.2",
* "url-loader": "^1.0.1",
* "webpack": "3.1.0",
* "webpack-dev-server": "2.5.1"

## Packages Backend

* "body-parser": "^1.19.0",
* "cookie-parser": "^1.4.4",
* "debug": "^4.1.1",
* "express": "^4.17.1",
* "firebase-admin": "^8.0.0",
* "firebase-functions": "^3.0.0",
* "fs": "^0.0.1-security",
* "morgan": "^1.9.1",
* "nodemailer": "^6.3.0",
* "pug": "^2.0.4",
* "serve-favicon": "^2.5.0"