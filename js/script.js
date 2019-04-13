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

        line.appendChild(element);
    })

    target.appendChild(line);
});

const renderedLines = document.querySelectorAll('.line');

renderedLines.forEach(elem => {
    setInterval( () => {
        elem.style.backgroundColor = hexGenerator();
    }, elem.dataset.updateTime)
});
