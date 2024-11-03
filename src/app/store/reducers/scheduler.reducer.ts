import { createReducer, on } from "@ngrx/store";
import { EventTime } from "../../../models/scheduler.model";
import { addEvent } from "../actions/scheduler.action";



export const initialState: EventTime[] =
    [
        { start_time: 20, end_time: 22 },
        { start_time: 10, end_time: 12 },
        { start_time: 0, end_time: 2 }
    ]


export const eventSchedulerReducer = createReducer(
    initialState, on(addEvent, (state, action)=>{
        return [
            ...state,
            action.payload
        ]
    })
)
console.log("initialState.events", initialState)