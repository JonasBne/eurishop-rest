# Webshop demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

I am building this application  during my onboarding at Euricom (solely for educational purposes). The main goal of building the application is to familiarize myself with different tools & techniques in order to deliver a fully operational CRUD application. 


## Features

The application consists of three different pages.

In the first version of the application, everything is stored in memory (i.e. all information is lost on a page refresh). Also, at this time the basket api will not be used.

####  Product page for with an overview for the administrator

* This page contains a table that holds information regarding the different products (i.e. name, prize, stock,...);

* The product table can be sortered based on product title, price and stock by clicking on the respective header;

* Initially, all 100 products are shown in the table. There is no pagination at this point;

* The administrator can click a field in the table and then gets redirected to the product detail;

* Products can be added or deleted;

* The product table is not responsive;

* Minimal styling is applied;

####  Product page with an overview for the end user

* This page displays the different products for the end user;

* Page has to be responsive;

* At the righthand side of the page a basket is shown;

* Each product can be added to the basket (if stock is greater than zero);

* There must be a calculation of the total cost for the end user (the sum of the added products to the basket);

* There should be a button that clears the basket;

* There should be a functionality which allows the user to remove certain products from the basket;

* When a product is added that is not in stock, an error must be shown (redirected to an error page)

####  Product page with details 

* The product page consists out of a form which displays the detailed information of a given product;

* Products can be modified, added or deleted;

* When adding a new product, title and price are required;




## Technology, tools & concepts

* React version 18

* Create-react-app

* TypeScript

* Styled Components 

* Styled System

* Jest 

* Fetch 

* REST API

* ES Lint Air-BnB

* Netlify 

* Trunk-based developed 

* Form (validation) in plain React (no libraries)

* React Router

* Context API


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
