import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.css']
})
export class BingoCardComponent implements OnInit {
  @Input() cardNumber: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
