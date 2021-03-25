let friends = [];

const addFriend = () =>{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let friend = {
        name: name,
        email: email,
        phone: phone
    }
    friends.push(friend);
    //console.log(friends);
    display();
}

const display = () =>{
    let  tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let friend of friends){
        let tr = "<tr>";
        tr += `<td>${friend.name}</td>`;
        tr += `<td>${friend.email}</td>`;
        tr +=`<td>${friend.phone}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}
