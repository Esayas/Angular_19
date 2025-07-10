import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/class/Client';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Employee, IClientProject } from '../model/class/interface/role';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  // const

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.API_URL + 'client');
  }

  getAllClientProjects(): Observable<IClientProject[]> {
    return this.http.get<IClientProject[]>(
      environment.API_URL + 'clientproject'
    );
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.API_URL + 'employee');
  }

  addClient(data: Client) {
    // console.log('Added Product API');
    return this.http.post('http://localhost:3000/client', data);
  }

  addClientProject(data: IClientProject) {
    // console.log('Added Product API');
    return this.http.post('http://localhost:3000/clientproject', data);
  }

  deleteClient(id: string) {
    return this.http.delete(`http://localhost:3000/client/${id}`);
    // return this.http.delete(environment.API_URL + 'client/' + id);
  }

  updateClient(client: Client) {
    return this.http.put<Client>(
      `http://localhost:3000/client/${client.id}`,
      client
    );
  }
}
