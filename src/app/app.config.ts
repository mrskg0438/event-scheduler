import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import { eventSchedulerReducer } from './store/reducers/scheduler.reducer';
import { SchedulerService } from './scheduler.service';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes), 
              provideClientHydration(), 
              provideStore({events:eventSchedulerReducer}), 
              provideEffects(), 
              provideStoreDevtools(),
              SchedulerService,
              ]
            };
