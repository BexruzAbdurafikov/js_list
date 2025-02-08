let students = [
    { id: 1, name: `Bruce Reyes`, year: 1997 },
    { id: 2, name: `Benjamin Dean`, year: 1196 },
    { id: 3, name: `Philip Lucas`, year: 1525 }
];

function drawTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    students.forEach((student, index) => {
        const tr = document.createElement('tr');

        const index_td = document.createElement('td');
        index_td.textContent = index + 1;
        tr.append(index_td);

        const name = document.createElement('td');
        name.textContent = student.name;
        tr.append(name);

        const year = document.createElement('td');
        year.textContent = student.year;
        tr.append(year);

        const actions = document.createElement('td');

        const editButton = document.createElement('button');
        editButton.textContent = '✏️';
        editButton.onclick = () => editStudent(student.id);
        actions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.onclick = () => deleteStudent(student.id);
        actions.appendChild(deleteButton);

        tr.append(actions);

        tbody.appendChild(tr);
    });
}

function addStudent() {
    const name = document.querySelector('#name').value;
    const year = document.querySelector('#year').value;

    if (name.trim() === "" || year.trim() === "") {
        alert("Пожалуйста, заполните все поля!");
    }

    students.push({
        id: Date.now(),
        name,
        year: parseInt(year)
    });

    document.querySelector("#name").value = "";
    document.querySelector("#year").value = "";

    drawTable();
}

function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    drawTable();
}

function editStudent(id) {
    const student = students.find(student => student.id === id);
    const newName = prompt("Введите новое имя:", student.name);
    const newYear = prompt("Введите новый год рождения:", student.year);

    if (newName !== null && newYear !== null) {
        student.name = newName;
        student.year = parseInt(newYear);
        drawTable();
    }
}

document.querySelector('.add_elem button').onclick = () => {
    addStudent();
};

drawTable();
