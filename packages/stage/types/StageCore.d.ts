/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from 'events';
import { Id } from '@tmagic/schema';
import StageMask from './StageMask';
import StageRender from './StageRender';
import { RemoveData, StageCoreConfig, UpdateData } from './types';
/**
 * 负责管理画布，管理renderer、mask、actionManager三个核心类，并负责统一对外通信，包括提供接口和抛事件
 */
export default class StageCore extends EventEmitter {
    container?: HTMLDivElement;
    renderer: StageRender;
    mask: StageMask;
    private actionManager;
    private pageResizeObserver;
    private autoScrollIntoView;
    private customizedRender?;
    constructor(config: StageCoreConfig);
    /**
     * 单选选中元素
     * @param idOrEl 选中的id或者元素
     */
    select(idOrEl: Id | HTMLElement, event?: MouseEvent): Promise<void>;
    /**
     * 多选选中多个元素
     * @param idOrElList 选中元素的id或元素列表
     */
    multiSelect(idOrElList: HTMLElement[] | Id[]): Promise<void>;
    /**
     * 高亮选中元素
     * @param el 要高亮的元素
     */
    highlight(idOrEl: Id | HTMLElement): void;
    /**
     * 更新组件
     * @param data 更新组件的数据
     */
    update(data: UpdateData): Promise<void>;
    /**
     * 往画布增加一个组件
     * @param data 组件信息数据
     */
    add(data: UpdateData): Promise<void>;
    /**
     * 从画布删除一个组件
     * @param data 组件信息数据
     */
    remove(data: RemoveData): Promise<void>;
    setZoom(zoom?: number): void;
    /**
     * 挂载Dom节点
     * @param el 将stage挂载到该Dom节点上
     */
    mount(el: HTMLDivElement): Promise<void>;
    /**
     * 清空所有参考线
     */
    clearGuides(): void;
    /**
     * @deprecated 废弃接口，建议用delayedMarkContainer代替
     */
    getAddContainerHighlightClassNameTimeout(event: MouseEvent, excludeElList?: Element[]): NodeJS.Timeout | undefined;
    /**
     * 鼠标拖拽着元素，在容器上方悬停，延迟一段时间后，对容器进行标记，如果悬停时间够长将标记成功，悬停时间短，调用方通过返回的timeoutId取消标记
     * 标记的作用：1、高亮容器，给用户一个加入容器的交互感知；2、释放鼠标后，通过标记的标志找到要加入的容器
     * @param event 鼠标事件
     * @param excludeElList 计算鼠标所在容器时要排除的元素列表
     * @returns timeoutId，调用方在鼠标移走时要取消该timeout，阻止标记
     */
    delayedMarkContainer(event: MouseEvent, excludeElList?: Element[]): NodeJS.Timeout | undefined;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 监听页面大小变化
     */
    private observePageResize;
    private getActionManagerConfig;
    private initRenderEvent;
    private initMaskEvent;
    /**
     * 初始化操作相关事件监听
     */
    private initActionEvent;
    /**
     * 初始化ActionManager类本身抛出来的事件监听
     */
    private initActionManagerEvent;
    /**
     * 初始化DragResize类通过ActionManager抛出来的事件监听
     */
    private initDrEvent;
    /**
     * 初始化MultiDragResize类通过ActionManager抛出来的事件监听
     */
    private initMulDrEvent;
    /**
     * 初始化Highlight类通过ActionManager抛出来的事件监听
     */
    private initHighlightEvent;
}