import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  /**
   * objeto para el intercambio de valores desde el template con NGMODEL
   */
  person: any = {
    firstName: 'Adonay',
    lastName: 'Rodriguez',
    email: 'adonaydaniel16@gmail.com',
  };
  constructor() {}

  ngOnInit(): void {}
}
