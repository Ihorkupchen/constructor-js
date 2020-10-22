import {Site} from "./site";
import {Sidebar} from "./sidebar";
import {sidebarModel} from "../sidebarModel";

export class App {
    constructor(model) {
        this.model = model;
    }

    init () {
        const site = new Site('#site');

        const modelLocalStorage = window.localStorage.getItem('model');
        if(modelLocalStorage) {
            this.model.length = 0 ;
            this.model.push({ toHTML(){ return modelLocalStorage} });
        }

        site.render(this.model);
        const reRender = (newBlock) => {
            this.model.push(newBlock);
            site.render(this.model);
        }

        const deleteAll = () => {
            this.model.length = 0 ;
            site.render(this.model);
        }

        const sidebar = new Sidebar('#panel', reRender, deleteAll.bind(this));
        sidebar.render(sidebarModel);
    }
}