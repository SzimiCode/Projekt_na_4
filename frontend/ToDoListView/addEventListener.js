document.addEventListener('DOMContentLoaded', function () {
    var taskModal = new bootstrap.Modal(document.getElementById('taskModal'), {});
    var addTaskButton = document.getElementById('addTaskButton');
    var saveTaskButton = document.getElementById('saveTaskButton');
    var taskForm = document.getElementById('taskForm');
    
    // Event listener for Add Task button in Todo List view
    addTaskButton.addEventListener('click', function () {
        document.getElementById('taskForm').reset();  // Reset form
        taskModal.show();
    });
    
    // Assuming you have a function to handle clicks on calendar dates
    function onCalendarDateClick(date) {
        document.getElementById('taskForm').reset();  // Reset form
        document.getElementById('taskDate').value = date;
        taskModal.show();
    }

    // Event listener for Save Task button in modal
    saveTaskButton.addEventListener('click', function () {
        if (taskForm.checkValidity()) {
            // Gather task data
            var taskData = {
                title: document.getElementById('taskTitle').value,
                description: document.getElementById('taskDescription').value,
                category: document.getElementById('taskCategory').value,
                xp: document.getElementById('taskXp').value,
                date: document.getElementById('taskDate').value
            };
            
            // Handle the task data (e.g., save to database or update UI)
            console.log(taskData);  // For demonstration purposes
            
            // Close the modal
            taskModal.hide();
        } else {
            taskForm.reportValidity();
        }
    });

    // Example implementation of a calendar date click handler
    // Replace this with your actual calendar implementation
    document.getElementById('calendar').addEventListener('click', function(event) {
        var clickedDate = new Date().toISOString().split('T')[0]; // Get the current date as an example
        onCalendarDateClick(clickedDate);
    });
});