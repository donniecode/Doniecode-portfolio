function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  const menuBtn = document.querySelector('.menu-btn');
  sidebar.style.display='flex';
  menuBtn.style.display="none";
  const expanded = menuBtn.firstElementChild;
  if(expanded.getAttribute('aria-expanded')=='false'){
    expanded.setAttribute('aria-expanded', 'true');
  } else{
    expanded.setAttribute('aria-expanded', 'false');
  }
  
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  const menuBtn = document.querySelector('.menu-btn');
  sidebar.style.display='none';
  menuBtn.style.display="block";
}

function showDropdownhtml(){
  const dropdown = document.querySelector('.html-content');
  dropdown.style.display='flex';
}

let hidedropdownhtml;
document.querySelector('.html-content svg').onclick = function(){
  let hidedropdownhtml = document.querySelector('.html-content').style.display='none';
}

function showDropdowncss(){
  const dropdown = document.querySelector('.css-content');
  dropdown.style.display='flex';
}

let hidedropdowncss;
document.querySelector('.css-content svg').onclick = function(){
  let hidedropdowncss = document.querySelector('.css-content').style.display='none';
}

function showDropdownjs(){
  const dropdown = document.querySelector('.js-content');
  dropdown.style.display='flex';
}

let hidedropdownjs;
document.querySelector('.js-content svg').onclick = function(){
  let hidedropdownjs = document.querySelector('.js-content').style.display='none';
} 

