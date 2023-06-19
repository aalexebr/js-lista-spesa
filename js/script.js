let list = [
    'a',
    'b',
    'c',
    'd'
]
console.log('list array', list)

let ul = document.createElement("ul");
document.body.appendChild(ul);

// cycle variable
let i = 0
while (i < list.length){
    ul.innerHTML += `
        <li>
            ${list[i]}
        </li>
    `
    console.log('list array', list[i])
    i++;
}