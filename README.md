Simple JS navigation module(includes links "click" and "mouseover" events)" for your website, which gives you possibility to get rid of routine.

**Example:**

  https://codepen.io/mickyholbrook/pen/GRjqwJj

**Styles:**
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/nav-menu.min.css">
    
**Javascript**    
    
Put the script at the bottom of your markup: 

    <script src="./dist/js/nav-menu.min.js"></script>    
   
Or use import/require in your Javascript file:
    
    const NavMenu = require('./dist/js/nav-menu.min.js');
    
    or
    
    import NavMenu from './dist/js/nav-menu.min.js';
 
**Usage**
     
Create typical navigation structure with nested lists. 
      
         <ul class="header-nav">
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
 
       document.addEventListener('DOMContentLoaded', function () {
         new NavMenu({
           nav: '.header-nav',
           preventParentClick: true
         });
       });