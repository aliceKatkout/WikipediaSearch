let userInput;
let searchUrl= "https://api.pons.com/v1/dictionaries?language=fr&q=";
const getBtn = document.getElementById("getData");

function goWiki(){
  userInput = document.getElementById("userinput").value;
  let url = searchUrl + userInput;
  console.log(url);
  return url;

}
const getData = () => {
  urlComplete = goWiki()
  var myInit = { method: 'GET',
  mode: 'cors',
  cache: 'default',
  headers: {
      "X-Secret": "76b3b75bc964f5d39b433af36c1cddcea9c4ce689f8b217416b1eb57d13774ce"
    }
 };
  console.log(urlComplete);
  fetch(urlComplete, myInit).then(function(response) {
    console.log(response);




    response.json().then(function(data)
    {
      console.log(data);
    });



  });
}


getBtn.addEventListener('click', getData);
//
// const xhr = new XMLHttpRequest();
// xhr.open('GET',urlComplete);
// xhr.send();

// .then((response) =>
//    response.json().then((data) => {
// console.log(data);
// }));

// response.json().then((data) => {
// console.log(data);
// })
