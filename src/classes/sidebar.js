export class Sidebar {
    constructor(selector, reRender, deleteAll) {
        this.$el = document.querySelector(selector);
        this.init();
        this.reRender = reRender;
        this.deleteAll = deleteAll;
    }

    init () {
        this.$el.addEventListener('submit', this.submit.bind(this))
    }

    submit(event) {
        event.preventDefault();
        if (event.target.name === 'delete') {

            this.deleteAll()

        } else {

            if(this.getValueInputs(event.target) === undefined) {
                return
            }
            const {type, value, imageStyle, style} = this.getValueInputs(event.target);
            this.clearInputs(event.target);

            this.model.forEach( form => {
                if(form.$addedInputs) form.$addedInputs.innerHTML = '';
            })

            let newBlock = '';
            this.model.forEach( form => {
                if(form.type === type){
                    newBlock = form.newBlock(value,{style,imageStyle});
                    return
                }
            })

            this.reRender(newBlock);
        }
    }


    clearInputs(eventTarget) {
        for(let i=1; eventTarget['value'+i]; i++) {
            eventTarget['value'+i].value = '';
        }
        if (eventTarget.value) eventTarget.value.value = '';
        if (eventTarget.style) eventTarget.style.value = '';
        if (eventTarget.imageStyle) eventTarget.imageStyle.value = '';
    }

    getValueInputs (eventTarget) {
        let value = [];
        let emptyItems = 0;
        if(eventTarget.value) {
            if(!eventTarget.value.value.trim()) {
               return
            }
            value = eventTarget.value.value;
        } else {
            for(let i = 1; eventTarget['value' + i]; i++){
                value.push(eventTarget['value' + i].value);
                emptyItems = !eventTarget['value' + i].value.trim() && emptyItems +1;
            }
            if(emptyItems === value.length) {
                return
            }
        }

        return {
            type: eventTarget.name,
            value,
            style: eventTarget.style?.value,
            imageStyle: eventTarget.imageStyle?.value
        }
    }

    render(sidebarModel) {
        this.model = sidebarModel;
        this.$el.innerHTML = '';
        this.model.forEach( form => {
            form.render(this.$el);
        })
    }
}




