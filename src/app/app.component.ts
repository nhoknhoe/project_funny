import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public show_name = true;
  public show_loading = false;
  public show_character = false;
  yourName ;

  saveName(name){
   this.yourName = name;
  }
  direct_To_Character(isLoading){
    this.show_loading = isLoading;
    this.show_character = true;
  }
  isSelectName(isSelect)
  {
    if(isSelect){
      this.show_name = false;
      this.show_loading = true;
    }
  }


}
