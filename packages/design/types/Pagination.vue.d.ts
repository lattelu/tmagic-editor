declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    layout?: string | undefined;
    hideOnSinglePage?: boolean | undefined;
    curPage?: number | undefined;
    pageSizes?: number[] | undefined;
    pagesize?: number | undefined;
    total?: number | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("size-change" | "current-change")[], "size-change" | "current-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    layout?: string | undefined;
    hideOnSinglePage?: boolean | undefined;
    curPage?: number | undefined;
    pageSizes?: number[] | undefined;
    pagesize?: number | undefined;
    total?: number | undefined;
}>>> & {
    "onSize-change"?: ((...args: any[]) => any) | undefined;
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
}, {}>;
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
