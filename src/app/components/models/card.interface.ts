export interface CardInterface {
    user: string;
    creationDate: string;
    backgroundColor: string;
    letterB: LetterInterface[];
    letterI: LetterInterface[];
    letterN: LetterInterface[];
    letterG: LetterInterface[];
    letterO: LetterInterface[];
    cardNumber: number;
    trappedNumber: number;
}

export interface LetterInterface {
    value: number | string;
    background: string;
}
