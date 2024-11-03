import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addEvent } from '../../store/actions/scheduler.action';
import { EventTime } from '../../../models/scheduler.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { SchedulerService } from '../../scheduler.service';


@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastrModule,],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.css'
})
export class SchedulerComponent {
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit()
  }
  events: EventTime[] = [];
  startTime: number = 0
  endTime: number = 0
  errorMessage: string = '';
  isMax: boolean = false
  constructor(public schedulerService: SchedulerService) { }
  addEvent() {

    if ((this.startTime === null || this.endTime === null || this.startTime >= this.endTime) || this.startTime > 23 || this.endTime > 23) {
      this.isMax = true
      this.errorMessage = 'Invalid time range.';
      return;
    }
    const success = this.schedulerService.addEvent({
      start_time: this.startTime,
      end_time: this.endTime,
    });
    if (success) {
      this.errorMessage = '';
      this.startTime = 0;
      this.endTime = 0;
      this.closeModal()
    } else {
      console.log("su", success)
      this.errorMessage = 'Event overlaps with an existing event.';
    }
  }
  


}
