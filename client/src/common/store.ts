import { observable, autorun, action, runInAction, computed } from 'mobx';
import axios from 'axios';
import { BACKEND_URL } from './constants';
import { SongList } from '../../../shared-interfaces/interfaces';


export class Store {

    @observable searchTerm = '';
    @observable searchResult: SongList = {
        artists: null,
        tracks: null
    };
    @observable searchError = false;
    @observable isSearching = false;
    @observable currentSearchedResult = '';


    @computed get hasSearchResults(): boolean {
        return !!(this.searchResult.artists.length && this.searchResult.tracks.length);
    }

    constructor() {
        autorun(() => console.log(this));
    }


    @action setSearchTerm(searchTerm: string): void {
        this.searchTerm = searchTerm;
    }


    @action async search(): Promise<void> {

        try {
            this.searchError = false;
            this.isSearching = true;
            const { data } = await axios.get(`${BACKEND_URL}/songs?search=${this.searchTerm}`);

            runInAction(() => {
                this.currentSearchedResult = this.searchTerm;
                this.searchResult.artists = data.artists;
                this.searchResult.tracks = data.tracks;
                this.isSearching = false;
            });
        }
        catch (error) {
            runInAction(() => {
                this.currentSearchedResult = this.searchTerm;
                this.searchError = true;
                this.isSearching = false;
            });
        }
    }
}