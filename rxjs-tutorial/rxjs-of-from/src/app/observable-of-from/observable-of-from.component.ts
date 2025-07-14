import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-observable-of-from',
  imports: [CommonModule],
  templateUrl: './observable-of-from.component.html',
  styleUrl: './observable-of-from.component.css'
})
export class ObservableOfFromComponent {

  output : string[] = [];

  useOf(){
    this.output = [];
    of('A', 'B', 'C').subscribe(val => this.output.push(`of(): ${val}`));
  }

  useFrom(){
    this.output = [];
    of('X', 'Y', 'Z').subscribe(val => this.output.push(`from(): ${val}`));
  }

  clear(){
    this.output = [];
  }
}
