document.addEventListener('DOMContentLoaded', function () {
    var taskModal = new bootstrap.Modal(document.getElementById('taskModal'), {});
    var addTaskButton = document.getElementById('addTaskButton');
    var saveTaskButton = document.getElementById('saveTaskButton');
    var taskForm = document.getElementById('taskForm');
    
    // Event listener for Add Task button in ToDo List view
    addTaskButton.addEventListener('click', function () {
        taskForm.reset();  // Reset form
        taskModal.show();
    });

    // Event listener for Save Task button in modal
    saveTaskButton.addEventListener('click', function () {
        console.log('Save button clicked'); // Sprawdzenie, czy kliknięcie jest rejestrowane
        
        if (taskForm.checkValidity()) {
            // Gather task data
            var taskData = {
                title: document.getElementById('taskTitle').value,
                description: document.getElementById('taskDescription').value,
                category: document.getElementById('taskCategory').value,
                xp: document.getElementById('taskXp').value,
                date: document.getElementById('taskDate').value
            };
            
            // Validate XP to be positive
            if (parseInt(taskData.xp) <= 0) {
                alert('XP must be a positive number.');
                return;
            }

            // Find the correct category list to add the task
            var categoryList = document.querySelector(`.card-header.bg-custom-${taskData.category.toLowerCase()} + .list-group`);

            // Create task HTML
            var taskHTML = `
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <input type="checkbox" class="task-checkbox">
                            <span class="ml-2">${taskData.title}</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="date-badge ml-2">${taskData.date}</div>
                            <div class="xp-badge ml-2">${taskData.xp}xp</div>
                            <div class="category-badge ml-2">${taskData.category}</div>
                        </div>
                    </div>
                </li>
            `;

            // Append task to category list
            categoryList.insertAdjacentHTML('beforeend', taskHTML);

            // Close the modal
            taskModal.hide();
        } else {
            taskForm.reportValidity();
        }
    });
});