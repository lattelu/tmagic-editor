declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    left?: number | undefined;
    right?: number | undefined;
    minLeft?: number | undefined;
    minRight?: number | undefined;
    minCenter?: number | undefined;
    leftClass?: string | undefined;
    rightClass?: string | undefined;
    centerClass?: string | undefined;
}>, {
    minLeft: number;
    minRight: number;
    minCenter: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:left" | "update:right")[], "change" | "update:left" | "update:right", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    left?: number | undefined;
    right?: number | undefined;
    minLeft?: number | undefined;
    minRight?: number | undefined;
    minCenter?: number | undefined;
    leftClass?: string | undefined;
    rightClass?: string | undefined;
    centerClass?: string | undefined;
}>, {
    minLeft: number;
    minRight: number;
    minCenter: number;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:left"?: ((...args: any[]) => any) | undefined;
    "onUpdate:right"?: ((...args: any[]) => any) | undefined;
}, {
    minLeft: number;
    minRight: number;
    minCenter: number;
}>, {
    left: (_: {}) => any;
    center: (_: {}) => any;
    right: (_: {}) => any;
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
