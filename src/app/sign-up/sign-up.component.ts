import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
  colores: boolean = true;

  form: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.tabla();
  }

  /**
   * Metodo @buildForm para crear grupo de fromBuilder para la validacion
   * de los inputs en el template
   */

  buildForm() {
    this.form = this.FormBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
        ],
      ],
      surname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
        ],
      ],
      dni: [
        '',
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(18),
          Validators.minLength(8),
        ],
      ],
      BirthDay: ['', [Validators.required]],
      carPlate: ['', [Validators.required]],
      enviroment: ['', [Validators.required]],
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  // fechas(): number {
  //   let fechaUsuario = new Date();
  //   let hoy = new Date();
  //   let preDate = hoy.getTime() - fechaUsuario.getTime();
  //   let fechas = preDate / (1000 * 3600 * 24 * 365);

  //   return Math.round(fechas);
  // }

  /**
   * Metodo @tabla para la construccion de la tabla de precios
   */

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
