/// <reference types="node" />
/// <reference types="node" />
import EventEmitter from 'events';
import { Id } from '@tmagic/schema';
import { GuidesType } from './const';
import { ActionManagerConfig, SelectStatus } from './types';
/**
 * 管理蒙层mask之上的操作：1、监听键盘鼠标事件，判断形成单选、多选、高亮操作；2、管理单选、多选、高亮三个类协同工作。
 * @extends EventEmitter
 */
export default class ActionManager extends EventEmitter {
    private dr;
    private multiDr;
    private highlightLayer;
    /** 单选、多选、高亮的容器（蒙层的content） */
    private container;
    /** 当前选中的节点 */
    private selectedEl;
    /** 多选选中的节点组 */
    private selectedElList;
    /** 当前高亮的节点 */
    private highlightedEl;
    /** 当前是否处于多选状态 */
    private isMultiSelectStatus;
    /** 当拖拽组件到容器上方进入可加入容器状态时，给容器添加的一个class名称 */
    private containerHighlightClassName;
    /** 当拖拽组件到容器上方时，需要悬停多久才能将组件加入容器 */
    private containerHighlightDuration;
    /** 将组件加入容器的操作方式 */
    private containerHighlightType?;
    private isAltKeydown;
    private getTargetElement;
    private getElementsFromPoint;
    private canSelect;
    private isContainer;
    private getRenderDocument;
    private mouseMoveHandler;
    constructor(config: ActionManagerConfig);
    /**
     * 设置水平/垂直参考线
     * @param type 参考线类型
     * @param guidelines 参考线坐标数组
     */
    setGuidelines(type: GuidesType, guidelines: number[]): void;
    /**
     * 清空所有参考线
     */
    clearGuides(): void;
    /**
     * 更新moveable，外部主要调用场景是元素配置变更、页面大小变更
     * @param el 变更的元素
     */
    updateMoveable(el?: HTMLElement): void;
    /**
     * 判断是否单选选中的元素
     */
    isSelectedEl(el: HTMLElement): boolean;
    setSelectedEl(el: HTMLElement): void;
    getSelectedEl(): HTMLElement | undefined;
    getSelectedElList(): HTMLElement[];
    /**
     * 获取鼠标下方第一个可选中元素，如果元素层叠，返回到是最上层元素
     * @param event 鼠标事件
     * @returns 鼠标下方第一个可选中元素
     */
    getElementFromPoint(event: MouseEvent): Promise<HTMLElement | undefined>;
    /**
     * 判断一个元素能否在当前场景被选中
     * @param el 被判断的元素
     * @param event 鼠标事件
     * @param stop 通过该元素如果得知剩下的元素都不可被选中，通知调用方终止对剩下元素的判断
     * @returns 能否选中
     */
    isElCanSelect(el: HTMLElement, event: MouseEvent, stop: () => boolean): Promise<boolean>;
    /**
     * 判断一个元素是否可以被多选，如果当前元素是page，则调stop函数告诉调用方不必继续判断其它元素了
     */
    canMultiSelect(el: HTMLElement, stop: () => boolean): boolean;
    select(el: HTMLElement, event: MouseEvent | undefined): void;
    multiSelect(idOrElList: HTMLElement[] | Id[]): void;
    getHighlightEl(): HTMLElement | undefined;
    setHighlightEl(el: HTMLElement | undefined): void;
    highlight(idOrEl: Id | HTMLElement): void;
    clearHighlight(): void;
    /**
     * 用于在切换选择模式时清除上一次的状态
     * @param selectType 需要清理的选择模式
     */
    clearSelectStatus(selectType: SelectStatus): void;
    /**
     * 找到鼠标下方的容器，通过添加className对容器进行标记
     * @param event 鼠标事件
     * @param excludeElList 计算鼠标点所在容器时要排除的元素列表
     */
    addContainerHighlightClassName(event: MouseEvent, excludeElList: Element[]): Promise<void>;
    /**
     * 鼠标拖拽着元素，在容器上方悬停，延迟一段时间后，对容器进行标记，如果悬停时间够长将标记成功，悬停时间短，调用方通过返回的timeoutId取消标记
     * 标记的作用：1、高亮容器，给用户一个加入容器的交互感知；2、释放鼠标后，通过标记的标志找到要加入的容器
     * @param event 鼠标事件
     * @param excludeElList 计算鼠标所在容器时要排除的元素列表
     * @returns timeoutId，调用方在鼠标移走时要取消该timeout，阻止标记
     */
    delayedMarkContainer(event: MouseEvent, excludeElList?: Element[]): NodeJS.Timeout | undefined;
    destroy(): void;
    private changeCallback;
    /**
     * 在执行多选逻辑前，先准备好多选选中元素
     * @param el 新选中的元素
     * @returns 多选选中的元素列表
     */
    private beforeMultiSelect;
    /**
     * 当前状态下能否将组件加入容器，默认是鼠标悬停一段时间加入，alt模式则是按住alt+鼠标悬停一段时间加入
     */
    private canAddToContainer;
    /**
     * 结束对container的标记状态
     * @returns 标记的容器元素，没有标记的容器时返回null
     */
    private markContainerEnd;
    private initMouseEvent;
    /**
     * 初始化键盘事件监听
     */
    private initKeyEvent;
    /**
     * 处理单选、多选抛出来的事件
     */
    private initActionEvent;
    /**
     * 在down事件中集中cpu处理画布中选中操作渲染，在up事件中再通知外面的编辑器更新
     */
    private mouseDownHandler;
    private isStopTriggerSelect;
    /**
     * 在up事件中负责对外通知选中事件，通知画布之外的编辑器更新
     */
    private mouseUpHandler;
    private mouseLeaveHandler;
    private mouseWheelHandler;
}