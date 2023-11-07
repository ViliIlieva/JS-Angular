import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements  OnInit{
  toggle = false;
  inputValue = 'Hello!'; 

  ngOnInit(): void {
    // debugger;
    console.log('navigation -> init');
  }

  ngAfterViewInit(){
    // debugger;
    console.log('navigation -> After View Init');
  }

  activeUsers = [
    { name: 'Mitko', age: 21 },
    { name: 'Pesho', age: 22 },
    { name: 'Boyan', age: 33 },
    { name: 'Zoya', age: 24 },
  ];

  handleClick(): void {
    this.toggle = !this.toggle; //всеки път като се кликне ще стана true или false
  }
}
