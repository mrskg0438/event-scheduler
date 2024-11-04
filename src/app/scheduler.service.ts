import { Injectable } from '@angular/core';
import { EventTime } from '../models/scheduler.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private events: EventTime[] = [];

  addEvent(newEvent: EventTime): boolean {
    
    console.log("err")
    for (const event of this.events) {
      if (
        (newEvent.start_time < event.end_time && newEvent.end_time > event.start_time) ||
        (newEvent.start_time === event.start_time || newEvent.end_time === event.end_time)
      ) {
        return false; 
      }
    }
    this.events.push(newEvent);
    return true;
  }
  getEvents(): EventTime[] {
    return this.events;
  }

}
