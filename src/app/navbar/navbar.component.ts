import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  nameProfile: any = {
    Name: 'Adonay',
    Surname: 'Rodriguez',
  };

  @Output() login: EventEmitter<boolean> = new EventEmitter<boolean>();

  log: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeValue() {
    this.log = !this.log;
    this.login.emit();
  }
}
