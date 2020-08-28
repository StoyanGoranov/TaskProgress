# TaskProgress

I decided to built this Products Page in plain HTML/CSS/JS to avoid overengineering.
It uses Promises and variable declarations from ES6, but does not utilize later ES innovations.

The purpose of the project is to dynamically download data from the web and visualize it in an user friendly responsive web page.
My approach is to also dynamically built the web page with Javascript to simulate a real-world scenario. 
Despite this the page is carefully styled for the specific static content and visuals will most likely break if dynamic data is introduced.

The web page is divided in 4 main components.

fetchproducts.js downloads the data.
products.js builds the page and adds some minor styling.
products.css adds styling and responsiveness.
An HTML file, which finally combines all the resources.

Further comments documenting the code can be observed throughout. 

