import { ColumnConfig } from '@tmagic/form';
import { Id } from '@tmagic/schema';
import { CodeDeleteErrorType } from '../../../type';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    customError?: ((id: Id, errorType: CodeDeleteErrorType) => any) | undefined;
    paramsColConfig?: ColumnConfig | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    customError?: ((id: Id, errorType: CodeDeleteErrorType) => any) | undefined;
    paramsColConfig?: ColumnConfig | undefined;
}>>>, {}>, {
    'code-block-panel-header': (_: {}) => any;
    'code-block-panel-tool': (_: {
        id: any;
        data: any;
    }) => any;
    'code-block-edit-panel-header': (_: {
        id: Id;
    }) => any;
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
