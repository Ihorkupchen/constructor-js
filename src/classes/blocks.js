import {col, css, row} from "../utils";

class Block {
    constructor(value, options ) {
        this.value = value;
        this.options = options
    }

    toHTML () {
        throw new Error('Метод toHTML должен быть реализован ')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML () {
        const {tag = 'h1', style} = this.options;
        return  row(col(`<${tag}>${this.value}</${tag}>`), css(style))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML () {
        const { style } = this.options;
        return row(col(`<p>${this.value}</p>`),css(style))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { style, imageStyle: is, alt } = this.options;
        return row(`<img src=${this.value} alt='${alt}' style= '${css(is)}'>`,css(style))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { style } = this.options;
        const toString = i => col(`<p>${i}</p>`)
        let html = this.value.map(toString).join('')
        return row(html,css(style))
    }
}