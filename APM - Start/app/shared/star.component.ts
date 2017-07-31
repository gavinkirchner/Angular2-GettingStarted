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
    maxStars: number = 5;
    totalStarWidth: number = this.maxStars * 14;
    isActive: boolean = false;

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
        }

        this.ratingClicked.emit(this.rating);
    }

    onComponentMouseEnter(): void {
        this.isActive = true;
    }

    onComponentMouseLeave(): void {
        this.isActive = false;
    }

    onStarMouseEnter(event: any, i: any): void {
        for (let index = 0; index < this.maxStars; index++) {
            let turnOnStar: boolean = index <= i;
            this.stars[index].isActive = turnOnStar;
        }
    }

    onStarMouseLeave(event: any): void {
        this.setRating(this.rating);
    }

    getStarClass(star: IStar): string {
        if (star.isActive) {
            return 'glyphicon glyphicon-star activeStar';
        }
        if (star.isSelected && !this.isActive) {
            return 'glyphicon glyphicon-star inactiveStar';
        }

        return 'glyphicon glyphicon-star-empty inactiveStar';
    }

    private setRating(newRating: number): void {
        if (newRating < 0) {
            newRating = 0;
        }

        if (newRating > this.maxStars) {
            newRating = this.maxStars;
        }

        if (this.stars.length === 0) {
            this.initStars();
        }

        for (let i = 0; i < this.maxStars; i++) {
            let turnOnStar: boolean = i < newRating;
            this.stars[i].isSelected = turnOnStar;
            this.stars[i].isActive = false;
        }
    }

    private initStars(): void {
        for (let i = 0; i < this.maxStars; i++) {
            let star: IStar = {
                isSelected: false,
                isActive: false
            };
            this.stars.push(star);
        }
    }
}
