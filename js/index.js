
function createNode(element){

    return document.createElement(element);

}

function append(parent, el){
    return parent.appendChild(el)

}

const ul = document.getElementById("users");
const div = document.getElementById
const url = 'https://randomuser.me/api/?results=5'

fetch(url)
.then( (resp) => resp.json() )
.then( function(data){
    let authors = data.results;
    return authors.map(function(author){
        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span')
        br   = createNode('br');

        img.src=author.picture.medium;

        span.innerHTML = `${author.name.first}
        ${author.name.last}`;

        append(li, img)

        append(li, span)
        // append(span,br)

        append(ul, li)
    })
})

.catch(function(error){
    console.log(JSON.stringify(error))
})



function myFunction() {
    var x = document.getElementById("users");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

