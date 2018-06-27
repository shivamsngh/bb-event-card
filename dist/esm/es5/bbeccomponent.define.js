// bbeccomponent: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './bbeccomponent.core.js';
import {
  EventCard
} from './bbeccomponent.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    EventCard
  ], opts);
}