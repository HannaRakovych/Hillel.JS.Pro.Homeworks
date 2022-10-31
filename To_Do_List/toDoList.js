/* eslint-disable no-unused-vars */
const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const newTask = document.createElement('li');
    newTask.className = 'new-task';

    const text = document.createElement('p');
    text.innerHTML = input.value;
    
    newTask.appendChild(text);
    ul.appendChild(newTask);

    const deleteTask = document.createElement('div');
    deleteTask.className = 'btn-delete-task';
    deleteTask.innerHTML = 'x';
    newTask.appendChild(deleteTask);

    deleteTask.addEventListener('click', (event) =>{
        event.preventDefault();
    
        const newTaskDelete = document.querySelector('.new-task');
        ul.removeChild(newTaskDelete);
    })

    return input.value = '';
})

