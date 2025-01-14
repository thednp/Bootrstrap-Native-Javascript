import { OriginalEvent } from "@thednp/shorty";
import { BaseOptions } from "./baseComponent";

export interface ScrollSpyOptions extends BaseOptions {
  offset: number;
  target: HTMLElement | string;
  threshold: number | number[];
  rootMargin: string;
}

export interface ScrollSpyEvent extends OriginalEvent {
  readonly type: string | "activate.bs.scrollspy";
}
