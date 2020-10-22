export function col (content) {
    return `<div class = 'col-sm'>${content}</div>`
}

export function row (content, style) {
    return `<div class = 'row' style='${style}'>${content}</div>`
}

export function css (obj) {
    if (typeof obj === "string") return obj;

    const cbToString = (str, key) => str + `${key}:${obj[key]};`;
    return Object.keys(obj).reduce( cbToString ,'')
}

export function input (type, label) {
    return `
              <div class="form-group">
                <label for="${type}">${label}</label>
                <textarea class="form-control" id="${type}" name="${type}"></textarea> 
              </div>
    `
}

export function deleteButton () {
    return `<button type="submit" class="btn btn-danger btn-lg">
                Очистить все 
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>          
                </svg>        
             </button>
           `
}

export function addButton () {
    return  `<button type="submit" class="btn btn-primary">
                Добавить
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
             </button>`
}

export function form (type, name, inputs) {
    return `
        <form name=${type}>
            <h4>${name}</h4>
            ${inputs.join('')}
        </form>
        <hr/>   
    `
}


