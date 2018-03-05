import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nameinput',
  templateUrl: './nameinput.component.html',
  styleUrls: ['./nameinput.component.css']
})
export class NameinputComponent implements OnInit {
  @Output() onClickName = new EventEmitter<string>();
  @Output() isSelectName = new EventEmitter<boolean>()
  constructor() { }
  onClick_Name(name){
    this.isSelectName.emit(true)
    this.onClickName.emit(name);
  }
  ngOnInit() {
  }

}
