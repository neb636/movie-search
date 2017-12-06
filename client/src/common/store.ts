import { observable, autorun, action } from 'mobx';


export class Store {

    @observable searchTerm = '';

    constructor() {
        autorun(() => console.log(this));
    }

    @action setSearchTerm(searchTerm: string) {
        this.searchTerm = searchTerm;
    }
}


export default new Store();