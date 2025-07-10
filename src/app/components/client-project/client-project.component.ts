import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/client.service';
import {
  Employee,
  IClient,
  IClientProject,
} from '../../model/class/interface/role';
import { Client } from '../../model/class/Client';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AsyncPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../resusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../resusableComponent/my-button/my-button.component';

@Component({
  selector: 'app-client-project',
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    UpperCasePipe,
    DatePipe,
    AsyncPipe,
    AlertComponent,
    MyButtonComponent,
  ],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  currentDate: Date = new Date();

  firstName = signal('Thanks God');
  msg: string = 'Welcome to Angular 18';
  client: IClient = new Client();
  // clientProjects: IClientProject
  clientProjectList: IClientProject[] = [];
  projectList = signal<IClientProject[]>([]);

  projectForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    // completedDate: new FormControl(''),
    completedDate: new FormControl<Date | null>(null),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    clientId: new FormControl(''),
  });

  employeeList: Employee[] = [];
  clientList: Client[] = [];

  clientProList$: Observable<any> = new Observable();

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getAllEmployees();
    this.getAllClient();
    this.getAllClientProjects();

    this.clientProList$ = this.clientService.getAllClientProjects();
  }

  getAllEmployees() {
    this.clientService.getAllEmployees().subscribe((data: Employee[]) => {
      console.log(data);
      this.employeeList = data;
    });
  }

  getAllClient() {
    this.clientService.getAllClients().subscribe((data: Client[]) => {
      console.log(data);
      this.clientList = data;
    });
  }

  getAllClientProjects() {
    this.clientService
      .getAllClientProjects()
      .subscribe((data: IClientProject[]) => {
        console.log('Project', data);
        this.clientProjectList = data;
        this.projectList.set(data);
      });
  }

  OnSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientService.addClientProject(formValue).subscribe((data) => {
      // console.log(data);
      // this.ngOnInit();
      if (data) {
        this.getAllClientProjects();
        alert('Project Added Successfully');
      } else {
        alert('Project Not Added Successfully');
      }
    });
  }

  changeFName() {
    this.firstName.set('Thanks God for everything');
  }
}
