/// <reference types="node" />
import { EventEmitter } from 'events';
interface ScrollViewerOptions {
    container: HTMLDivElement;
    target: HTMLDivElement;
    zoom: number;
    correctionScrollSize?: {
        width: number;
        height: number;
    };
}
export declare class ScrollViewer extends EventEmitter {
    private container;
    private target;
    private zoom;
    private scrollLeft;
    private scrollTop;
    private scrollHeight;
    private scrollWidth;
    private width;
    private height;
    private translateXCorrectionValue;
    private translateYCorrectionValue;
    private correctionScrollSize;
    private resizeObserver;
    constructor(options: ScrollViewerOptions);
    destroy(): void;
    setZoom(zoom: number): void;
    scrollTo({ left, top }: {
        left?: number;
        top?: number;
    }): void;
    private wheelHandler;
    private getPos;
    private setScrollSize;
    private setSize;
}
export {};
