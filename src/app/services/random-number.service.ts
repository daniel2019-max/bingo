import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RandomNumberService {

    constructor() {
    }

    /** function to generate a number that is not in the list */
    getNewRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /** function to generate array of random numbers */
    getArrayNumberRandomInt(min: number, max: number, length: number): number[] {
        let array: number[] = [];
        for (let i = 0; i < length; i++) {
            let newNumber = this.getNewRandomInt(min, max);
            while (array.indexOf(newNumber) > -1) {
                newNumber = this.getNewRandomInt(min, max);
            }
            array.push(newNumber);
        }
        return array;
    }
}
