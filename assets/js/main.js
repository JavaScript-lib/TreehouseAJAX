const roomRequest = new XMLHttpRequest();
const employeeRequest = new XMLHttpRequest();

employeeRequest.onreadystatechange = () => {
    if(employeeRequest.readyState === 4) {
        if(employeeRequest.status === 200) {
            const employees = JSON.parse(employeeRequest.responseText);
            let statusEmployeeHTML = '<ul class="bulleted">';
            for(let i = 0; i < employees.length; i++) {
                if(employees[i].inoffice === true) {
                    statusEmployeeHTML += '<li class="in">';
                } else {
                    statusEmployeeHTML += '<li class="out">';
                }
                statusEmployeeHTML += employees[i].name;
                statusEmployeeHTML += '</li>';
            }
            statusEmployeeHTML += '</ul>';
            document.getElementById('employeeList').innerHTML = statusEmployeeHTML;
        }
    }
};
employeeRequest.open("GET", "assets/data/employees.json")
employeeRequest.send();

roomRequest.onreadystatechange = () => {
    if(roomRequest.readyState === 4) {
        const rooms = JSON.parse(roomRequest.responseText);
        let statusHTML = '<ul class="rooms">';
        for(let i = 0; i < rooms.length; i++) {
            if(rooms[i].available === true) {
                statusHTML += '<li class="empty">';
            } else {
                statusHTML +=  '<li class="full">';
            }
            statusHTML += rooms[i].room;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('roomList').innerHTML = statusHTML;
    }
};
roomRequest.open("GET", "assets/data/rooms.json");
roomRequest.send();


