import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lono-ui';
  navToggled = false;

  ToggleNav(){
    this.navToggled = !this.navToggled;
  }
}
