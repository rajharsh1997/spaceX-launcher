# Spacex Launch App
[View App](https://spacex-launcher.vercel.app/)

## About the project

This web app is for viewing launch program list of spaceX. It needs spaceX public API to pull the data.
It is a single page application, for which the given libraries are required:
+ react
+ redux
+ redux-thunk
+ react-router

The application is served by a node.js server which also renders the initial landing page. Following libraries are used by the node.js server:
+ express
+ babel

The application is deployed on **Vercel**.

## Highlights
+ Application is server-side rendered, which helps in boosting the initial page load time and increasing the SEO scores.
+ Fully responsive to cover all range of devices like pc, mobile and tablet

**Using [web.dev](https://web.dev/measure)**

![lighthouse score](https://www.filehosting.org/file/details/900006/webDev.PNG)


## Available Scripts

To run the apllication, use following commands:

**`npm run build-ssr`**
**`npm run start-ssr`**

After this, open [http://localhost:3001](http://localhost:3001) to view it in the web browser.
