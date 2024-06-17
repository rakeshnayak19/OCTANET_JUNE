document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = taskText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(li);
            });
            li.appendChild(span);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            newTaskInput.value = '';
        }
    }
});