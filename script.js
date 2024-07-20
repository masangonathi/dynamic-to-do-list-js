document.addEventListener('DOMContentLoaded',() => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText => {
                createTaskElement(taskText);
            });
        }
    }

    function saveTasks() {
        localStorage.setItem('task', JSON.stringify(tasks));
    }

   function createTaskElement(taskText) { 
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = () => taskList.removeChild(listItem);
    tasks = tasks.filter(task => task !== taskText);
    saveTasks();

};

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    function addTask(){
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
        return;
    }

    tasks.push(taskText);
    saveTasks();
    createTaskElement(taskText);

    taskInput.value = '';
}
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();
});
