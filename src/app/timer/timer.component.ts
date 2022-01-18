import { Component} from '@angular/core';
import { timer,Subject, Subscription } from 'rxjs';
import {takeUntil,map} from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent  {
  counter = 0;  
  source$ = timer(10, 1000);
  subscription!: Subscription;
  pauseClick$ = new Subject();

  clickStart() { 
    this.subscription = this.source$
      .pipe(
        map((v) => {
          return this.counter++;
        }),
        takeUntil(this.pauseClick$)
      )
      .subscribe((v) => console.log(v));
  }

  clickStop() {
    this.subscription.unsubscribe();
    this.counter = 0;
  }

  clickPause() {
    this.pauseClick$.next();
  }

  clickMin() {
     this.pauseClick$.next();
     this.subscription = this.source$
       .pipe(
         map((v) => {
           return this.counter;
         }),
         map((v) => {
           return this.counter= v - 10;
         }),
         takeUntil(this.pauseClick$)
       )
       .subscribe((v) => console.log(v));
  }

   clickMax(){
      this.pauseClick$.next();
      this.subscription = this.source$
        .pipe(
          map((v) => {
            return this.counter;
          }),
          map((v) => {
            return (this.counter = v + 10);
          }),
          takeUntil(this.pauseClick$)
        )
        .subscribe((v) => console.log(v));
   }

}
