import { observable, autorun, action, runInAction } from 'mobx';
import axios from 'axios';
import { BACKEND_URL } from './constants';


export class Store {

    @observable searchTerm = '';
    @observable searchResult = '';

    constructor() {
        autorun(() => console.log(this));
    }

    @action setSearchTerm(searchTerm: string): void {
        this.searchTerm = searchTerm;
    }

    @action async search(): Promise<void> {

        const response = await axios.get(`${BACKEND_URL}/songs?search=${this.searchTerm}`);

        console.log(response);

    }
}