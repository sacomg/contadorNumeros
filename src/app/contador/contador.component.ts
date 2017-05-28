import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  @Input() valorContador: number;
  @Output() eventoContador = new EventEmitter();

  incrementar(): void {
    this.valorContador++;
    this.eventoContador.emit(this.valorContador);
  }

  decrementar(): void {
    this.valorContador--;
    this.eventoContador.emit(this.valorContador);
  }
}
