import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { IStar } from './star';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: [ 'star.component.css' ]
})

export class StarComponent implements OnChanges {
    starWidth: number;
    maxStars: number = 10;
    totalStarWidth: number = this.maxStars * 14;
    isSelected: boolean = false;

    stars: IStar[] = [];

    @Input() rating: number;
    @Input() isEditable: boolean = false;
    @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

    ngOnChanges(): void {
        this.setRating(this.rating);
    }

    onClick(event: any, i: any): void {
        if (this.isEditable) {
            this.rating = i + 1;
            this.setRating(this.rating);
        }

        this.ratingClicked.emit(this.rating);
    }

    private setRating(newRating: number): void {
        if (this.stars.length === 0) {
            this.initStars();
        }

        for (let i = 0; i < this.maxStars; i++) {
            let turnOnStar: boolean = i < newRating;
            this.stars[i].isOn = turnOnStar;
        }
    }

    private initStars(): void {
        for (let i = 0; i < this.maxStars; i++) {
            let star: IStar = { isOn: false };
            this.stars.push(star);
        }
    }
}
