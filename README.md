# Insurance Web App Frontend

Frontend code for a web-based insurance system using Java and Spring

live demo hosting on AWS: http://msi-final-jjy.com.s3-website.us-east-2.amazonaws.com/login

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Backend code

Backend code is available here: [Github repo](https://github.com/kdj842969/insurance-web-app-backend)

## Tech stack
*	Designed and implement frontend using Angular 7, HTML, CSS, JavaScript, TypeScript.
*	Built single page application (SPA) using Angular router to collect user data, also utilize Angular guard service to protect and secure routes. Introduced lazy loading feature to increase performance.
*	Introduced components, services, pipes, and directives to increase reusability. For example, created pipe to display policy information based on user preference. Used service to achieve communication between components.
*	Utilized Reactive Form for input validation and form control.
*	Used Observable to wrap http response from back-end.
*	Handled user credential data by using RXJS operators, subjects, map, and switchMap.
*	Developed charts using ngx-chart to analyze sales data including line chart, pie chart, bar chart, and dynamic chart.
*	Applied Flex-layout and Bootstrap grid system to build a responsive web application, designed UI/ UX using Sass/Scss, and Bootsrtap.
*	Utilized Test-Driven-Development using Junit for backend, Jasmine and Karma for frontend, Selenium for integration test.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
