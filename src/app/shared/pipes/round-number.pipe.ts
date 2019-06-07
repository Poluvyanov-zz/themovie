import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'roundNumber'})
export class RoundNumber implements PipeTransform {
    transform(value: any): any {
        return Math.round(value);
    }
}
