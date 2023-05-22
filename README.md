# TIME TRADE

## Introduction

This repository represents the frontend of TIMETRADE, 
it was build for a New relic hackaton organized by Platzi

The main propourse of this proyect was to try the different functionalities from new relic, and see them with a running repository


TimeTrade is an idea made by: 

- https://github.com/cruzamilcars
- https://github.com/davepcage 
- https://github.com/AlfredoJA
- https://github.com/Ligator

## Documentation

https://www.figma.com/file/Tdz7Lc54BtUhCxgDLCkJCw/TimeTrade?type=whiteboard&t=RrTHLdKMzJbMUfSf-1


## How to see it 
This repository is currently deployed in Vercel in the following url
https://timetrade.vercel.app

## How to run it localy
Due to the time restrictions of the Hackaton, there is no mocks of the implementation 
 of the server side request, so it is important to check that the backend is still available to use.

- You can check by going to the following url
https://timetrade.fly.dev

Once you are sure that the backend is up and running you can start.

First download the repository into your personal computer and then run the following commands.

```sh
npm install

npm run dev
```

## Warnings
In this repository has a insecure implementation that should not be copied

Because backend and frontend under different domains (making cookies useless), we were force to handle sessions using JWT, this tokens, because they come from a different domain were not posible to extract them, 

to work around this issue, you will find under the /API file 2 different endpoints witch job is to do the login or create accound request from the backend, and manipulating the cookies and headers from the server side so they can be used on the client




