import * as express from 'express';
import * as cors from 'cors';
import { PORT } from './common/constants';
import songsRoutes from './songs/song-routes';

const app = express();
app.use(cors());
app.get("/", (request, response) => {
    response.send('hello world');
});

app.listen(PORT, () => {
    console.log('Listening');
});


function errorHandler (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log(err);

    res.status(500);
    res.render('error', { error: err });
}

app.use(errorHandler);


// Register routes
app.use('/songs', songsRoutes);