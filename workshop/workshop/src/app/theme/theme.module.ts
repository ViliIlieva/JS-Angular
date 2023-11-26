import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurentThemeComponent } from './curent-theme/curent-theme.component';



@NgModule({
  declarations: [
    NewThemeComponent,
    CurentThemeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
