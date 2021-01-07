import { Component, OnInit } from '@angular/core';
import { cupones } from '../../assets/coupons';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
  coupons = cupones;

  constructor() {}

  ngOnInit(): void {}
}
