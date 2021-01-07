import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  index: number = 80;

  TabList: any = [];

  pws1: string = '';
  pws2: string = '';
  constructor() {}

  ngOnInit(): void {
    this.tabla();
    this.fechas();
  }

  dni(dni) {
    const listaLetra = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const rest = dni % 23;
    const letter = listaLetra.substr(rest, 1);
    return letter;
  }
  password() {
    let pws1: any = $('#password1').val();
    const barraProgess = $('#cajaBarra');
    const strong1 = $('#progress1');
    const strong2 = $('#progress2');
    const strong3 = $('#progress3');
    barraProgess.removeClass('d-none');

    if (pws1.length >= 3 && pws1.length <= 5) {
      strong1.css('width', '33%');
      strong2.css('width', '0%');
      strong3.css('width', '0%');
    }
    if (pws1.length >= 6 && pws1.length <= 8) {
      strong1.css('width', '0%');
      strong2.css('width', '66%');
      strong3.css('width', '0%');
    }
    if (pws1.length >= 9) {
      strong1.css('width', '0%');
      strong2.css('width', '0%');
      strong3.css('width', '100%');
    }

    if (pws1.length == 0) {
      barraProgess.addClass('d-none');
      strong1.css('width', '0%');
      strong2.css('width', '0%');
      strong3.css('width', '0%');
    }
  }

  fechas(): number {
    let fechaUsuario = new Date();
    let hoy = new Date();
    let preDate = hoy.getTime() - fechaUsuario.getTime();
    let fechas = preDate / (1000 * 3600 * 24 * 365);

    return Math.round(fechas);
  }

  tabla() {
    let descuento = 0;
    for (var i = 0; i < 11; i++) {
      const precio = 50;
      const percent = (descuento * precio) / 100;
      const resultado = precio - percent;
      const obj = { des: descuento, precio: resultado };
      this.TabList.push(obj);
      descuento = descuento + 5;
    }
  }
}
