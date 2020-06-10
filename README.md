# Arquivei Challenge

## Problem and Solution

The challenge is to propose an discount model for the first 1000 and 2000 purchases with different price discounts, and create interfaces for the user to consult and purchase consults, with said discounts.

The functions that calculates the total price can be found inside "src/commons/utils"

the function calculatePrice takes in the "previous purchased amount" and the "to be purchased amount" in order to calculate the price, the CONSTANTS F_PROMOTION, S_PROMOTION and NO_PROMOTION are the price values for the first, second and no promotions.

The structure of the project itself was designed in order to help the migration to or from next, so that the src could be either a next or a non-next app, while "/pages" treat the ssr-next (Of course the module router, and links inside src would have to be migrated to or from next format).

2 Redux Stores made:
Userstore: security and to be able to get the number of previous purchases(not implemented yet), in mode Mock the user/login accepts any @gmail.com emails with any eight plus length password.

consultStore: relates to everything about the consult, be it price calculator or purchase, and in the future the request and load of previous purchases by current user(not implemented yet).

The project is by default set in a Mode: MOCK which can be seen in the .env.example file, in this mode an interceptor will take every axios request and execute the functions inside "/src/services/mock" according to the URL mapper instead of the returning the true request, by setting to MOCK mode to TRUE is possible to use it in jest tests inside containers without having to mock the store, request modules and others.

## Installation and running

- clone this repo

- create .env file from env.example and tune it however you want it

- Install all dependencies: `npm i`

- `npm run dev` or `docker-compose up`

- Open a browser and go to `localhost:3000`. The application should be running!

## Project structure

- `login`: a login page that connects to the userStore and saves a token on your sessionStorage, any failure on authenticating will result in redirecting to this page, which in turn redirects to the `home` page (after the user authenticate itself or the previous page). In Mock mode any {}@gmail.com email with eight length password will result in a successfull login.

- `index`: a simple unprotected route of the `Home` Component,

- `home`: a protected route of the `Home` Component,

- `consult`: the first page our user iteracts with the system, the user must be logged in There, he inputs
  a consulting keys quantity and receives the purchase total, along with the
  total price.

- `checkout`: the page where a checkout is made possible, but note that we
  redirect to `/consult` if the user has not selected an amount of keys to buy.

- `_app` and `_document`: insert styles, import statics.
