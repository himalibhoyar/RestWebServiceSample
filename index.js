import express from 'express';
import routes from './routes';


const app = express();

let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };
  
var models = {
     messages
};

app.use((req, res, next) => {
    req.context = {
      models
    };
    next();
  });

  
  // Routes
  app.use('/messages', routes.message);

  // Start

app.listen(process.env.PORT, () =>
console.log(`Example app listening on port ${process.env.PORT}!`),
);
