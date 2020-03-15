export const q = document.querySelector.bind(document);
export const el = document.createElement.bind(document);

class ListenerBuilder<K extends keyof DocumentEventMap> {
  event: K;
  capturing: boolean;

  constructor(event: K) {
    this.event = event;
  }

  on(element: EventTarget): ListenableElement<K> {
    return new ListenableElement(element, this);
  }

  capture(): ListenerBuilder<K> {
    this.capturing = true;
    return this;
  }
}

interface Handler<K extends keyof DocumentEventMap> {
  (this: Document, ev: DocumentEventMap[K]): any;
}

class ListenableElement<K extends keyof DocumentEventMap> {
  private element: EventTarget;
  private listenerBuilder: ListenerBuilder<K>;
  private handler: Handler<K>;

  constructor(element: EventTarget, listenerBuilder: ListenerBuilder<K>) {
    this.element = element;
    this.listenerBuilder = listenerBuilder;
  }

  withHandler(handler: Handler<K>) {
    this.handler = handler;
    this.element.addEventListener(this.listenerBuilder.event, handler, this.listenerBuilder.capturing);
  }

  unsubscribe() {
    this.element.removeEventListener(this.listenerBuilder.event, this.handler, this.listenerBuilder.capturing);
  }
}

export function listen<K extends keyof DocumentEventMap>(event: K): ListenerBuilder<K> {
  return new ListenerBuilder(event);
}
