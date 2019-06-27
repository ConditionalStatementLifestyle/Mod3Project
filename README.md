# README

This App simulates total worth of an investment over a specified period of time. It's main aim was to create a simple, clean and easy to understand graphing site to quickly calculate expected returns on investments. Different investment scenarios can be compared to one another since all graphs appear on the same page.

The underlying equation assumes monthly compounding and also monthly contributions by the user. The equation I referenced to simulate the value can be found at: https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php Since this equation will provide the total value at the end of the period the user specifies, I simply iterated over a year at a time, creating a data point for each year and updating the new total. 

The App utilizes Chart.js, vanilla JS and a Rails backend. 

The site can be found at: https://dashboard.heroku.com/apps/secret-mesa-58919
