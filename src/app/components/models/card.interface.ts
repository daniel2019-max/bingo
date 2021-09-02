export interface CardInterface {
  user: string;
  creationDate: string;
  backgroundColor: string;
  letterB: LetterInterface[];
  letterI: LetterInterface[];
  letterN: LetterInterface[];
  letterG: LetterInterface[];
  letterO: LetterInterface[];
}

export interface LetterInterface {
  value: number;
  background: string;

}
