import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-modal-setting',
    templateUrl: './modal-setting.component.html',
    styleUrls: ['./modal-setting.component.css']
})
export class ModalSettingComponent implements OnInit {
    settingFG: FormGroup;

    /** Get one form control*/
    getFC(control: string): AbstractControl {
        return this.settingFG.get(control);
    }

    /** Get Value Form Control */
    valueFC(control: string): any {
        return this.getFC(control).value;
    }

    /** Set Value Form Control */
    setValueFC(formControl: string, value: any) {
        this.getFC(formControl).setValue(value);
    }

    constructor(private activeModal: NgbActiveModal) {
        this.buildForm();
    }

    ngOnInit(): void {
    }

    buildForm(): void {
        this.settingFG = new FormGroup({
            secondsFC: new FormControl({value: 1, disabled: false}, [Validators.required]),
            removeCardFC: new FormControl({value: false, disabled: false}),
            winners: new FormControl({value: true, disabled: false})
        });
    }

    saveSettings(): void {
        this.activeModal.close(this.settingFG.value);
    }

    /** function to close modal */
    closeModal(): void {
        this.activeModal.close('close');
    }
}
