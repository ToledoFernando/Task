document.getElementById('agregar').addEventListener('click',(e)=>{
    e.preventDefault();
    let new_id = idRandom();
    let tarea = document.getElementById('titulo');

    let new_task = create(tarea.value);
    let new_div = document.createElement('DIV');
    new_div.setAttribute('data-id', new_id)

    new_div.innerHTML = new_task;
    console.log(saveLocal(new_div.innerHTML, new_id))
    let div = document.querySelector('.tareasAgregadas');
    div.appendChild(new_div)
    borrar()
    tarea.value = "";

})

const borrar = function (){
    let botonesDelete = document.querySelectorAll('.delete');
    botonesDelete.forEach(boton =>{
        boton.addEventListener('click',(e)=>{
        let elemento = e.path[0].parentElement.parentElement.parentElement.parentElement;
        let data = elemento.getAttribute('data-id');
        localStorage.removeItem(data);
        elemento.remove();
        })
    })
}


function idRandom(){
    const id =  Math.round(Math.random()*1000);
    return id;
}

const saveLocal = function(item,id){
    localStorage.getItem(id);
    localStorage.setItem(id, item);
}



function create(task){
    let templete = `<div class="tarea">
    <div class="info">
        <p>${task}</p>
        <div class="botones">
            <button class="delete" id="delete">Eliminar</button>
        </div>
    </div>
</div>`;
    return templete;
}

const viewTask = function (){
    for (let i in localStorage){
        if(i != "length"){console.log()
            let new_div = document.createElement('DIV');
            new_div.setAttribute('data-id', i)
            new_div.innerHTML = localStorage.getItem(i);
            let div = document.querySelector('.tareasAgregadas');
            div.appendChild(new_div)

        }else{
            console.log(borrar())
            return
        }
    }
}
viewTask();