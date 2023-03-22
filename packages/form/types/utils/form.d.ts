import { FormConfig, FormState, FormValue, Rule, TabPaneConfig } from '../schema';
export declare const createValues: (mForm: FormState | undefined, config?: FormConfig | TabPaneConfig[], initValue?: FormValue, value?: FormValue) => FormValue;
export declare const filterFunction: (mForm: FormState | undefined, config: any, props: any) => any;
export declare const display: (mForm: FormState | undefined, config: any, props: any) => any;
export declare const getRules: (mForm: FormState | undefined, rules: Rule | Rule[] | undefined, props: any) => Rule[];
export declare const initValue: (mForm: FormState | undefined, { initValues, config }: {
    initValues: FormValue;
    config: FormConfig;
}) => Promise<FormValue>;
