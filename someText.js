function myFunction() {
	var para = document.createElement("p");
  var t = document.createTextNode("Some Text");
  para.appendChild(t);
  document.body.appendChild(para);
}
