/// <reference types="node" />
import type { MoveableOptions } from 'moveable';
import Core from '@tmagic/core';
import type { Id, MApp, MContainer, MNode } from '@tmagic/schema';
import { GuidesType, ZIndex } from './const';
import DragResizeHelper from './DragResizeHelper';
import StageCore from './StageCore';
export type TargetElement = HTMLElement | SVGElement;
export type CanSelect = (el: HTMLElement, event: MouseEvent, stop: () => boolean) => boolean | Promise<boolean>;
export type IsContainer = (el: HTMLElement) => boolean | Promise<boolean>;
export type CustomizeRender = (renderer: StageCore) => Promise<HTMLElement> | HTMLElement;
/** 业务方自定义的moveableOptions，可以是配置，也可以是回调函数 */
export type CustomizeMoveableOptions = ((config?: CustomizeMoveableOptionsCallbackConfig) => MoveableOptions) | MoveableOptions | undefined;
/** render提供给的接口，如果是id则转成el，如果是el则直接返回 */
export type GetTargetElement = (idOrEl: Id | HTMLElement) => HTMLElement;
/** render提供的接口，通过坐标获得坐标下所有HTML元素数组 */
export type GetElementsFromPoint = (point: Point) => HTMLElement[];
export type GetRenderDocument = () => Document | undefined;
export type DelayedMarkContainer = (event: MouseEvent, exclude: Element[]) => NodeJS.Timeout | undefined;
export type MarkContainerEnd = () => HTMLElement | null;
export type GetRootContainer = () => HTMLDivElement | undefined;
/** 将组件添加到容器的方式 */
export declare enum ContainerHighlightType {
    /** 默认方式：组件在容器上方悬停一段时间后加入 */
    DEFAULT = "default",
    /** 按住alt键，并在容器上方悬停一段时间后加入 */
    ALT = "alt"
}
export type UpdateDragEl = (el: TargetElement, target: TargetElement) => void;
export interface StageCoreConfig {
    /** 需要对齐的dom节点的CSS选择器字符串 */
    snapElementQuerySelector?: string;
    /** 放大倍数，默认1倍 */
    zoom?: number;
    canSelect?: CanSelect;
    isContainer: IsContainer;
    containerHighlightClassName?: string;
    containerHighlightDuration?: number;
    containerHighlightType?: ContainerHighlightType;
    moveableOptions?: CustomizeMoveableOptions;
    multiMoveableOptions?: CustomizeMoveableOptions;
    /** runtime 的HTML地址，可以是一个HTTP地址，如果和编辑器不同域，需要设置跨域，也可以是一个相对或绝对路径 */
    runtimeUrl?: string;
    render?: (renderer: StageCore) => Promise<HTMLElement> | HTMLElement;
    autoScrollIntoView?: boolean;
    updateDragEl?: UpdateDragEl;
    disabledDragStart?: boolean;
}
export interface ActionManagerConfig {
    container: HTMLElement;
    containerHighlightClassName?: string;
    containerHighlightDuration?: number;
    containerHighlightType?: ContainerHighlightType;
    moveableOptions?: CustomizeMoveableOptions;
    multiMoveableOptions?: CustomizeMoveableOptions;
    disabledDragStart?: boolean;
    canSelect?: CanSelect;
    isContainer: IsContainer;
    getRootContainer: GetRootContainer;
    getRenderDocument: GetRenderDocument;
    updateDragEl?: UpdateDragEl;
    getTargetElement: GetTargetElement;
    getElementsFromPoint: GetElementsFromPoint;
}
export interface MoveableOptionsManagerConfig {
    container: HTMLElement;
    moveableOptions?: CustomizeMoveableOptions;
    getRootContainer: GetRootContainer;
}
export interface CustomizeMoveableOptionsCallbackConfig {
    targetElId?: string;
}
export interface StageRenderConfig {
    runtimeUrl?: string;
    zoom: number | undefined;
    customizedRender?: () => Promise<HTMLElement | null>;
}
export interface StageMaskConfig {
    core: StageCore;
}
export interface StageDragResizeConfig {
    container: HTMLElement;
    dragResizeHelper: DragResizeHelper;
    moveableOptions?: CustomizeMoveableOptions;
    disabledDragStart?: boolean;
    getRootContainer: GetRootContainer;
    getRenderDocument: GetRenderDocument;
    markContainerEnd: MarkContainerEnd;
    delayedMarkContainer: DelayedMarkContainer;
}
export interface StageMultiDragResizeConfig {
    container: HTMLElement;
    dragResizeHelper: DragResizeHelper;
    multiMoveableOptions?: CustomizeMoveableOptions;
    getRootContainer: GetRootContainer;
    getRenderDocument: GetRenderDocument;
    markContainerEnd: MarkContainerEnd;
    delayedMarkContainer: DelayedMarkContainer;
}
export interface DragResizeHelperConfig {
    container: HTMLElement;
    updateDragEl?: UpdateDragEl;
}
/** 选择状态 */
export declare enum SelectStatus {
    /** 单选 */
    SELECT = "select",
    /** 多选 */
    MULTI_SELECT = "multiSelect"
}
/** 拖动状态 */
export declare enum StageDragStatus {
    /** 开始拖动 */
    START = "start",
    /** 拖动中 */
    ING = "ing",
    /** 拖动结束 */
    END = "end"
}
export type Rect = {
    width: number;
    height: number;
} & Offset;
export interface Offset {
    left: number;
    top: number;
}
export interface Point {
    clientX: number;
    clientY: number;
}
export interface GuidesEventData {
    type: GuidesType;
    guides: number[];
}
export interface UpdateEventData {
    data: {
        el: HTMLElement;
        style: {
            width?: number;
            height?: number;
            left?: number;
            top?: number;
            transform?: {
                rotate?: string;
                scale?: string;
            };
        };
        ghostEl?: HTMLElement;
    }[];
    parentEl: HTMLElement | null;
}
export interface RemoveEventData {
    data: {
        el: HTMLElement;
    }[];
}
export interface SortEventData {
    src: Id;
    dist: Id;
    root?: MApp;
}
export interface UpdateData {
    config: MNode;
    parent?: MContainer;
    parentId?: Id;
    root: MApp;
}
export interface RemoveData {
    id: Id;
    parentId: Id;
    root: MApp;
}
export interface Runtime {
    getApp?: () => Core;
    beforeSelect?: (el: HTMLElement) => Promise<boolean> | boolean;
    updateRootConfig?: (config: MApp) => void;
    updatePageId?: (id: Id) => void;
    select?: (id: Id) => Promise<HTMLElement> | HTMLElement;
    add?: (data: UpdateData) => void;
    update?: (data: UpdateData) => void;
    sortNode?: (data: SortEventData) => void;
    remove?: (data: RemoveData) => void;
}
export interface Magic {
    /** 当前页面的根节点变化时调用该方法，编辑器会同步该el和stage的大小，该方法由stage注入到iframe.contentWindow中 */
    onPageElUpdate: (el: HTMLElement) => void;
    onRuntimeReady: (runtime: Runtime) => void;
}
export interface RuntimeWindow extends Window {
    magic: Magic;
}
export interface StageHighlightConfig {
    container: HTMLElement;
    updateDragEl?: UpdateDragEl;
    getRootContainer: GetRootContainer;
}
export interface TargetShadowConfig {
    container: HTMLElement;
    zIndex?: ZIndex;
    updateDragEl?: UpdateDragEl;
    idPrefix?: string;
}
export declare enum AbleActionEventType {
    SELECT_PARENT = "select-parent",
    REMOVE = "remove"
}