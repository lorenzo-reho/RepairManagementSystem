import { Component, inject, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ModalContentComponent } from '../components/modal-content/modal-content.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RepairRequestService } from '../services/repair-request.service';
import { RepairRequest } from '../interfaces/repair-request';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-requests',
  imports: [CommonModule, MatTableModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})
export class RequestsComponent implements OnInit{
  private modalService = inject(NgbModal);
  repairRequests: RepairRequest[] = [];
  priorityClass = "bg-danger"
  columndefs : any[] = ['title', 'priority', 'request_id', 'description', 'address'];
  

  constructor(private repairRequestService: RepairRequestService){}
  
  ngOnInit() : void {
    this.repairRequestService.getRepairRequests().subscribe((repairRequests) => {
      this.repairRequests = repairRequests;
    });
  }

  open() {
		const modalRef = this.modalService.open(ModalContentComponent, {centered:true});
		
    for( let repairRequest of this.repairRequests){
      modalRef.componentInstance.title = repairRequest.title;
      modalRef.componentInstance.description = repairRequest.description;
      modalRef.componentInstance.priority = repairRequest.priority;
      modalRef.componentInstance.id = repairRequest.request_id;
      modalRef.componentInstance.address = repairRequest.address;
      /* TODO le altre informazioni...*/
      
      // modalRef.componentInstance.id = repairRequest.request_id;
      

    }
    // modalRef.componentInstance.name = 'World';
	}


}
