import { Component } from '@angular/core';
import { VisitsGraphicComponent } from "../visits-graphic/visits-graphic.component";

@Component({
  selector: 'app-visits-row',
  imports: [VisitsGraphicComponent],
  templateUrl: './visits-row.component.html',
  styleUrl: './visits-row.component.scss'
})
export class VisitsRowComponent {

}
