
function AddMore() {
    document.getElementById('s').innerHTML = '';

    let name = document.getElementById('name').value;
    if (name == '') {
        document.getElementById('s').innerHTML = "*Enter note to add";
    }
    else {
        let box = document.getElementById('box');
        let li = document.createElement('li');

        li.textContent = name;

        const d = new Date().toLocaleString();
        let p = document.createElement('p')
        console.log(p);
        p.innerText = d;
        li.appendChild(p);

        let a = document.createElement('a');
        a.textContent = 'X';

        a.href = "#";
        li.appendChild(a);

        let pos = box.firstElementChild;

        if (pos == null) {
            box.appendChild(li);
        }
        else {
            box.insertBefore(li, pos);
        }

    }
    name = document.getElementById('name').value = "";
}

let btn = document.querySelector('ul');
btn.addEventListener('click', function (e) {
    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
})
