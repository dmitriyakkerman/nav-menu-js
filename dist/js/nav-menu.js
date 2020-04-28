(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.NavMenu = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  class NavMenu {

    constructor(options = {}) {
      this.nav = options.nav;
      this.nav.classList.add('header-menu');

      this.preventParentClick = options.preventParentClick || false;

      this.init();
    }

    static clearClasses() {
      let menuElements = document.querySelectorAll('.header-menu > li > a');
      menuElements.forEach(menuElement => {
        menuElement.classList.remove('active');
      });
    }

    init() {
      this.initMouseEvents();
      this.initPreventParentClick();
    }

    initPreventParentClick() {

      let that = this;

      let headerSubmenus = document.querySelectorAll('.header-menu > li > a + ul');

      if(that.preventParentClick && headerSubmenus) {
        headerSubmenus.forEach(function(headerSubmenu) {
          let submenuToggler = headerSubmenu.previousElementSibling;

          submenuToggler.addEventListener('click', function (e) {
            e.preventDefault()
          })
        })
      }
    }

    initMouseEvents() {

      let that = this;

      let headerSubmenus = document.querySelectorAll('.header-menu > li > a + ul');
      let relativeLinks = document.querySelectorAll('.header-menu > li > a');

      if(headerSubmenus) {

        relativeLinks.forEach(function (relativeLink) {

          relativeLink.addEventListener('mouseover', function() {
            that.constructor.clearClasses();

            if (this.nextElementSibling) {
              relativeLink.classList.add('active')
            } else {
              relativeLink.classList.remove("active");
            }
          });

          document.body.addEventListener('mouseover', (event) => {
            if (!event.target.closest('.header-menu')) {
              relativeLink.classList.remove('active')
            }
          });

        })
      }
    }
  }

  return NavMenu;

}));