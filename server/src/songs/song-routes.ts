import * as express from 'express';
const songsRoutes = express.Router();
import { searchSongs } from './song-service';


export async function get(req: express.Request, res: express.Response, next: express.NextFunction) {

    try {
        const searchTerm = req.query.search;
        const songsList = await searchSongs(searchTerm);
        res.send(songsList);
    }
    catch (error) {
        console.log(error.response.data)
        next(error);
    }
}



songsRoutes.get('/', get);


export default songsRoutes;