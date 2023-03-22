import type { MPage } from '@tmagic/schema';
import { StepValue } from '../type';
import { UndoRedo } from '../utils/undo-redo';
import BaseService from './BaseService';
declare class History extends BaseService {
    state: {
        pageId?: import("@tmagic/schema").Id | undefined;
        pageSteps: Record<import("@tmagic/schema").Id, UndoRedo<StepValue>>;
        canRedo: boolean;
        canUndo: boolean;
    };
    constructor();
    reset(): void;
    changePage(page: MPage): void;
    resetState(): void;
    push(state: StepValue): StepValue | null;
    undo(): StepValue | null;
    redo(): StepValue | null;
    destroy(): void;
    private getUndoRedo;
    private setCanUndoRedo;
}
export type HistoryService = History;
declare const _default: History;
export default _default;
