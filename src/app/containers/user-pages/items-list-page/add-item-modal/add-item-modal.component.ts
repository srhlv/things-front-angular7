import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Store } from "@ngrx/store";
import * as fromStore from '../../../../store';

@Component({
    selector: 'add-item-modal',
    templateUrl: './add-item-modal.component.html',
    styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent {
    itemImage: File;
    addItemForm: FormGroup;
    title = new FormControl('', Validators.required);
    description = new FormControl('');
    submitted: boolean = false;


    constructor(
        public activeModal: NgbActiveModal,
        private fb: FormBuilder,
        private store: Store<fromStore.ThingsState>
    ) {
        this.addItemForm = fb.group({
            'title': this.title,
            'description': this.description
        });
    }

    onSaveItem() {
        this.submitted = true;
        if (this.itemImage && this.addItemForm.valid) {
            const payload = { item: this.addItemForm.value, image: this.itemImage }
            this.store.dispatch(new fromStore.AddItem(payload));

            this.activeModal.close();
        }
    }

    onPickFile(files: File[]) {
        this.itemImage = files[0];
    }
}