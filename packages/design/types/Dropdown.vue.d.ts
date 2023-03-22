declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    type?: string | undefined;
    size?: string | undefined;
    maxHeight?: string | number | undefined;
    splitButton?: boolean | undefined;
    disable?: boolean | undefined;
    placement?: string | undefined;
    trigger?: string | undefined;
    hideOnClick?: boolean | undefined;
    showTimeout?: number | undefined;
    role?: string | undefined;
    tabindex?: number | undefined;
    popperClass?: string | undefined;
    popperOptions?: any;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "command"[], "command", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    type?: string | undefined;
    size?: string | undefined;
    maxHeight?: string | number | undefined;
    splitButton?: boolean | undefined;
    disable?: boolean | undefined;
    placement?: string | undefined;
    trigger?: string | undefined;
    hideOnClick?: boolean | undefined;
    showTimeout?: number | undefined;
    role?: string | undefined;
    tabindex?: number | undefined;
    popperClass?: string | undefined;
    popperOptions?: any;
}>>> & {
    onCommand?: ((...args: any[]) => any) | undefined;
}, {}>, {
    default: (_: {}) => any;
    dropdown: (_: {}) => any;
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
