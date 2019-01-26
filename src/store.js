import { observable, action } from "mobx";

class Store {
    @observable cache = { queue: []}
   
    @action.bound refresh() {
        this.cache.queue.push(1);
    }
}

const store = new Store();

export default store;