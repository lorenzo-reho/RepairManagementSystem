import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-content',
  imports: [],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss'
})
export class ModalContentComponent {
  activeModal = inject(NgbActiveModal); // A reference to the currently opened (active) modal.

  priorityClass="bg-success";

	@Input() name: string;
}
