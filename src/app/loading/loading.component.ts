import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  public time  = 2;
  timer_toogle;
  isLoading = false;
  @Output() direct = new EventEmitter<boolean>();
  constructor() {
    let timer = Observable.timer(1000, 1000);
    this.timer_toogle = timer.subscribe(t => {this.time --; if (this.time === -1) {  this.direct_to_character(); }  } );
  }
  ngOnInit() {

  }
  direct_to_character() {
    this.direct.emit(this.isLoading);
    this.timer_toogle.unsubscribe();
  }

}
