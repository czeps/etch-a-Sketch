const container = document.querySelector('.main-container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    container.innerHTML = '';

    let gridSize = Number(document.querySelector('input').value)
    const currentSize = 800 / gridSize;
    const divsNumber = gridSize ** 2;

    for (let i = 0; i < divsNumber; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'child')
        div.setAttribute('style', 'width: ' + currentSize + 'px; height:' + currentSize + 'px')
        div.setAttribute('id', 'child' + i)
        container.appendChild(div);

    }

    const allChildren = document.querySelectorAll('.child');

    allChildren.forEach((child) => {
        child.addEventListener('mousemove', () => {
            const currentChild = document.querySelector('#' + child.id);
            // currentChild.setAttribute('class', 'modified');
            const red = Math.floor(Math.random() * 225);
            const green = Math.floor(Math.random() * 225);
            const blue = Math.floor(Math.random() * 225);
            currentChild.style.backgroundColor = "rgb("+red+","+green+","+blue+")"

        })
    });

});
