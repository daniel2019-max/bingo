import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CardInterface} from '../models/card.interface';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalAddCardComponent} from '../modals/modal-add-card/modal-add-card.component';
import {RandomNumberService} from '../../services/random-number.service';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    /** list of numbers that have already come out */
    listNumber: number[] = [];
    /** flag to verify that the game is running */
    gameStarted = false;
    /** number that just came out*/
    numberNew = -1;
    /** amount of number generated */
    cantNumbers = 75;
    /** seconds between each launch */
    secondLaunch = 0.001;
    /** form control of the text area */
    textArea: FormControl = new FormControl({value: '', disabled: true});
    /** amount of numbers left to come out */
    leftNumber = 75;
    /** list of cards */
    cardList: CardInterface[] = [];

    constructor(private modalService: NgbModal,
                private numberService: RandomNumberService) {
    }

    ngOnInit(): void {
    }

    /** function to end the game */
    startGame(): void {
        this.gameStarted = true;
        this.startLaunch();
    }

    /** function to validate number generated and add to list */
    validNumber() {
        let numberNew = this.numberService.getNewRandomInt(1, this.cantNumbers + 1);
        while (this.listNumber.indexOf(numberNew) > -1) {
            numberNew = this.numberService.getNewRandomInt(1, this.cantNumbers + 1);
        }
        if (this.gameStarted && this.listNumber.indexOf(numberNew) === -1) {
            this.leftNumber = this.leftNumber - 1;
            this.numberNew = numberNew;
            this.listNumber.push(numberNew);
            this.textArea.setValue(this.textArea.value + ' ' + numberNew);
        }
    }

    /** start throwing the balls */
    startLaunch(): void {
        if (this.leftNumber === 0) {
            return;
        } else if (this.gameStarted) {
            setTimeout(() => {
                this.validNumber();
                this.startLaunch();
            }, this.secondLaunch * 1000);
        }
        return;
    }

    /** function to restart the game */
    restartGame(): void {
        this.listNumber = [];
        this.gameStarted = false;
        this.numberNew = -1;
        this.leftNumber = 75;
        this.textArea.reset('');
    }

    /** Add Card */
    addCard(): void {
        const modalRef: NgbModalRef = this.modalService.open(ModalAddCardComponent,
            {
                size: 'lg',
                backdrop: 'static'
            });
        modalRef.componentInstance.nroCard = this.cardList.length > 0 ? this.cardList.length + 1 : 1;
        modalRef.result.then((result) => {
            if (result !== 'close') {
                // this.cardList.push(result);
                this.cardList = [result, ...this.cardList];
            }
        }).catch((error) => {
            console.log(error);
        });

    }

}
