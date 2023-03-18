import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculaPressupostTotalService {

  constructor() {

    console.log("Servicio Inicializado");
   }

   calculateTotal(pages: number, languages: number): number { 
    return pages * languages * 30; 
  }

  

}
