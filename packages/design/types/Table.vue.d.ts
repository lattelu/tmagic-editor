declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data?: any[] | undefined;
    border?: boolean | undefined;
    maxHeight?: string | number | undefined;
    defaultExpandAll?: boolean | undefined;
}>, {
    data: () => never[];
}>, {
    instance: import("vue").Ref<any>;
    $el: HTMLDivElement | undefined;
    clearSelection(...args: any[]): any;
    toggleRowSelection(...args: any[]): any;
    toggleRowExpansion(...args: any[]): any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "sort-change" | "expand-change" | "cell-click")[], "select" | "sort-change" | "expand-change" | "cell-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data?: any[] | undefined;
    border?: boolean | undefined;
    maxHeight?: string | number | undefined;
    defaultExpandAll?: boolean | undefined;
}>, {
    data: () => never[];
}>>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onSort-change"?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
}, {
    data: any[];
}>, {
    default: (_: {}) => any;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
