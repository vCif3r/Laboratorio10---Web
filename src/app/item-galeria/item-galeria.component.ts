import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrl: './item-galeria.component.css'
})
export class ItemGaleriaComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
