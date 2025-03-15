import { Component } from '@angular/core';
import { StatsComponent } from '../control-panel-tabs/stats/stats.component';
import { SocialRowComponent } from "../control-panel-tabs/social-row/social-row.component";
import { VisitsRowComponent } from "../control-panel-tabs/visits-row/visits-row.component";
import { UsersGraphicComponent } from "../control-panel-tabs/users-graphic/users-graphic.component";
import { AdvertisingGraphicComponent } from "../control-panel-tabs/advertising-graphic/advertising-graphic.component";
import { UserStateService } from '../../services/auth/user-state.service';

@Component({
  selector: 'app-control-panel',
  imports: [StatsComponent, SocialRowComponent, VisitsRowComponent, UsersGraphicComponent, AdvertisingGraphicComponent],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {

  username: string | null = '';

  constructor(
    private readonly userStateService: UserStateService,
  ) { }

  ngOnInit(): void {
    this.username = this.userStateService.getUsername();
  }


}
