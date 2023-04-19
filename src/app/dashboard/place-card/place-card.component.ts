import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlaceCard } from 'src/app/models/place-card.model';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss'],
})
export class PlaceCardComponent {
  @Input() placeCard!: PlaceCard;
  @Output() placeCardEmmiter: EventEmitter<PlaceCard> =
    new EventEmitter<PlaceCard>();

  visitNowClick(): void {
    this.placeCardEmmiter.emit(this.placeCard);
  }
}
