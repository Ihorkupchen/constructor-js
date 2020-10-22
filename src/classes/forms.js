import {addButton, deleteButton, form, input} from "../utils";
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./blocks";

class Form {
    constructor(type, Block) {
        this.type = type;
        this.Block = Block;
    }
    newBlock(value, options) {
        return new this.Block(value, options)
    }

    render(el) {
        el.insertAdjacentHTML('beforeend', this.toHTML());
    }

    toHTML () {
        throw new Error('Метод toHTML должен быть реализован ')
    }
}

export class TitleForm extends Form {
    constructor() {
        super('title', TitleBlock);
    }

    toHTML() {
        return form(this.type,'Заголовок',[
            input('value', 'Текст заголовка' ),
            input('style', 'Стили для блока' ),
            addButton()
        ])
    }
}

export class TextForm extends Form {
    constructor() {
        super('text', TextBlock);
    }

    toHTML() {
        return form(this.type, 'Aбзац', [
            input('value', 'Текст' ),
            input('style', 'Стили для блока' ),
            addButton()
        ])
    }
}

export class ImageForm extends Form {
    constructor() {
        super('image', ImageBlock);
    }

    toHTML() {
        return form(this.type, 'Картинка', [
            input('value', 'Вставте ссылку на картинку' ),
            input('style', 'Стили для блока' ),
            input('imageStyle', 'Стили для картинки' ),
            addButton()
        ])
    }
}

export class ColumnsForm extends Form {
    constructor() {
        super('columns', ColumnsBlock);
        this.numCol = 2;
    }

    render(el) {
        super.render(el);
        this.$addedInputs = document.querySelector('#addedInputs');
        this.$addInputBtn = document.querySelector('#addInputBtn')
        this.$addInputBtn.addEventListener('click', this.addInput.bind(this))
    }

    addInput(e) {
        e.preventDefault();
        this.numCol++;
        this.$addedInputs.insertAdjacentHTML('beforeend',
            input(`value${this.numCol}`, `Текст ${this.numCol}`)
        );
    }

    toHTML() {

        return form(this.type, 'Колонки', [
            input('value1','Текст 1'),
            input('value2','Текст 2'),
            `<div id ='addedInputs'></div>`,
            `<button id="addInputBtn" class="btn btn-success">Добавить еще одну колонку</button>`,
            input('style', 'Стили для блока' ),
            addButton()
        ])
    }
}

export class DeleteForm extends Form {
    constructor() {
        super('delete');
    }

    toHTML() {
            return form(this.type, '', [
                deleteButton()
            ])
    }
}



