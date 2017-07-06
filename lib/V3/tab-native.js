
/* Native Javascript for Bootstrap 3 | Tab
-----------------------------------------*/

// TAB DEFINITION
// ==============
var Tab = function( element, options ) {

  // initialization element
  element = queryElement(element);

  // DATA API
  var heightData = element[getAttribute](dataHeight),
    
      // strings
      component = 'tab', height = 'height', isAnimating = 'isAnimating';

  // set default animation state
  element[isAnimating] = false;

  // set options
  options = options || {};
  this[height] = supportTransitions ? (options[height] || heightData === 'true') : false; // filter legacy browsers

  // bind, event targets
  var self = this, next,
    tabs = getClosest(element,'.nav'),
    tabsContentContainer,
    dropdown = tabs && queryElement('.dropdown',tabs),
    activeTab, activeContent, nextContent,
    // trigger
    triggerShow = function() {
      bootstrapCustomEvent.call(next, shownEvent, component, activeTab);
      if (tabsContentContainer) { // height animation
        (function(){
          setTimeout(function(){
            tabsContentContainer[style][height] = '';
            removeClass(tabsContentContainer,collapsing);
            activeTab[isAnimating] = next[isAnimating] = false;
          },200);
        }());
      } else { 
        activeTab[isAnimating] = next[isAnimating] = false; 
      }
    },
    triggerHide = function() {
      removeClass(activeContent,active);
      addClass(nextContent,active);
      setTimeout(function() {
        addClass(nextContent,inClass);
        nextContent[offsetHeight];
        if (tabsContentContainer) addClass(tabsContentContainer,collapsing);
        (function() {
          bootstrapCustomEvent.call(next, showEvent, component, activeTab);
          (function() {
            if(tabsContentContainer) tabsContentContainer[style][height] = getMaxHeight(nextContent) + 'px'; // height animation
            bootstrapCustomEvent.call(activeTab, hiddenEvent, component, next);
          }());
        }());
      },20);
    };

  if (!tabs) return; // invalidate 

  // private methods
  var getActiveTab = function() {
      var activeTabs = getElementsByClassName(tabs,active), activeTab;
      if ( activeTabs[length] === 1 && !hasClass(activeTabs[0],'dropdown') ) {
        activeTab = activeTabs[0];
      } else if ( activeTabs[length] > 1 ) {
        activeTab = activeTabs[activeTabs[length]-1];
      }
      return activeTab[getElementsByTagName]('A')[0];
    },
    getActiveContent = function() {
      return queryElement(getActiveTab()[getAttribute]('href'));
    },
    // handler
    clickHandler = function(e) {
      e.preventDefault();
      next = e[target][getAttribute](dataToggle) === component || targetsReg.test(e[target][getAttribute]('href')) 
           ? e[target] : e[target][parentNode]; // allow for child elements like icons to use the handler
      self.show();
    };

  // public method
  this.show = function() { 
    next = element; // the tab we clicked is now the next tab
    nextContent = queryElement(next[getAttribute]('href')); //this is the actual object, the next tab content to activate
    activeTab = getActiveTab(); 
    activeContent = getActiveContent();

    if ( (!activeTab[isAnimating] || !next[isAnimating]) && !hasClass(next[parentNode],active) ) {
      activeTab[isAnimating] = next[isAnimating] = true;
      removeClass(activeTab[parentNode],active);
      addClass(next[parentNode],active);

      if ( dropdown ) {
        if ( !hasClass(element[parentNode][parentNode],'dropdown-menu') ) {
          if (hasClass(dropdown,active)) removeClass(dropdown,active);
        } else {
          if (!hasClass(dropdown,active)) addClass(dropdown,active);
        }
      }
      
      if (tabsContentContainer) tabsContentContainer[style][height] = getMaxHeight(activeContent) + 'px'; // height animation

      (function(){
        removeClass(activeContent,inClass);
        bootstrapCustomEvent.call(activeTab, hideEvent, component, next);
        (function(){
          hasClass(activeContent, 'fade') ? emulateTransitionEnd(activeContent, triggerHide) : triggerHide();
        }());
      }());

      (function(){
        hasClass(nextContent, 'fade') ? emulateTransitionEnd(nextContent, triggerShow) : triggerShow();
      }());
    }
  };

  // init
  if ( !(stringTab in element) ) { // prevent adding event handlers twice
    on(element, clickEvent, clickHandler);
  }
  if (this[height]) { tabsContentContainer = getActiveContent()[parentNode]; }
  element[stringTab] = this;
};

// TAB DATA API
// ============
initializeDataAPI(stringTab, Tab, dataToggle);

