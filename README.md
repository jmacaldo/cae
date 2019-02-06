# Call-Em-All Coding Challenge

A live demo of this application can be found [HERE](http://jmacaldo.com/cae/)

<img src="http://jmacaldo.com/cae/static/media/web.jpg" />


## Time Frame
Below is a rough breakdown on how long various stages of the development took:

* Environment setup (10 minutes)
* Getting the application to talk to the API. (30 minutes - It took a while to find a solution to get around the CORS issue. I ended up creating a proxy server to get around this issue.)
* Scaffolding (30 minutes)
* UI work - (1 hour)
* Responsive design fixes (30 minutes)
* Bug fixes (30 minutes)
* Deployment (10 minutes)

## Tech Used
This application is bootstrapped with Create-React-App. A mix of custom and Material-UI elements are used. An Express application serves as a custom proxy back-end server that acts as the middleman between the MeetUp API and the application.

## Some Takeaways
* The application's design mostly follows how MeetUp looks in its current form. However, I've implemented a few tweaks to some UI components. Notably, I've moved the image that normally appears in the description body as a hero image in the header. I've also added a floating nav bar that resizes upon scrolldown.
* I really wanted to include a Google Map of the event location, but I saw that Google Maps is no longer free and overlays an ugly watermark on top; so that idea was scrapped.    
* The event description data field that MeetUp's API returns is a string with HTML tags embedded into it. I decided to display this information to the DOM as is (via `setInnerHTML`) with the intention of preserving the intended formatting. I am fully aware of the security implications of inserting external source data via `setInnerHTML`, and I do so with the assumption that MeetUp sanitizes user input.

<img src="http://jmacaldo.com/cae/static/media/mobile.jpg" />
