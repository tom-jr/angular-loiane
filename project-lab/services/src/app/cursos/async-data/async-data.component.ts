import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

/*
* Pipes Async
* */
@Component({
  selector: 'app-async-data',
  templateUrl: './async-data.component.html',
  styleUrls: ['./async-data.component.css']
})
export class AsyncDataComponent implements OnInit {
  dadosAsyncObservable$!: Observable<any>;
  dadosAsyncPromise$!: Promise<any>;
  sec = 0;
  interval: any;

  ngOnInit() {
    this.segundos();
    this.dadosAsyncPromise$ = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello World Async way using Promise!");
      }, 5000);
    });

    this.dadosAsyncObservable$ = new Observable<any>(subscriber => {
      setTimeout(() => {
        clearInterval(this.interval);
        subscriber.next("Hello World Async way using Observable!")
      }, 6000);
    });
  }

  private segundos() {
    this.interval = setInterval(() => {
      this.sec = this.sec + 1;
    }, 1000);
  }
}
