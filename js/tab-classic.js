'use strict';

const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('#tabs-1 [data-panes]'),
}

refs.controls.addEventListener('click', onControlClick);

function onControlClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'A') {
        return
    }
    const currentActiveControlItem = refs.controls.querySelector('.controls__item--active')//перевіряємо чи активний такий клас, для того, щоб вимикати підсвітку при виборі іншого елементу
    if(currentActiveControlItem) {
        currentActiveControlItem.classList.remove('controls__item--active')//знімаємо клас з елементу, якщо на попередньому він є

        const paneId = getPaneId(currentActiveControlItem)
        const pane = getPaneById(paneId);
        pane.classList.remove('pane--active');
    }

    const controlItem = e.target;
    controlItem.classList.add('controls__item--active')//вішаємо клас на вибраний елемент

    const paneId = getPaneId(controlItem)
    const pane = getPaneById(paneId);
    pane.classList.add('pane--active')//добавляємо клас дісплей блок для відображення елементу

}

function getPaneId(control) {//отримуємо значення з href
        return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
    return refs.panes.querySelector(`#${id}`);//шукаємо по Id елемент в якого айдішник зі значенням з href 
}
 
