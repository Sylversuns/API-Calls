document.addEventListener('DOMContentLoaded', bindButtons);
function bindButtons(){
document.getElementById('textSubmit').addEventListener('click', function(event){
  event.preventDefault();
  var req = new XMLHttpRequest();
  req.open('POST', 'http://httpbin.org/post', true);
  req.send(document.getElementById('inputText').value);
  req.onload = function(){
    var response = JSON.parse(req.responseText);
  console.log(response.data);
  document.getElementById('outputText').textContent = response.data;
  };
  })
}