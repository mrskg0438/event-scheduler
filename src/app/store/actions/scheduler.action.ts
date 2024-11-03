import { createAction,props } from "@ngrx/store";
import { EventTime } from '../../../models/scheduler.model'
export const addEvent = createAction(
    '[EventTime] Add',
    props<{ payload: EventTime }>()
)

