let coin = {
  state: 0,
  flip: function () {
    this.state = Math.round(Math.random());
  },
  toString: function () {
    //return (this.state === 0) ? "Tails" : "Heads";
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  },
  toHTML: function () {
    let image = document.createElement("img");

    if (this.state === 0) {
      image.src = "images/heads.jpg";
      image.alt = "Quarter Heads";
    } else {
      image.src = "images/tails.jpg";
    }
    return image;
  },
};

console.log(coin.state);

//console.log(coin.toHTML())

function display20Flips() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    let li = document.createElement("li");
    li.append(coin.toString());
    document.body.append(li);
  }
}
/*use a loop to flip the coin 20 times. Each time the coin flips, display the 
result of each flip as a string on the page (make use of your toString() method)*/

function display20Images() {
  for (let i = 0; i < 20; i++) {
    coin.flip();

    document.body.append(coin.toHTML());
  }
}

display20Flips();
display20Images();
/*use a loop to flip the coin 20 times…but this time instead of displaying the 
result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method)*/

/*let image = document.createElement("img");
image.src = "./images/heads.jpg";

document.body.append(image);

//let paragraph = document.createElement("p");
//paragraph.innerHTML = "Heads";

document.body.append(paragragh);

function display20Flips() {}

function display20Images() {}*/
