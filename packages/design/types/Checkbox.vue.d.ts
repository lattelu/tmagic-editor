declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | boolean | undefined;
    label?: any;
    trueLabel?: string | number | boolean | undefined;
    falseLabel?: string | number | boolean | undefined;
    disabled?: boolean | undefined;
    size?: "default" | "large" | "small" | undefined;
}>, {
    trueLabel: undefined;
    falseLabel: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string | number | boolean | undefined;
    label?: any;
    trueLabel?: string | number | boolean | undefined;
    falseLabel?: string | number | boolean | undefined;
    disabled?: boolean | undefined;
    size?: "default" | "large" | "small" | undefined;
}>, {
    trueLabel: undefined;
    falseLabel: undefined;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    trueLabel: string | number | boolean;
    falseLabel: string | number | boolean;
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
