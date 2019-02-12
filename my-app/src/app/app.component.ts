import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //function used to create a node of type element
  createNode(element) {
    return document.createElement(element);
  }

  //function used to append and element to the parent element
  append(parent, el) {
    return parent.appendChild(el);
  }

  pokemon;

  addPoke(value) {
    this.pokemon = value;
    let ul = document.getElementById("pokemon");
    ul.innerHTML = "";
    document.querySelector('body h2').innerHTML = "Loading..."
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/" + this.pokemon + "/")
      .then(resp => resp.json())
      .then(function (data) {
        //change the header to the Pokemon chosen
        document.querySelector('body h2').innerHTML = `${data.name} #${data.id}`;
        //create nodes for each of our created info
        let li = document.createElement('li');
        let img = document.createElement('img');
        let img2 = document.createElement('img');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let type = document.createElement('h4');
          // this.li = this.createNode('li');
          // this.img = this.createNode('img'),
          // this.img2 = this.createNode('img'),
          // this.p = this.createNode('p'),
          // this.p2 = this.createNode('p'),
          // this.p3 = this.createNode('p'),
          // this.type = this.createNode('h4');

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
        li.appendChild(type);
        li.appendChild(p);
        li.appendChild(img);
        li.appendChild(p2);
        li.appendChild(img2);
        ul.appendChild(li);
        // this.append(li, type);
        // this.append(li, p);
        // this.append(li, img);
        // this.append(li, p2);
        // this.append(li, img2);
        // this.append(this.ul, li);
      })
  }
}
