# SpaceX Launcher App
[View App](https://spacex-launcher.vercel.app/)

## About the project

This web app is for viewing launch program list of spaceX. It needs spaceX public API to pull the data.
It is a single page application, for which the given libraries are required:
+ react
+ redux
+ redux-thunk
+ react-router
+ express (node.js)
+ babel (node.js)  

The application is deployed on **Vercel**.

## Features
+ Application is server-side rendered, which helps in increasing the initial page load time and increasing the SEO scores.
+ Fully responsive by design to cover all range of devices like pc, mobile and tablet

**Lighthouse score using [web.dev](https://web.dev/measure)**

![lighthouse score](https://i.ibb.co/b6yVsTr/webDev.png)


## Available Scripts

To run the apllication, use following commands:

**`npm run build-ssr`**
**`npm run start-ssr`**

After running the script, open [http://localhost:3001](http://localhost:3001) to view it in the web browser.
