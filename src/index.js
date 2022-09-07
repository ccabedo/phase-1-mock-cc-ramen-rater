fetch ('http://localhost:3000/ramens')
.then ((res) => res.json())
.then((json) => console.log(json))


let obj = JSON.parse(json);


// document.querySelector()

// cons 
// let ramenMenu = document.getElementById("ramen-menu")
// let ramen_card = document.createElement("div");
// ramen_card.className = "card"
// ramenMenu.append(ramen_card)


// button.addEventListener('click'), () => {
//     console.log('button clicked', )
//     document.body.appendChild(button)}


const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(event);
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);
