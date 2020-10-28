let userInput;
let searchUrl= "http://fr.wikipedia.org/w/api.php?action=opensearch&search=";
const getBtn = document.getElementById("getData");

function goWiki(){
  userInput = document.getElementById("userinput").value;
  let url = searchUrl + userInput;
  console.log(url);

}
const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET','http://fr.wikipedia.org/w/api.php?action=opensearch&search=hello');
  xhr.send();
}

getBtn.addEventListener('click', getData);
