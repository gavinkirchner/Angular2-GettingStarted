import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

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
    starClass: string = 'glyphicon glyphicon-star';
    @Input() rating: number;
    @Input() isEditable: boolean = false;
    @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

    ngOnChanges(): void {
        this.starWidth = this.rating * this.totalStarWidth / this.maxStars;
    }

    onClick(event: any): void {

        if (this.isEditable) {
            if (this.isSelected) {
                this.starClass = 'glyphicon glyphicon-star';
            } else {
                this.starClass = 'glyphicon glyphicon-star-empty';
            }

            this.isSelected = !this.isSelected;
        
            // let rect = event.target.getBoundingClientRect();
            // let x = event.pageX - rect.left;
            // let y = event.pageY - rect.top;

            // let newRating = x / this.totalStarWidth * this.maxStars;
            // newRating = Math.round(newRating * 10) / 10;
            // newRating *= this.maxStars;

            this.ratingClicked.emit(1);
        }
    }
}
