import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /**
   * objeto para valores del log ing del usuario
   */
  nameProfile: any = {
    Name: 'Adonay',
    Surname: 'Rodriguez',
  };

  /**
   * Output para enviarle informacion el componente padre
   * sobre el cambio del valor booleano
   */
  @Output() login: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * variable con type @boolean inicializada en falso
   */
  log: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Metodo que cambia el valor booleano y emite hacia el
   * padre la informacion
   */
  changeValue() {
    this.log = !this.log;
    this.login.emit();
  }
}
