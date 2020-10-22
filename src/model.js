import image from './assets/cotte.jpg'
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from "./classes/blocks";

export const model = [
    new TitleBlock('Здесь может быть ваш заголовок :)', {
        tag: 'h2',
        style : {
            'border-radius': '10px',
            margin: ' 10px',
            color: 'white',
            background:'linear-gradient(45deg, red, blue)',
            padding:'2rem',
            'text-align': 'center'
        }
    }),

    new TextBlock(`Это конструктор сайтов. Используя боковое меню вы можете добавлять заголовки, картинки,
                         абзаци и колонки c текстом. Для стилизации блоков используйте css-свойства, пример: padding: 1rem; color: green . 
                         Для очистки этой страницы нажмите на "Очистить все".`,
        {
            style: {
                'border-radius': '10px',
                border: '2px solid blue',
                margin: ' 10px',
                'font-size': '1.2rem',
                padding: '2rem',
                color: ' blue',
                'font-weight': 'bold'
            }
    }),

    new ImageBlock(image, {
        style: {
            background: 'linear-gradient(#fff, green, 80%, #4a00e0)',
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyle: {
            'border-radius': '10px',
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),

    new TitleBlock('Скороговорки', {
        tag: 'h3',
        style : {
            'text-decoration': 'underline',
            color: 'white',
            background: '#4a00e0',
            padding:'1rem',
            'text-align': 'center'
        }
    }),

    new ColumnsBlock([
        'Карл у Клары украл рекламу, а Клара у Карла украла бюджет.',
        'Брейншторм: гам, гром, ор ртов, пир рифм, вдруг — бум! Блеск!',
        'Регулировщик лигуриец регулировал в Лигурии.',
    ], {
            style: {
                background: 'linear-gradient(#4a00e0,#9d00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }),
]