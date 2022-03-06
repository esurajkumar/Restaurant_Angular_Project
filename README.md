# Restaurant

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


--------------------------------------------------------------------------------------


Angular Detals---
1. Here i have used Angular version 13.0.4.
2. setup for angular-
    a. Downoload & install Nodejs (google)
    b. install Angular CLI (using cmd)
    c. Download VS Code (as a IDE)

3. Now open this project on your VS Code.    



-------------------------------------------------------------------------------------


DATABASE Details---

1. I have used database as JSON.
2. For setup Json on your system there is 2 steps-
    a. Install json on your local system-
         opem cmd- 
                 npm install -g json-server

   b. create a json database on your local system-
      chose location where you want to create a Json DB-

          xyz location- 
                  json-server --watch dbName.json             

-------------------------------------------------------------------

 *** Have Attached the Restaurant_DB database (file) also in this project for reference. 

=>   Database structure- 

      URl- "http://localhost:3000/posts"; (u get this once u create a Json   DB on your local system)

    {   "posts": [
    {
      "Name": "Namkin",
      "Email": "bbb@gmail.com",
      "Contact": 222,
      "Address": "Sector-30",
      "id": 1
    },
    {
      "Name": "Sweet Corner",
      "Email": "aaa@gmail.com",
      "Contact": 111,
      "Address": "Sector-25",
      "id": 2
    },
    {
      "Name": "Pizza Corner",
      "Email": "ccc@gmail.com",
      "Contact": 333,
      "Address": "Sector-35",
      "id": 3
    },
    {
      "Name": "Dhosa Corner",
      "Email": "ddd@gmail.com",
      "Contact": 444,
      "Address": "Sector-40",
      "id": 4
    },
    {
      "Name": "Burgur Corner",
      "Email": "eee@gmail.com",
      "Contact": 555,
      "Address": "Sector-45",
      "id": 5
    },}

    ------------------------------------------------------------------------