const url  ='https://jsonplaceholder.typicode.com/users';
async function users(){
    const respone = await fetch(url);
    const data  = await respone.json();
    await data.forEach(element => {
        const table = document.getElementById("table");
        const {id,name,username,email,phone}=element;
        if(id<10){
        table.innerHTML+=`
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
                <td>${phone}</td>
            </tr>
            `
        }
    });
}
users();