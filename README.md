**Styles:**
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/nav-menu.min.css">
    
**Javascript**    
    
Put the script at the bottom of your markup: 

    <script src="./dist/js/nav-menu.js"></script>    
   
Or use import/require in your Javascript file:
    
    const NavMenu = require('./dist/js/nav-menu.js');
    
    or
    
    import NavMenu from './dist/js/nav-menu.js';
 
**Usage**
     
1. Create typical menu-toggler.
2. Create mobile navigation component with any nesting and toggle elements. 
      
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
 
       document.addEventListener('DOMContentLoaded', function () {
         new NavMenu({
           nav: document.querySelector('.header-nav'),
           preventParentClick: true
         });
       });