const list = [
    'a',
    'b',
    'c',
    'd',
    'e'
]
console.log('list array', list)
// created ul for the cycle to create li based ff the array iterations
const ul = document.createElement("ul");
document.body.appendChild(ul);

// cycle variable
let i = 0
// cycle with condition to limit its duration
while (i < list.length){
    ul.innerHTML += `
        <li>
            ${list[i]}
        </li>
    `

    // OR
    // const li = document.createElement("li");
    // ul.append(li)
    // li.innerHTML = list[i]
    // progression of iterations
    i++;
}