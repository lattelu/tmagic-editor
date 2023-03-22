import { PropType } from 'vue';
import { EventOption } from '@tmagic/core';
import type { FormConfig } from '@tmagic/form';
import type { MApp, MNode } from '@tmagic/schema';
import StageCore, { ContainerHighlightType, CustomizeMoveableOptionsCallbackConfig, MoveableOptions, UpdateDragEl } from '@tmagic/stage';
import type { ComponentGroup, MenuBarData, MenuButton, MenuComponent, Services, SideBarData, StageRect } from './type';
declare const _default: import("vue").DefineComponent<{
    /** 页面初始值 */
    modelValue: {
        type: PropType<MApp>;
        default: () => {};
        require: boolean;
    };
    /** 左侧面板中的组件列表 */
    componentGroupList: {
        type: PropType<ComponentGroup[]>;
        default: () => never[];
    };
    /** 左侧面板配置 */
    sidebar: {
        type: PropType<SideBarData>;
    };
    /** 顶部工具栏配置 */
    menu: {
        type: PropType<MenuBarData>;
        default: () => {
            left: never[];
            right: never[];
        };
    };
    /** 组件树右键菜单 */
    layerContentMenu: {
        type: PropType<(MenuButton | MenuComponent)[]>;
        default: () => never[];
    };
    /** 画布右键菜单 */
    stageContentMenu: {
        type: PropType<(MenuButton | MenuComponent)[]>;
        default: () => never[];
    };
    /** 中间工作区域中画布渲染的内容 */
    render: {
        type: PropType<(stage: StageCore) => HTMLDivElement | Promise<HTMLDivElement>>;
    };
    /** 中间工作区域中画布通过iframe渲染时的页面url */
    runtimeUrl: StringConstructor;
    /** 选中时是否自动滚动到可视区域 */
    autoScrollIntoView: BooleanConstructor;
    /** 组件的属性配置表单的dsl */
    propsConfigs: {
        type: PropType<Record<string, FormConfig>>;
        default: () => {};
    };
    /** 添加组件时的默认值 */
    propsValues: {
        type: PropType<Record<string, MNode>>;
        default: () => {};
    };
    /** 组件联动事件选项列表 */
    eventMethodList: {
        type: PropType<Record<string, {
            events: EventOption[];
            methods: EventOption[];
        }>>;
        default: () => {};
    };
    /** 画布中组件选中框的移动范围 */
    moveableOptions: {
        type: PropType<MoveableOptions | ((config?: CustomizeMoveableOptionsCallbackConfig) => MoveableOptions)>;
    };
    /** 编辑器初始化时默认选中的组件ID */
    defaultSelected: {
        type: (NumberConstructor | StringConstructor)[];
    };
    canSelect: {
        type: PropType<(el: HTMLElement) => boolean | Promise<boolean>>;
        default: (el: HTMLElement) => boolean;
    };
    isContainer: {
        type: PropType<(el: HTMLElement) => boolean | Promise<boolean>>;
        default: (el: HTMLElement) => boolean;
    };
    containerHighlightClassName: {
        type: StringConstructor;
        default: string;
    };
    containerHighlightDuration: {
        type: NumberConstructor;
        default: number;
    };
    containerHighlightType: {
        type: PropType<ContainerHighlightType>;
        default: ContainerHighlightType;
    };
    stageRect: {
        type: PropType<StageRect>;
    };
    codeOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
    updateDragEl: {
        type: PropType<UpdateDragEl>;
    };
    disabledDragStart: {
        type: BooleanConstructor;
    };
}, Services, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "props-panel-mounted")[], "update:modelValue" | "props-panel-mounted", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 页面初始值 */
    modelValue: {
        type: PropType<MApp>;
        default: () => {};
        require: boolean;
    };
    /** 左侧面板中的组件列表 */
    componentGroupList: {
        type: PropType<ComponentGroup[]>;
        default: () => never[];
    };
    /** 左侧面板配置 */
    sidebar: {
        type: PropType<SideBarData>;
    };
    /** 顶部工具栏配置 */
    menu: {
        type: PropType<MenuBarData>;
        default: () => {
            left: never[];
            right: never[];
        };
    };
    /** 组件树右键菜单 */
    layerContentMenu: {
        type: PropType<(MenuButton | MenuComponent)[]>;
        default: () => never[];
    };
    /** 画布右键菜单 */
    stageContentMenu: {
        type: PropType<(MenuButton | MenuComponent)[]>;
        default: () => never[];
    };
    /** 中间工作区域中画布渲染的内容 */
    render: {
        type: PropType<(stage: StageCore) => HTMLDivElement | Promise<HTMLDivElement>>;
    };
    /** 中间工作区域中画布通过iframe渲染时的页面url */
    runtimeUrl: StringConstructor;
    /** 选中时是否自动滚动到可视区域 */
    autoScrollIntoView: BooleanConstructor;
    /** 组件的属性配置表单的dsl */
    propsConfigs: {
        type: PropType<Record<string, FormConfig>>;
        default: () => {};
    };
    /** 添加组件时的默认值 */
    propsValues: {
        type: PropType<Record<string, MNode>>;
        default: () => {};
    };
    /** 组件联动事件选项列表 */
    eventMethodList: {
        type: PropType<Record<string, {
            events: EventOption[];
            methods: EventOption[];
        }>>;
        default: () => {};
    };
    /** 画布中组件选中框的移动范围 */
    moveableOptions: {
        type: PropType<MoveableOptions | ((config?: CustomizeMoveableOptionsCallbackConfig) => MoveableOptions)>;
    };
    /** 编辑器初始化时默认选中的组件ID */
    defaultSelected: {
        type: (NumberConstructor | StringConstructor)[];
    };
    canSelect: {
        type: PropType<(el: HTMLElement) => boolean | Promise<boolean>>;
        default: (el: HTMLElement) => boolean;
    };
    isContainer: {
        type: PropType<(el: HTMLElement) => boolean | Promise<boolean>>;
        default: (el: HTMLElement) => boolean;
    };
    containerHighlightClassName: {
        type: StringConstructor;
        default: string;
    };
    containerHighlightDuration: {
        type: NumberConstructor;
        default: number;
    };
    containerHighlightType: {
        type: PropType<ContainerHighlightType>;
        default: ContainerHighlightType;
    };
    stageRect: {
        type: PropType<StageRect>;
    };
    codeOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
    updateDragEl: {
        type: PropType<UpdateDragEl>;
    };
    disabledDragStart: {
        type: BooleanConstructor;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onProps-panel-mounted"?: ((...args: any[]) => any) | undefined;
}, {
    menu: MenuBarData;
    autoScrollIntoView: boolean;
    codeOptions: Record<string, any>;
    modelValue: MApp;
    layerContentMenu: (MenuButton | MenuComponent)[];
    stageContentMenu: (MenuButton | MenuComponent)[];
    componentGroupList: ComponentGroup[];
    propsConfigs: Record<string, FormConfig>;
    propsValues: Record<string, MNode>;
    eventMethodList: Record<string, {
        events: EventOption[];
        methods: EventOption[];
    }>;
    canSelect: (el: HTMLElement) => boolean | Promise<boolean>;
    isContainer: (el: HTMLElement) => boolean | Promise<boolean>;
    containerHighlightClassName: string;
    containerHighlightDuration: number;
    containerHighlightType: ContainerHighlightType;
    disabledDragStart: boolean;
}>;
export default _default;
