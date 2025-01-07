import { Component, inject } from '@angular/core';

import { ModalContentComponent } from '../components/modal-content/modal-content.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-requests',
  imports: [],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})
export class RequestsComponent {
  private modalService = inject(NgbModal);
  open() {
		const modalRef = this.modalService.open(ModalContentComponent, {centered:true});
    
		modalRef.componentInstance.name = 'World';
    
    /*
      TODO:
      RICHIESTA HTTP per ottenere i dati corrispondenti alla richiesta cliccata e passarli al content component.
    */
	}


}
