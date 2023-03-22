declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    data?: any[] | undefined;
    emptyText?: string | undefined;
    nodeKey?: string | undefined;
    props?: any;
    renderAfterExpand?: boolean | undefined;
    load?: any;
    renderContent?: any;
    highlightCurrent?: boolean | undefined;
    defaultExpandAll?: boolean | undefined;
    checkOnClickNode?: boolean | undefined;
    autoExpandParent?: boolean | undefined;
    defaultExpandedKeys?: any[] | undefined;
    showCheckbox?: boolean | undefined;
    checkStrictly?: boolean | undefined;
    defaultCheckedKeys?: any[] | undefined;
    currentNodeKey?: string | number | undefined;
    filterNodeMethod?: ((value: any, data: any, node: any) => void) | undefined;
    accordion?: boolean | undefined;
    indent?: number | undefined;
    icon?: any;
    lazy?: boolean | undefined;
    draggable?: boolean | undefined;
    allowDrag?: ((node: any) => boolean) | undefined;
    allowDrop?: any;
}>, {
    getData(): any;
    getStore(): any;
    filter(...args: any[]): any;
    getNode(...args: any[]): any;
    setCheckedKeys(...args: any[]): any;
    setCurrentKey(...args: any[]): any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("node-click" | "node-contextmenu" | "node-drag-end" | "node-collapse" | "node-expand" | "check" | "mousedown" | "mouseup")[], "node-click" | "node-contextmenu" | "node-drag-end" | "node-collapse" | "node-expand" | "check" | "mousedown" | "mouseup", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    data?: any[] | undefined;
    emptyText?: string | undefined;
    nodeKey?: string | undefined;
    props?: any;
    renderAfterExpand?: boolean | undefined;
    load?: any;
    renderContent?: any;
    highlightCurrent?: boolean | undefined;
    defaultExpandAll?: boolean | undefined;
    checkOnClickNode?: boolean | undefined;
    autoExpandParent?: boolean | undefined;
    defaultExpandedKeys?: any[] | undefined;
    showCheckbox?: boolean | undefined;
    checkStrictly?: boolean | undefined;
    defaultCheckedKeys?: any[] | undefined;
    currentNodeKey?: string | number | undefined;
    filterNodeMethod?: ((value: any, data: any, node: any) => void) | undefined;
    accordion?: boolean | undefined;
    indent?: number | undefined;
    icon?: any;
    lazy?: boolean | undefined;
    draggable?: boolean | undefined;
    allowDrag?: ((node: any) => boolean) | undefined;
    allowDrop?: any;
}>>> & {
    onMousedown?: ((...args: any[]) => any) | undefined;
    onMouseup?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
    "onNode-collapse"?: ((...args: any[]) => any) | undefined;
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
    onCheck?: ((...args: any[]) => any) | undefined;
}, {}>, {
    default: (_: {
        data: any;
        node: any;
    }) => any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
