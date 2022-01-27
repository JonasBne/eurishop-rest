# Webshop demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Purpose

I developed this application during my onboarding at Euricom. The main goal of doing so, was to familiarze myself with different tools, techniques and programming concepts in order to deliver a fully operational CRUD application. A lot of attention was spent towards clean code.

## Features

The application consists of several views:

- Home: an overview of different products that are fetched from https://euricom-test-api.herokuapp.com/ and a shopping cart. Products can be added to the cart and the amount of units can be changed. The total cost of the shopping cart is adjusted accordingly. The basket can be cleared, but there is no feature in place for actually doing something with the order.

- Products (admin): a table overview for the admin user that displays the total amount of products. The table is sortable based on several columns. Items can be deleted or added. 

Information and actions are stored in memory. Hence, information gets lost on page refresh. 

### Future improvements

- Provide infinite scroll for both the product overview as the table;

- Make the home page mobile responsive; 

- Add form validation with React-hook-form and YUP

- Introduce React Query 

- Host website on Netflify

## Technology, tools & concepts

- React version 18

- Create-react-app

- TypeScript

- Styled Components

- Styled System

- Jest

- Fetch

- ES Lint Air-BnB

- Netlify

- React hook form

- React hot toast 

- React Router

