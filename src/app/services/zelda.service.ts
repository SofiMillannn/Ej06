import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterfaceZeldaAPICreatures, InterfaceZeldaAPIEquipment, InterfaceZeldaAPIMaterials} from "../common/interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ZeldaService {
private readonly http: HttpClient= inject(HttpClient);
  constructor() { }
  getMaterials():Observable<InterfaceZeldaAPIMaterials> {
    return this.http.get<InterfaceZeldaAPIMaterials>(environment.urlBase + 'materials')
  }
  getEquipment():Observable<InterfaceZeldaAPIEquipment> {
    return this.http.get<InterfaceZeldaAPIEquipment>(environment.urlBase + 'equipment')
  }
  getCreatures():Observable<InterfaceZeldaAPICreatures> {
    return this.http.get<InterfaceZeldaAPICreatures>(environment.urlBase + 'creatures')
  }
}
