# Practical Task - Front-End Engineer

## Introduction
I have decided to use TypesCript, Redux Toolkit and Styled Components. I've started the project with create-react-app but I made a lot of changes about the initial setup it creates.
I have only left the automation with react-scripts that it brings

## Resolved Points
- Update the results in real-time as user types
- Be mindful of (perceived) performance

I've used the search OpenLibrary API. The search list with results I spliced to only show the 4 first entries obtained. 
I restriced to more than 3 characters for launching the request. Also I used Axios instead of fetch, and I've implemented the signal controller for mantain the performance and reject other requests when new is launched.

## Not Resolved Points
The results are not linked to Amazon Search

## Run

Clone the repo, install dependencies:
`
```
$> npm start
```
And run:
```
$> npm start
```

