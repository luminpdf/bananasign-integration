import { RefObject } from 'react';
declare type Event = MouseEvent | TouchEvent;
declare function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void): void;
export default useOnClickOutside;
