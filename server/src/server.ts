import * as express from 'express';
import * as cors from 'cors';
import port from './config';

const app = express();
app.use(cors());
app.get("/", (request, response) => {
    response.send('hello world');
});

app.listen(port, () => {
    console.log('Portal is up');
});