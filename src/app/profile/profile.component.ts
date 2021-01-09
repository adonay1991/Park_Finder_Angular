import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  /**
   * Array para la construccion de tabla de usuario
   */
  nameProfile: any = [
    'Name:     Adonay',
    'Surname:     Rodriguez',
    'password:     12345678',
    'DNI:     12345678X',
    'Birth_date:     01/02/1991',
    'Car plate:    3266JYL',
    'Enviroment class:    C',
  ];

  constructor() {}

  ngOnInit(): void {}
}
