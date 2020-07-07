// header

 window.onscroll=function(){
  var nav = document.getElementsByTagName('nav')[0];
  var img = document.getElementById('img');
  if(window.pageYOffset > 100){
    nav.style.backgroundColor="rgba(0,0,0,0.7)";
    nav.style.transition="0.7s";
    img.setAttribute("src","images/logo.jpg");
    img.className ="imgheaderjs";
  }else{
    nav.style.backgroundColor="";
    img.setAttribute("src","images/logo1.png");
    img.className = "imgheader  brightness";


  }
}

  //footer

var face = document.getElementById('face') ;
face.onclick = function(){
  window.open("https://www.facebook.com/%D8%A8%D9%86%D8%A7%D8%A1-%D9%84%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D8%A7%D8%AA-101090804737401/",
  "_blank")
}


// headermedia

{function mediaSidenav(){
  var sideNav = document.getElementById("mySidenav"),
  wid = window.outerWidth;
  if(wid <= 700){
    sideNav.classList = "sidenav";
  }
  else {
    sideNav.classList = "centernav";
  }
}};

window.onload = mediaSidenav;
window.onresize = mediaSidenav;




function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
