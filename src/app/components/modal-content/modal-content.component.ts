import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject, Input} from '@angular/core';
import { Data } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {AutofillMonitor} from '@angular/cdk/text-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RepairRequestService } from '../../services/repair-request.service';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-content',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss'
})
export class ModalContentComponent {
  activeModal = inject(NgbActiveModal); // A reference to the currently opened (active) modal.

  priorityClass="bg-success";
  approveButtonDisabled = false;
  denyButtonDisabled = false;

	@Input() title: string;
  @Input() date: Date;
  @Input() description: string;
  @Input() priority: number;
  @Input() id: number;
  @Input() name: string;
  @Input() surname: string;
  @Input() telephone: string;
  @Input() address: string;
  
  @Input() loaded: boolean = false;
  @Input() editMode: boolean = false;


  constructor(private repairRequestService: RepairRequestService){}

  switchMode(): void {
    this.editMode = !this.editMode;
  }

  onSaveButtonClick() : void{
    
    const body = {
      'title': this.title,
      'date': this.date,
      'description': this.description,
      'name': this.name,
      'surname': this.surname,
      'telephone': this.telephone,
      'address': this.address
    };

    this.repairRequestService.saveRequest(this.id, body).subscribe((response: any) =>{
      this.activeModal.close();
    });

  }

  onCancelButtonClick() : void{

  }

  onClickApproveRequest(): void{
    
    this.denyButtonDisabled = true;
    this.approveButtonDisabled = true;

    this.repairRequestService.approveRequest(this.id).subscribe((response: any) => {
      this.activeModal.close();
    });

  }

  onClickDenyRequest(): void{
    this.denyButtonDisabled = true;
    this.approveButtonDisabled = true;
    
    this.repairRequestService.denyRequest(this.id).subscribe((response: any) => {
      this.activeModal.close();
    });

  }
  
}
