import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic-observable',
  imports: [CommonModule],
  templateUrl: './rxjs-basic-observable.component.html',
  styleUrl: './rxjs-basic-observable.component.css'
})
export class RxjsBasicObservableComponent {

  output : string[] = [];

  startObservable(){
    const obs$ = new Observable<string>(observer => {
      observer.next('Hello');
      observer.next('Rajeev!');
      observer.complete();
    });

    obs$.subscribe({
      next: val => this.output.push(val),
      complete: () => this.output.push('Completed...')
    });
  }

  // Reset or clear the observable
  clearObservable(){
    this.output = [];
  }


}
