import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',//компонента от който си вземаме информацията за да я представим в браузъра
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  test = 'Test123';
}