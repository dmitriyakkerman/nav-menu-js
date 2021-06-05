/**
 * @jest-environment jsdom
 */

const NavMenu = require('../src/js/nav-menu');
const navMenuMarkup = require('./nav-menu-markup');

describe('NavMenu testing', () => {

    test('Defining NavMenu', () => {
        expect(window.NavMenu).toBeDefined();
        expect(NavMenu).toBeDefined();
    });

    document.body.innerHTML = navMenuMarkup;

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