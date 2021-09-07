import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardInterface} from '../models/card.interface';

@Component({
    selector: 'app-bingo-card',
    templateUrl: './bingo-card.component.html',
    styleUrls: ['./bingo-card.component.css']
})
export class BingoCardComponent implements OnInit {
    @Input() contentCard: CardInterface = null;
    headerCard = ['B', 'I', 'N', 'G', 'O'];
    color = 'rgba(142,234,130,0.51)';
    _numberJustCameOut: number;
    @Input() set numberJustCameOut(value: number) {
        this._numberJustCameOut = value;
        this.updateCardBody();
    }

    get numberJustCameOut(): number {
        return this._numberJustCameOut;
    }

    // trappedNumber = 0;
    @Output() message = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    updateCardBody() {
        for (let i = 0; i < this.contentCard.letterI.length; i++) {
            if (this.contentCard.letterB[i].value === this.numberJustCameOut) {
                this.contentCard.letterB[i].background = this.color;
                this.contentCard.trappedNumber++;
            } else if (this.contentCard.letterI[i].value === this.numberJustCameOut) {
                this.contentCard.letterI[i].background = this.color;
                this.contentCard.trappedNumber++;
            } else if (this.contentCard.letterN[i].value === this.numberJustCameOut) {
                this.contentCard.letterN[i].background = this.color;
                this.contentCard.trappedNumber++;
            } else if (this.contentCard.letterG[i].value === this.numberJustCameOut) {
                this.contentCard.letterG[i].background = this.color;
                this.contentCard.trappedNumber++;
            } else if (this.contentCard.letterO[i].value === this.numberJustCameOut) {
                this.contentCard.letterO[i].background = this.color;
                this.contentCard.trappedNumber++;
            }
        }
        if (this.contentCard.trappedNumber === 24) {
            this.message.emit('El ganador es ' + this.contentCard.user);
        }
    }


}
