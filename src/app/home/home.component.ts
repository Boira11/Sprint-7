import { CalculaPressupostTotalService } from './../calcula-pressupost-total.service';

import { Component } from '@angular/core';

import { ServeSumaPrecioPaginasService } from '../serve-suma-precio-paginas.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Constructor, inyectamos el servicio 
  constructor( private sumaPreuPaginas: ServeSumaPrecioPaginasService){}

  // Precios de las diferentes opciones
  private valorPaginaWeb: number = 500;
  private valorCampanyaSeo: number = 300;
  private valorGoogleAdds: number = 200;
  private preuTotal: number = 0;

  // Opciones seleccionadas
  paginaWebSelected: boolean = false;
  campanyaSeoSelected: boolean = false;
  googleAddsSelected: boolean = false;

  preuPagines:number; 
  
    
  // Getters
  getvalorPaginaWeb(): number{
    return this.valorPaginaWeb;
  }
  getPreuTotal(): number {
    
    this.preuPagines =  this.sumaPreuPaginas.sumaPreuTotal
    
    console.log("Valor de preuPagines = ", this.preuPagines)

    return (this.preuPagines === undefined) ? this.preuTotal : this.preuTotal + this.preuPagines;
    


  }

  getValorCampanyaSeo(): number{
    return this.valorCampanyaSeo;
  }

  getValorGoogleAdds(): number{
    return this.valorGoogleAdds;
  }
 
  getPaginaWebSelected(): boolean{
    return this.paginaWebSelected;
  }
  getCampanyaSeoSelected(): boolean{
    return this.campanyaSeoSelected;
  }
  getGoogleAddsSelected(): boolean{
    return this.googleAddsSelected;
  }

  
 

  //Funciones para que actualicen el precio total
  actualizarPreuPaginaWeb() {
    const valor = this.paginaWebSelected ? this.valorPaginaWeb : -this.valorPaginaWeb;
    this.preuTotal += valor;
    console.log('Valor de preuTotal:', this.preuTotal); 
  }

  actualizarPreuSeo() {
    const valor = this.campanyaSeoSelected ? this.valorCampanyaSeo : -this.valorCampanyaSeo;
    this.preuTotal += valor;
    console.log('Valor de preuTotal:', this.preuTotal);
  }

  actualitzarPreuGoogleAdds() {
  const valor = this.googleAddsSelected ? this.valorGoogleAdds : -this.valorGoogleAdds;
  this.preuTotal += valor;
  console.log('Valor de preuTotal:', this.preuTotal);
  }
  
}
