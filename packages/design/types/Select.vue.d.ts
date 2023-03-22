declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any;
    clearable?: boolean | undefined;
    filterable?: boolean | undefined;
    popperClass?: string | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    remote?: boolean | undefined;
    multiple?: boolean | undefined;
    allowCreate?: boolean | undefined;
    valueKey?: string | undefined;
    remoteMethod?: any;
    size?: "default" | "large" | "small" | undefined;
}>, {
    scrollbarWrap: import("vue").Ref<HTMLDivElement | undefined>;
    setQuery(v: string): void;
    setPreviousQuery(v: string): void;
    setSelectedLabel(v: string): void;
    setSelected(): any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "visibleHandler")[], "change" | "update:modelValue" | "visibleHandler", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue?: any;
    clearable?: boolean | undefined;
    filterable?: boolean | undefined;
    popperClass?: string | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    remote?: boolean | undefined;
    multiple?: boolean | undefined;
    allowCreate?: boolean | undefined;
    valueKey?: string | undefined;
    remoteMethod?: any;
    size?: "default" | "large" | "small" | undefined;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onVisibleHandler?: ((...args: any[]) => any) | undefined;
}, {}>, {
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
