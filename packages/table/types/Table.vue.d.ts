declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data: any[];
    columns?: any[] | undefined;
    /** 合并行或列的计算方法 */
    spanMethod?: ((data: {
        row: any;
        column: any;
        rowIndex: number;
        columnIndex: number;
    }) => [number, number]) | undefined;
    loading?: boolean | undefined;
    /** Table 的最大高度。合法的值为数字或者单位为 px 的高度 */
    bodyHeight?: string | number | undefined;
    /** 是否显示表头 */
    showHeader?: boolean | undefined;
    /** 空数据时显示的文本内容 */
    emptyText?: string | undefined;
    /** 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 */
    defaultExpandAll?: boolean | undefined;
    rowkeyName?: string | undefined;
    /** 是否带有纵向边框 */
    border?: boolean | undefined;
}>, {
    columns: () => never[];
    loading: boolean;
    showHeader: boolean;
    defaultExpandAll: boolean;
    border: boolean;
}>, {
    toggleRowSelection: (row: any, selected: boolean) => void;
    toggleRowExpansion: (row: any, expanded: boolean) => void;
    clearSelection: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("after-action" | "select" | "sort-change" | "select-all" | "selection-change" | "expand-change" | "cell-click")[], "after-action" | "select" | "sort-change" | "select-all" | "selection-change" | "expand-change" | "cell-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data: any[];
    columns?: any[] | undefined;
    /** 合并行或列的计算方法 */
    spanMethod?: ((data: {
        row: any;
        column: any;
        rowIndex: number;
        columnIndex: number;
    }) => [number, number]) | undefined;
    loading?: boolean | undefined;
    /** Table 的最大高度。合法的值为数字或者单位为 px 的高度 */
    bodyHeight?: string | number | undefined;
    /** 是否显示表头 */
    showHeader?: boolean | undefined;
    /** 空数据时显示的文本内容 */
    emptyText?: string | undefined;
    /** 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 */
    defaultExpandAll?: boolean | undefined;
    rowkeyName?: string | undefined;
    /** 是否带有纵向边框 */
    border?: boolean | undefined;
}>, {
    columns: () => never[];
    loading: boolean;
    showHeader: boolean;
    defaultExpandAll: boolean;
    border: boolean;
}>>> & {
    "onAfter-action"?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    "onSort-change"?: ((...args: any[]) => any) | undefined;
    "onSelect-all"?: ((...args: any[]) => any) | undefined;
    "onSelection-change"?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
}, {
    columns: any[];
    loading: boolean;
    showHeader: boolean;
    defaultExpandAll: boolean;
    border: boolean;
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
