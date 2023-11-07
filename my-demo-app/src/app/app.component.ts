import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//компонента от който си вземаме информацията за да я представим в браузъра
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title from ComponentApp';
}
