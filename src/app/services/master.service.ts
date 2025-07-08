import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {IDesignation} from
import { IDesignation} from "../model/class/interface/role" 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // constructor(private http:HttpClient) { }
  constructor(private http: HttpClient) {}

  getDesignations():Observable<IDesignation[]> {
    return this.http.get<IDesignation[]>('http://localhost:3000/designation')
  }
}
