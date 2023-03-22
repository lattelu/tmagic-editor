/// <reference types="node" />
import { EventEmitter } from 'events';
import type { CodeBlockDSL, EventItemConfig, Id, MApp, MPage } from '@tmagic/schema';
import Env from './Env';
import Page from './Page';
interface AppOptionsConfig {
    ua?: string;
    config?: MApp;
    platform?: 'editor' | 'mobile' | 'tv' | 'pc' | 'mini' | 'magic';
    jsEngine?: 'browser' | 'hippy';
    designWidth?: number;
    curPage?: Id;
    transformStyle?: (style: Record<string, any>) => Record<string, any>;
}
interface EventCache {
    eventConfig: EventItemConfig;
    fromCpt: any;
    args: any[];
}
declare class App extends EventEmitter {
    env: Env;
    codeDsl: CodeBlockDSL | undefined;
    pages: Map<Id, Page>;
    page: Page | undefined;
    platform: "editor" | "mobile" | "tv" | "pc" | "mini" | "magic" | undefined;
    jsEngine: string;
    designWidth: number;
    components: Map<any, any>;
    eventQueueMap: Record<string, EventCache[]>;
    pageConfigLoaded: boolean;
    constructor(options: AppOptionsConfig);
    /**
     * 将dsl中的style配置转换成css，主要是将数子转成rem为单位的样式值，例如100将被转换成1rem
     * @param style Object
     * @returns Object
     */
    transformStyle(style: Record<string, any> | string): Record<string, any>;
    /**
     * 设置dsl
     * @param config dsl跟节点
     * @param curPage 当前页面id
     */
    setConfig(config: MApp, curPage?: Id): void;
    addPage(config: MPage): void;
    setPage(id?: Id): void;
    deletePage(id: Id): void;
    getPage(id: Id): Page | undefined;
    registerComponent(type: string, Component: any): void;
    unregisterComponent(type: string): void;
    resolveComponent(type: string): any;
    bindEvents(): void;
    bindEvent(event: EventItemConfig, id: string): void;
    emit(name: string | symbol, node: any, ...args: any[]): boolean;
    eventHandler(eventConfig: EventItemConfig, fromCpt: any, args: any[]): void;
    destroy(): void;
    private addEventToMap;
}
export default App;
