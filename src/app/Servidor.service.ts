import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root' 
  })
export class Servidor{
  private API : string='http://localhost:3000/Banco_de_dados'
    
   constructor(private http: HttpClient){
    
   }

   public GetDados():Promise<any>{

    return this.http.get(`${this.API}`)
        .toPromise()
        .then(res => res)
        .catch((err:Error)=>{
            console.log(err);
        })
   
   }
   public ArmazenarDados(dados: any): void{
    
    this.http.post('http://localhost:8000/dado', dados)
       
      
    
    
      
      
     
  }
  
  
}