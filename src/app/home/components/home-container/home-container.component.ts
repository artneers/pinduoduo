import { HomeService } from './../../services/home.service';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TopMenu } from 'src/app/shared/components';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeContainerComponent implements OnInit {
  selectedTablink$: Observable<string>;
  topMenus: TopMenu[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService,

  ) { }

  ngOnInit() {
    this.selectedTablink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )
    this.homeService.getTabs().subscribe(tabs => {
      this.topMenus = tabs
    })
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

}
