//function used to create a node of type element
function createNode(element)
{
	return document.createElement(element);
}

//function used to append and element to the parent element
function append(parent,el)
{
	return parent.appendChild(el);
}

// our constant that will save the list that we will load
// data into
const ul = document.getElementById("pokemon");

// our event listener
// will capture our entered info and display it on the page
// will call the pokemon api and display what is entered
// --MORE INFO WILL BE ADDED--
document.getElementById('searchBtn').addEventListener('click', function (e) {
    e.preventDefault();
    let userSearch = document.getElementById('searchField').value;
    ul.innerHTML = "";
    document.querySelector('body h2').innerHTML = "Loading..."
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/" + userSearch + "/")
        .then(resp => resp.json())
        .then(function (data) {
            //change the header to the Pokemon chosen
            document.querySelector('body h2').innerHTML = `${data.name} #${data.id}`;
            //create nodes for each of our created info
            let li = createNode('li'),
                img = createNode('img'),
                img2 = createNode('img'),
            p = createNode('p');
            p2 = createNode('p');
            p3 = createNode('p');
            type = createNode('h4');

            //create a variable that will save our HTML information
            //created because some Pokemon have multiple types
            var typeInfo = '';
            //check if the Pokemon selected has multiple types
            for (var i = 0; i < data.types.length; i++) {
                //format accordingly
                if (data.types.length > 1 && i == 0) {
                    typeInfo += data.types[i].type.name + "/";
                }
                else {
                    typeInfo += data.types[i].type.name;
                }
            }

            //set the data to our pulled information

            //set the first sprite image
            img.src = data.sprites.front_default;
            //third sprite image
            img2.src = data.sprites.front_shiny;
            //update the html for headers
            p.innerHTML = "Normal Sprite";
            p2.innerHTML = "Shiny Sprite";
            p3.innerHTML = "Information";
            //add the types into the html
            type.innerHTML = "Type: " + typeInfo + "<br />";

            //append all the elements to the list
            append(li, type);
            append(li, p);
            append(li, img);
            append(li, p2);
            append(li, img2);
            append(ul, li);
        })
        //catch any errors the code runs into
        .catch(function (error) {
            //log those errors into the console
            console.log(error);
        }
        );
})

document.getElementById('moreInfoBtn').addEventListener('click', function(e) {
    e.preventDefault();
})