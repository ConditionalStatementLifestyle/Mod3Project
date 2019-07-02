# Invest Big

Invest Big is a simple web app that simulates the total worth of an investment over a specified period of time.

## Motivation
  
I wanted to make a simple and easy to use investment calculator in which anybody could use and easily compare outcomes. 

# ![ScreenShot](/InvestBig.png)

## Tech Used

### Built With

- Vanilla JavaScript
- Ruby on Rails
- Chart.js

## Features

- Full CRUD on each graph
- Users can compare the investment outcomes of various scenarios since each submitted scenario renders a graph on the same page
- Capable of simulating investments with principle monies and monthly contributions

## Usage

Invest Big is deployed on Heroku and may be accessed at: https://secret-mesa-58919.herokuapp.com/

- There is no login, all users have access to what is on the page. Thus any user may remove or edit the graph you create (The point of this project was not to incorporate authorization)
- Enter investment parameters you would like to simulate in the form on the left side of the page and submit
- The results of the calculation will be displayed as a new graph on the top of the page
- Users may edit or delete any graphs

## Installation

If you would like to play with the code yourself follow these steps:
- Fork and clone the repo onto your local machine
- Change all URLs in fetch requests to local host URLs
- run 'rails db: setup', 'rails db: migrate'
- run 'rails s' and the page should render in your browser

## Credits

The wonderful folks at Flatiron
