/**
 * @jest-environment jsdom
 */

let NavMenu = require('../src/js/nav-menu');

describe('NavMenu testing', () => {

    test('Defining NavMenu', () => {
        expect(window.NavMenu).toBeDefined();
        expect(NavMenu).toBeDefined();
    });

    document.body.innerHTML = `
        <ul class="header-nav" role="navigation" aria-label="Header links">
             <li>
                 <a href="">Home</a>
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
         </ul>    
    `;

    let navMenuInstance = new NavMenu({
        nav: '.header-nav',
        preventParentClick: true
    });

    test('Testing NavMenu instance', () => {
        expect(navMenuInstance).not.toBeUndefined();
        expect(navMenuInstance).toBeInstanceOf(NavMenu);
        expect(document.querySelector('.header-nav').classList.contains('nav-menu')).toBeTruthy();
    });

});