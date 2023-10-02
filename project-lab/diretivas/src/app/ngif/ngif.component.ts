import {Component} from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
  condition: boolean = false;
  day: number = 0;

  changeWeekDay() {
    this.day = this.day === 6 ? 0 : ++ this.day;
  }
}
