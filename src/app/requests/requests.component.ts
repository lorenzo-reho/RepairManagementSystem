import { Component, inject, OnInit  } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'
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
  // repairRequest: RepairRequest;
  
  priorityClass = "bg-danger"
  columndefs : any[] = ['title', 'priority', 'request_id', 'description', 'address'];
  

  constructor(private repairRequestService: RepairRequestService){}

  ngOnInit() : void {
    this.fetchContent();
  }

  fetchContent(): void{
    this.repairRequestService.getNewRepairRequests().subscribe(
      
      (repairRequests) => {this.repairRequests = repairRequests;},
      err => {console.log(err);}

  );
  }

  open(index: number) : void{

    const modalRef = this.modalService.open(ModalContentComponent, {centered:true});

    this.repairRequestService.getCompleteRepairRequest(this.repairRequests[index].request_id).subscribe((repairRequest) => {   
      
      var datePipe = new DatePipe('en-US');

      modalRef.componentInstance.title = repairRequest.title;
      modalRef.componentInstance.description = repairRequest.description;
      modalRef.componentInstance.priority = repairRequest.priority;
      modalRef.componentInstance.id = repairRequest.request_id;
      modalRef.componentInstance.name = repairRequest.name;
      modalRef.componentInstance.surname = repairRequest.surname;
      modalRef.componentInstance.address = repairRequest.address;
      modalRef.componentInstance.telephone = repairRequest.telephone;
      modalRef.componentInstance.date = datePipe.transform(repairRequest.date, 'dd/MM/yyyy');
      
      modalRef.componentInstance.loaded = true;
      

    });

    modalRef.result.then((result) => {
      console.log("refetch");
      this.fetchContent();
    }).catch((error) => {
      console.log(error);
    });


	}


}
