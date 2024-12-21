$(document).ready(function () {
    // Load To-Do List
    window.onload = () => {
        loadToDo();
        }
    });

    // Add a new To-Do
    document.getElementById("newBtn").onclick = () => {
        const todoText = prompt("Enter your TO DO:").trim();
        if (todoText) {
            addToDo(todoText);
            saveToDo();
        }
    };

    // Function to add a To-Do
    function addToDo(text) {
        const toDoDiv = document.createElement("div");
        toDoDiv.textContent = text;
        toDoDiv.onclick = () => deleteToDo(toDoDiv);
        const list = document.getElementById("ft_list");

        if (list.firstChild) {
            list.insertBefore(toDoDiv, list.firstChild);
        } else {
            list.appendChild(toDoDiv);
        }

    }

    // Add click event to delete To-Do
    function deleteToDo(toDoDiv) {
        if (confirm("Do you really want to delete this TO DO?")) {
            toDoDiv.remove();
            saveToDo();
        }
    }

    // Save To-Do List to cookies
    function saveToDo() {
        const list = document.querySelectorAll("#ft_list div");
        const toDoArray = [];
        const exdays = 1; // Expire in 1 day
        list.forEach(item => toDoArray.push(item.textContent));
        document.cookie =  + ";path=/";

        // Add expire date (so it does not become a session cookie)
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = "todo=" + encodeURIComponent(JSON.stringify(toDoArray)) + ";" + expires + ";path=/";
    }

    // Load To-Do List from cookies
    function loadToDo() {
        const cookie = document.cookie.split("; ").find(row => row.startsWith("todo="));
        if (cookie) {
            const toDoArray = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
            toDoArray.reverse().forEach(item => addToDo(item));
        }
    }
