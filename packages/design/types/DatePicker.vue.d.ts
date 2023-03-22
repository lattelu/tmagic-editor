declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    type?: string | undefined;
    modelValue?: any;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    rangeSeparator?: string | undefined;
    startPlaceholder?: string | undefined;
    endPlaceholder?: string | undefined;
    format?: string | undefined;
    /** 可选，绑定值的格式。 不指定则绑定值为 Date 对象 */
    valueFormat?: string | undefined;
    /** 在范围选择器里取消两个日期面板之间的联动 */
    unlinkPanels?: boolean | undefined;
    defaultTime?: any;
    size?: "default" | "large" | "small" | undefined;
}>, {
    type: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    type?: string | undefined;
    modelValue?: any;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    rangeSeparator?: string | undefined;
    startPlaceholder?: string | undefined;
    endPlaceholder?: string | undefined;
    format?: string | undefined;
    /** 可选，绑定值的格式。 不指定则绑定值为 Date 对象 */
    valueFormat?: string | undefined;
    /** 在范围选择器里取消两个日期面板之间的联动 */
    unlinkPanels?: boolean | undefined;
    defaultTime?: any;
    size?: "default" | "large" | "small" | undefined;
}>, {
    type: string;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
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
