declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    type?: string | undefined;
    editable?: boolean | undefined;
    tabPosition?: string | undefined;
    modelValue?: string | number | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("tab-click" | "tab-add" | "tab-remove" | "update:model-value")[], "tab-click" | "tab-add" | "tab-remove" | "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    type?: string | undefined;
    editable?: boolean | undefined;
    tabPosition?: string | undefined;
    modelValue?: string | number | undefined;
}>>> & {
    "onTab-click"?: ((...args: any[]) => any) | undefined;
    "onTab-add"?: ((...args: any[]) => any) | undefined;
    "onTab-remove"?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
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
