# React App (Frontend)

## Setting up frontend on local

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Download this project folder either as zip file and extract the folders into the desired directory or clone this repository on your local machine 



Navigate into the app and install all required packages by running the following command in the project directory:

**`npm i`**

Make sure a `node_modules` folder appears in the project directory after successful completion of the above command.

Next, run the app in your local browser by running the following command in the project directory:

**`npm start`**

It runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

### For Testing

**`npm test`**

Launches the test runner in the interactive watch mode.<br />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### For Deployment

**`npm run build`**

Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Folder Structure

### Overview

The root directory contains main files such as index.js, app.js, app.css and global stylesheet

-*src*													root directory for frontend

​	--*assets*											  all common assets

​		---*img*									      common images used throughout the app

​		---*favicon.ico*								 getwork favicon 							

​	--*bundles*											all project module bundles

​		---*common*									    common modules 

​			----*components*						    common components

​				-----*UI*								common UI elements composed as reusable components

​				-----*Auth*								 components handling authentication

​					-------*Login.js*					  common login component

​					-------*Login.css*					styles for login component

​		---*company*									 company module

​			----*components*						   company specific components

​			----*contexts*								context managing company's state data

​			----*reducers*								reducers for company's state data

​			----*routes*							    slugs for company module

​		---*student*								    student module

​			----*components*						    student specific components

​			----*contexts*								context managing student's state data

​			----*reducers*								 reducers for student's state data

​			----*routes*								slugs for student module

​		

## External Libraries used 

### via npm

This section briefly describes all the external libraries used in this project. In case they are depreciated or unmaintained as of this date, upgrade them to latest version and update their code. 

react-router-dom   		v5.1.2 

### via CDN

Bootstrap 4 								v4.0.0.0

Bootstrap 4 floating label

Font Awesome
