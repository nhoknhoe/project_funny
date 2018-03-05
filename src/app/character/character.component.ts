import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() name: string ;
  yourName;
  character_name;
  character_img;
  character_said;
  constructor() {
    this.yourName = name;
    this.controller();
  }
  controller()  {
    let character_select ;
    let character;
    character = new Array();
    character[0] = new Array<string>("Bill Gate","assets/image/bill_gate.jpg","Bạn không những thông minh mà còn giàu có");
    character[1] = new Array<string>("Obama","assets/image/obama.jpg","mặc dù không trắng như tôi nhưng bạn rất có tài");
    character[2] = new Array<string>("Sơn Tùng","assets/image/sontung.jpg","bạn không những đẹp trai mà còn hát hay");
    character[3] = new Array<string>("Taylor Swift","assets/image/taylor-swift.jpg","tôi yêu bạn từ cái nhìn đầu tiên");
    character[4] = new Array<string>("Donald.Trump","assets/image/Trump.jpg","không ngờ bạn lại đẹp trai giống tôi vậy");
    character_select = character[this.randomInt(0 , character.length - 1 )];
    this.character_name = character_select[0];
    this.character_img = character_select[1];
    this.character_said = character_select[2];
    console.log(this.character_name);
  }
  randomInt(min , max)
  {
    return Math.floor(Math.random()*(max - min + 1) + min );
  }
  ngOnInit() {

  }


}
