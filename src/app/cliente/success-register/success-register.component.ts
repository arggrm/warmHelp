import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-success-register',
  imports: [
    RouterModule,
  ],
  templateUrl: './success-register.component.html',
  styleUrl: './success-register.component.scss'
})
export class SuccessRegisterComponent {

  name: string = 'Raúl';

}
