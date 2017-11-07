/* nos ayuda a que la pg funcione una vez que todo este cargado ...evento que le dice al objecto windows que se ejecute js despues de que carge todo*/

window.onload= function(){
/*DOM*/
var board = document.querySelector(".board-js")

board.addEventListener("click", addX)
};
/*en el parametro se agraga un evento y el segundo es lo que va hacerque seria el callback*
 board.addEventListener("click", function(event){
  *las funciones de css o style se cambian por camel-case ya no se usa (-)*
 event.target.style.backgroundColor = "red";
 });

 board.addEventListener("dblclick", function(event){
  event.target.style.backgroundColor = "blue";
  });

  board.addEventListener("mouseover", function(event){
   event.target.style.backgroundColor = "yellow";
  });

*para eliminar se pone remove y se agrega evento
  .board.removeEventListener(""; )*/


var centinel = true

board.addX(event){
  if(event.target.matches('td') && event.target.textContent === ''){
    if(centinel)
    event.target.textContent = 'X';
 else
    event.target.textContent = 'O';

    centinel = !centinel;
 }
};




  function addBgc(event){
    event.target.style.backgroundColor = "red";
  }
};
