import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ItemsService } from "src/app/services/items.service";
import { Item } from "src/app/models/item";
import { FormGroup, Validators, FormControl, FormBuilder } from "@angular/forms";

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


    constructor(public activeModal: NgbActiveModal, private itemsService: ItemsService, fb: FormBuilder) {
        this.addItemForm = fb.group({
            'title': this.title,
            'description': this.description
        });

        console.log(this.addItemForm);

    }

    onSaveItem() {
        this.submitted = true;
        if (this.itemImage && this.addItemForm.valid){
            this.itemsService.createItem(this.addItemForm.value, this.itemImage).subscribe(result => {
                console.log(result)
                this.activeModal.close()
            })
        }
    }

    onPickFile(files: File[]) {
        this.itemImage = files[0];
    }
}