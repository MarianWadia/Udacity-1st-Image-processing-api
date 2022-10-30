# Image Processing API

## Table of Contents

- [Project Descreption](#project-descreption)
- [Usage](#usage)
- [Installation](#installation)
- [Project Dependencies](#project-dependencies)
- [Development](#contribute)
- [License](#license)
- [Footer](#footer)

![Demo-preview](https://media4.giphy.com/media/xT8qBsOjMOcdeGJIU8/giphy.gif?cid=ecf05e47evs11u35aqth55lojin8oph0r4n7l5r8lclylhgy&rid=giphy.gif&ct=g)

## Project Descreption

This project is a fully complete functional project having the static HTML file that gets the functionality of sending and recieving data from the server with the help node.js and its packages, all together combined to result in this final look of our Image Processing Api that allows users to enter the image file, needed width and height values to resize the image moreover saving the processed image locally. This project has been built using typeScript, Jasmine for unit-testing, express for creating server and intializing it.

## Usage

You can use this project eaisly after downlodaing it by navigating project folders and files and open them using editor, there is a src folder where most of work is done in, first there is an index.ts file that is considered the main application file, then we have other thre folders inside src folder one for unit-tests using jasmine, other for endpoint routes where we use the Router() middleware of express, and finally utilities folder having static data of the available image file names that can be used to resize. There are another folder called build where all your compiled ts code will reflect in and it also contains a static HTML (index.html) file.

## Installation

you can install this project either by:

- clonning the remote repository to your local machine so that you can follow along. To clone, you can use `(git clone https://github.com/MarianWadia/Udacity-Image-processing-api.git)` command on your terminal. When you clone a remote repository, you get an identical copy locally, where you can make desired changes.
- Fork the remote repository to your own online account. When you fork a remote repository, a new duplicate copy of the remote repository is created in your account.

## Project Dependencies

There are some dependencies to that project we have nodes.js and some of its packages as jasmine and supertest for testing, express for the server, sharp for resizing the images, and finally typeScript in ordrer to be compiled correctly. All these dependencies should be installed in order for the project to work properly and effeciently. Some other dependencies are used only for development as eslint and prettier.

## Development

There are some scripts that you can run in order to execute them as `npm run start` to start the server, `npm run test` to build and test using jasmine, `npm run build` in order to compile typeScript to javaScript in build directory, `npm run prettier` to apply prettier rules, `npm run lint` to apply eslint rules.

## License:

[GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)
## Footer:

Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.

[The Endpoint for resizing an image](http://localhost:5000/routes/apis/resizing?toprocess=fjord.jpg&width=857&height=857) is `localhost:5000/routes/apis/resizing?toprocess=fjord.jpg&width=857&height=857`

![Footerimage](https://raw.githubusercontent.com/navendu-pottekkat/awesome-readme/master/fooooooter.png)
