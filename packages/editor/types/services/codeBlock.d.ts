import { CodeBlockContent, CodeBlockDSL, Id } from '@tmagic/schema';
import type { CodeRelation } from '../type';
import BaseService from './BaseService';
declare class CodeBlock extends BaseService {
    private state;
    constructor();
    /**
     * 设置活动的代码块dsl数据源
     * @param {CodeBlockDSL} codeDsl 代码DSL
     * @returns {void}
     */
    setCodeDsl(codeDsl: CodeBlockDSL): Promise<void>;
    /**
     * 获取活动的代码块dsl数据源（默认从dsl中的codeBlocks字段读取）
     * 方法要支持钩子添加扩展，会被重写为异步方法,因此这里显示写为异步以提醒调用者需以异步形式调用
     * @param {boolean} forceRefresh 是否强制从活动dsl拉取刷新
     * @returns {CodeBlockDSL | null}
     */
    getCodeDsl(forceRefresh?: boolean): Promise<CodeBlockDSL | null>;
    getCodeDslSync(forceRefresh?: boolean): CodeBlockDSL | null;
    /**
     * 根据代码块id获取代码块内容
     * @param {Id} id 代码块id
     * @returns {CodeBlockContent | null}
     */
    getCodeContentById(id: Id): Promise<CodeBlockContent | null>;
    /**
     * 设置代码块ID和代码内容到源dsl
     * @param {Id} id 代码块id
     * @param {CodeBlockContent} codeConfig 代码块内容配置信息
     * @returns {void}
     */
    setCodeDslById(id: Id, codeConfig: CodeBlockContent): Promise<void>;
    /**
     * 根据代码块id数组获取代码dsl
     * @param {string[]} ids 代码块id数组
     * @returns {CodeBlockDSL}
     */
    getCodeDslByIds(ids: string[]): Promise<CodeBlockDSL>;
    /**
     * 设置代码编辑面板展示状态
     * @param {boolean} status 是否展示代码编辑面板
     * @returns {void}
     */
    setCodeEditorShowStatus(status: boolean): Promise<void>;
    /**
     * 获取代码编辑面板展示状态
     * @returns {boolean} 是否展示代码编辑面板
     */
    getCodeEditorShowStatus(): boolean;
    /**
     * 设置代码编辑面板展示状态及展示内容
     * @param {boolean} status 是否展示代码编辑面板
     * @param {Id} id 代码块id
     * @returns {void}
     */
    setCodeEditorContent(status: boolean, id: Id): void;
    /**
     * 获取当前选中的代码块内容
     * @returns {CodeBlockContent | null}
     */
    getCurrentDsl(): Promise<CodeBlockContent | null>;
    /**
     * 获取编辑状态
     * @returns {boolean} 是否可编辑
     */
    getEditStatus(): boolean;
    /**
     * 设置编辑状态
     * @param {boolean} 是否可编辑
     * @returns {void}
     */
    setEditStatus(status: boolean): Promise<void>;
    /**
     * 设置当前选中的代码块ID
     * @param {Id} id 代码块id
     * @returns {void}
     */
    setId(id: Id): void;
    /**
     * 获取当前选中的代码块ID
     * @returns {Id} id 代码块id
     */
    getId(): Id;
    /**
     * 设置当前选中组件已关联绑定的代码块id数组
     * @param {string[]} ids 代码块id数组
     * @returns {void}
     */
    setCombineIds(ids: string[]): Promise<void>;
    /**
     * 获取当前选中组件已关联绑定的代码块id数组
     * @returns {string[]}
     */
    getCombineIds(): string[];
    /**
     * 监听组件更新来更新代码块绑定关系
     * @returns {void}
     */
    addCodeRelationListener(): void;
    /**
     * 更新全部绑定关系
     * @returns {void}
     */
    refreshAllRelations(): void;
    /**
     * 获取绑定关系
     * @returns {CodeRelation}
     */
    getCombineInfo(): CodeRelation;
    /**
     * 获取不可删除列表
     * @returns {Id[]}
     */
    getUndeletableList(): Id[];
    /**
     * 设置不可删除列表：为业务逻辑预留的不可删除的代码块列表，由业务逻辑维护（如代码块上线后不可删除）
     * @param {Id[]} codeIds 代码块id数组
     * @returns {void}
     */
    setUndeleteableList(codeIds: Id[]): Promise<void>;
    /**
     * 设置代码草稿
     */
    setCodeDraft(codeId: Id, content: string): void;
    /**
     * 获取代码草稿
     */
    getCodeDraft(codeId: Id): string | null;
    /**
     * 删除代码草稿
     */
    removeCodeDraft(codeId: Id): void;
    /**
     * 在dsl数据源中删除指定id的代码块
     * @param {Id[]} codeIds 需要删除的代码块id数组
     * @returns {CodeBlockDSL} 删除后的code dsl
     */
    deleteCodeDslByIds(codeIds: Id[]): Promise<CodeBlockDSL>;
    /**
     * 生成代码块唯一id
     * @returns {Id} 代码块唯一id
     */
    getUniqueId(): Promise<Id>;
    resetState(): void;
    destroy(): void;
    /**
     * 递归遍历dsl中挂载了代码块的节点，并更新绑定关系数据
     * @param {MNode} node 节点信息
     * @param {CodeRelation} relation 关系数据
     * @param {boolean} deep 是否深层遍历
     * @returns void
     */
    private getNodeRelation;
    /**
     * 删除组件关系
     * @param {MNode} node 节点信息
     * @param {CodeRelation} relations 关系数据
     * @returns CodeRelation
     */
    private deleteNodeRelation;
}
export type CodeBlockService = CodeBlock;
declare const _default: CodeBlock;
export default _default;
