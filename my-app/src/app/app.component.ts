import { Component } from '@angular/core';
import { getQueryValue } from '@angular/core/src/view/query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // declare a public variable to hold user entry
  public pokemon: String;

  // first on-click for the search function
  addPoke(value) {
    event.preventDefault();
    // convert the user entry to lowercase
    this.pokemon = value.toLowerCase();
    // clear the html fields to to reset the page
    document.getElementById('titleName').innerHTML = "";
    document.getElementById('pokemon').innerHTML = "";
    // show a loading screen for smoother transitions
    document.querySelector('body h2').innerHTML = "Loading...";
    // resize the search field for better UI
    document.querySelector('h2').style.marginBottom = "20px";
    document.querySelector('form').style.maxWidth = '30em';
    document.querySelector('form').style.maxHeight = '20em';
    // save a variable for the buttons
    let btnCSS = document.getElementsByClassName('input-group-text');
    // resize each button for better UI
    for(let i = 0, il = btnCSS.length; i<il; i++) {
      btnCSS[i].className += ' smaller';
    }
    // fetch call for our API
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/" + this.pokemon + "/")
    // convert the response to JSON
    .then(resp => resp.json())
    // create a function with our data
    .then(function (data) {
      //change the header
      document.querySelector('body h2').innerHTML = "Pokemon Database";
      // load the value of the pokemon's name into the search field
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

      // give some of our created fields a class for CSS
      let div2 = document.createElement('div');
      div2.setAttribute('class', 'img_div');
      let div3 = document.createElement('div');
      div3.setAttribute('class', 'img_div');

      // continue setting classes
      img.setAttribute('class', 'lrg_image');
      img2.setAttribute('class', 'lrg_image');
      h2.setAttribute('class', 'p_name');
      p.setAttribute('class', 'img_txt');
      p2.setAttribute('class', 'img_txt');
      type.setAttribute('class','type');

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
      h2.innerHTML = `${data.name} </br> #${data.id}`;
      document.getElementById('titleName').appendChild(h2);
      //set the first sprite image
      img.src = data.sprites.front_default;
      //second sprite image
      img2.src = data.sprites.front_shiny;
      //update the html for headers
      p.innerHTML = "Normal Sprite";
      p2.innerHTML = "Shiny Sprite";
      p3.innerHTML = "Information";
      //add the types into the html
      type.innerHTML = "Type: " + typeInfo + "<br />";

      //append all the elements to the list
      div2.appendChild(p);
      div2.appendChild(img);
      div3.appendChild(p2);
      div3.appendChild(img2);
      div.appendChild(div2);
      div.appendChild(div3);
      div.appendChild(type);
      })
      // catch errors and reset the field
      // also give the user some feedback
      .catch(function(error) {
        console.log(error);
        window.alert('Pokemon does not exist\nTry Again');
        document.getElementById('titleName').innerHTML = "";
        document.getElementById('pokemon').innerHTML = "";
        document.querySelector('body h2').innerHTML = "Pokemon Database";
        document.getElementById('moreInfo').style.visibility = 'hidden';
      })
      // finally, make the more info button visible
      document.getElementById('moreInfo').style.visibility = 'visible';
  }

  // same function as above, but for the random button
  // this will generate a random number and display that pokemon's information
  randPoke() {
    event.preventDefault();
    // create a random number and assign that to the pokemon value
    this.pokemon = (Math.floor(Math.random() * Math.floor(721)) + 1).toString();
    document.getElementById('titleName').innerHTML = "";
    document.getElementById('pokemon').innerHTML = "";
    document.querySelector('body h2').innerHTML = "Loading...";
    document.querySelector('h2').style.marginBottom = "20px";
    document.querySelector('form').style.maxWidth = '30em';
    document.querySelector('form').style.maxHeight = '20em';
    let btnCSS = document.getElementsByClassName('input-group-text');
    for(let i = 0, il = btnCSS.length; i<il; i++) {
      btnCSS[i].className += ' smaller';
    }
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/" + this.pokemon + "/")
      .then(resp => resp.json())
      .then(function (data) {
        //change the header
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
        type.setAttribute('class','type');

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

        h2.innerHTML = `${data.name} </br> #${data.id}`;
        document.getElementById('titleName').appendChild(h2);
        //set the first sprite image
        img.src = data.sprites.front_default;
        //second sprite image
        img2.src = data.sprites.front_shiny;
        //update the html for headers
        p.innerHTML = "Normal Sprite";
        p2.innerHTML = "Shiny Sprite";
        p3.innerHTML = "Information";
        //add the types into the html
        type.innerHTML = "Type: " + typeInfo + "<br />";

        //append all the elements to the list
        div2.appendChild(p);
        div2.appendChild(img);
        div3.appendChild(p2);
        div3.appendChild(img2);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(type);
      })
      .catch(function(error) {
        console.log(error);
        window.alert('Pokemon does not exist\nTry Again');
        document.getElementById('titleName').innerHTML = "";
        document.getElementById('pokemon').innerHTML = "";
        document.querySelector('body h2').innerHTML = "Pokemon Database";
        document.getElementById('moreInfo').style.visibility = 'hidden';
      })
      document.getElementById('moreInfo').style.visibility = 'visible';
  }

  // function assigned to the more info button
  // will load a new screen that will display more information about selected pokemon
  moreInfo(pokemon) {
    event.preventDefault();
    // hide our more info button to prevent errors
    document.getElementById('moreInfo').style.visibility = 'hidden';
    // clear fields and add a loading message
    document.getElementById('pokemon').innerHTML = "";
    document.querySelector('body h2').innerHTML = "Loading..."
    // new fetch with the user's pokemon
    // this is why we populate the search with the pokemon's name
    fetch("http://pokeapi.salestock.net/api/v2/pokemon/" + pokemon + "/")
    .then(resp => resp.json())
    .then(function (data) {
      //change the header
      document.querySelector('body h2').innerHTML = "Pokemon Database";
      let value = <HTMLInputElement>document.getElementById('searchField')
      value.value = data.name;
      //create nodes for each of our created info
      let div = document.getElementById('pokemon');
      let img = document.createElement('img');
      let img2 = document.createElement('img');
      let img3 = document.createElement('img');
      let img4 = document.createElement('img');
      let p = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let type = document.createElement('h4');

      // create a div to hold all the information
      let details = document.createElement('div');
      details.className = 'details jumbotron';

      // create a string of HTML to populate our info div
      let detailsHTML = '';
      detailsHTML += "<h2 class='d_header'>Details</h2>";
      detailsHTML += "<br>";
      detailsHTML += "<h4>Height: " + data.height + " Weight: " +  data.weight + " BaseXP: " + data.base_experience + "<br>";
      detailsHTML += "<p>HP: " + data.stats[5].base_stat;
      detailsHTML += " Attack: " + data.stats[4].base_stat;
      detailsHTML += " Defence: " + data.stats[3].base_stat;
      detailsHTML += " Speed: " + data.stats[0].base_stat + "</p>";
      details.innerHTML = detailsHTML;

      // create div's for our images
      // there will be four images this time
      // they will be different sizes than previous page
      let div2 = document.createElement('div');
      div2.setAttribute('class', 'sml_img_div');
      let div3 = document.createElement('div');
      div3.setAttribute('class', 'sml_img_div');
      let div4 = document.createElement('div');
      div4.setAttribute('class', 'sml_img_div');
      let div5 = document.createElement('div');
      div5.setAttribute('class', 'sml_img_div');

      // give those image classes
      // also give the labels classes
      img.setAttribute('class', 'sml_image');
      img2.setAttribute('class', 'sml_image');
      img3.setAttribute('class', 'sml_image');
      img4.setAttribute('class', 'sml_image');
      p.setAttribute('class', 'img_txt');
      p2.setAttribute('class', 'img_txt');
      p3.setAttribute('class', 'img_txt');
      p4.setAttribute('class', 'img_txt');
      type.setAttribute('class','type');

      //create a variable that will save our HTML information
      //created because some Pokemon have multiple types
      let typeInfo = '';
      //check if the Pokemon selected has multiple types
      for (let i = 0; i < data.types.length; i++) {
        //format accordingly
        if (data.types.length > 1 && i == 0) {
          typeInfo += data.types[i].type.name + "/";
        }
        else {
          typeInfo += data.types[i].type.name;
        }
      }

      //set the data to our pulled information
      //set the sprite images
      img.src = data.sprites.front_default;
      img2.src = data.sprites.front_shiny;
      img3.src = data.sprites.back_default;
      img4.src = data.sprites.back_shiny;
      //update the html for headers
      p.innerHTML = "Normal Sprite";
      p2.innerHTML = "Shiny Sprite";
      p3.innerHTML = "Normal Sprite - Back";
      p4.innerHTML = "Shiny Sprite - Back";
      //add the types into the html
      type.innerHTML = "Type: " + typeInfo + "<br />";

      //append all the elements to the list
      div2.appendChild(p);
      div2.appendChild(img);
      div3.appendChild(p2);
      div3.appendChild(img2);
      div4.appendChild(p3);
      div4.appendChild(img3);
      div5.appendChild(p4);
      div5.appendChild(img4);
      div.appendChild(div2);
      div.appendChild(div3);
      div.appendChild(div4);
      div.appendChild(div5);
      div.appendChild(type);
      div.appendChild(details);
      })
      .catch(function(error) {
        // error message that will clear everything if it finds errors
        console.log(error);
        window.alert('Pokemon does not exist.\nTry again.');
        document.getElementById('titleName').innerHTML = "";
        document.getElementById('pokemon').innerHTML = "";
        document.querySelector('body h2').innerHTML = "Pokemon Database";
        document.getElementById('moreInfo').style.visibility = 'hidden';
      })
  }
}
