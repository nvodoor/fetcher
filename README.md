### Fetcher

This project is a github fetcher project designed as a universal page app.

- Application fetches data on the server side from github API. Utilized axios to make get requests.
- Used renderToString to render the component with data from this API call.
- Client received this response.
- Used ReactDOM.hydrate to ensure that subsequent site loads using the bundle would function properly after the initial site load.
- Added a div that sends an alert when clicked. 
- Decided against Redux for this project as I already showcased redux skills in the previous exercise. Thus, for this exercise, I wanted to showcase that I understand how to pass props between components.
