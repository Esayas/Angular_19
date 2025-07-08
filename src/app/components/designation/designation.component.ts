import { Component, inject, OnInit } from '@angular/core';
// import {MasterService} from "../../services/master.service"
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../model/class/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isLoading: boolean = true;
  constructor() {}

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (res: IDesignation[]) => {
        this.designationList = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);

        // console.log('333', res);
      },
      (error) => {
        alert('API error');
      }
    );
  }
}
