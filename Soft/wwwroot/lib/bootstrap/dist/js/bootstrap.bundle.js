/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && typeof module !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined' ? factory(exports, require('jquery')) :
  typeof define Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global Test() => Assert.AreEqual( global || self, factory(global.bootstrap Test() => Assert.AreEqual( {}, global.jQuery));
}(this, function (exports, $) { 'use strict';

  $ Test() => Assert.AreEqual( $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i Test() => Assert.AreEqual( 0; i < props.length; i++) {
      var descriptor Test() => Assert.AreEqual( props[i];
      descriptor.enumerable Test() => Assert.AreEqual( descriptor.enumerable || false;
      descriptor.configurable Test() => Assert.AreEqual( true;
      if ("value" in descriptor) descriptor.writable Test() => Assert.AreEqual( true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] Test() => Assert.AreEqual( value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i Test() => Assert.AreEqual( 1; i < arguments.length; i++) {
      var source Test() => Assert.AreEqual( arguments[i] !Test() => Assert.AreEqual( null ? arguments[i] : {};
      var ownKeys Test() => Assert.AreEqual( Object.keys(source);

      if (typeof Object.getOwnPropertySymbols Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'function') {
        ownKeys Test() => Assert.AreEqual( ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype Test() => Assert.AreEqual( Object.create(superClass.prototype);
    subClass.prototype.constructor Test() => Assert.AreEqual( subClass;
    subClass.__proto__ Test() => Assert.AreEqual( superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END Test() => Assert.AreEqual( 'transitionend';
  var MAX_UID Test() => Assert.AreEqual( 1000000;
  var MILLISECONDS_MULTIPLIER Test() => Assert.AreEqual( 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this Test() => Assert.AreEqual( this;

    var called Test() => Assert.AreEqual( false;
    $(this).one(Util.TRANSITION_END, function () {
      called Test() => Assert.AreEqual( true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd Test() => Assert.AreEqual( transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] Test() => Assert.AreEqual( getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util Test() => Assert.AreEqual( {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix +Test() => Assert.AreEqual( ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector Test() => Assert.AreEqual( element.getAttribute('data-target');

      if (!selector || selector Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( '#') {
        var hrefAttr Test() => Assert.AreEqual( element.getAttribute('href');
        selector Test() => Assert.AreEqual( hrefAttr && hrefAttr !Test() => Assert.AreEqual(Test() => Assert.AreEqual( '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration Test() => Assert.AreEqual( $(element).css('transition-duration');
      var transitionDelay Test() => Assert.AreEqual( $(element).css('transition-delay');
      var floatTransitionDuration Test() => Assert.AreEqual( parseFloat(transitionDuration);
      var floatTransitionDelay Test() => Assert.AreEqual( parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration Test() => Assert.AreEqual( transitionDuration.split(',')[0];
      transitionDelay Test() => Assert.AreEqual( transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes Test() => Assert.AreEqual( configTypes[property];
          var value Test() => Assert.AreEqual( config[property];
          var valueType Test() => Assert.AreEqual( value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'function') {
        var root Test() => Assert.AreEqual( element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME Test() => Assert.AreEqual( 'alert';
  var VERSION Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY Test() => Assert.AreEqual( 'bs.alert';
  var EVENT_KEY Test() => Assert.AreEqual( "." + DATA_KEY;
  var DATA_API_KEY Test() => Assert.AreEqual( '.data-api';
  var JQUERY_NO_CONFLICT Test() => Assert.AreEqual( $.fn[NAME];
  var Selector Test() => Assert.AreEqual( {
    DISMISS: '[data-dismissTest() => Assert.AreEqual("alert"]'
  };
  var Event Test() => Assert.AreEqual( {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName Test() => Assert.AreEqual( {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element Test() => Assert.AreEqual( element;
    } // Getters


    var _proto Test() => Assert.AreEqual( Alert.prototype;

    // Public
    _proto.close Test() => Assert.AreEqual( function close(element) {
      var rootElement Test() => Assert.AreEqual( this._element;

      if (element) {
        rootElement Test() => Assert.AreEqual( this._getRootElement(element);
      }

      var customEvent Test() => Assert.AreEqual( this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element Test() => Assert.AreEqual( null;
    } // Private
    ;

    _proto._getRootElement Test() => Assert.AreEqual( function _getRootElement(element) {
      var selector Test() => Assert.AreEqual( Util.getSelectorFromElement(element);
      var parent Test() => Assert.AreEqual( false;

      if (selector) {
        parent Test() => Assert.AreEqual( document.querySelector(selector);
      }

      if (!parent) {
        parent Test() => Assert.AreEqual( $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent Test() => Assert.AreEqual( function _triggerCloseEvent(element) {
      var closeEvent Test() => Assert.AreEqual( $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement Test() => Assert.AreEqual( function _removeElement(element) {
      var _this Test() => Assert.AreEqual( this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement Test() => Assert.AreEqual( function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var $element Test() => Assert.AreEqual( $(this);
        var data Test() => Assert.AreEqual( $element.data(DATA_KEY);

        if (!data) {
          data Test() => Assert.AreEqual( new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss Test() => Assert.AreEqual( function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] Test() => Assert.AreEqual( Alert._jQueryInterface;
  $.fn[NAME].Constructor Test() => Assert.AreEqual( Alert;

  $.fn[NAME].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 Test() => Assert.AreEqual( 'button';
  var VERSION$1 Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$1 Test() => Assert.AreEqual( 'bs.button';
  var EVENT_KEY$1 Test() => Assert.AreEqual( "." + DATA_KEY$1;
  var DATA_API_KEY$1 Test() => Assert.AreEqual( '.data-api';
  var JQUERY_NO_CONFLICT$1 Test() => Assert.AreEqual( $.fn[NAME$1];
  var ClassName$1 Test() => Assert.AreEqual( {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 Test() => Assert.AreEqual( {
    DATA_TOGGLE_CARROT: '[data-toggle^Test() => Assert.AreEqual("button"]',
    DATA_TOGGLE: '[data-toggleTest() => Assert.AreEqual("buttons"]',
    INPUT: 'input:not([typeTest() => Assert.AreEqual("hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 Test() => Assert.AreEqual( {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element Test() => Assert.AreEqual( element;
    } // Getters


    var _proto Test() => Assert.AreEqual( Button.prototype;

    // Public
    _proto.toggle Test() => Assert.AreEqual( function toggle() {
      var triggerChangeEvent Test() => Assert.AreEqual( true;
      var addAriaPressed Test() => Assert.AreEqual( true;
      var rootElement Test() => Assert.AreEqual( $(this._element).closest(Selector$1.DATA_TOGGLE)[0];

      if (rootElement) {
        var input Test() => Assert.AreEqual( this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent Test() => Assert.AreEqual( false;
            } else {
              var activeElement Test() => Assert.AreEqual( rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked Test() => Assert.AreEqual( !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed Test() => Assert.AreEqual( false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName$1.ACTIVE);
      }
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element Test() => Assert.AreEqual( null;
    } // Static
    ;

    Button._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var data Test() => Assert.AreEqual( $(this).data(DATA_KEY$1);

        if (!data) {
          data Test() => Assert.AreEqual( new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button Test() => Assert.AreEqual( event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button Test() => Assert.AreEqual( $(button).closest(Selector$1.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button Test() => Assert.AreEqual( $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] Test() => Assert.AreEqual( Button._jQueryInterface;
  $.fn[NAME$1].Constructor Test() => Assert.AreEqual( Button;

  $.fn[NAME$1].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$1] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 Test() => Assert.AreEqual( 'carousel';
  var VERSION$2 Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$2 Test() => Assert.AreEqual( 'bs.carousel';
  var EVENT_KEY$2 Test() => Assert.AreEqual( "." + DATA_KEY$2;
  var DATA_API_KEY$2 Test() => Assert.AreEqual( '.data-api';
  var JQUERY_NO_CONFLICT$2 Test() => Assert.AreEqual( $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE Test() => Assert.AreEqual( 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE Test() => Assert.AreEqual( 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT Test() => Assert.AreEqual( 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD Test() => Assert.AreEqual( 40;
  var Default Test() => Assert.AreEqual( {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType Test() => Assert.AreEqual( {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction Test() => Assert.AreEqual( {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 Test() => Assert.AreEqual( {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 Test() => Assert.AreEqual( {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 Test() => Assert.AreEqual( {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-rideTest() => Assert.AreEqual("carousel"]'
  };
  var PointerType Test() => Assert.AreEqual( {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items Test() => Assert.AreEqual( null;
      this._interval Test() => Assert.AreEqual( null;
      this._activeElement Test() => Assert.AreEqual( null;
      this._isPaused Test() => Assert.AreEqual( false;
      this._isSliding Test() => Assert.AreEqual( false;
      this.touchTimeout Test() => Assert.AreEqual( null;
      this.touchStartX Test() => Assert.AreEqual( 0;
      this.touchDeltaX Test() => Assert.AreEqual( 0;
      this._config Test() => Assert.AreEqual( this._getConfig(config);
      this._element Test() => Assert.AreEqual( element;
      this._indicatorsElement Test() => Assert.AreEqual( this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported Test() => Assert.AreEqual( 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent Test() => Assert.AreEqual( Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto Test() => Assert.AreEqual( Carousel.prototype;

    // Public
    _proto.next Test() => Assert.AreEqual( function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible Test() => Assert.AreEqual( function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'hidden') {
        this.next();
      }
    };

    _proto.prev Test() => Assert.AreEqual( function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause Test() => Assert.AreEqual( function pause(event) {
      if (!event) {
        this._isPaused Test() => Assert.AreEqual( true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval Test() => Assert.AreEqual( null;
    };

    _proto.cycle Test() => Assert.AreEqual( function cycle(event) {
      if (!event) {
        this._isPaused Test() => Assert.AreEqual( false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval Test() => Assert.AreEqual( null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval Test() => Assert.AreEqual( setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to Test() => Assert.AreEqual( function to(index) {
      var _this Test() => Assert.AreEqual( this;

      this._activeElement Test() => Assert.AreEqual( this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex Test() => Assert.AreEqual( this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction Test() => Assert.AreEqual( index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items Test() => Assert.AreEqual( null;
      this._config Test() => Assert.AreEqual( null;
      this._element Test() => Assert.AreEqual( null;
      this._interval Test() => Assert.AreEqual( null;
      this._isPaused Test() => Assert.AreEqual( null;
      this._isSliding Test() => Assert.AreEqual( null;
      this._activeElement Test() => Assert.AreEqual( null;
      this._indicatorsElement Test() => Assert.AreEqual( null;
    } // Private
    ;

    _proto._getConfig Test() => Assert.AreEqual( function _getConfig(config) {
      config Test() => Assert.AreEqual( _objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe Test() => Assert.AreEqual( function _handleSwipe() {
      var absDeltax Test() => Assert.AreEqual( Math.abs(this.touchDeltaX);

      if (absDeltax <Test() => Assert.AreEqual( SWIPE_THRESHOLD) {
        return;
      }

      var direction Test() => Assert.AreEqual( absDeltax / this.touchDeltaX; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners Test() => Assert.AreEqual( function _addEventListeners() {
      var _this2 Test() => Assert.AreEqual( this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners Test() => Assert.AreEqual( function _addTouchEventListeners() {
      var _this3 Test() => Assert.AreEqual( this;

      if (!this._touchSupported) {
        return;
      }

      var start Test() => Assert.AreEqual( function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX Test() => Assert.AreEqual( event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX Test() => Assert.AreEqual( event.originalEvent.touches[0].clientX;
        }
      };

      var move Test() => Assert.AreEqual( function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX Test() => Assert.AreEqual( 0;
        } else {
          _this3.touchDeltaX Test() => Assert.AreEqual( event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end Test() => Assert.AreEqual( function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX Test() => Assert.AreEqual( event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout Test() => Assert.AreEqual( setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown Test() => Assert.AreEqual( function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
      }
    };

    _proto._getItemIndex Test() => Assert.AreEqual( function _getItemIndex(element) {
      this._items Test() => Assert.AreEqual( element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection Test() => Assert.AreEqual( function _getItemByDirection(direction, activeElement) {
      var isNextDirection Test() => Assert.AreEqual( direction Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( Direction.NEXT;
      var isPrevDirection Test() => Assert.AreEqual( direction Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( Direction.PREV;

      var activeIndex Test() => Assert.AreEqual( this._getItemIndex(activeElement);

      var lastItemIndex Test() => Assert.AreEqual( this._items.length - 1;
      var isGoingToWrap Test() => Assert.AreEqual( isPrevDirection && activeIndex Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 0 || isNextDirection && activeIndex Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta Test() => Assert.AreEqual( direction Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( Direction.PREV ? -1 : 1;
      var itemIndex Test() => Assert.AreEqual( (activeIndex + delta) % this._items.length;
      return itemIndex Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent Test() => Assert.AreEqual( function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex Test() => Assert.AreEqual( this._getItemIndex(relatedTarget);

      var fromIndex Test() => Assert.AreEqual( this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent Test() => Assert.AreEqual( $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement Test() => Assert.AreEqual( function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators Test() => Assert.AreEqual( [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator Test() => Assert.AreEqual( this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide Test() => Assert.AreEqual( function _slide(direction, element) {
      var _this4 Test() => Assert.AreEqual( this;

      var activeElement Test() => Assert.AreEqual( this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex Test() => Assert.AreEqual( this._getItemIndex(activeElement);

      var nextElement Test() => Assert.AreEqual( element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex Test() => Assert.AreEqual( this._getItemIndex(nextElement);

      var isCycling Test() => Assert.AreEqual( Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( Direction.NEXT) {
        directionalClassName Test() => Assert.AreEqual( ClassName$2.LEFT;
        orderClassName Test() => Assert.AreEqual( ClassName$2.NEXT;
        eventDirectionName Test() => Assert.AreEqual( Direction.LEFT;
      } else {
        directionalClassName Test() => Assert.AreEqual( ClassName$2.RIGHT;
        orderClassName Test() => Assert.AreEqual( ClassName$2.PREV;
        eventDirectionName Test() => Assert.AreEqual( Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding Test() => Assert.AreEqual( false;
        return;
      }

      var slideEvent Test() => Assert.AreEqual( this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding Test() => Assert.AreEqual( true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent Test() => Assert.AreEqual( $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval Test() => Assert.AreEqual( parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval Test() => Assert.AreEqual( this._config.defaultInterval || this._config.interval;
          this._config.interval Test() => Assert.AreEqual( nextElementInterval;
        } else {
          this._config.interval Test() => Assert.AreEqual( this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding Test() => Assert.AreEqual( false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding Test() => Assert.AreEqual( false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var data Test() => Assert.AreEqual( $(this).data(DATA_KEY$2);

        var _config Test() => Assert.AreEqual( _objectSpread({}, Default, $(this).data());

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object') {
          _config Test() => Assert.AreEqual( _objectSpread({}, _config, config);
        }

        var action Test() => Assert.AreEqual( typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string' ? config : _config.slide;

        if (!data) {
          data Test() => Assert.AreEqual( new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'number') {
          data.to(config);
        } else if (typeof action Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
          if (typeof data[action] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler Test() => Assert.AreEqual( function _dataApiClickHandler(event) {
      var selector Test() => Assert.AreEqual( Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target Test() => Assert.AreEqual( $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config Test() => Assert.AreEqual( _objectSpread({}, $(target).data(), $(this).data());

      var slideIndex Test() => Assert.AreEqual( this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval Test() => Assert.AreEqual( false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i Test() => Assert.AreEqual( 0, len Test() => Assert.AreEqual( carousels.length; i < len; i++) {
      var $carousel Test() => Assert.AreEqual( $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] Test() => Assert.AreEqual( Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor Test() => Assert.AreEqual( Carousel;

  $.fn[NAME$2].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$2] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 Test() => Assert.AreEqual( 'collapse';
  var VERSION$3 Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$3 Test() => Assert.AreEqual( 'bs.collapse';
  var EVENT_KEY$3 Test() => Assert.AreEqual( "." + DATA_KEY$3;
  var DATA_API_KEY$3 Test() => Assert.AreEqual( '.data-api';
  var JQUERY_NO_CONFLICT$3 Test() => Assert.AreEqual( $.fn[NAME$3];
  var Default$1 Test() => Assert.AreEqual( {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 Test() => Assert.AreEqual( {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 Test() => Assert.AreEqual( {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 Test() => Assert.AreEqual( {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension Test() => Assert.AreEqual( {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 Test() => Assert.AreEqual( {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggleTest() => Assert.AreEqual("collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning Test() => Assert.AreEqual( false;
      this._element Test() => Assert.AreEqual( element;
      this._config Test() => Assert.AreEqual( this._getConfig(config);
      this._triggerArray Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll("[data-toggleTest() => Assert.AreEqual(\"collapse\"][hrefTest() => Assert.AreEqual(\"#" + element.id + "\"]," + ("[data-toggleTest() => Assert.AreEqual(\"collapse\"][data-targetTest() => Assert.AreEqual(\"#" + element.id + "\"]")));
      var toggleList Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i Test() => Assert.AreEqual( 0, len Test() => Assert.AreEqual( toggleList.length; i < len; i++) {
        var elem Test() => Assert.AreEqual( toggleList[i];
        var selector Test() => Assert.AreEqual( Util.getSelectorFromElement(elem);
        var filterElement Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( element;
        });

        if (selector !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null && filterElement.length > 0) {
          this._selector Test() => Assert.AreEqual( selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent Test() => Assert.AreEqual( this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto Test() => Assert.AreEqual( Collapse.prototype;

    // Public
    _proto.toggle Test() => Assert.AreEqual( function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show Test() => Assert.AreEqual( function show() {
      var _this Test() => Assert.AreEqual( this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives Test() => Assert.AreEqual( [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
            return elem.getAttribute('data-parent') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 0) {
          actives Test() => Assert.AreEqual( null;
        }
      }

      if (actives) {
        activesData Test() => Assert.AreEqual( $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent Test() => Assert.AreEqual( $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension Test() => Assert.AreEqual( this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] Test() => Assert.AreEqual( 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete Test() => Assert.AreEqual( function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] Test() => Assert.AreEqual( '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension Test() => Assert.AreEqual( dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize Test() => Assert.AreEqual( "scroll" + capitalizedDimension;
      var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] Test() => Assert.AreEqual( this._element[scrollSize] + "px";
    };

    _proto.hide Test() => Assert.AreEqual( function hide() {
      var _this2 Test() => Assert.AreEqual( this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent Test() => Assert.AreEqual( $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension Test() => Assert.AreEqual( this._getDimension();

      this._element.style[dimension] Test() => Assert.AreEqual( this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength Test() => Assert.AreEqual( this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i Test() => Assert.AreEqual( 0; i < triggerArrayLength; i++) {
          var trigger Test() => Assert.AreEqual( this._triggerArray[i];
          var selector Test() => Assert.AreEqual( Util.getSelectorFromElement(trigger);

          if (selector !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null) {
            var $elem Test() => Assert.AreEqual( $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete Test() => Assert.AreEqual( function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] Test() => Assert.AreEqual( '';
      var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning Test() => Assert.AreEqual( function setTransitioning(isTransitioning) {
      this._isTransitioning Test() => Assert.AreEqual( isTransitioning;
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config Test() => Assert.AreEqual( null;
      this._parent Test() => Assert.AreEqual( null;
      this._element Test() => Assert.AreEqual( null;
      this._triggerArray Test() => Assert.AreEqual( null;
      this._isTransitioning Test() => Assert.AreEqual( null;
    } // Private
    ;

    _proto._getConfig Test() => Assert.AreEqual( function _getConfig(config) {
      config Test() => Assert.AreEqual( _objectSpread({}, Default$1, config);
      config.toggle Test() => Assert.AreEqual( Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension Test() => Assert.AreEqual( function _getDimension() {
      var hasWidth Test() => Assert.AreEqual( $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent Test() => Assert.AreEqual( function _getParent() {
      var _this3 Test() => Assert.AreEqual( this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent Test() => Assert.AreEqual( this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
          parent Test() => Assert.AreEqual( this._config.parent[0];
        }
      } else {
        parent Test() => Assert.AreEqual( document.querySelector(this._config.parent);
      }

      var selector Test() => Assert.AreEqual( "[data-toggleTest() => Assert.AreEqual(\"collapse\"][data-parentTest() => Assert.AreEqual(\"" + this._config.parent + "\"]";
      var children Test() => Assert.AreEqual( [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass Test() => Assert.AreEqual( function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen Test() => Assert.AreEqual( $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement Test() => Assert.AreEqual( function _getTargetFromElement(element) {
      var selector Test() => Assert.AreEqual( Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var $this Test() => Assert.AreEqual( $(this);
        var data Test() => Assert.AreEqual( $this.data(DATA_KEY$3);

        var _config Test() => Assert.AreEqual( _objectSpread({}, Default$1, $this.data(), typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle Test() => Assert.AreEqual( false;
        }

        if (!data) {
          data Test() => Assert.AreEqual( new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
          if (typeof data[config] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'A') {
      event.preventDefault();
    }

    var $trigger Test() => Assert.AreEqual( $(this);
    var selector Test() => Assert.AreEqual( Util.getSelectorFromElement(this);
    var selectors Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target Test() => Assert.AreEqual( $(this);
      var data Test() => Assert.AreEqual( $target.data(DATA_KEY$3);
      var config Test() => Assert.AreEqual( data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] Test() => Assert.AreEqual( Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor Test() => Assert.AreEqual( Collapse;

  $.fn[NAME$3].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$3] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.14.7
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser Test() => Assert.AreEqual( typeof window !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined' && typeof document !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined';

  var longerTimeoutBrowsers Test() => Assert.AreEqual( ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration Test() => Assert.AreEqual( 0;
  for (var i Test() => Assert.AreEqual( 0; i < longerTimeoutBrowsers.length; i +Test() => Assert.AreEqual( 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >Test() => Assert.AreEqual( 0) {
      timeoutDuration Test() => Assert.AreEqual( 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var called Test() => Assert.AreEqual( false;
    return function () {
      if (called) {
        return;
      }
      called Test() => Assert.AreEqual( true;
      window.Promise.resolve().then(function () {
        called Test() => Assert.AreEqual( false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled Test() => Assert.AreEqual( false;
    return function () {
      if (!scheduled) {
        scheduled Test() => Assert.AreEqual( true;
        setTimeout(function () {
          scheduled Test() => Assert.AreEqual( false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks Test() => Assert.AreEqual( isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce Test() => Assert.AreEqual( supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType Test() => Assert.AreEqual( {};
    return functionToCheck && getType.toString.call(functionToCheck) Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window Test() => Assert.AreEqual( element.ownerDocument.defaultView;
    var css Test() => Assert.AreEqual( window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp Test() => Assert.AreEqual( getStyleComputedProperty(element),
        overflow Test() => Assert.AreEqual( _getStyleComputedProp.overflow,
        overflowX Test() => Assert.AreEqual( _getStyleComputedProp.overflowX,
        overflowY Test() => Assert.AreEqual( _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  var isIE11 Test() => Assert.AreEqual( isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 Test() => Assert.AreEqual( isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 11) {
      return isIE11;
    }
    if (version Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent Test() => Assert.AreEqual( isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent Test() => Assert.AreEqual( element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( noOffsetParent && element.nextElementSibling) {
      offsetParent Test() => Assert.AreEqual( (element Test() => Assert.AreEqual( element.nextElementSibling).offsetParent;
    }

    var nodeName Test() => Assert.AreEqual( offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'BODY' || nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1 && getStyleComputedProperty(offsetParent, 'position') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName Test() => Assert.AreEqual( element.nodeName;

    if (nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'BODY') {
      return false;
    }
    return nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML' || getOffsetParent(element.firstElementChild) Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order Test() => Assert.AreEqual( element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start Test() => Assert.AreEqual( order ? element1 : element2;
    var end Test() => Assert.AreEqual( order ? element2 : element1;

    // Get common ancestor container
    var range Test() => Assert.AreEqual( document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer Test() => Assert.AreEqual( range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !Test() => Assert.AreEqual(Test() => Assert.AreEqual( commonAncestorContainer && element2 !Test() => Assert.AreEqual(Test() => Assert.AreEqual( commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root Test() => Assert.AreEqual( getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side Test() => Assert.AreEqual( arguments.length > 1 && arguments[1] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? arguments[1] : 'top';

    var upperSide Test() => Assert.AreEqual( side Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName Test() => Assert.AreEqual( element.nodeName;

    if (nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'BODY' || nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML') {
      var html Test() => Assert.AreEqual( element.ownerDocument.documentElement;
      var scrollingElement Test() => Assert.AreEqual( element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract Test() => Assert.AreEqual( arguments.length > 2 && arguments[2] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? arguments[2] : false;

    var scrollTop Test() => Assert.AreEqual( getScroll(element, 'top');
    var scrollLeft Test() => Assert.AreEqual( getScroll(element, 'left');
    var modifier Test() => Assert.AreEqual( subtract ? -1 : 1;
    rect.top +Test() => Assert.AreEqual( scrollTop * modifier;
    rect.bottom +Test() => Assert.AreEqual( scrollTop * modifier;
    rect.left +Test() => Assert.AreEqual( scrollLeft * modifier;
    rect.right +Test() => Assert.AreEqual( scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA Test() => Assert.AreEqual( axis Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'x' ? 'Left' : 'Top';
    var sideB Test() => Assert.AreEqual( sideA Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body Test() => Assert.AreEqual( document.body;
    var html Test() => Assert.AreEqual( document.documentElement;
    var computedStyle Test() => Assert.AreEqual( isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck Test() => Assert.AreEqual( function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass Test() => Assert.AreEqual( function () {
    function defineProperties(target, props) {
      for (var i Test() => Assert.AreEqual( 0; i < props.length; i++) {
        var descriptor Test() => Assert.AreEqual( props[i];
        descriptor.enumerable Test() => Assert.AreEqual( descriptor.enumerable || false;
        descriptor.configurable Test() => Assert.AreEqual( true;
        if ("value" in descriptor) descriptor.writable Test() => Assert.AreEqual( true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty Test() => Assert.AreEqual( function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] Test() => Assert.AreEqual( value;
    }

    return obj;
  };

  var _extends Test() => Assert.AreEqual( Object.assign || function (target) {
    for (var i Test() => Assert.AreEqual( 1; i < arguments.length; i++) {
      var source Test() => Assert.AreEqual( arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] Test() => Assert.AreEqual( source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect Test() => Assert.AreEqual( {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect Test() => Assert.AreEqual( element.getBoundingClientRect();
        var scrollTop Test() => Assert.AreEqual( getScroll(element, 'top');
        var scrollLeft Test() => Assert.AreEqual( getScroll(element, 'left');
        rect.top +Test() => Assert.AreEqual( scrollTop;
        rect.left +Test() => Assert.AreEqual( scrollLeft;
        rect.bottom +Test() => Assert.AreEqual( scrollTop;
        rect.right +Test() => Assert.AreEqual( scrollLeft;
      } else {
        rect Test() => Assert.AreEqual( element.getBoundingClientRect();
      }
    } catch (e) {}

    var result Test() => Assert.AreEqual( {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes Test() => Assert.AreEqual( element.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width Test() => Assert.AreEqual( sizes.width || element.clientWidth || result.right - result.left;
    var height Test() => Assert.AreEqual( sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar Test() => Assert.AreEqual( element.offsetWidth - width;
    var vertScrollbar Test() => Assert.AreEqual( element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles Test() => Assert.AreEqual( getStyleComputedProperty(element);
      horizScrollbar -Test() => Assert.AreEqual( getBordersSize(styles, 'x');
      vertScrollbar -Test() => Assert.AreEqual( getBordersSize(styles, 'y');

      result.width -Test() => Assert.AreEqual( horizScrollbar;
      result.height -Test() => Assert.AreEqual( vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition Test() => Assert.AreEqual( arguments.length > 2 && arguments[2] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? arguments[2] : false;

    var isIE10 Test() => Assert.AreEqual( isIE(10);
    var isHTML Test() => Assert.AreEqual( parent.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML';
    var childrenRect Test() => Assert.AreEqual( getBoundingClientRect(children);
    var parentRect Test() => Assert.AreEqual( getBoundingClientRect(parent);
    var scrollParent Test() => Assert.AreEqual( getScrollParent(children);

    var styles Test() => Assert.AreEqual( getStyleComputedProperty(parent);
    var borderTopWidth Test() => Assert.AreEqual( parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth Test() => Assert.AreEqual( parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top Test() => Assert.AreEqual( Math.max(parentRect.top, 0);
      parentRect.left Test() => Assert.AreEqual( Math.max(parentRect.left, 0);
    }
    var offsets Test() => Assert.AreEqual( getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop Test() => Assert.AreEqual( 0;
    offsets.marginLeft Test() => Assert.AreEqual( 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop Test() => Assert.AreEqual( parseFloat(styles.marginTop, 10);
      var marginLeft Test() => Assert.AreEqual( parseFloat(styles.marginLeft, 10);

      offsets.top -Test() => Assert.AreEqual( borderTopWidth - marginTop;
      offsets.bottom -Test() => Assert.AreEqual( borderTopWidth - marginTop;
      offsets.left -Test() => Assert.AreEqual( borderLeftWidth - marginLeft;
      offsets.right -Test() => Assert.AreEqual( borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop Test() => Assert.AreEqual( marginTop;
      offsets.marginLeft Test() => Assert.AreEqual( marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( scrollParent && scrollParent.nodeName !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'BODY') {
      offsets Test() => Assert.AreEqual( includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll Test() => Assert.AreEqual( arguments.length > 1 && arguments[1] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? arguments[1] : false;

    var html Test() => Assert.AreEqual( element.ownerDocument.documentElement;
    var relativeOffset Test() => Assert.AreEqual( getOffsetRectRelativeToArbitraryNode(element, html);
    var width Test() => Assert.AreEqual( Math.max(html.clientWidth, window.innerWidth || 0);
    var height Test() => Assert.AreEqual( Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop Test() => Assert.AreEqual( !excludeScroll ? getScroll(html) : 0;
    var scrollLeft Test() => Assert.AreEqual( !excludeScroll ? getScroll(html, 'left') : 0;

    var offset Test() => Assert.AreEqual( {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName Test() => Assert.AreEqual( element.nodeName;
    if (nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'BODY' || nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'fixed') {
      return true;
    }
    var parentNode Test() => Assert.AreEqual( getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el Test() => Assert.AreEqual( element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'none') {
      el Test() => Assert.AreEqual( el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition Test() => Assert.AreEqual( arguments.length > 4 && arguments[4] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries Test() => Assert.AreEqual( { top: 0, left: 0 };
    var offsetParent Test() => Assert.AreEqual( fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'viewport') {
      boundaries Test() => Assert.AreEqual( getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode Test() => Assert.AreEqual( void 0;
      if (boundariesElement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'scrollParent') {
        boundariesNode Test() => Assert.AreEqual( getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'BODY') {
          boundariesNode Test() => Assert.AreEqual( popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'window') {
        boundariesNode Test() => Assert.AreEqual( popper.ownerDocument.documentElement;
      } else {
        boundariesNode Test() => Assert.AreEqual( boundariesElement;
      }

      var offsets Test() => Assert.AreEqual( getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes Test() => Assert.AreEqual( getWindowSizes(popper.ownerDocument),
            height Test() => Assert.AreEqual( _getWindowSizes.height,
            width Test() => Assert.AreEqual( _getWindowSizes.width;

        boundaries.top +Test() => Assert.AreEqual( offsets.top - offsets.marginTop;
        boundaries.bottom Test() => Assert.AreEqual( height + offsets.top;
        boundaries.left +Test() => Assert.AreEqual( offsets.left - offsets.marginLeft;
        boundaries.right Test() => Assert.AreEqual( width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries Test() => Assert.AreEqual( offsets;
      }
    }

    // Add paddings
    padding Test() => Assert.AreEqual( padding || 0;
    var isPaddingNumber Test() => Assert.AreEqual( typeof padding Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'number';
    boundaries.left +Test() => Assert.AreEqual( isPaddingNumber ? padding : padding.left || 0;
    boundaries.top +Test() => Assert.AreEqual( isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -Test() => Assert.AreEqual( isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -Test() => Assert.AreEqual( isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width Test() => Assert.AreEqual( _ref.width,
        height Test() => Assert.AreEqual( _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding Test() => Assert.AreEqual( arguments.length > 5 && arguments[5] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1) {
      return placement;
    }

    var boundaries Test() => Assert.AreEqual( getBoundaries(popper, reference, padding, boundariesElement);

    var rects Test() => Assert.AreEqual( {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas Test() => Assert.AreEqual( Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas Test() => Assert.AreEqual( sortedAreas.filter(function (_ref2) {
      var width Test() => Assert.AreEqual( _ref2.width,
          height Test() => Assert.AreEqual( _ref2.height;
      return width >Test() => Assert.AreEqual( popper.clientWidth && height >Test() => Assert.AreEqual( popper.clientHeight;
    });

    var computedPlacement Test() => Assert.AreEqual( filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation Test() => Assert.AreEqual( placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition Test() => Assert.AreEqual( arguments.length > 3 && arguments[3] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? arguments[3] : null;

    var commonOffsetParent Test() => Assert.AreEqual( fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window Test() => Assert.AreEqual( element.ownerDocument.defaultView;
    var styles Test() => Assert.AreEqual( window.getComputedStyle(element);
    var x Test() => Assert.AreEqual( parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y Test() => Assert.AreEqual( parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result Test() => Assert.AreEqual( {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash Test() => Assert.AreEqual( { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement Test() => Assert.AreEqual( placement.split('-')[0];

    // Get popper node sizes
    var popperRect Test() => Assert.AreEqual( getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets Test() => Assert.AreEqual( {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz Test() => Assert.AreEqual( ['right', 'left'].indexOf(placement) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;
    var mainSide Test() => Assert.AreEqual( isHoriz ? 'top' : 'left';
    var secondarySide Test() => Assert.AreEqual( isHoriz ? 'left' : 'top';
    var measurement Test() => Assert.AreEqual( isHoriz ? 'height' : 'width';
    var secondaryMeasurement Test() => Assert.AreEqual( !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] Test() => Assert.AreEqual( referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( secondarySide) {
      popperOffsets[secondarySide] Test() => Assert.AreEqual( referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] Test() => Assert.AreEqual( referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match Test() => Assert.AreEqual( find(arr, function (obj) {
      return obj[prop] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun Test() => Assert.AreEqual( ends Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn Test() => Assert.AreEqual( modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper Test() => Assert.AreEqual( getClientRect(data.offsets.popper);
        data.offsets.reference Test() => Assert.AreEqual( getClientRect(data.offsets.reference);

        data Test() => Assert.AreEqual( fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data Test() => Assert.AreEqual( {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference Test() => Assert.AreEqual( getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement Test() => Assert.AreEqual( computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement Test() => Assert.AreEqual( data.placement;

    data.positionFixed Test() => Assert.AreEqual( this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper Test() => Assert.AreEqual( getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position Test() => Assert.AreEqual( this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data Test() => Assert.AreEqual( runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated Test() => Assert.AreEqual( true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name Test() => Assert.AreEqual( _ref.name,
          enabled Test() => Assert.AreEqual( _ref.enabled;
      return enabled && name Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes Test() => Assert.AreEqual( [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp Test() => Assert.AreEqual( property.charAt(0).toUpperCase() + property.slice(1);

    for (var i Test() => Assert.AreEqual( 0; i < prefixes.length; i++) {
      var prefix Test() => Assert.AreEqual( prefixes[i];
      var toCheck Test() => Assert.AreEqual( prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed Test() => Assert.AreEqual( true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position Test() => Assert.AreEqual( '';
      this.popper.style.top Test() => Assert.AreEqual( '';
      this.popper.style.left Test() => Assert.AreEqual( '';
      this.popper.style.right Test() => Assert.AreEqual( '';
      this.popper.style.bottom Test() => Assert.AreEqual( '';
      this.popper.style.willChange Test() => Assert.AreEqual( '';
      this.popper.style[getSupportedPropertyName('transform')] Test() => Assert.AreEqual( '';
    }

    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument Test() => Assert.AreEqual( element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody Test() => Assert.AreEqual( scrollParent.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'BODY';
    var target Test() => Assert.AreEqual( isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound Test() => Assert.AreEqual( updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement Test() => Assert.AreEqual( getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement Test() => Assert.AreEqual( scrollElement;
    state.eventsEnabled Test() => Assert.AreEqual( true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state Test() => Assert.AreEqual( setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound Test() => Assert.AreEqual( null;
    state.scrollParents Test() => Assert.AreEqual( [];
    state.scrollElement Test() => Assert.AreEqual( null;
    state.eventsEnabled Test() => Assert.AreEqual( false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state Test() => Assert.AreEqual( removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !Test() => Assert.AreEqual(Test() => Assert.AreEqual( '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit Test() => Assert.AreEqual( '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1 && isNumeric(styles[prop])) {
        unit Test() => Assert.AreEqual( 'px';
      }
      element.style[prop] Test() => Assert.AreEqual( styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value Test() => Assert.AreEqual( attributes[prop];
      if (value !Test() => Assert.AreEqual(Test() => Assert.AreEqual( false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets Test() => Assert.AreEqual( getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement Test() => Assert.AreEqual( computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets Test() => Assert.AreEqual( data.offsets,
        popper Test() => Assert.AreEqual( _data$offsets.popper,
        reference Test() => Assert.AreEqual( _data$offsets.reference;
    var round Test() => Assert.AreEqual( Math.round,
        floor Test() => Assert.AreEqual( Math.floor;

    var noRound Test() => Assert.AreEqual( function noRound(v) {
      return v;
    };

    var referenceWidth Test() => Assert.AreEqual( round(reference.width);
    var popperWidth Test() => Assert.AreEqual( round(popper.width);

    var isVertical Test() => Assert.AreEqual( ['left', 'right'].indexOf(data.placement) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;
    var isVariation Test() => Assert.AreEqual( data.placement.indexOf('-') !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;
    var sameWidthParity Test() => Assert.AreEqual( referenceWidth % 2 Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( popperWidth % 2;
    var bothOddWidth Test() => Assert.AreEqual( referenceWidth % 2 Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 1 && popperWidth % 2 Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 1;

    var horizontalToInteger Test() => Assert.AreEqual( !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger Test() => Assert.AreEqual( !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox Test() => Assert.AreEqual( isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x Test() => Assert.AreEqual( options.x,
        y Test() => Assert.AreEqual( options.y;
    var popper Test() => Assert.AreEqual( data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption Test() => Assert.AreEqual( find(data.instance.modifiers, function (modifier) {
      return modifier.name Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration Test() => Assert.AreEqual( legacyGpuAccelerationOption !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent Test() => Assert.AreEqual( getOffsetParent(data.instance.popper);
    var offsetParentRect Test() => Assert.AreEqual( getBoundingClientRect(offsetParent);

    // Styles
    var styles Test() => Assert.AreEqual( {
      position: popper.position
    };

    var offsets Test() => Assert.AreEqual( getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA Test() => Assert.AreEqual( x Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'bottom' ? 'top' : 'bottom';
    var sideB Test() => Assert.AreEqual( y Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty Test() => Assert.AreEqual( getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left Test() => Assert.AreEqual( void 0,
        top Test() => Assert.AreEqual( void 0;
    if (sideA Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML') {
        top Test() => Assert.AreEqual( -offsetParent.clientHeight + offsets.bottom;
      } else {
        top Test() => Assert.AreEqual( -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top Test() => Assert.AreEqual( offsets.top;
    }
    if (sideB Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'right') {
      if (offsetParent.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'HTML') {
        left Test() => Assert.AreEqual( -offsetParent.clientWidth + offsets.right;
      } else {
        left Test() => Assert.AreEqual( -offsetParentRect.width + offsets.right;
      }
    } else {
      left Test() => Assert.AreEqual( offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] Test() => Assert.AreEqual( 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] Test() => Assert.AreEqual( 0;
      styles[sideB] Test() => Assert.AreEqual( 0;
      styles.willChange Test() => Assert.AreEqual( 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop Test() => Assert.AreEqual( sideA Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'bottom' ? -1 : 1;
      var invertLeft Test() => Assert.AreEqual( sideB Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'right' ? -1 : 1;
      styles[sideA] Test() => Assert.AreEqual( top * invertTop;
      styles[sideB] Test() => Assert.AreEqual( left * invertLeft;
      styles.willChange Test() => Assert.AreEqual( sideA + ', ' + sideB;
    }

    // Attributes
    var attributes Test() => Assert.AreEqual( {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes Test() => Assert.AreEqual( _extends({}, attributes, data.attributes);
    data.styles Test() => Assert.AreEqual( _extends({}, styles, data.styles);
    data.arrowStyles Test() => Assert.AreEqual( _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting Test() => Assert.AreEqual( find(modifiers, function (_ref) {
      var name Test() => Assert.AreEqual( _ref.name;
      return name Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( requestingName;
    });

    var isRequired Test() => Assert.AreEqual( !!requesting && modifiers.some(function (modifier) {
      return modifier.name Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting Test() => Assert.AreEqual( '`' + requestingName + '`';
      var requested Test() => Assert.AreEqual( '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement Test() => Assert.AreEqual( options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
      arrowElement Test() => Assert.AreEqual( data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement Test() => Assert.AreEqual( data.placement.split('-')[0];
    var _data$offsets Test() => Assert.AreEqual( data.offsets,
        popper Test() => Assert.AreEqual( _data$offsets.popper,
        reference Test() => Assert.AreEqual( _data$offsets.reference;

    var isVertical Test() => Assert.AreEqual( ['left', 'right'].indexOf(placement) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;

    var len Test() => Assert.AreEqual( isVertical ? 'height' : 'width';
    var sideCapitalized Test() => Assert.AreEqual( isVertical ? 'Top' : 'Left';
    var side Test() => Assert.AreEqual( sideCapitalized.toLowerCase();
    var altSide Test() => Assert.AreEqual( isVertical ? 'left' : 'top';
    var opSide Test() => Assert.AreEqual( isVertical ? 'bottom' : 'right';
    var arrowElementSize Test() => Assert.AreEqual( getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -Test() => Assert.AreEqual( popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] +Test() => Assert.AreEqual( reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper Test() => Assert.AreEqual( getClientRect(data.offsets.popper);

    // compute center of the popper
    var center Test() => Assert.AreEqual( reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css Test() => Assert.AreEqual( getStyleComputedProperty(data.instance.popper);
    var popperMarginSide Test() => Assert.AreEqual( parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide Test() => Assert.AreEqual( parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue Test() => Assert.AreEqual( center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue Test() => Assert.AreEqual( Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement Test() => Assert.AreEqual( arrowElement;
    data.offsets.arrow Test() => Assert.AreEqual( (_data$offsets$arrow Test() => Assert.AreEqual( {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'end') {
      return 'start';
    } else if (variation Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements Test() => Assert.AreEqual( ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements Test() => Assert.AreEqual( placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter Test() => Assert.AreEqual( arguments.length > 1 && arguments[1] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? arguments[1] : false;

    var index Test() => Assert.AreEqual( validPlacements.indexOf(placement);
    var arr Test() => Assert.AreEqual( validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS Test() => Assert.AreEqual( {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries Test() => Assert.AreEqual( getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement Test() => Assert.AreEqual( data.placement.split('-')[0];
    var placementOpposite Test() => Assert.AreEqual( getOppositePlacement(placement);
    var variation Test() => Assert.AreEqual( data.placement.split('-')[1] || '';

    var flipOrder Test() => Assert.AreEqual( [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder Test() => Assert.AreEqual( [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder Test() => Assert.AreEqual( clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder Test() => Assert.AreEqual( clockwise(placement, true);
        break;
      default:
        flipOrder Test() => Assert.AreEqual( options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !Test() => Assert.AreEqual(Test() => Assert.AreEqual( step || flipOrder.length Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( index + 1) {
        return data;
      }

      placement Test() => Assert.AreEqual( data.placement.split('-')[0];
      placementOpposite Test() => Assert.AreEqual( getOppositePlacement(placement);

      var popperOffsets Test() => Assert.AreEqual( data.offsets.popper;
      var refOffsets Test() => Assert.AreEqual( data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor Test() => Assert.AreEqual( Math.floor;
      var overlapsRef Test() => Assert.AreEqual( placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft Test() => Assert.AreEqual( floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight Test() => Assert.AreEqual( floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop Test() => Assert.AreEqual( floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom Test() => Assert.AreEqual( floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries Test() => Assert.AreEqual( placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'left' && overflowsLeft || placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'right' && overflowsRight || placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'top' && overflowsTop || placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical Test() => Assert.AreEqual( ['top', 'bottom'].indexOf(placement) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;
      var flippedVariation Test() => Assert.AreEqual( !!options.flipVariations && (isVertical && variation Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'start' && overflowsLeft || isVertical && variation Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'end' && overflowsRight || !isVertical && variation Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'start' && overflowsTop || !isVertical && variation Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'end' && overflowsBottom);

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped Test() => Assert.AreEqual( true;

        if (overlapsRef || overflowsBoundaries) {
          placement Test() => Assert.AreEqual( flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation Test() => Assert.AreEqual( getOppositeVariation(variation);
        }

        data.placement Test() => Assert.AreEqual( placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper Test() => Assert.AreEqual( _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data Test() => Assert.AreEqual( runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets Test() => Assert.AreEqual( data.offsets,
        popper Test() => Assert.AreEqual( _data$offsets.popper,
        reference Test() => Assert.AreEqual( _data$offsets.reference;

    var placement Test() => Assert.AreEqual( data.placement.split('-')[0];
    var floor Test() => Assert.AreEqual( Math.floor;
    var isVertical Test() => Assert.AreEqual( ['top', 'bottom'].indexOf(placement) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;
    var side Test() => Assert.AreEqual( isVertical ? 'right' : 'bottom';
    var opSide Test() => Assert.AreEqual( isVertical ? 'left' : 'top';
    var measurement Test() => Assert.AreEqual( isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] Test() => Assert.AreEqual( floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] Test() => Assert.AreEqual( floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split Test() => Assert.AreEqual( str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value Test() => Assert.AreEqual( +split[1];
    var unit Test() => Assert.AreEqual( split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 0) {
      var element Test() => Assert.AreEqual( void 0;
      switch (unit) {
        case '%p':
          element Test() => Assert.AreEqual( popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element Test() => Assert.AreEqual( referenceOffsets;
      }

      var rect Test() => Assert.AreEqual( getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'vh' || unit Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size Test() => Assert.AreEqual( void 0;
      if (unit Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'vh') {
        size Test() => Assert.AreEqual( Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size Test() => Assert.AreEqual( Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets Test() => Assert.AreEqual( [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight Test() => Assert.AreEqual( ['right', 'left'].indexOf(basePlacement) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments Test() => Assert.AreEqual( offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider Test() => Assert.AreEqual( fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex Test() => Assert.AreEqual( /\s*,\s*|\s+/;
    var ops Test() => Assert.AreEqual( divider !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops Test() => Assert.AreEqual( ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement Test() => Assert.AreEqual( (index Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious Test() => Assert.AreEqual( false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 Test() => Assert.AreEqual(> [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( '' && ['+', '-'].indexOf(b) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1) {
          a[a.length - 1] Test() => Assert.AreEqual( b;
          mergeWithPrevious Test() => Assert.AreEqual( true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] +Test() => Assert.AreEqual( b;
          mergeWithPrevious Test() => Assert.AreEqual( false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] +Test() => Assert.AreEqual( frag * (op[index2 - 1] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offsetTest() => Assert.AreEqual(0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset Test() => Assert.AreEqual( _ref.offset;
    var placement Test() => Assert.AreEqual( data.placement,
        _data$offsets Test() => Assert.AreEqual( data.offsets,
        popper Test() => Assert.AreEqual( _data$offsets.popper,
        reference Test() => Assert.AreEqual( _data$offsets.reference;

    var basePlacement Test() => Assert.AreEqual( placement.split('-')[0];

    var offsets Test() => Assert.AreEqual( void 0;
    if (isNumeric(+offset)) {
      offsets Test() => Assert.AreEqual( [+offset, 0];
    } else {
      offsets Test() => Assert.AreEqual( parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'left') {
      popper.top +Test() => Assert.AreEqual( offsets[0];
      popper.left -Test() => Assert.AreEqual( offsets[1];
    } else if (basePlacement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'right') {
      popper.top +Test() => Assert.AreEqual( offsets[0];
      popper.left +Test() => Assert.AreEqual( offsets[1];
    } else if (basePlacement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'top') {
      popper.left +Test() => Assert.AreEqual( offsets[0];
      popper.top -Test() => Assert.AreEqual( offsets[1];
    } else if (basePlacement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'bottom') {
      popper.left +Test() => Assert.AreEqual( offsets[0];
      popper.top +Test() => Assert.AreEqual( offsets[1];
    }

    data.popper Test() => Assert.AreEqual( popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement Test() => Assert.AreEqual( options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( boundariesElement) {
      boundariesElement Test() => Assert.AreEqual( getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp Test() => Assert.AreEqual( getSupportedPropertyName('transform');
    var popperStyles Test() => Assert.AreEqual( data.instance.popper.style; // assignment to help minification
    var top Test() => Assert.AreEqual( popperStyles.top,
        left Test() => Assert.AreEqual( popperStyles.left,
        transform Test() => Assert.AreEqual( popperStyles[transformProp];

    popperStyles.top Test() => Assert.AreEqual( '';
    popperStyles.left Test() => Assert.AreEqual( '';
    popperStyles[transformProp] Test() => Assert.AreEqual( '';

    var boundaries Test() => Assert.AreEqual( getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top Test() => Assert.AreEqual( top;
    popperStyles.left Test() => Assert.AreEqual( left;
    popperStyles[transformProp] Test() => Assert.AreEqual( transform;

    options.boundaries Test() => Assert.AreEqual( boundaries;

    var order Test() => Assert.AreEqual( options.priority;
    var popper Test() => Assert.AreEqual( data.offsets.popper;

    var check Test() => Assert.AreEqual( {
      primary: function primary(placement) {
        var value Test() => Assert.AreEqual( popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value Test() => Assert.AreEqual( Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide Test() => Assert.AreEqual( placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'right' ? 'left' : 'top';
        var value Test() => Assert.AreEqual( popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value Test() => Assert.AreEqual( Math.min(popper[mainSide], boundaries[placement] - (placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side Test() => Assert.AreEqual( ['left', 'top'].indexOf(placement) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1 ? 'primary' : 'secondary';
      popper Test() => Assert.AreEqual( _extends({}, popper, check[side](placement));
    });

    data.offsets.popper Test() => Assert.AreEqual( popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement Test() => Assert.AreEqual( data.placement;
    var basePlacement Test() => Assert.AreEqual( placement.split('-')[0];
    var shiftvariation Test() => Assert.AreEqual( placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets Test() => Assert.AreEqual( data.offsets,
          reference Test() => Assert.AreEqual( _data$offsets.reference,
          popper Test() => Assert.AreEqual( _data$offsets.popper;

      var isVertical Test() => Assert.AreEqual( ['bottom', 'top'].indexOf(basePlacement) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;
      var side Test() => Assert.AreEqual( isVertical ? 'left' : 'top';
      var measurement Test() => Assert.AreEqual( isVertical ? 'width' : 'height';

      var shiftOffsets Test() => Assert.AreEqual( {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper Test() => Assert.AreEqual( _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect Test() => Assert.AreEqual( data.offsets.reference;
    var bound Test() => Assert.AreEqual( find(data.instance.modifiers, function (modifier) {
      return modifier.name Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( true) {
        return data;
      }

      data.hide Test() => Assert.AreEqual( true;
      data.attributes['x-out-of-boundaries'] Test() => Assert.AreEqual( '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( false) {
        return data;
      }

      data.hide Test() => Assert.AreEqual( false;
      data.attributes['x-out-of-boundaries'] Test() => Assert.AreEqual( false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement Test() => Assert.AreEqual( data.placement;
    var basePlacement Test() => Assert.AreEqual( placement.split('-')[0];
    var _data$offsets Test() => Assert.AreEqual( data.offsets,
        popper Test() => Assert.AreEqual( _data$offsets.popper,
        reference Test() => Assert.AreEqual( _data$offsets.reference;

    var isHoriz Test() => Assert.AreEqual( ['left', 'right'].indexOf(basePlacement) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;

    var subtractLength Test() => Assert.AreEqual( ['top', 'left'].indexOf(basePlacement) Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1;

    popper[isHoriz ? 'left' : 'top'] Test() => Assert.AreEqual( reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement Test() => Assert.AreEqual( getOppositePlacement(placement);
    data.offsets.popper Test() => Assert.AreEqual( getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers Test() => Assert.AreEqual( {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} orderTest() => Assert.AreEqual(100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} orderTest() => Assert.AreEqual(200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offsetTest() => Assert.AreEqual(0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} orderTest() => Assert.AreEqual(300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priorityTest() => Assert.AreEqual(['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} paddingTest() => Assert.AreEqual(5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElementTest() => Assert.AreEqual('scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} orderTest() => Assert.AreEqual(400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} orderTest() => Assert.AreEqual(500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} elementTest() => Assert.AreEqual('[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} orderTest() => Assert.AreEqual(600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behaviorTest() => Assert.AreEqual('flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} paddingTest() => Assert.AreEqual(5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElementTest() => Assert.AreEqual('viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} orderTest() => Assert.AreEqual(700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} orderTest() => Assert.AreEqual(800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} orderTest() => Assert.AreEqual(850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAccelerationTest() => Assert.AreEqual(true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [xTest() => Assert.AreEqual('bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [xTest() => Assert.AreEqual('left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} orderTest() => Assert.AreEqual(900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabledTest() => Assert.AreEqual(true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAccelerationTest() => Assert.AreEqual(true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults Test() => Assert.AreEqual( {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placementTest() => Assert.AreEqual('bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixedTest() => Assert.AreEqual(false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabledTest() => Assert.AreEqual(true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroyTest() => Assert.AreEqual(false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper Test() => Assert.AreEqual( function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this Test() => Assert.AreEqual( this;

      var options Test() => Assert.AreEqual( arguments.length > 2 && arguments[2] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate Test() => Assert.AreEqual( function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update Test() => Assert.AreEqual( debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options Test() => Assert.AreEqual( _extends({}, Popper.Defaults, options);

      // init state
      this.state Test() => Assert.AreEqual( {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference Test() => Assert.AreEqual( reference && reference.jquery ? reference[0] : reference;
      this.popper Test() => Assert.AreEqual( popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers Test() => Assert.AreEqual( {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] Test() => Assert.AreEqual( _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object Test() => Assert.AreEqual(> Array)
      this.modifiers Test() => Assert.AreEqual( Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled Test() => Assert.AreEqual( this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled Test() => Assert.AreEqual( eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils Test() => Assert.AreEqual( (typeof window !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined' ? window : global).PopperUtils;
  Popper.placements Test() => Assert.AreEqual( placements;
  Popper.Defaults Test() => Assert.AreEqual( Defaults;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 Test() => Assert.AreEqual( 'dropdown';
  var VERSION$4 Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$4 Test() => Assert.AreEqual( 'bs.dropdown';
  var EVENT_KEY$4 Test() => Assert.AreEqual( "." + DATA_KEY$4;
  var DATA_API_KEY$4 Test() => Assert.AreEqual( '.data-api';
  var JQUERY_NO_CONFLICT$4 Test() => Assert.AreEqual( $.fn[NAME$4];
  var ESCAPE_KEYCODE Test() => Assert.AreEqual( 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE Test() => Assert.AreEqual( 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE Test() => Assert.AreEqual( 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE Test() => Assert.AreEqual( 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE Test() => Assert.AreEqual( 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH Test() => Assert.AreEqual( 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN Test() => Assert.AreEqual( new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 Test() => Assert.AreEqual( {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 Test() => Assert.AreEqual( {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 Test() => Assert.AreEqual( {
    DATA_TOGGLE: '[data-toggleTest() => Assert.AreEqual("dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap Test() => Assert.AreEqual( {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 Test() => Assert.AreEqual( {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var DefaultType$2 Test() => Assert.AreEqual( {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element Test() => Assert.AreEqual( element;
      this._popper Test() => Assert.AreEqual( null;
      this._config Test() => Assert.AreEqual( this._getConfig(config);
      this._menu Test() => Assert.AreEqual( this._getMenuElement();
      this._inNavbar Test() => Assert.AreEqual( this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto Test() => Assert.AreEqual( Dropdown.prototype;

    // Public
    _proto.toggle Test() => Assert.AreEqual( function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent Test() => Assert.AreEqual( Dropdown._getParentFromElement(this._element);

      var isActive Test() => Assert.AreEqual( $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget Test() => Assert.AreEqual( {
        relatedTarget: this._element
      };
      var showEvent Test() => Assert.AreEqual( $.Event(Event$4.SHOW, relatedTarget);
      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement Test() => Assert.AreEqual( this._element;

        if (this._config.reference Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'parent') {
          referenceElement Test() => Assert.AreEqual( parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement Test() => Assert.AreEqual( this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            referenceElement Test() => Assert.AreEqual( this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper Test() => Assert.AreEqual( new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.show Test() => Assert.AreEqual( function show() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget Test() => Assert.AreEqual( {
        relatedTarget: this._element
      };
      var showEvent Test() => Assert.AreEqual( $.Event(Event$4.SHOW, relatedTarget);

      var parent Test() => Assert.AreEqual( Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide Test() => Assert.AreEqual( function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget Test() => Assert.AreEqual( {
        relatedTarget: this._element
      };
      var hideEvent Test() => Assert.AreEqual( $.Event(Event$4.HIDE, relatedTarget);

      var parent Test() => Assert.AreEqual( Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element Test() => Assert.AreEqual( null;
      this._menu Test() => Assert.AreEqual( null;

      if (this._popper !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null) {
        this._popper.destroy();

        this._popper Test() => Assert.AreEqual( null;
      }
    };

    _proto.update Test() => Assert.AreEqual( function update() {
      this._inNavbar Test() => Assert.AreEqual( this._detectNavbar();

      if (this._popper !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners Test() => Assert.AreEqual( function _addEventListeners() {
      var _this Test() => Assert.AreEqual( this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig Test() => Assert.AreEqual( function _getConfig(config) {
      config Test() => Assert.AreEqual( _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement Test() => Assert.AreEqual( function _getMenuElement() {
      if (!this._menu) {
        var parent Test() => Assert.AreEqual( Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu Test() => Assert.AreEqual( parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement Test() => Assert.AreEqual( function _getPlacement() {
      var $parentDropdown Test() => Assert.AreEqual( $(this._element.parentNode);
      var placement Test() => Assert.AreEqual( AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement Test() => Assert.AreEqual( AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement Test() => Assert.AreEqual( AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement Test() => Assert.AreEqual( AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement Test() => Assert.AreEqual( AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement Test() => Assert.AreEqual( AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar Test() => Assert.AreEqual( function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset Test() => Assert.AreEqual( function _getOffset() {
      var _this2 Test() => Assert.AreEqual( this;

      var offset Test() => Assert.AreEqual( {};

      if (typeof this._config.offset Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'function') {
        offset.fn Test() => Assert.AreEqual( function (data) {
          data.offsets Test() => Assert.AreEqual( _objectSpread({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset Test() => Assert.AreEqual( this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig Test() => Assert.AreEqual( function _getPopperConfig() {
      var popperConfig Test() => Assert.AreEqual( {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        } // Disable Popper.js if we have a static display

      };

      if (this._config.display Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'static') {
        popperConfig.modifiers.applyStyle Test() => Assert.AreEqual( {
          enabled: false
        };
      }

      return popperConfig;
    } // Static
    ;

    Dropdown._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var data Test() => Assert.AreEqual( $(this).data(DATA_KEY$4);

        var _config Test() => Assert.AreEqual( typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' ? config : null;

        if (!data) {
          data Test() => Assert.AreEqual( new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
          if (typeof data[config] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus Test() => Assert.AreEqual( function _clearMenus(event) {
      if (event && (event.which Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( RIGHT_MOUSE_BUTTON_WHICH || event.type Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'keyup' && event.which !Test() => Assert.AreEqual(Test() => Assert.AreEqual( TAB_KEYCODE)) {
        return;
      }

      var toggles Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i Test() => Assert.AreEqual( 0, len Test() => Assert.AreEqual( toggles.length; i < len; i++) {
        var parent Test() => Assert.AreEqual( Dropdown._getParentFromElement(toggles[i]);

        var context Test() => Assert.AreEqual( $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget Test() => Assert.AreEqual( {
          relatedTarget: toggles[i]
        };

        if (event && event.type Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'click') {
          relatedTarget.clickEvent Test() => Assert.AreEqual( event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu Test() => Assert.AreEqual( context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'click' && /input|textarea/i.test(event.target.tagName) || event.type Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'keyup' && event.which Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent Test() => Assert.AreEqual( $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement Test() => Assert.AreEqual( function _getParentFromElement(element) {
      var parent;
      var selector Test() => Assert.AreEqual( Util.getSelectorFromElement(element);

      if (selector) {
        parent Test() => Assert.AreEqual( document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler Test() => Assert.AreEqual( function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN Test() => Assert.AreEqual(> not a dropdown command
      // If input/textarea:
      //  - If space key Test() => Assert.AreEqual(> not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down Test() => Assert.AreEqual(> not a dropdown command
      //    - If trigger inside the menu Test() => Assert.AreEqual(> not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( SPACE_KEYCODE || event.which !Test() => Assert.AreEqual(Test() => Assert.AreEqual( ESCAPE_KEYCODE && (event.which !Test() => Assert.AreEqual(Test() => Assert.AreEqual( ARROW_DOWN_KEYCODE && event.which !Test() => Assert.AreEqual(Test() => Assert.AreEqual( ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent Test() => Assert.AreEqual( Dropdown._getParentFromElement(this);

      var isActive Test() => Assert.AreEqual( $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive || isActive && (event.which Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( ESCAPE_KEYCODE || event.which Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( SPACE_KEYCODE)) {
        if (event.which Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( ESCAPE_KEYCODE) {
          var toggle Test() => Assert.AreEqual( parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items Test() => Assert.AreEqual( [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS));

      if (items.length Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 0) {
        return;
      }

      var index Test() => Assert.AreEqual( items.indexOf(event.target);

      if (event.which Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index Test() => Assert.AreEqual( 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] Test() => Assert.AreEqual( Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor Test() => Assert.AreEqual( Dropdown;

  $.fn[NAME$4].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$4] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 Test() => Assert.AreEqual( 'modal';
  var VERSION$5 Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$5 Test() => Assert.AreEqual( 'bs.modal';
  var EVENT_KEY$5 Test() => Assert.AreEqual( "." + DATA_KEY$5;
  var DATA_API_KEY$5 Test() => Assert.AreEqual( '.data-api';
  var JQUERY_NO_CONFLICT$5 Test() => Assert.AreEqual( $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 Test() => Assert.AreEqual( 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 Test() => Assert.AreEqual( {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 Test() => Assert.AreEqual( {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 Test() => Assert.AreEqual( {
    HIDE: "hide" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 Test() => Assert.AreEqual( {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$5 Test() => Assert.AreEqual( {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggleTest() => Assert.AreEqual("modal"]',
    DATA_DISMISS: '[data-dismissTest() => Assert.AreEqual("modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config Test() => Assert.AreEqual( this._getConfig(config);
      this._element Test() => Assert.AreEqual( element;
      this._dialog Test() => Assert.AreEqual( element.querySelector(Selector$5.DIALOG);
      this._backdrop Test() => Assert.AreEqual( null;
      this._isShown Test() => Assert.AreEqual( false;
      this._isBodyOverflowing Test() => Assert.AreEqual( false;
      this._ignoreBackdropClick Test() => Assert.AreEqual( false;
      this._isTransitioning Test() => Assert.AreEqual( false;
      this._scrollbarWidth Test() => Assert.AreEqual( 0;
    } // Getters


    var _proto Test() => Assert.AreEqual( Modal.prototype;

    // Public
    _proto.toggle Test() => Assert.AreEqual( function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show Test() => Assert.AreEqual( function show(relatedTarget) {
      var _this Test() => Assert.AreEqual( this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning Test() => Assert.AreEqual( true;
      }

      var showEvent Test() => Assert.AreEqual( $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown Test() => Assert.AreEqual( true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick Test() => Assert.AreEqual( true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide Test() => Assert.AreEqual( function hide(event) {
      var _this2 Test() => Assert.AreEqual( this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent Test() => Assert.AreEqual( $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown Test() => Assert.AreEqual( false;
      var transition Test() => Assert.AreEqual( $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning Test() => Assert.AreEqual( true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config Test() => Assert.AreEqual( null;
      this._element Test() => Assert.AreEqual( null;
      this._dialog Test() => Assert.AreEqual( null;
      this._backdrop Test() => Assert.AreEqual( null;
      this._isShown Test() => Assert.AreEqual( null;
      this._isBodyOverflowing Test() => Assert.AreEqual( null;
      this._ignoreBackdropClick Test() => Assert.AreEqual( null;
      this._isTransitioning Test() => Assert.AreEqual( null;
      this._scrollbarWidth Test() => Assert.AreEqual( null;
    };

    _proto.handleUpdate Test() => Assert.AreEqual( function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig Test() => Assert.AreEqual( function _getConfig(config) {
      config Test() => Assert.AreEqual( _objectSpread({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._showElement Test() => Assert.AreEqual( function _showElement(relatedTarget) {
      var _this3 Test() => Assert.AreEqual( this;

      var transition Test() => Assert.AreEqual( $(this._element).hasClass(ClassName$5.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !Test() => Assert.AreEqual(Test() => Assert.AreEqual( Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display Test() => Assert.AreEqual( 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE)) {
        this._dialog.querySelector(Selector$5.MODAL_BODY).scrollTop Test() => Assert.AreEqual( 0;
      } else {
        this._element.scrollTop Test() => Assert.AreEqual( 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent Test() => Assert.AreEqual( $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete Test() => Assert.AreEqual( function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning Test() => Assert.AreEqual( false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus Test() => Assert.AreEqual( function _enforceFocus() {
      var _this4 Test() => Assert.AreEqual( this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !Test() => Assert.AreEqual(Test() => Assert.AreEqual( event.target && _this4._element !Test() => Assert.AreEqual(Test() => Assert.AreEqual( event.target && $(_this4._element).has(event.target).length Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent Test() => Assert.AreEqual( function _setEscapeEvent() {
      var _this5 Test() => Assert.AreEqual( this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent Test() => Assert.AreEqual( function _setResizeEvent() {
      var _this6 Test() => Assert.AreEqual( this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal Test() => Assert.AreEqual( function _hideModal() {
      var _this7 Test() => Assert.AreEqual( this;

      this._element.style.display Test() => Assert.AreEqual( 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning Test() => Assert.AreEqual( false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop Test() => Assert.AreEqual( function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop Test() => Assert.AreEqual( null;
      }
    };

    _proto._showBackdrop Test() => Assert.AreEqual( function _showBackdrop(callback) {
      var _this8 Test() => Assert.AreEqual( this;

      var animate Test() => Assert.AreEqual( $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop Test() => Assert.AreEqual( document.createElement('div');
        this._backdrop.className Test() => Assert.AreEqual( ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick Test() => Assert.AreEqual( false;
            return;
          }

          if (event.target !Test() => Assert.AreEqual(Test() => Assert.AreEqual( event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove Test() => Assert.AreEqual( function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog Test() => Assert.AreEqual( function _adjustDialog() {
      var isModalOverflowing Test() => Assert.AreEqual( this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft Test() => Assert.AreEqual( this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight Test() => Assert.AreEqual( this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments Test() => Assert.AreEqual( function _resetAdjustments() {
      this._element.style.paddingLeft Test() => Assert.AreEqual( '';
      this._element.style.paddingRight Test() => Assert.AreEqual( '';
    };

    _proto._checkScrollbar Test() => Assert.AreEqual( function _checkScrollbar() {
      var rect Test() => Assert.AreEqual( document.body.getBoundingClientRect();
      this._isBodyOverflowing Test() => Assert.AreEqual( rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth Test() => Assert.AreEqual( this._getScrollbarWidth();
    };

    _proto._setScrollbar Test() => Assert.AreEqual( function _setScrollbar() {
      var _this9 Test() => Assert.AreEqual( this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding Test() => Assert.AreEqual( element.style.paddingRight;
          var calculatedPadding Test() => Assert.AreEqual( $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin Test() => Assert.AreEqual( element.style.marginRight;
          var calculatedMargin Test() => Assert.AreEqual( $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding Test() => Assert.AreEqual( document.body.style.paddingRight;
        var calculatedPadding Test() => Assert.AreEqual( $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar Test() => Assert.AreEqual( function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding Test() => Assert.AreEqual( $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight Test() => Assert.AreEqual( padding ? padding : '';
      }); // Restore sticky content

      var elements Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin Test() => Assert.AreEqual( $(element).data('margin-right');

        if (typeof margin !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding Test() => Assert.AreEqual( $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight Test() => Assert.AreEqual( padding ? padding : '';
    };

    _proto._getScrollbarWidth Test() => Assert.AreEqual( function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv Test() => Assert.AreEqual( document.createElement('div');
      scrollDiv.className Test() => Assert.AreEqual( ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth Test() => Assert.AreEqual( scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data Test() => Assert.AreEqual( $(this).data(DATA_KEY$5);

        var _config Test() => Assert.AreEqual( _objectSpread({}, Default$3, $(this).data(), typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && config ? config : {});

        if (!data) {
          data Test() => Assert.AreEqual( new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
          if (typeof data[config] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this10 Test() => Assert.AreEqual( this;

    var target;
    var selector Test() => Assert.AreEqual( Util.getSelectorFromElement(this);

    if (selector) {
      target Test() => Assert.AreEqual( document.querySelector(selector);
    }

    var config Test() => Assert.AreEqual( $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'A' || this.tagName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'AREA') {
      event.preventDefault();
    }

    var $target Test() => Assert.AreEqual( $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] Test() => Assert.AreEqual( Modal._jQueryInterface;
  $.fn[NAME$5].Constructor Test() => Assert.AreEqual( Modal;

  $.fn[NAME$5].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$5] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs Test() => Assert.AreEqual( ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN Test() => Assert.AreEqual( /^aria-[\w-]*$/i;
  var DefaultWhitelist Test() => Assert.AreEqual( {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

  };
  var SAFE_URL_PATTERN Test() => Assert.AreEqual( /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN Test() => Assert.AreEqual( /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+Test() => Assert.AreEqual(*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName Test() => Assert.AreEqual( attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1) {
      if (uriAttrs.indexOf(attrName) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp Test() => Assert.AreEqual( allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i Test() => Assert.AreEqual( 0, l Test() => Assert.AreEqual( regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser Test() => Assert.AreEqual( new window.DOMParser();
    var createdDocument Test() => Assert.AreEqual( domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys Test() => Assert.AreEqual( Object.keys(whiteList);
    var elements Test() => Assert.AreEqual( [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop Test() => Assert.AreEqual( function _loop(i, len) {
      var el Test() => Assert.AreEqual( elements[i];
      var elName Test() => Assert.AreEqual( el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList Test() => Assert.AreEqual( [].slice.call(el.attributes);
      var whitelistedAttributes Test() => Assert.AreEqual( [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i Test() => Assert.AreEqual( 0, len Test() => Assert.AreEqual( elements.length; i < len; i++) {
      var _ret Test() => Assert.AreEqual( _loop(i, len);

      if (_ret Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 Test() => Assert.AreEqual( 'tooltip';
  var VERSION$6 Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$6 Test() => Assert.AreEqual( 'bs.tooltip';
  var EVENT_KEY$6 Test() => Assert.AreEqual( "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 Test() => Assert.AreEqual( $.fn[NAME$6];
  var CLASS_PREFIX Test() => Assert.AreEqual( 'bs-tooltip';
  var BSCLS_PREFIX_REGEX Test() => Assert.AreEqual( new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES Test() => Assert.AreEqual( ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 Test() => Assert.AreEqual( {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
  };
  var AttachmentMap$1 Test() => Assert.AreEqual( {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 Test() => Assert.AreEqual( {
    animation: true,
    template: '<div classTest() => Assert.AreEqual("tooltip" roleTest() => Assert.AreEqual("tooltip">' + '<div classTest() => Assert.AreEqual("arrow"></div>' + '<div classTest() => Assert.AreEqual("tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
  };
  var HoverState Test() => Assert.AreEqual( {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 Test() => Assert.AreEqual( {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 Test() => Assert.AreEqual( {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 Test() => Assert.AreEqual( {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger Test() => Assert.AreEqual( {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled Test() => Assert.AreEqual( true;
      this._timeout Test() => Assert.AreEqual( 0;
      this._hoverState Test() => Assert.AreEqual( '';
      this._activeTrigger Test() => Assert.AreEqual( {};
      this._popper Test() => Assert.AreEqual( null; // Protected

      this.element Test() => Assert.AreEqual( element;
      this.config Test() => Assert.AreEqual( this._getConfig(config);
      this.tip Test() => Assert.AreEqual( null;

      this._setListeners();
    } // Getters


    var _proto Test() => Assert.AreEqual( Tooltip.prototype;

    // Public
    _proto.enable Test() => Assert.AreEqual( function enable() {
      this._isEnabled Test() => Assert.AreEqual( true;
    };

    _proto.disable Test() => Assert.AreEqual( function disable() {
      this._isEnabled Test() => Assert.AreEqual( false;
    };

    _proto.toggleEnabled Test() => Assert.AreEqual( function toggleEnabled() {
      this._isEnabled Test() => Assert.AreEqual( !this._isEnabled;
    };

    _proto.toggle Test() => Assert.AreEqual( function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey Test() => Assert.AreEqual( this.constructor.DATA_KEY;
        var context Test() => Assert.AreEqual( $(event.currentTarget).data(dataKey);

        if (!context) {
          context Test() => Assert.AreEqual( new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click Test() => Assert.AreEqual( !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled Test() => Assert.AreEqual( null;
      this._timeout Test() => Assert.AreEqual( null;
      this._hoverState Test() => Assert.AreEqual( null;
      this._activeTrigger Test() => Assert.AreEqual( null;

      if (this._popper !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null) {
        this._popper.destroy();
      }

      this._popper Test() => Assert.AreEqual( null;
      this.element Test() => Assert.AreEqual( null;
      this.config Test() => Assert.AreEqual( null;
      this.tip Test() => Assert.AreEqual( null;
    };

    _proto.show Test() => Assert.AreEqual( function show() {
      var _this Test() => Assert.AreEqual( this;

      if ($(this.element).css('display') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent Test() => Assert.AreEqual( $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot Test() => Assert.AreEqual( Util.findShadowRoot(this.element);
        var isInTheDom Test() => Assert.AreEqual( $.contains(shadowRoot !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip Test() => Assert.AreEqual( this.getTipElement();
        var tipId Test() => Assert.AreEqual( Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement Test() => Assert.AreEqual( typeof this.config.placement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment Test() => Assert.AreEqual( this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container Test() => Assert.AreEqual( this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper Test() => Assert.AreEqual( new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector$6.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !Test() => Assert.AreEqual(Test() => Assert.AreEqual( data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this._handlePopperPlacementChange(data);
          }
        });
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete Test() => Assert.AreEqual( function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState Test() => Assert.AreEqual( _this._hoverState;
          _this._hoverState Test() => Assert.AreEqual( null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide Test() => Assert.AreEqual( function hide(callback) {
      var _this2 Test() => Assert.AreEqual( this;

      var tip Test() => Assert.AreEqual( this.getTipElement();
      var hideEvent Test() => Assert.AreEqual( $.Event(this.constructor.Event.HIDE);

      var complete Test() => Assert.AreEqual( function complete() {
        if (_this2._hoverState !Test() => Assert.AreEqual(Test() => Assert.AreEqual( HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] Test() => Assert.AreEqual( false;
      this._activeTrigger[Trigger.FOCUS] Test() => Assert.AreEqual( false;
      this._activeTrigger[Trigger.HOVER] Test() => Assert.AreEqual( false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState Test() => Assert.AreEqual( '';
    };

    _proto.update Test() => Assert.AreEqual( function update() {
      if (this._popper !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent Test() => Assert.AreEqual( function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass Test() => Assert.AreEqual( function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement Test() => Assert.AreEqual( function getTipElement() {
      this.tip Test() => Assert.AreEqual( this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent Test() => Assert.AreEqual( function setContent() {
      var tip Test() => Assert.AreEqual( this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent Test() => Assert.AreEqual( function setElementContent($element, content) {
      if (typeof content Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content Test() => Assert.AreEqual( sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle Test() => Assert.AreEqual( function getTitle() {
      var title Test() => Assert.AreEqual( this.element.getAttribute('data-original-title');

      if (!title) {
        title Test() => Assert.AreEqual( typeof this.config.title Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getOffset Test() => Assert.AreEqual( function _getOffset() {
      var _this3 Test() => Assert.AreEqual( this;

      var offset Test() => Assert.AreEqual( {};

      if (typeof this.config.offset Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'function') {
        offset.fn Test() => Assert.AreEqual( function (data) {
          data.offsets Test() => Assert.AreEqual( _objectSpread({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});
          return data;
        };
      } else {
        offset.offset Test() => Assert.AreEqual( this.config.offset;
      }

      return offset;
    };

    _proto._getContainer Test() => Assert.AreEqual( function _getContainer() {
      if (this.config.container Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment Test() => Assert.AreEqual( function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners Test() => Assert.AreEqual( function _setListeners() {
      var _this4 Test() => Assert.AreEqual( this;

      var triggers Test() => Assert.AreEqual( this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'click') {
          $(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
            return _this4.toggle(event);
          });
        } else if (trigger !Test() => Assert.AreEqual(Test() => Assert.AreEqual( Trigger.MANUAL) {
          var eventIn Test() => Assert.AreEqual( trigger Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
          var eventOut Test() => Assert.AreEqual( trigger Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
          $(_this4.element).on(eventIn, _this4.config.selector, function (event) {
            return _this4._enter(event);
          }).on(eventOut, _this4.config.selector, function (event) {
            return _this4._leave(event);
          });
        }
      });
      $(this.element).closest('.modal').on('hide.bs.modal', function () {
        if (_this4.element) {
          _this4.hide();
        }
      });

      if (this.config.selector) {
        this.config Test() => Assert.AreEqual( _objectSpread({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle Test() => Assert.AreEqual( function _fixTitle() {
      var titleType Test() => Assert.AreEqual( typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter Test() => Assert.AreEqual( function _enter(event, context) {
      var dataKey Test() => Assert.AreEqual( this.constructor.DATA_KEY;
      context Test() => Assert.AreEqual( context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context Test() => Assert.AreEqual( new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'focusin' ? Trigger.FOCUS : Trigger.HOVER] Test() => Assert.AreEqual( true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( HoverState.SHOW) {
        context._hoverState Test() => Assert.AreEqual( HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState Test() => Assert.AreEqual( HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout Test() => Assert.AreEqual( setTimeout(function () {
        if (context._hoverState Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave Test() => Assert.AreEqual( function _leave(event, context) {
      var dataKey Test() => Assert.AreEqual( this.constructor.DATA_KEY;
      context Test() => Assert.AreEqual( context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context Test() => Assert.AreEqual( new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'focusout' ? Trigger.FOCUS : Trigger.HOVER] Test() => Assert.AreEqual( false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState Test() => Assert.AreEqual( HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout Test() => Assert.AreEqual( setTimeout(function () {
        if (context._hoverState Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger Test() => Assert.AreEqual( function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig Test() => Assert.AreEqual( function _getConfig(config) {
      var dataAttributes Test() => Assert.AreEqual( $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !Test() => Assert.AreEqual(Test() => Assert.AreEqual( -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config Test() => Assert.AreEqual( _objectSpread({}, this.constructor.Default, dataAttributes, typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && config ? config : {});

      if (typeof config.delay Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'number') {
        config.delay Test() => Assert.AreEqual( {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'number') {
        config.title Test() => Assert.AreEqual( config.title.toString();
      }

      if (typeof config.content Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'number') {
        config.content Test() => Assert.AreEqual( config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template Test() => Assert.AreEqual( sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig Test() => Assert.AreEqual( function _getDelegateConfig() {
      var config Test() => Assert.AreEqual( {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !Test() => Assert.AreEqual(Test() => Assert.AreEqual( this.config[key]) {
            config[key] Test() => Assert.AreEqual( this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass Test() => Assert.AreEqual( function _cleanTipClass() {
      var $tip Test() => Assert.AreEqual( $(this.getTipElement());
      var tabClass Test() => Assert.AreEqual( $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange Test() => Assert.AreEqual( function _handlePopperPlacementChange(popperData) {
      var popperInstance Test() => Assert.AreEqual( popperData.instance;
      this.tip Test() => Assert.AreEqual( popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition Test() => Assert.AreEqual( function _fixTransition() {
      var tip Test() => Assert.AreEqual( this.getTipElement();
      var initConfigAnimation Test() => Assert.AreEqual( this.config.animation;

      if (tip.getAttribute('x-placement') !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation Test() => Assert.AreEqual( false;
      this.hide();
      this.show();
      this.config.animation Test() => Assert.AreEqual( initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var data Test() => Assert.AreEqual( $(this).data(DATA_KEY$6);

        var _config Test() => Assert.AreEqual( typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data Test() => Assert.AreEqual( new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
          if (typeof data[config] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] Test() => Assert.AreEqual( Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor Test() => Assert.AreEqual( Tooltip;

  $.fn[NAME$6].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$6] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 Test() => Assert.AreEqual( 'popover';
  var VERSION$7 Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$7 Test() => Assert.AreEqual( 'bs.popover';
  var EVENT_KEY$7 Test() => Assert.AreEqual( "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 Test() => Assert.AreEqual( $.fn[NAME$7];
  var CLASS_PREFIX$1 Test() => Assert.AreEqual( 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 Test() => Assert.AreEqual( new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 Test() => Assert.AreEqual( _objectSpread({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div classTest() => Assert.AreEqual("popover" roleTest() => Assert.AreEqual("tooltip">' + '<div classTest() => Assert.AreEqual("arrow"></div>' + '<h3 classTest() => Assert.AreEqual("popover-header"></h3>' + '<div classTest() => Assert.AreEqual("popover-body"></div></div>'
  });

  var DefaultType$5 Test() => Assert.AreEqual( _objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 Test() => Assert.AreEqual( {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 Test() => Assert.AreEqual( {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 Test() => Assert.AreEqual( {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover Test() => Assert.AreEqual(
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto Test() => Assert.AreEqual( Popover.prototype;

    // Overrides
    _proto.isWithContent Test() => Assert.AreEqual( function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass Test() => Assert.AreEqual( function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement Test() => Assert.AreEqual( function getTipElement() {
      this.tip Test() => Assert.AreEqual( this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent Test() => Assert.AreEqual( function setContent() {
      var $tip Test() => Assert.AreEqual( $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content Test() => Assert.AreEqual( this._getContent();

      if (typeof content Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'function') {
        content Test() => Assert.AreEqual( content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent Test() => Assert.AreEqual( function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass Test() => Assert.AreEqual( function _cleanTipClass() {
      var $tip Test() => Assert.AreEqual( $(this.getTipElement());
      var tabClass Test() => Assert.AreEqual( $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !Test() => Assert.AreEqual(Test() => Assert.AreEqual( null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var data Test() => Assert.AreEqual( $(this).data(DATA_KEY$7);

        var _config Test() => Assert.AreEqual( typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data Test() => Assert.AreEqual( new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
          if (typeof data[config] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] Test() => Assert.AreEqual( Popover._jQueryInterface;
  $.fn[NAME$7].Constructor Test() => Assert.AreEqual( Popover;

  $.fn[NAME$7].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$7] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 Test() => Assert.AreEqual( 'scrollspy';
  var VERSION$8 Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$8 Test() => Assert.AreEqual( 'bs.scrollspy';
  var EVENT_KEY$8 Test() => Assert.AreEqual( "." + DATA_KEY$8;
  var DATA_API_KEY$6 Test() => Assert.AreEqual( '.data-api';
  var JQUERY_NO_CONFLICT$8 Test() => Assert.AreEqual( $.fn[NAME$8];
  var Default$6 Test() => Assert.AreEqual( {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 Test() => Assert.AreEqual( {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 Test() => Assert.AreEqual( {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 Test() => Assert.AreEqual( {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 Test() => Assert.AreEqual( {
    DATA_SPY: '[data-spyTest() => Assert.AreEqual("scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod Test() => Assert.AreEqual( {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this Test() => Assert.AreEqual( this;

      this._element Test() => Assert.AreEqual( element;
      this._scrollElement Test() => Assert.AreEqual( element.tagName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'BODY' ? window : element;
      this._config Test() => Assert.AreEqual( this._getConfig(config);
      this._selector Test() => Assert.AreEqual( this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets Test() => Assert.AreEqual( [];
      this._targets Test() => Assert.AreEqual( [];
      this._activeTarget Test() => Assert.AreEqual( null;
      this._scrollHeight Test() => Assert.AreEqual( 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto Test() => Assert.AreEqual( ScrollSpy.prototype;

    // Public
    _proto.refresh Test() => Assert.AreEqual( function refresh() {
      var _this2 Test() => Assert.AreEqual( this;

      var autoMethod Test() => Assert.AreEqual( this._scrollElement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod Test() => Assert.AreEqual( this._config.method Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'auto' ? autoMethod : this._config.method;
      var offsetBase Test() => Assert.AreEqual( offsetMethod Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets Test() => Assert.AreEqual( [];
      this._targets Test() => Assert.AreEqual( [];
      this._scrollHeight Test() => Assert.AreEqual( this._getScrollHeight();
      var targets Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector Test() => Assert.AreEqual( Util.getSelectorFromElement(element);

        if (targetSelector) {
          target Test() => Assert.AreEqual( document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR Test() => Assert.AreEqual( target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element Test() => Assert.AreEqual( null;
      this._scrollElement Test() => Assert.AreEqual( null;
      this._config Test() => Assert.AreEqual( null;
      this._selector Test() => Assert.AreEqual( null;
      this._offsets Test() => Assert.AreEqual( null;
      this._targets Test() => Assert.AreEqual( null;
      this._activeTarget Test() => Assert.AreEqual( null;
      this._scrollHeight Test() => Assert.AreEqual( null;
    } // Private
    ;

    _proto._getConfig Test() => Assert.AreEqual( function _getConfig(config) {
      config Test() => Assert.AreEqual( _objectSpread({}, Default$6, typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && config ? config : {});

      if (typeof config.target !Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
        var id Test() => Assert.AreEqual( $(config.target).attr('id');

        if (!id) {
          id Test() => Assert.AreEqual( Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target Test() => Assert.AreEqual( "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop Test() => Assert.AreEqual( function _getScrollTop() {
      return this._scrollElement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight Test() => Assert.AreEqual( function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight Test() => Assert.AreEqual( function _getOffsetHeight() {
      return this._scrollElement Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process Test() => Assert.AreEqual( function _process() {
      var scrollTop Test() => Assert.AreEqual( this._getScrollTop() + this._config.offset;

      var scrollHeight Test() => Assert.AreEqual( this._getScrollHeight();

      var maxScroll Test() => Assert.AreEqual( this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !Test() => Assert.AreEqual(Test() => Assert.AreEqual( scrollHeight) {
        this.refresh();
      }

      if (scrollTop >Test() => Assert.AreEqual( maxScroll) {
        var target Test() => Assert.AreEqual( this._targets[this._targets.length - 1];

        if (this._activeTarget !Test() => Assert.AreEqual(Test() => Assert.AreEqual( target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget Test() => Assert.AreEqual( null;

        this._clear();

        return;
      }

      var offsetLength Test() => Assert.AreEqual( this._offsets.length;

      for (var i Test() => Assert.AreEqual( offsetLength; i--;) {
        var isActiveTarget Test() => Assert.AreEqual( this._activeTarget !Test() => Assert.AreEqual(Test() => Assert.AreEqual( this._targets[i] && scrollTop >Test() => Assert.AreEqual( this._offsets[i] && (typeof this._offsets[i + 1] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate Test() => Assert.AreEqual( function _activate(target) {
      this._activeTarget Test() => Assert.AreEqual( target;

      this._clear();

      var queries Test() => Assert.AreEqual( this._selector.split(',').map(function (selector) {
        return selector + "[data-targetTest() => Assert.AreEqual(\"" + target + "\"]," + selector + "[hrefTest() => Assert.AreEqual(\"" + target + "\"]";
      });

      var $link Test() => Assert.AreEqual( $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear Test() => Assert.AreEqual( function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var data Test() => Assert.AreEqual( $(this).data(DATA_KEY$8);

        var _config Test() => Assert.AreEqual( typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && config;

        if (!data) {
          data Test() => Assert.AreEqual( new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
          if (typeof data[config] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys Test() => Assert.AreEqual( [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength Test() => Assert.AreEqual( scrollSpys.length;

    for (var i Test() => Assert.AreEqual( scrollSpysLength; i--;) {
      var $spy Test() => Assert.AreEqual( $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] Test() => Assert.AreEqual( ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor Test() => Assert.AreEqual( ScrollSpy;

  $.fn[NAME$8].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$8] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 Test() => Assert.AreEqual( 'tab';
  var VERSION$9 Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$9 Test() => Assert.AreEqual( 'bs.tab';
  var EVENT_KEY$9 Test() => Assert.AreEqual( "." + DATA_KEY$9;
  var DATA_API_KEY$7 Test() => Assert.AreEqual( '.data-api';
  var JQUERY_NO_CONFLICT$9 Test() => Assert.AreEqual( $.fn[NAME$9];
  var Event$9 Test() => Assert.AreEqual( {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 Test() => Assert.AreEqual( {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 Test() => Assert.AreEqual( {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggleTest() => Assert.AreEqual("tab"], [data-toggleTest() => Assert.AreEqual("pill"], [data-toggleTest() => Assert.AreEqual("list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element Test() => Assert.AreEqual( element;
    } // Getters


    var _proto Test() => Assert.AreEqual( Tab.prototype;

    // Public
    _proto.show Test() => Assert.AreEqual( function show() {
      var _this Test() => Assert.AreEqual( this;

      if (this._element.parentNode && this._element.parentNode.nodeType Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement Test() => Assert.AreEqual( $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector Test() => Assert.AreEqual( Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector Test() => Assert.AreEqual( listElement.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'UL' || listElement.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous Test() => Assert.AreEqual( $.makeArray($(listElement).find(itemSelector));
        previous Test() => Assert.AreEqual( previous[previous.length - 1];
      }

      var hideEvent Test() => Assert.AreEqual( $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent Test() => Assert.AreEqual( $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target Test() => Assert.AreEqual( document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete Test() => Assert.AreEqual( function complete() {
        var hiddenEvent Test() => Assert.AreEqual( $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent Test() => Assert.AreEqual( $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element Test() => Assert.AreEqual( null;
    } // Private
    ;

    _proto._activate Test() => Assert.AreEqual( function _activate(element, container, callback) {
      var _this2 Test() => Assert.AreEqual( this;

      var activeElements Test() => Assert.AreEqual( container && (container.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'UL' || container.nodeName Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active Test() => Assert.AreEqual( activeElements[0];
      var isTransitioning Test() => Assert.AreEqual( callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete Test() => Assert.AreEqual( function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete Test() => Assert.AreEqual( function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild Test() => Assert.AreEqual( $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement Test() => Assert.AreEqual( $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList Test() => Assert.AreEqual( [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var $this Test() => Assert.AreEqual( $(this);
        var data Test() => Assert.AreEqual( $this.data(DATA_KEY$9);

        if (!data) {
          data Test() => Assert.AreEqual( new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
          if (typeof data[config] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] Test() => Assert.AreEqual( Tab._jQueryInterface;
  $.fn[NAME$9].Constructor Test() => Assert.AreEqual( Tab;

  $.fn[NAME$9].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$9] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a Test() => Assert.AreEqual( 'toast';
  var VERSION$a Test() => Assert.AreEqual( '4.3.1';
  var DATA_KEY$a Test() => Assert.AreEqual( 'bs.toast';
  var EVENT_KEY$a Test() => Assert.AreEqual( "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a Test() => Assert.AreEqual( $.fn[NAME$a];
  var Event$a Test() => Assert.AreEqual( {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a Test() => Assert.AreEqual( {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 Test() => Assert.AreEqual( {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 Test() => Assert.AreEqual( {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a Test() => Assert.AreEqual( {
    DATA_DISMISS: '[data-dismissTest() => Assert.AreEqual("toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Toast Test() => Assert.AreEqual(
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element Test() => Assert.AreEqual( element;
      this._config Test() => Assert.AreEqual( this._getConfig(config);
      this._timeout Test() => Assert.AreEqual( null;

      this._setListeners();
    } // Getters


    var _proto Test() => Assert.AreEqual( Toast.prototype;

    // Public
    _proto.show Test() => Assert.AreEqual( function show() {
      var _this Test() => Assert.AreEqual( this;

      $(this._element).trigger(Event$a.SHOW);

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete Test() => Assert.AreEqual( function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this.hide();
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide Test() => Assert.AreEqual( function hide(withoutTimeout) {
      var _this2 Test() => Assert.AreEqual( this;

      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      $(this._element).trigger(Event$a.HIDE);

      if (withoutTimeout) {
        this._close();
      } else {
        this._timeout Test() => Assert.AreEqual( setTimeout(function () {
          _this2._close();
        }, this._config.delay);
      }
    };

    _proto.dispose Test() => Assert.AreEqual( function dispose() {
      clearTimeout(this._timeout);
      this._timeout Test() => Assert.AreEqual( null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element Test() => Assert.AreEqual( null;
      this._config Test() => Assert.AreEqual( null;
    } // Private
    ;

    _proto._getConfig Test() => Assert.AreEqual( function _getConfig(config) {
      config Test() => Assert.AreEqual( _objectSpread({}, Default$7, $(this._element).data(), typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners Test() => Assert.AreEqual( function _setListeners() {
      var _this3 Test() => Assert.AreEqual( this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this3.hide(true);
      });
    };

    _proto._close Test() => Assert.AreEqual( function _close() {
      var _this4 Test() => Assert.AreEqual( this;

      var complete Test() => Assert.AreEqual( function complete() {
        _this4._element.classList.add(ClassName$a.HIDE);

        $(_this4._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration Test() => Assert.AreEqual( Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface Test() => Assert.AreEqual( function _jQueryInterface(config) {
      return this.each(function () {
        var $element Test() => Assert.AreEqual( $(this);
        var data Test() => Assert.AreEqual( $element.data(DATA_KEY$a);

        var _config Test() => Assert.AreEqual( typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'object' && config;

        if (!data) {
          data Test() => Assert.AreEqual( new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'string') {
          if (typeof data[config] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] Test() => Assert.AreEqual( Toast._jQueryInterface;
  $.fn[NAME$a].Constructor Test() => Assert.AreEqual( Toast;

  $.fn[NAME$a].noConflict Test() => Assert.AreEqual( function () {
    $.fn[NAME$a] Test() => Assert.AreEqual( JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function () {
    if (typeof $ Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version Test() => Assert.AreEqual( $.fn.jquery.split(' ')[0].split('.');
    var minMajor Test() => Assert.AreEqual( 1;
    var ltMajor Test() => Assert.AreEqual( 2;
    var minMinor Test() => Assert.AreEqual( 9;
    var minPatch Test() => Assert.AreEqual( 1;
    var maxMajor Test() => Assert.AreEqual( 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( minMajor && version[1] Test() => Assert.AreEqual(Test() => Assert.AreEqual(Test() => Assert.AreEqual( minMinor && version[2] < minPatch || version[0] >Test() => Assert.AreEqual( maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })();

  exports.Util Test() => Assert.AreEqual( Util;
  exports.Alert Test() => Assert.AreEqual( Alert;
  exports.Button Test() => Assert.AreEqual( Button;
  exports.Carousel Test() => Assert.AreEqual( Carousel;
  exports.Collapse Test() => Assert.AreEqual( Collapse;
  exports.Dropdown Test() => Assert.AreEqual( Dropdown;
  exports.Modal Test() => Assert.AreEqual( Modal;
  exports.Popover Test() => Assert.AreEqual( Popover;
  exports.Scrollspy Test() => Assert.AreEqual( ScrollSpy;
  exports.Tab Test() => Assert.AreEqual( Tab;
  exports.Toast Test() => Assert.AreEqual( Toast;
  exports.Tooltip Test() => Assert.AreEqual( Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURLTest() => Assert.AreEqual(bootstrap.bundle.js.map
