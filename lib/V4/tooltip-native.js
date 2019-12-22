
/* Native JavaScript for Bootstrap 4 | Tooltip
---------------------------------------------*/

// TOOLTIP DEFINITION
// ==================
var Tooltip = function( element,options ) {

  // initialization element
  element = queryElement(element);

  // set options
  options = options || {};

  // DATA API
  var animationData = element[getAttribute](dataAnimation),
      placementData = element[getAttribute](dataPlacement),
      delayData = element[getAttribute](dataDelay),
      containerData = element[getAttribute](dataContainer),

      // strings
      listenerShow = 'listenerShow',
      listenerHide = 'listenerHide',
      component = 'tooltip',
      classString = 'class',
      title = 'title',
      fade = 'fade',
      div = 'div',
      // custom events
      showCustomEvent = bootstrapCustomEvent(showEvent, component),
      shownCustomEvent = bootstrapCustomEvent(shownEvent, component),
      hideCustomEvent = bootstrapCustomEvent(hideEvent, component),
      hiddenCustomEvent = bootstrapCustomEvent(hiddenEvent, component),

      // check container
      containerElement = queryElement(options[container]),
      containerDataElement = queryElement(containerData),

      // maybe the element is inside a modal
      modal = getClosest(element,'.modal'),

      // maybe the element is inside a fixed navbar
      navbarFixedTop = getClosest(element,'.'+fixedTop),
      navbarFixedBottom = getClosest(element,'.'+fixedBottom);

  // set instance options
  this[animation] = options[animation] && options[animation] !== fade ? options[animation] : animationData || fade;
  this[placement] = options[placement] ? options[placement] : placementData || top;
  this[delay] = parseInt(options[delay] || delayData) || 200;
  this[container] = containerElement ? containerElement
                  : containerDataElement ? containerDataElement
                  : navbarFixedTop ? navbarFixedTop
                  : navbarFixedBottom ? navbarFixedBottom
                  : modal ? modal : DOC[body];

  // bind, event targets, title and constants
  var self = this, timer = 0, placementSetting = this[placement], tooltip = null,
      titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle);

  if ( !titleString || titleString == "" ) return; // invalidate

  // private methods
  var removeToolTip = function() {
      self[container].removeChild(tooltip);
      tooltip = null; timer = null;
    },
    createToolTip = function() {
      titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle); // read the title again

      if ( titleString && titleString !== "" ) { // invalidate, maybe markup changed
        tooltip = DOC[createElement](div);
        tooltip[setAttribute]('role',component);
        tooltip[style][left] = '0';
        tooltip[style][top] = '0';

        // tooltip arrow
        var tooltipArrow = DOC[createElement](div);
        tooltipArrow[setAttribute](classString,'arrow');
        tooltip[appendChild](tooltipArrow);

        var tooltipInner = DOC[createElement](div);
        tooltipInner[setAttribute](classString,component+'-inner');
        tooltip[appendChild](tooltipInner);
        tooltipInner[innerHTML] = titleString;

        self[container][appendChild](tooltip);
        tooltip[setAttribute](classString, component + ' bs-' + component+'-'+placementSetting + ' ' + self[animation]);
      }
    },
    updateTooltip = function () {
      styleTip(element, tooltip, placementSetting, self[container]);
    },
    showTooltip = function () {
      !hasClass(tooltip,showClass) && ( addClass(tooltip,showClass) );
    },
    // triggers
    showTrigger = function() {
      on( globalObject, resizeEvent, self.hide, passiveHandler );
      dispatchCustomEvent.call(element, shownCustomEvent);
    },
    hideTrigger = function() {
      off( globalObject, resizeEvent, self.hide, passiveHandler );
      removeToolTip();
      dispatchCustomEvent.call(element, hiddenCustomEvent);
    },
    toggleEvents = function(action){
      action(element, mouseHover[0], self[listenerShow]);
      action(element, mouseHover[1], self[listenerHide]);
    };

  // public methods
  this[listenerShow] = (element[stringTooltip] && element[stringTooltip][listenerShow]) || function () {
    this[stringTooltip].show()
  };
  this[listenerHide] = (element[stringTooltip] && element[stringTooltip][listenerHide]) || function () {
    this[stringTooltip].hide()
  };
  this.show = function() {
    clearTimeout(timer);
    timer = setTimeout( function() {
      if (tooltip === null) {
        dispatchCustomEvent.call(element, showCustomEvent);
        if (showCustomEvent[defaultPrevented]) return;
        placementSetting = self[placement]; // we reset placement in all cases
        // if(createToolTip() == false) return;
        if(createToolTip() !== false) {
          updateTooltip();
          showTooltip();
          !!self[animation] ? emulateTransitionEnd(tooltip, showTrigger) : showTrigger();
        }
      }
    }, 20 );
  };
  this.hide = function() {
    clearTimeout(timer);
    timer = setTimeout( function() {
      if (tooltip && hasClass(tooltip,showClass)) {
        dispatchCustomEvent.call(element, hideCustomEvent);
        if (hideCustomEvent[defaultPrevented]) return;

        removeClass(tooltip,showClass);
        !!self[animation] ? emulateTransitionEnd(tooltip, hideTrigger) : hideTrigger();
      }
    }, self[delay]);
  };
  this.toggle = function() {
    if (!tooltip) { self.show(); }
    else { self.hide(); }
  };
  this.destroy = function() {
    toggleEvents(off);
    element[stringTooltip].hide();
    element[setAttribute](title, element[getAttribute](dataOriginalTitle));
    element[removeAttribute](dataOriginalTitle);
    delete element[stringTooltip];
  };

  if(!element[stringTooltip]){
    element[setAttribute](dataOriginalTitle, titleString);
    element[removeAttribute](title);
    toggleEvents(on);
  }

  element[stringTooltip] = self;
};

// TOOLTIP DATA API
// =================
supports[push]( [ stringTooltip, Tooltip, '['+dataToggle+'="tooltip"]' ] );

