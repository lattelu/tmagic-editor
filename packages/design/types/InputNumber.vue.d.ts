declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | boolean | undefined;
    clearable?: boolean | undefined;
    controlsPosition?: string | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    step?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
    size?: "default" | "large" | "small" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "change" | "update:modelValue")[], "input" | "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | boolean | undefined;
    clearable?: boolean | undefined;
    controlsPosition?: string | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    step?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
    size?: "default" | "large" | "small" | undefined;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
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
