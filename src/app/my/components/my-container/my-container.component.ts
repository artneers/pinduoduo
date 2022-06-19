import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MyService } from '../../services';

export interface Profile {
  id: number;
  username: string;
  name: string;
  gender: number;
  address: string;
  birthday: Date;
  avatar: string;
}

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent implements OnInit {

  orderItems = [
    {
      title: '待付款',
      icon: '/assets/icons/to_pay.png'
    },
    {
      title: '待分享',
      icon: '/assets/icons/to_share.png'
    },
    {
      title: '待发货',
      icon: '/assets/icons/to_ship.png'
    },
    {
      title: '待收货',
      icon: '/assets/icons/to_deliver.png'
    },
    {
      title: '待评价',
      icon: '/assets/icons/to_review.png'
    }
  ];
  toolsItems = [
    {
      title: '优惠券',
      icon: '/assets/icons/coupon.png'
    },
    {
      title: '商品收藏',
      icon: '/assets/icons/fav_product.png'
    },
    {
      title: '店铺收藏',
      icon: '/assets/icons/fav_store.png'
    },
    {
      title: '历史浏览',
      icon: '/assets/icons/history.png'
    },
    {
      title: '退款售后',
      icon: '/assets/icons/refund.png'
    }
  ];
  profile$: Observable<Profile>;
  constructor(
    private myService: MyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.profile$ = this.myService.getProfile()
  }

  showProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route })
  }

}
