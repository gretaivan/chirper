# Chirper

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![GitHub forks](https://img.shields.io/github/forks/gretaivan/chirper.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/gretaivan/chirper/network)
[![Github all releases](https://img.shields.io/github/downloads/gretaivan/chirper.js/total.svg)](https://GitHub.com/gretaivan/chirper/releases/)




![Chiper Logo](https://i.imgur.com/hXQv2nf.png)

Chirper is a Journal Entry web app that allows people intrested in discussing about sustainability of the planet. Users can submit Journal Entries with either text or a GIF from Giphy, react to other posts or leave comments on other entries.

* Our Website: [Chirper](https://chirper-uk.netlify.app/)
* Our wireframe: [Here](https://i.imgur.com/v19e1gj.png)
* Our final design: [Here](https://www.figma.com/file/JLIMUVHGxq2AjomuYOWobz/Chirper-Design?node-id=0%3A1)

## Installation & Usage

### Do the following:
1. Clone or fork this repository
2. Navigate to the root directory

### For Clientside:

1. Navigate to the client folder
2. Before running for a first time do ```npm install```
3. To run the clientside use: ```npm run dev```
4. To run tests use: ```npm test```

### For Serverside:
1. Navigate to the server folder
2. Before running for a first time do ```npm install```
3. To run the serverside locally, use: ```npm run dev```
4. To run tests use: ```npm test```

###### Please follow the README file instructions for client and server

## Technologies

### Languages used:
* HTML & CSS
* JavaScript
* JSON

### Client 
#### Production Dependencies:
* Bootstrap v5
* Netlify for clientside deployment

#### Dev & Testing Dependencies:
* watchify v4.0.0
* concurrently v6.0.0
* Jest

### Server
#### Production Dependencies:
* Node.js
* Express.js
* cors
* Heroku - Hosting the API


#### Dev & Testing Dependencies:
* Jest
* Nodemon
* Supertest

## Process 
1. Brokedown key stakeholders requirements into individual tasks
2. Brokedown these tasks into subtasks and created them on GitHub Projects Board
3. Created a wireframe sketch-up on Photoshop: [Here](https://i.imgur.com/v19e1gj.png)
4. Created a more detailed design on Figma: [Here](https://www.figma.com/file/JLIMUVHGxq2AjomuYOWobz/Chirper-Design?node-id=0%3A1)
5. Initial creation of repository
6. Tasks assigned per day and completed following Git Flow
7. Standup / end of day meeting to peer review

You can view our commit history of our main repo: [Here](https://github.com/gretaivan/chirper/commits/main)

## License
[MIT License](https://opensource.org/licenses/mit-license.php)

## Future Features 
* Filter by trending posts (most liked, most disliked, most tree reactions, most commented)
* Sort journal entrties by date
* Named journal entries
* Filter according to user who created entry

## Wins & Challenges

### Wins:
* Able to implement all core features
* Styling, layout and visuals are all consistent and clean
* Users are able to submit journal entries or GIFs
* Users can comment on invididual entries
* Reactions and comments are dynamically updated
* Integration of Giphy API

### Challenges:
* Using a JSON file as the database
* Making reactions dynamic and updating the count when someone reacts
* Commenting feature
* Testing with Jest Mock