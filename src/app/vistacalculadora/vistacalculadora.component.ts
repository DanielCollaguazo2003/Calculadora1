import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vistacalculadora',
  templateUrl: './vistacalculadora.component.html',
  styleUrls: ['./vistacalculadora.component.css'],
})
export class VistacalculadoraComponent {
  entrada: string = '';
  operador: string = '';
  resultado: number | null = null;

  obtenerValor(numero: number) {
    this.entrada += numero;
    console.log(this.entrada);
  }

  agregarOperador(op: string) {
    if (!(this.operador == '')) {
      alert('primero realice la operación');
    } else {
      if (!(this.entrada == '')) {
        this.operador = op;
        this.entrada += op;
      } else {
        alert('Primero ingrese un numero');
      }
    }
    console.log(this.entrada + ' ' + this.operador);
  }

  calcularOperaciones() {
    if (this.entrada) {
      const operadores = this.entrada.split(this.operador);
      if (operadores.length === 2 && !(operadores[1] == '')) {
        switch (this.operador) {
          case '+':
            this.resultado =
              parseFloat(operadores[0]) + parseFloat(operadores[1]);
            this.entrada = this.resultado.toString();
            this.operador = '';
            break;
          case '-':
            this.resultado =
              parseFloat(operadores[0]) - parseFloat(operadores[1]);
            this.entrada = this.resultado.toString();
            this.operador = '';
            break;
          case '*':
            this.resultado =
              parseFloat(operadores[0]) * parseFloat(operadores[1]);
            this.entrada = this.resultado.toString();
            this.operador = '';
            break;
          case '/':
            this.resultado =
              parseFloat(operadores[0]) / parseFloat(operadores[1]);
            if (this.resultado.toString() == 'Infinity') {
              this.entrada = '';
              this.operador = '';
              alert('Error Matemático: No puede dividir para cero');
            } else {
              this.entrada = this.resultado.toString();
              this.operador = '';
            }
            break;
        }
      }else {
        alert("Ingrese el segundo operando");
      }
    }
  }

  borrarDatos() {
    this.entrada = '';
    this.operador = '';
  }
}
