
/* Native Javascript for Bootstrap 3 | Dropdown
----------------------------------------------*/

// DROPDOWN DEFINITION
// ===================
var Dropdown = function( element, option ) {
  // initialization element
  element = queryElement(element);

  // set option
  this.persist = option === true || element[getAttribute]('data-persist') === 'true' || false;

  // constants, event targets, strings
  var self = this, isOpen = false,
    parent = element[parentNode],
    component = 'dropdown', open = 'open',
    relatedTarget = null,
    menu = queryElement('.dropdown-menu', parent),
    children = menu[getElementsByTagName]('*'),

    // handlers
    keyHandler = function(e) {
      if (isOpen && (e.which == 27 || e.keyCode == 27)) { relatedTarget = null; hide(); } // e.keyCode for IE8     
    },
    clickHandler = function(e) {
      var eventTarget = e[target],
        hasData = eventTarget && (eventTarget[getAttribute](dataToggle) || eventTarget[parentNode] && getAttribute in eventTarget[parentNode] && eventTarget[parentNode][getAttribute](dataToggle));
      if ( eventTarget === element || eventTarget === parent || eventTarget[parentNode] === element ) {
        e.preventDefault(); // comment this line to stop preventing navigation when click target is a link 
        relatedTarget = element;
        self.toggle();
      } else if ( isOpen ) {
        if ( eventTarget === menu || children && nodeListToArray(children)[indexOf](eventTarget) > -1 && (self.persist || hasData) ) {
          return;
        } else { relatedTarget = null; hide(); }
      }
      (/\#$/.test(eventTarget.href) || eventTarget[parentNode] && /\#$/.test(eventTarget[parentNode].href)) && e.preventDefault(); // should be here to prevent jumps
    },
    // private methods
    show = function() {
      bootstrapCustomEvent.call(parent, showEvent, component, relatedTarget);
      addClass(parent,open);
      menu[setAttribute](ariaExpanded,true);
      bootstrapCustomEvent.call(parent, shownEvent, component, relatedTarget);
      on(document, keydownEvent, keyHandler);
      isOpen = true;
    },
    hide = function() {
      bootstrapCustomEvent.call(parent, hideEvent, component, relatedTarget);
      removeClass(parent,open);
      menu[setAttribute](ariaExpanded,false);
      bootstrapCustomEvent.call(parent, hiddenEvent, component, relatedTarget);
      off(document, keydownEvent, keyHandler);
      isOpen = false;
    },
    hitKeyOpen = function(e){
      if (!/(38|40|27)/.test(e.keyCode)) return
      show();
    };

  // public methods
  this.toggle = function() {
    if (hasClass(parent,open) && isOpen) { hide(); } 
    else { show(); }
  };

  // init
  if ( !(stringDropdown in element) ) { // prevent adding event handlers twice
    menu[setAttribute]('tabindex', '0'); // Fix onblur on Chrome | Safari
    on(document, clickEvent, clickHandler);
    on(element, keydownEvent, hitKeyOpen);
  }
  element[stringDropdown] = this;
};

// DROPDOWN DATA API
// =================
initializeDataAPI( stringDropdown, Dropdown, dataToggle );

