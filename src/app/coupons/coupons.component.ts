import { Component, OnInit } from '@angular/core';
// import de los cupons.ts desde assents para la carga de los valores
import { cupones } from '../../assets/coupons';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
  // variable para la iteracion en el template
  coupons = cupones;

  constructor() {}

  ngOnInit(): void {}
}
