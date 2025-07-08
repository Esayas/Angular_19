import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClientData();
  }

  loadClientData() {
    this.clientService.getAllClients().subscribe((data) => {
      console.log('Thanks God', data);
      this.clientList = data;
    });
  }

  saveClient() {
    debugger;
    if (this.clientObj.id) {
      this.clientService.updateClient(this.clientObj).subscribe((data) => {
        // console.log('Thanks God', data);
        if (data) {
          this.clientObj = new Client();
          alert('Client Updated Successfully');
          this.loadClientData();
        } else {
          alert('Client Not Updated Successfully');
        }
      });
    } else {
      this.clientService.addClient(this.clientObj).subscribe((data) => {
        // console.log('Thanks God', data);
        if (data) {
          this.clientObj = new Client();
          alert('Client Added Successfully');
          this.loadClientData();
        } else {
          alert('Client Not Added Successfully');
        }
      });
    }
  }

  onDelete(id: string) {
    const isDeleted = confirm('Are you sure you want to delete this client?');
    if (!isDeleted) {
      return;
    }
    this.clientService.deleteClient(id).subscribe((data) => {
      this.loadClientData();
      alert('Client Deleted Successfully');
    });
  }

  onEditClient(data: Client) {
    this.clientObj = data;
  }
}
