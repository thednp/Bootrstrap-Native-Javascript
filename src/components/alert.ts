/* Native JavaScript for Bootstrap 5 | Alert
-------------------------------------------- */
import {
  createCustomEvent,
  dispatchEvent,
  emulateTransitionEnd,
  getInstance,
  hasClass,
  mouseclickEvent,
  PointerEvent,
  querySelector,
  removeClass,
} from "@thednp/shorty";

import { addListener, removeListener } from "@thednp/event-listener";

import fadeClass from "~/strings/fadeClass";
import showClass from "~/strings/showClass";
import dataBsDismiss from "~/strings/dataBsDismiss";
import alertString from "~/strings/alertString";
import alertComponent from "~/strings/alertComponent";
import isDisabled from "~/util/isDisabled";
import type { AlertEvent } from "~/interface/alert";

import BaseComponent from "./base-component";

// ALERT PRIVATE GC
// ================
const alertSelector = `.${alertString}`;
const alertDismissSelector = `[${dataBsDismiss}="${alertString}"]`;

/**
 * Static method which returns an existing `Alert` instance associated
 * to a target `Element`.
 */
const getAlertInstance = (element: Element) =>
  getInstance<Alert>(element, alertComponent);

/**
 * An `Alert` initialization callback.
 */
const alertInitCallback = (element: Element) => new Alert(element);

// ALERT CUSTOM EVENTS
// ===================
const closeAlertEvent = createCustomEvent<Record<string, never>, AlertEvent>(
  `close.bs.${alertString}`,
);
const closedAlertEvent = createCustomEvent<Record<string, never>, AlertEvent>(
  `closed.bs.${alertString}`,
);

// ALERT EVENT HANDLER
// ===================
/**
 * Alert `transitionend` callback.
 *
 * @param that target Alert instance
 */
const alertTransitionEnd = (self: Alert) => {
  const { element } = self;
  dispatchEvent(element, closedAlertEvent);

  self._toggleEventListeners();
  self.dispose();
  element.remove();
};

// ALERT DEFINITION
// ================
/** Creates a new Alert instance. */
export default class Alert extends BaseComponent {
  static selector = alertSelector;
  static init = alertInitCallback;
  static getInstance = getAlertInstance;
  dismiss: HTMLElement | null;

  constructor(target: Element | string) {
    super(target);

    // the dismiss button
    this.dismiss = querySelector<HTMLElement>(
      alertDismissSelector,
      this.element,
    );

    // add event listener
    this._toggleEventListeners(true);
  }

  /** Returns component name string. */
  get name() {
    return alertComponent;
  }

  // ALERT PUBLIC METHODS
  // ====================
  /**
   * Public method that hides the `.alert` element from the user,
   * disposes the instance once animation is complete, then
   * removes the element from the DOM.
   */
  close = (e: PointerEvent<HTMLElement>) => {
    const { element, dismiss } = this;

    // istanbul ignore if @preserve
    if (!element || !hasClass(element, showClass)) return;
    // istanbul ignore if @preserve
    if (e && dismiss && isDisabled(dismiss)) return;
    dispatchEvent(element, closeAlertEvent);

    if (closeAlertEvent.defaultPrevented) return;

    removeClass(element, showClass);

    if (hasClass(element, fadeClass)) {
      emulateTransitionEnd(element, () => alertTransitionEnd(this));
    } else alertTransitionEnd(this);
  };
  /**
   * Toggle on / off the `click` event listener.
   *
   * @param add when `true`, event listener is added
   */
  _toggleEventListeners = (add?: boolean) => {
    const action = add ? addListener : removeListener;
    const { dismiss, close } = this;
    // istanbul ignore else @preserve
    if (dismiss) {
      action(dismiss, mouseclickEvent, close);
    }
  };

  /** Remove the component from target element. */
  dispose() {
    this._toggleEventListeners();
    super.dispose();
  }
}
