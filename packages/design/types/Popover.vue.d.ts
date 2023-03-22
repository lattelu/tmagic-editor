declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    placement?: string | undefined;
    width?: string | number | undefined;
    title?: string | undefined;
    trigger?: string | undefined;
    effect?: string | undefined;
    content?: string | undefined;
    disabled?: boolean | undefined;
    popperClass?: string | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    placement?: string | undefined;
    width?: string | number | undefined;
    title?: string | undefined;
    trigger?: string | undefined;
    effect?: string | undefined;
    content?: string | undefined;
    disabled?: boolean | undefined;
    popperClass?: string | undefined;
}>>>, {}>, {
    default: (_: {}) => any;
    reference: (_: {}) => any;
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