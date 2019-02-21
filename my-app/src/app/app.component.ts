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
    event.preventDefault();
    this.pokemon = value;
    let ul = document.getElementById("pokemon");
    let btn1 = <HTMLInputElement> document.getElementById('searchBtn');
    let btn2 = <HTMLInputElement> document.getElementById('randBtn');
    ul.innerHTML = "";
    document.querySelector('body h2').innerHTML = "Loading...";
    btn1.disabled = true;
    btn2.disabled = true;
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/" + this.pokemon + "/")
      .then(resp => resp.json())
      .then(function (data) {
        //change the header to the Pokemon chosen
        document.querySelector('body h2').innerHTML = "Pokemon Database";
        let value = <HTMLInputElement>document.getElementById('searchField')
        value.value = data.name;
        //create nodes for each of our created info
        let div = document.getElementById('pokemon');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let img2 = document.createElement('img');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let type = document.createElement('h4');

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'img_div');
        let div3 = document.createElement('div');
        div3.setAttribute('class', 'img_div');

        img.setAttribute('class', 'lrg_image');
        img2.setAttribute('class', 'lrg_image');
        h2.setAttribute('class', 'p_name');
        p.setAttribute('class', 'img_txt');
        p2.setAttribute('class', 'img_txt');

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
        div.appendChild(type);
        div2.appendChild(p);
        div2.appendChild(img);
        div3.appendChild(p2);
        div3.appendChild(img2);
        div.appendChild(div2);
        div.appendChild(div3);
      })
      document.getElementById('moreInfo').style.visibility = 'visible';
      btn1.disabled = false;
      btn2.disabled = false;
  }

  randPoke() {
    event.preventDefault();
    this.pokemon = (Math.floor(Math.random() * Math.floor(649)) + 1).toString();
    document.getElementById('titleName').innerHTML = "";
    document.getElementById('pokemon').innerHTML = "";
    document.querySelector('body h2').innerHTML = "Loading...";
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/" + this.pokemon + "/")
      .then(resp => resp.json())
      .then(function (data) {
        //change the header to the Pokemon chosen
        document.querySelector('body h2').innerHTML = "Pokemon Database";
        let value = <HTMLInputElement>document.getElementById('searchField')
        value.value = data.name;
        //create nodes for each of our created info
        let div = document.getElementById('pokemon');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let img2 = document.createElement('img');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let type = document.createElement('h4');

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'img_div');
        let div3 = document.createElement('div');
        div3.setAttribute('class', 'img_div');

        img.setAttribute('class', 'lrg_image');
        img2.setAttribute('class', 'lrg_image');
        h2.setAttribute('class', 'p_name');
        p.setAttribute('class', 'img_txt');
        p2.setAttribute('class', 'img_txt');

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
        div.appendChild(type);
        div2.appendChild(p);
        div2.appendChild(img);
        div3.appendChild(p2);
        div3.appendChild(img2);
        div.appendChild(div2);
        div.appendChild(div3);
      })
      document.getElementById('moreInfo').style.visibility = 'visible';
  }

  moreInfo(pokemon) {
    event.preventDefault();
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
