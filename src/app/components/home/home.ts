import { Component, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private enviarFormularioService = inject(EnviaFormulario);
  name = 'Eduardo';
  idButton = 'Aperte';
  deveMostrarTitulo = false;
  listItems = ["Feijão"];

  @Input() minhaPropsDeFora!: string;

  @Output()

  submit() {
    this.enviarFormularioService.enviarInformacaoParaBackend("Enviando informação...");
  }
}
