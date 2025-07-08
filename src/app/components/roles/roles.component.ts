import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient);
  // constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<IRole[]>('http://localhost:3000/roles').subscribe((res: IRole[]) => {
      this.roleList = res;
      console.log('TG', res);
    });
  }
}
