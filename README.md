[![install size](https://packagephobia.com/badge?p=nav-menu-js)](https://packagephobia.com/result?p=nav-menu-js)
[![Build Status](https://travis-ci.org/dmitriyakkerman/nav-menu-js.svg?branch=master)](https://travis-ci.org/github/dmitriyakkerman/nav-menu-js)

Simple JS navigation module(includes links "click" and "mouseover" events)" for your website, which gives you possibility to get rid of routine.

**Example:**

  https://codepen.io/mickyholbrook/pen/GRjqwJj

**Installation:**

***npm***

    npm i nav-menu-js
    
Load the required JS to your entry JS file:

    let NavMenu = require('nav-menu-js');   
    or    
    import NavMenu from 'nav-menu-js';
    
Load the required stylesheet to your entry CSS file:
    
    @import "node_modules/nav-menu-js/index";
    
***Cloning git repository***

    1. Go to your project directory
    2. git clone https://github.com/dmitriyakkerman/nav-menu-js.git .
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/nav-menu.min.css">
    
  Put the module script at the bottom of your markup: 

    <script src="./dist/js/nav-menu.min.js"></script>  

**Usage**
     
Create typical navigation structure with nested lists. 
      
         <ul class="header-nav" role="navigation" aria-label="Header links">
             <li>
                 <a href="">Home</a>
             </li>
             <li>
                 <a href="">About</a>
             </li>
             <li>
                 <a href="">Services</a>
                 <ul>
                     <li>
                         <a href="">Service 1</a>
                     </li>
                     <li>
                         <a href="">Service 2</a>
                         <ul>
                             <li>
                                 <a href="">Service 2.1</a>
                             </li>
                             <li>
                                 <a href="">Service 2.2</a>
                             </li>
                         </ul>
                     </li>
                 </ul>
             </li>
             <li>
                 <a href="">Contact</a>
             </li>
         </ul>
         
**Initialization**

1. Specify root selector(string or DOM node) in "nav" option.
2. Specify "preventParentClick" option for preventing click event on parent links which have child elements("false" by default).
 
        //Initialization with script tag
 
        <script>
               document.addEventListener('DOMContentLoaded', function () {
                 new NavMenu({
                   nav: '.header-nav',
                   preventParentClick: true
                 });
               });
        </script>
        
    or
    
       //Initialization by creating [filename].js file and connecting in a script tag
        
       // init.js
        
       document.addEventListener('DOMContentLoaded', function () {
         new NavMenu({
           nav: '.header-nav',
           preventParentClick: true
         });
       }); 
       
       <script src="init.js"></script>
    
    