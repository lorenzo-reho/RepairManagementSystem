import {Component, inject, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RepairRequestService } from '../../services/repair-request.service';
import { FormsModule } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar'
import { RepairRequest } from '../../interfaces/repair-request'; // Import the Comment interface


@Component({
  selector: 'app-modal-content',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss'
})
export class ModalContentComponent {
  private _snackBar = inject(MatSnackBar);

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

  openSnackBar(message: string, action: string): void{
    this._snackBar.open(message, action);
  }

  onSaveButtonClick() : void{
    
    const updatedItem: RepairRequest  = {
      title: this.title,
      date: this.date,
      description: this.description,
      name: this.name,
      surname: this.surname,
      telephone: this.telephone,
      address: this.address,
      request_id: this.id,
      priority: this.priority
    };

    this.repairRequestService.saveRequest(this.id, updatedItem).subscribe((response: any) =>{
      this.activeModal.close();
      this.openSnackBar("Aggiornato con successo", "OK");
    });

  }

  onCancelButtonClick() : void{

  }

  onClickApproveRequest(): void{
    
    this.denyButtonDisabled = true;
    this.approveButtonDisabled = true;

    this.repairRequestService.approveRequest(this.id).subscribe((response: any) => {
      this.activeModal.close();
    
      this.openSnackBar("Approvato con successo", "OK");
    });

  }

  onClickDenyRequest(): void{
    this.denyButtonDisabled = true;
    this.approveButtonDisabled = true;
    
    this.repairRequestService.denyRequest(this.id).subscribe((response: any) => {
      this.activeModal.close();
      
      this.openSnackBar("Eliminato con successo", "OK");
    });

  }
  
}
