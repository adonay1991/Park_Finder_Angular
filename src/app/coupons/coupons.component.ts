import { Component, OnInit } from '@angular/core';
import { cupones } from '../../assets/coupons';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
  coupons: any = cupones;

  printCupons = (coupons) => {
    coupons.forEach((item) => {
      console.log(item);
    });
  };

  // printCupons = (coupons) => {
  //   const contenedor = document.getElementById('contenido_cupon');
  //   coupons.forEach(function (item) {
  //     const div1 = document.createElement('div');
  //     div1.classList.add('col-12', 'col-sm-4');
  //     contenedor.appendChild(div1);
  //     const divCard = document.createElement('div');
  //     divCard.classList.add('card');
  //     div1.appendChild(divCard);
  //     const img = document.createElement('img');
  //     img.classList.add('img-fluid');
  //     img.src = item.imgSource;
  //     divCard.appendChild(img);
  //     const divBody = document.createElement('div');
  //     divBody.classList.add('card-body');
  //     div1.appendChild(divBody);
  //     const parrafo = document.createElement('p');
  //     parrafo.innerHTML = item.textCoupon;
  //     divBody.appendChild(parrafo);
  //     const btn = document.createElement('button');
  //     btn.classList.add('btn', 'btn-primary', 'container');
  //     btn.innerHTML = item.textBtn;
  //     divBody.appendChild(btn);
  //   });
  // };

  constructor() {}

  prueba() {
    let test = [
      {
        imgSource: '../../assets/img/coupon-1.jpg',
        textCoupon: 'First registration free',
        textBtn: 'See coupon',
      },
      {
        imgSource: '../../assets/img/coupon-2.jpg',
        textCoupon: 'Black Friday',
        textBtn: 'See coupon',
      },
      {
        imgSource: '../../assets/img/coupon-3.jpg',
        textCoupon: 'Flash Offer Friday',
        textBtn: 'See coupon',
      },
      {
        imgSource: '../../assets/img/coupon-4.jpg',
        textCoupon: 'Vouncher Free!!!!!',
        textBtn: 'See coupon',
      },
      {
        imgSource: '../../assets/img/coupon-5.jpg',
        textCoupon: 'With your big sale get a discount',
        textBtn: 'See coupon',
      },
      {
        imgSource: '../../assets/img/coupon-6.jpg',
        textCoupon: 'Run for your buy on Black Friday',
        textBtn: 'See coupon',
      },
    ];
    return console.log(test);
  }

  ngOnInit(): void {
    //  console.log(this.coupons);
    // this.prueba();
    this.printCupons(this.coupons);
  }
}
