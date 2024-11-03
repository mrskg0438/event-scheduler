import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EventTime } from '../models/scheduler.model';
import { Store } from '@ngrx/store';
import { SchedulerService } from './scheduler.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SchedulerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showModal = false;
  constructor(public schedulerService: SchedulerService) { }

  openModal() {
    console.log("gkjasg")
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


}
