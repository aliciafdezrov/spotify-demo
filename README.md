# SPOTIFY DEMO

1. [General info](#general-info)
2. [Technologies](#technologies)
3. [Prerequisites](#prerequisites)
4. [Setup](#setup)
5. [Available scripts](#available-scripts)

## General info
Web application that allows a user to search for artists, albums and tracks on the Spotify catalog.

## Technologies
Project is created with:
* React version: 17.0.2
* Typescript version: 4.3.5
* Webpack version: 5.48.0
* Jest version: 27.0.5
* Cypress version: 8.2.0

## Prerequisites

This project requires the following to run:

* Git - [Download & Install Git](https://git-scm.com/downloads) Download & Install Git. OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
* As this project retrieves data from Spotify Web API, you need a **Client Id** and **Client Secret** from you application. If you don't know how to register your application, 
you can visit this [link](https://developer.spotify.com/documentation/general/guides/app-settings/).

## Setup

Set up you client id and client secret environment variables, replace the default values from [dev.env](./config/webpack/dev.env) and [prod.env](./config/webpack/prod.env)

To run this project, clone and install it locally using npm:

```
$ git clone https://github.com/aliciafdezrov/spotify-demo.git
$ cd /spotify-demo
$ npm install
```


# Available scripts

In the project directory, you can run:
```
npm start
```

Run the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you edit the source code.
You will also see any lint errors in the console.

```
npm run start:dev
```
Run the app in development mode.
Open http://localhost:8080 to view it in the browser.

You won't see the changes when editing the source code.
You will also see any lint errors in the console.
The bundle is in memory only.

```
npm run start:prod
```
Run the app in production mode.
Open http://localhost:8080 to view it in the browser.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
The bundle is in memory only.

```
npm run build:dev
```
Build the app for development and write the bundle to [dist](./dist) folder.
Your app is ready to be deployed in development mode.

```
npm run build:prod
```
Build the app for production and write the bundle to [dist](./dist) folder.
Your app is ready to be deployed in production mode.

```
npm run build:perf
```
Visualize size of webpack output files with an interactive treemap. 
You will be able to see what's inside your bundle and optimize it if you want to.

```
npm run test:watch
```
Launch the test runner for unit tests in the interactive watch mode.
See the section about running tests for more information.

```
npm run test
```
Launch the test runner for unit tests and create a new [coverage](./coverage) folder where you can see the project coverage.

```
npm run cypress
```
Launch the test runner for cypress integration test.
