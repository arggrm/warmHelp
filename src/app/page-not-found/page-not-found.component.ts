import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterModule } from '@angular/router';
import { UserStateService } from '../services/auth/user-state.service';

@Component({
  selector: 'app-page-not-found',
  imports: [FooterComponent, RouterModule],
  standalone: true,
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

  constructor(
    private readonly userStateService: UserStateService,
    private readonly router: Router
  ) { }

  toHomePage(): void {
    if (this.userStateService.getRole() === 'ADMIN' || this.userStateService.getRole() === 'SELLER') {
      this.router.navigate(['/app/control-panel']);
    } else {
      this.router.navigate(['/']);
    }
  }

}
