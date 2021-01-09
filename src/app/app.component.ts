import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Variable con type @boolean para recibir la informacion
   * del componente hijo Navbar
   */
  logPadre: boolean = false;
}
