import { Component, ViewChild } from '@angular/core';
import { ImageSlider, ImageSliderComponent, TopMenu } from './shared/components';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('imageSlider', {static: true}) imgSlider: ImageSliderComponent;
  scrollBcgcolor = 'red';
  topMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
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
  handleTabSelected(topMenu: TopMenu[]) {
    console.log(topMenu)
    const colors = ['red', 'yellow', 'green'];
    this.scrollBcgcolor = colors[Math.floor(Math.random() * 3)];
  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log(this.imgSlider)
  }
}
