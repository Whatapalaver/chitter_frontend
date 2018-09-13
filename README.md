Chitter Frontend Challenge
====

This is one of the tech test challenges from Week 10 at Makers. We have been provided with a backend delivering an api and have been tasked to produce a frontend for browser access.

Original Instructions
----
The scenario is similar to the Chitter Challenge, except someone has already built a backend API for you and hosted it on [Heroku](https://chitter-backend-api.herokuapp.com/).

Your task is to build a front-end single-page-app to interface with this API. You can do this in any framework you like, or in pure Javascript. The [API documentation is here](https://github.com/makersacademy/chitter_api_backend).

Here are some interactions the API supports. Implement as many as you see fit.

- Creating Users  
- Logging in  
- Posting Peeps  
- Viewing all Peeps (I suggest you start here)  
- Viewing individual Peeps  
- Deleting Peeps  
- Liking Peeps  
- Unliking Peeps  

We are looking for well tested, easy to read, easy to change code. This is more important than the number of interactions you implement.

My Approach
---
I have opted to handle this project with JS React as I've never used it and would like to have some familiarity before we start the final project week. I'mn also exploring the CSS framework Bulma, so it's a wholly novel experience.

Notes on tech
---
I've converted bulma.css to use sass. I can therefore customize in mystyles.scss
If you run `npm run css-start` it will watch for updates and compile to css.
If you forget to do this you will need to force the compile using `npm run css-build`