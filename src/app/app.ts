// import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] 
})
export class App {
  protected title = 'ng-shop';
}
