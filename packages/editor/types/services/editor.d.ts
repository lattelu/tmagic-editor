import type { CodeBlockDSL, Id, MContainer, MNode } from '@tmagic/schema';
import type { AddMNode, EditorNodeInfo, PastePosition, StepValue, StoreState, StoreStateKey } from '../type';
import { LayerOffset, Layout } from '../type';
import BaseService from './BaseService';
declare class Editor extends BaseService {
    state: StoreState;
    private isHistoryStateChange;
    constructor();
    /**
     * 设置当前指点节点配置
     * @param name 'root' | 'page' | 'parent' | 'node' | 'highlightNode' | 'nodes' | 'stage' | 'modifiedNodeIds' | 'pageLength'
     * @param value MNode
     */
    set<K extends StoreStateKey, T extends StoreState[K]>(name: K, value: T): void;
    /**
     * 获取当前指点节点配置
     * @param name  'root' | 'page' | 'parent' | 'node' | 'highlightNode' | 'nodes' | 'stage' | 'modifiedNodeIds' | 'pageLength'
     * @returns MNode
     */
    get<K extends StoreStateKey>(name: K): StoreState[K];
    /**
     * 根据id获取组件、组件的父组件以及组件所属的页面节点
     * @param {number | string} id 组件id
     * @param {boolean} raw 是否使用toRaw
     * @returns {EditorNodeInfo}
     */
    getNodeInfo(id: Id, raw?: boolean): EditorNodeInfo;
    /**
     * 根据ID获取指点节点配置
     * @param id 组件ID
     * @param {boolean} raw 是否使用toRaw
     * @returns 组件节点配置
     */
    getNodeById(id: Id, raw?: boolean): MNode | null;
    /**
     * 根据ID获取指点节点的父节点配置
     * @param id 组件ID
     * @param {boolean} raw 是否使用toRaw
     * @returns 指点组件的父节点配置
     */
    getParentById(id: Id, raw?: boolean): MContainer | null;
    /**
     * 只有容器拥有布局
     */
    getLayout(parent: MNode, node?: MNode): Promise<Layout>;
    /**
     * 选中指定节点（将指定节点设置成当前选中状态）
     * @param config 指定节点配置或者ID
     * @returns 当前选中的节点配置
     */
    select(config: MNode | Id): Promise<MNode> | never;
    selectNextNode(): Promise<MNode | null> | never;
    selectNextPage(): Promise<MNode> | never;
    /**
     * 高亮指定节点
     * @param config 指定节点配置或者ID
     * @returns 当前高亮的节点配置
     */
    highlight(config: MNode | Id): void;
    /**
     * 多选
     * @param ids 指定节点ID
     * @returns 加入多选的节点配置
     */
    multiSelect(ids: Id[]): void;
    doAdd(node: MNode, parent: MContainer): Promise<MNode>;
    /**
     * 向指点容器添加组件节点
     * @param addConfig 将要添加的组件节点配置
     * @param parent 要添加到的容器组件节点配置，如果不设置，默认为当前选中的组件的父节点
     * @returns 添加后的节点
     */
    add(addNode: AddMNode | MNode[], parent?: MContainer | null): Promise<MNode | MNode[]>;
    doRemove(node: MNode): Promise<void>;
    /**
     * 删除组件
     * @param {Object} node
     */
    remove(nodeOrNodeList: MNode | MNode[]): Promise<void>;
    doUpdate(config: MNode): Promise<MNode>;
    /**
     * 更新节点
     * @param config 新的节点配置，配置中需要有id信息
     * @returns 更新后的节点配置
     */
    update(config: MNode | MNode[]): Promise<MNode | MNode[]>;
    /**
     * 将id为id1的组件移动到id为id2的组件位置上，例如：[1,2,3,4] -> sort(1,3) -> [2,1,3,4]
     * @param id1 组件ID
     * @param id2 组件ID
     * @returns void
     */
    sort(id1: Id, id2: Id): Promise<void>;
    /**
     * 将组将节点配置转化成string，然后存储到localStorage中
     * @param config 组件节点配置
     * @returns 组件节点配置
     */
    copy(config: MNode | MNode[]): Promise<void>;
    /**
     * 从localStorage中获取节点，然后添加到当前容器中
     * @param position 粘贴的坐标
     * @returns 添加后的组件节点配置
     */
    paste(position?: PastePosition): Promise<MNode | MNode[] | void>;
    doPaste(config: MNode[], position?: PastePosition): Promise<MNode[]>;
    doAlignCenter(config: MNode): Promise<MNode>;
    /**
     * 将指点节点设置居中
     * @param config 组件节点配置
     * @returns 当前组件节点配置
     */
    alignCenter(config: MNode | MNode[]): Promise<MNode | MNode[]>;
    /**
     * 移动当前选中节点位置
     * @param offset 偏移量
     */
    moveLayer(offset: number | LayerOffset): Promise<void>;
    /**
     * 移动到指定容器中
     * @param config 需要移动的节点
     * @param targetId 容器ID
     */
    moveToContainer(config: MNode, targetId: Id): Promise<MNode | undefined>;
    /**
     * 撤销当前操作
     * @returns 上一次数据
     */
    undo(): Promise<StepValue | null>;
    /**
     * 恢复到下一步
     * @returns 下一步数据
     */
    redo(): Promise<StepValue | null>;
    move(left: number, top: number): Promise<void>;
    resetState(): void;
    destroy(): void;
    resetModifiedNodeId(): void;
    /**
     * 从dsl中的codeBlocks字段读取活动的代码块
     * @returns {CodeBlockDSL | null}
     */
    getCodeDsl(): Promise<CodeBlockDSL | null>;
    getCodeDslSync(): CodeBlockDSL | null;
    /**
     * 设置代码块到dsl的codeBlocks字段
     * @param {CodeBlockDSL} codeDsl 代码DSL
     * @returns {void}
     */
    setCodeDsl(codeDsl: CodeBlockDSL): Promise<void>;
    private addModifiedNodeId;
    private pushHistoryState;
    private changeHistoryState;
    private toggleFixedPosition;
    private selectedConfigExceptionHandler;
}
export type EditorService = Editor;
declare const _default: Editor;
export default _default;