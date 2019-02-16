import { Component } from '@angular/core';
import { getQueryValue } from '@angular/core/src/view/query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public pokemon: String;

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
      })
      document.getElementById('moreInfo').style.visibility = 'visible';
  }

  randPoke() {
    this.pokemon = (Math.floor(Math.random() * Math.floor(649))).toString();
    let ul = document.getElementById("pokemon");
    ul.innerHTML = "";
    document.querySelector('body h2').innerHTML = "Loading...";
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/" + this.pokemon + "/")
      .then(resp => resp.json())
      .then(function (data) {
        //change the header to the Pokemon chosen
        document.querySelector('body h2').innerHTML = "Pokemon Database";
        let value = <HTMLInputElement>document.getElementById('searchField')
        value.value = data.name;
        //create nodes for each of our created info
        let h2 = document.createElement('h2');
        let li = document.createElement('li');
        let img = document.createElement('img');
        let img2 = document.createElement('img');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let type = document.createElement('h4');

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

        h2.innerHTML = `${data.name} #${data.id}`;
        document.getElementById('titleName').appendChild(h2);
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
      })
      document.getElementById('moreInfo').style.visibility = 'visible';
  }

  moreInfo(pokemon) {
    let ul = document.getElementById("pokemon");
    ul.innerHTML = "";
    document.querySelector('body h2').innerHTML = "Loading..."
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/" + pokemon + "/")
      .then(resp => resp.json())
      .then(function (data) {
        document.querySelector('body h2').innerHTML = "";
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let li = document.createElement('li');
        let img = document.createElement('img');
        let img2 = document.createElement('img');
        let img3 = document.createElement('img');
        let img4 = document.createElement('img');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');


        h1.innerHTML = `${data.name}</br>${data.id}`;
        img.src = data.sprites.front_default;
        p.innerHTML = "Normal";
        img2.src = data.sprites.back_default;
        p2.innerHTML = "Normal - Back";
        img3.src = data.sprites.front_shiny;
        p3.innerHTML = "Shiny";
        img4.src = data.sprites.back_shiny;
        p4.innerHTML = "Shiny - Back";

        h2.innerHTML = "Details";

        li.appendChild(h1);
        li.appendChild(h2);
        li.appendChild(img);
        li.appendChild(img2);
        li.appendChild(img3);
        li.appendChild(img4);

        ul.appendChild(li);
      })
  }
}
