import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

import {CardInterface, LetterInterface} from '../../models/card.interface';
import {RandomNumberService} from '../../../services/random-number.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-modal-add-card',
    templateUrl: './modal-add-card.component.html',
    styleUrls: ['./modal-add-card.component.css']
})
export class ModalAddCardComponent implements OnInit, OnDestroy {
    /** Form group of card */
    cardFG: FormGroup;
    /** Subscription of FormGroup*/
    cardFG$: Subscription;
    /** number of card*/
    @Input() nroCard = -1;
    letterB: LetterInterface[] = [];
    letterG: LetterInterface[] = [];
    letterI: LetterInterface[] = [];
    letterN: LetterInterface[] = [];
    letterO: LetterInterface[] = [];
    contentCard: CardInterface = null;

    /** return form control of form group */
    getFC(nameFC: string): AbstractControl | null {
        return this.cardFG.get(nameFC);
    }

    /** return value form control */
    valueFC(nameFC: string): any {
        return this.getFC(nameFC).value;
    }

    constructor(private activeModal: NgbActiveModal,
                private numberService: RandomNumberService) {
        this.buildFormGroup();

    }

    /** Build Form Group */
    buildFormGroup(): void {
        this.cardFG = new FormGroup({
            user: new FormControl({value: '', disabled: false}, [Validators.required]),
            backgroundColor: new FormControl({value: '#ffffff', disabled: false}, [Validators.required]),
        });
    }

    ngOnInit(): void {
        this.generateNumberOfLetter();
        this.cardFG$ = this.cardFG.valueChanges.subscribe((value) => {
            this.contentCard.user = value.user;
            this.contentCard.backgroundColor = value.backgroundColor;
        });
    }

    /** function to generate numbers of bingo card */
    generateNumberOfLetter() {
        this.letterB = [];
        this.letterG = [];
        this.letterI = [];
        this.letterN = [];
        this.letterO = [];
        let letterB = this.numberService.getArrayNumberRandomInt(1, 16, 5);
        let letterI = this.numberService.getArrayNumberRandomInt(16, 31, 5);
        let letterN = this.numberService.getArrayNumberRandomInt(31, 46, 5);
        let letterG = this.numberService.getArrayNumberRandomInt(46, 61, 5);
        let letterO = this.numberService.getArrayNumberRandomInt(61, 76, 5);
        for (let i = 0; i < 5; i++) {
            this.letterB.push({
                value: letterB[i],
                background: '#ffffff'
            });
            this.letterI.push({
                value: letterI[i],
                background: '#ffffff'
            });
            this.letterN.push({
                value: letterN[i],
                background: '#ffffff'
            });
            this.letterG.push({
                value: letterG[i],
                background: '#ffffff'
            });
            this.letterO.push({
                value: letterO[i],
                background: '#ffffff'
            });
        }
        this.letterN[2].value = 'FREE';
        this.contentCard = {
            backgroundColor: this.valueFC('backgroundColor'),
            cardNumber: this.nroCard,
            creationDate: new Date().toDateString(),
            letterB: this.letterB,
            letterG: this.letterG,
            letterI: this.letterI,
            letterN: this.letterN,
            letterO: this.letterO,
            trappedNumber: 0,
            user: this.valueFC('user')
        };
    }

    /** create card */
    saveCard() {
        this.contentCard = {
            backgroundColor: this.valueFC('backgroundColor'),
            cardNumber: this.nroCard,
            creationDate: new Date().toDateString(),
            letterB: this.letterB,
            letterG: this.letterG,
            letterI: this.letterI,
            letterN: this.letterN,
            letterO: this.letterO,
            trappedNumber: 0,
            user: this.valueFC('user')
        };
        this.activeModal.close(this.contentCard);
    }

    /** function to close modal */
    closeModal(): void {
        this.activeModal.close('close');
    }

    ngOnDestroy() {
        this.cardFG$.unsubscribe();
    }
}
