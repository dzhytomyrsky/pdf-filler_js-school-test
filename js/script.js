// Data
const params = {
    lines: [
        {
            background: '#00f',
            updateTime: 3000,
            elements: [
                {
                    background: '#f0f',
                    width: 25
                },
                {
                    background: '#00f',
                    width: 25
                },
                {
                    background: '#f0f',
                    width: 25
                },
            ]
        },
        {
            background: '#00f',
            updateTime: 1000,
            elements: [
                {
                    background: '#f0f',
                    width: 25
                },
                {
                    background: '#0f0',
                    width: 5
                },
                {
                    background: '#f0f',
                    width: 25
                },
            ]
        },
    ]
}


// Solution
const target = document.getElementById('app');

const lineHeight = Math.round(10000 / params.lines.length)/100;

const hexGenerator = () => (
    `#${Math.floor(Math.random()*16777215).toString(16)}`
);

params.lines.map(item => {
    const line = document.createElement('div');
    line.style.height = `${lineHeight}%`;
    line.style.backgroundColor = item.background;
    line.dataset.updateTime = item.updateTime;
    line.classList.add('line');

    item.elements.map(elem => {
        const element = document.createElement('div');
        element.style.height = '100%';
        element.style.width = `${elem.width}%`;
        element.style.backgroundColor = elem.background;
        element.classList.add('line__element');
        // element.dataset.updateTime = item.updateTime;
        
        line.appendChild(element);
    })

    target.appendChild(line);
});

const renderedLines = document.querySelectorAll('.line');
// const renderedLineElements = document.querySelectorAll('.line__element');

const fireColorInterval = (elems) => {
    elems.forEach(e => {
        setInterval( () => {
            e.style.backgroundColor = hexGenerator();
        }, e.dataset.updateTime)
    })
}

fireColorInterval(renderedLines);
// fireColorInterval(renderedLineElements);

/*
    Реализовал скрипт согласно условиям задания. 
    Обновляются фоновые цвета линий.

    Поскольку в задании не написано об обновлении цвета фона для элементов закомментировал этот код.    
    Для того, чтоб функционал работал надо раскомментировать строки: 66, 75, 86

    Код написан используя ES6, соглсно https://caniuse.com/ 
    все 3 обязательных браузера для тестирования поддерживают использование:
     - переменных const (prove link: https://caniuse.com/#search=const);
     - переменных let (prove link: https://caniuse.com/#search=let);
     - стралочных функций (prove link: https://caniuse.com/#search=arrow%20functions);
     - шаблонные строки (prove link: https://caniuse.com/#search=template%20string).
    При необходимости могу переписать на ES5.

     Буду очень благодарен за любые комментарии и советы на:
      - почту: d.zhytomyrsky@gmail.com
      - FB: https://www.facebook.com/dmytro.zhytomyrsky
*/
