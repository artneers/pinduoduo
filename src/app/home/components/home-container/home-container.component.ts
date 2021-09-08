import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ImageSlider, ImageSliderComponent, TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  @ViewChild('imageSlider', {static: true}) imgSlider: ImageSliderComponent;
  topMenus: TopMenu[] = [
    {
      id: 1,
      title: '热门',
      link: 'hot'
    },
    {
      id: 2,
      title: '男装',
      link: 'men'
    },
    {
      id: 3,
      title: '百货',
      link: 'department'
    },
    {
      id:4,
      title: '运动',
      link: 'sports'
    },
    {
      id: 5,
      title: '手机',
      link: 'mobile'
    },
    {
      id: 6,
      title: '家纺',
      link: 'textile'
    },
    {
      id: 7,
      title: '食品',
      link: 'food'
    },
    {
      id: 8,
      title: '电器',
      link: 'appliance'
    },
    {
      id: 9,
      title: '鞋包',
      link: 'shoes'
    },
    {
      id: 10,
      title: '汽车',
      link: 'cars'
    },
    {
      id: 11,
      title: '水果',
      link: 'fruits'
    },
    {
      id: 12,
      title: '电脑',
      link: 'computers'
    },
    {
      id: 13,
      title: '内衣',
      link: 'underwears'
    },
    {
      id: 14,
      title: '家装',
      link: 'home'
    },
    {
      id: 15,
      title: '母婴',
      link: 'baby'
    },
    {
      id: 16,
      title: '美妆',
      link: 'makeup'
    },
    {
      id: 17,
      title: '家具',
      link: 'furnitures'
    }
  ];
  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://cdn.pinduoduo.com/upload/home/img/index/supermarket_v2.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://cdn.pinduoduo.com/upload/home/img/subject/girlclothes.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://cdn.pinduoduo.com/upload/home/img/subject/boyshirt.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://cdn.pinduoduo.com/upload/shoes.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://cdn.pinduoduo.com/upload/home/img/subject/food.jpg',
      link: '',
      caption: ''
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

}
