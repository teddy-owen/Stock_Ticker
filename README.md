# Stock_Ticker
An AngularJS app to get a live feed of a stock price using the IEX API.

<img src="https://github.com/teddy-owen/Stock_Ticker/blob/master/images/ticker1.PNG" alt="drawing" height="450px" width="400px"/> <img src="https://github.com/teddy-owen/Stock_Ticker/blob/master/images/ticker2.PNG" alt="drawing" height="450px" width="400px"/>

### Requirements
- NodeJS
- NPM

### Getting Started
1. Clone this repo into your chosen directory
1. Make sure NodeJS and NPM are installed (https://nodejs.org/en/download/) 
1. Open your terminal/CLI, cd into the directory and run `npm install`
1. Once the dependencies are installed, run `npm start [host (default:localhost)] [port (default:8000)]`
1. An express server will "spin up" and the app should be available in your browser at `http://localhost:8000` or the location you set 
1. Open the app in your browser and enter a valid stock ticker

### Implementation
- Front end
  - AngularJS served via CDN at cdnjs.com
  - Bootstrap served via CDN
  - Font Awesome served via CDN
  - Angular app files, CSS and HTML served via Express server backend
  - Stock data fetched client-side via IEX API
- Back end
  - NodeJS running Express server
  - Single route serving index.html with AngularJS 
  - Serves static files
