import {Component, Input, OnInit} from '@angular/core';
import {CardInterface} from '../models/card.interface';

@Component({
    selector: 'app-bingo-card',
    templateUrl: './bingo-card.component.html',
    styleUrls: ['./bingo-card.component.css']
})
export class BingoCardComponent implements OnInit {
    @Input() contentCard: CardInterface = null;
    headerCard = ['B', 'I', 'N', 'G', 'O'];

    constructor() {
    }

    ngOnInit(): void {
    }

}
