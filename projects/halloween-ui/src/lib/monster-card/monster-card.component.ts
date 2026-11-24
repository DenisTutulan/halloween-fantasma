
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-monster-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monster-card.component.html',
  styleUrl: './monster-card.component.scss'
})
export class MonsterCardComponent {

  @Input() titulo: string = 'Fantasma';
  @Input() descripcion: string = 'Un espíritu misterioso.';
  @Input() imagen: string = 'assets/img/fantasma.png';
  @Input() textoBoton: string = 'Descubrir';
  @Input() informacionExtra: string = '';

  mostrarInfo: boolean = false;

  mostrarMensaje() {
    this.mostrarInfo = !this.mostrarInfo;
  }
}
