Chitter Frontend Challenge
====

This is one of the tech test challenges from Week 10 at Makers. We have been provided with a backend delivering an api and have been tasked to produce a frontend for browser access.

My incomplete app has been hosted on Heroku at [chitter-frontend](https://chitter-frontend.herokuapp.com/)

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

*At day 2*
Having spent an absolute age trying to get to grips with CSS and working my way through a Udemy course on React, I have managed to:
- [x] Retrieve a list of tweets and display on the front page
- [x] Retrieve a list of users and display on the front page
- [x] Improved API fetch calls to show loading indicator and load on browser refresh

Horrors that still need to be addressed:
- [ ] ..*fixed*..

Not horrors but work that needs to be done before I can call myself a developer:
- [ ] Sign up form
- [ ] Post to an api

Notes on tech
---
I've converted bulma.css to use sass. I can therefore customize in mystyles.scss
If you run `npm run css-start` it will watch for updates and compile to css.
If you forget to do this you will need to force the compile using `npm run css-build`

Shout-outs
---
API assistance:  
- I found Robin's blog to be really helpful when I panicked about where to stick my fetch call. It gave me reassurance that it was in the right spot. It also helped me to refactor so that I could get refresh on browser reload, along with loading indicator and error catching. [React Featching Data](https://www.robinwieruch.de/react-fetching-data/)
- And the same source but this time for [storing state (or sessions) in React](https://www.robinwieruch.de/local-storage-react/), using sessionstorage or localstorage - both browser features for maintaining state.

Styling:  
- [Tachyons for styling](https://roperzh.github.io/tachyons-cheatsheet/). I started trying to work with Bulma but found I was having to create so many additional styles that it felt pointless. Tachyons are a total joy though. You can chain features together in your class names and they are so logical.