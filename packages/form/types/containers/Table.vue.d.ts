import { TableConfig } from '../schema';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    model: any;
    lastValues?: any;
    isCompare?: boolean | undefined;
    config: TableConfig;
    name: string;
    prop?: string | undefined;
    labelWidth?: string | undefined;
    sort?: boolean | undefined;
    disabled?: boolean | undefined;
    sortKey?: string | undefined;
    text?: string | undefined;
    size?: string | undefined;
    enableToggleMode?: boolean | undefined;
    showIndex?: boolean | undefined;
}>, {
    prop: string;
    sortKey: string;
    enableToggleMode: boolean;
    showIndex: boolean;
    lastValues: () => {};
    isCompare: boolean;
}>, {
    toggleRowSelection: (row: any, selected: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change" | "addDiffCount")[], "select" | "change" | "addDiffCount", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    model: any;
    lastValues?: any;
    isCompare?: boolean | undefined;
    config: TableConfig;
    name: string;
    prop?: string | undefined;
    labelWidth?: string | undefined;
    sort?: boolean | undefined;
    disabled?: boolean | undefined;
    sortKey?: string | undefined;
    text?: string | undefined;
    size?: string | undefined;
    enableToggleMode?: boolean | undefined;
    showIndex?: boolean | undefined;
}>, {
    prop: string;
    sortKey: string;
    enableToggleMode: boolean;
    showIndex: boolean;
    lastValues: () => {};
    isCompare: boolean;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onAddDiffCount?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    lastValues: any;
    isCompare: boolean;
    enableToggleMode: boolean;
    prop: string;
    showIndex: boolean;
    sortKey: string;
}>, {
    operateCol: (_: {
        scope: {
            $index: any;
            row: any;
        };
    }) => any;
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
