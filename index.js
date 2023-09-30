
let data = []
let container

if (localStorage.getItem('data')) {
    let data11 = localStorage.getItem('data')
    let data1 = JSON.parse(data11)
    data = data1
}
else {
    localStorage.setItem("data", JSON.stringify(data))
}
function addTask() {

    let task = document.getElementById("inputvalue")
    container = document.getElementById('showTask')
    let taskobj = {
        id: data.length,
        value: task.value
    }
    for (let index = 0; index < data.length; index++) {
        if (data[index].value == taskobj.value) {
            alert("duplicated are not allowed")
            return

        }

    }
    let p = document.createElement('p')
    p.id = "task_" + taskobj.id
    container.appendChild(p)
    p.innerHTML = `<input type="checkbox" onchange="handleCheckbox(this)">
    <input  onchange="handleChange(this)" value=${taskobj.value}>
    <button style="background-color: #272E4B;
    color: white;
    text-align: center;border: 1px solid #272E4B;"  onclick="Delete(${taskobj.id})">
    <i class="fa fa-trash" aria-hidden="true"></i>
    </button>`
    data.push(taskobj)
    localStorage.setItem("data", JSON.stringify(data))
    task.value = ''
}
function show() {
    container = document.getElementById('showTask')

    for (let index = 0; index <= data?.length; index++) {
        const element = data[index];
        let p = document.createElement('p')
        p.id = "task_" + element.id
        

        container.appendChild(p)
        p.innerHTML = `<input type="checkbox"  onchange="handleCheckbox(this)" ><input  onchange="handleChange(this)" value=${element.value}>
        <button onclick="Delete(${element.id})" style="background-color: #272E4B; color: white;
        text-align: center;border: 1px solid #272E4B;border-radius: 0px 0px 14px 14px ">
        <i class="fa fa-trash" aria-hidden="true"></i>
        </button>`


    }


}

function Delete(id) {
    let element = document.getElementById(`task_${id}`)
    element.remove()
    data.pop(id)
    let attend1 = localStorage.getItem('data')
    let attend = JSON.parse(attend1)
    attend.pop(id);
    localStorage.setItem('data', JSON.stringify(attend));


}

function handleChange(input) {
    input.textContent = `${input.value}`;
    const parentElement = input.parentNode;
    console.log(parentElement.id)
    let iid = parentElement.id.indexOf("_") + 1
    let m = parentElement.id[iid]
    data.splice(m, 1, { value: input.value, id: m })
    localStorage.setItem("data", JSON.stringify(data))

}

function handleCheckbox(checkbox) {
    const parentElement = checkbox.parentNode;
    let el = document.getElementById(parentElement.id)
    let ell = el.childNodes

    ell[1].style = "text-decoration:line-through"

}


