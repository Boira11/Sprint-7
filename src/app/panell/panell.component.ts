import { Component } from '@angular/core';
import { CalculaPressupostTotalService } from '../calcula-pressupost-total.service';
import { ServeSumaPrecioPaginasService } from '../serve-suma-precio-paginas.service';


@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent {

  constructor(private calculaPressupost: CalculaPressupostTotalService, private serveiSumaPrecioPaginas: ServeSumaPrecioPaginasService){ 
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }

    precioTotalPaginas(){

    console.log("NumPaginas", this.numPaginas);
    let sumaPreuTotal = this.calculaPressupost.calculateTotal(this.numPaginas,this.numIdiomas);
    console.log("actualizarPrecio ", this.calculaPressupost.calculateTotal(this.numPaginas,this.numIdiomas))
    this.serveiSumaPrecioPaginas.sumaPreuTotal = sumaPreuTotal;

    return sumaPreuTotal;

  }

  numPaginas = 0;
  numIdiomas = 0;

  incrementInput1() {
    this.numPaginas++;
    this.precioTotalPaginas();
    
  }

  decrementInput1() {
    if (this.numPaginas > 0) {
      this.numPaginas--;
    }
    this.precioTotalPaginas();
  }

  incrementInput2() {
    this.numIdiomas++;
    this.precioTotalPaginas();
  }

  decrementInput2() {
    if (this.numIdiomas > 0) {
      this.numIdiomas--;
    }
    this.precioTotalPaginas();
  }

  
 
  // mostraPressupost = this.calculaPressupost.calculaPressupost()
  

}
