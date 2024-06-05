let container=document.querySelector('#container');
let tableBody = document.getElementById("todoTableBody");

let total_D
let lim
fetchData('https://jsonplaceholder.typicode.com/todos?_page=${i}&_limit=${lim}')
async function fetchData(url,para=''){
    let res= await fetch(`${url}${para}`);
    let data = await res.json();
    console.log(res.headers.get('X-Total-Count'));
    pagi()
    displayTodo(data) 
    console.log(data);
}


function displayTodo(data) {

    tableBody.innerHTML = '';
    data.map((el, i) => {
        let td1 = document.createElement('td');
        td1.innerText=el.id

        let td2 = document.createElement('td');
        td2.innerText=el.userId

        let td3 = document.createElement('td');
        td3.innerText=el.title

        let td4 = document.createElement('td');
        td4.innerText=el.completed

       
        let tr = document.createElement('tr')
        tr.append(td1, td2, td3, td4);
        tableBody.append(tr);
    })
}

function pagi(){
    container.innerHTML=null
    total_D=200;
    lim = 10;
    let aver_Data= Math.ceil(total_D/lim)
    for(let i = 1;i<=aver_Data;i++){
        let btnn = document.createElement('button');
        btnn.textContent=i;
        btnn.addEventListener('click',function(){
            fetchData(`https://jsonplaceholder.typicode.com/todos?_page=${i}&_limit=${lim}`)
        })
        container.append(btnn)
    }
}



