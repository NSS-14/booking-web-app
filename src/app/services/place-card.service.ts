import { Injectable } from '@angular/core';
import { PlaceCard } from '../models/place-card.model';

@Injectable({
  providedIn: 'root',
})
export class PlaceCardService {
  private _currentPage: number = 1;
  private _placeCards: PlaceCard[] = [
    {
      imageUrl: '/assets/images/place_1.png',
      title: 'BELAKHUM',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_2.png',
      title: 'SAJEK VELLY',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_3.png',
      title: 'SARIGHAT',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_4.png',
      title: 'FINNSCAI BOLDIV',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_5.png',
      title: 'OGLINDASH',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_6.png',
      title: 'ILUZUM',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_7.png',
      title: 'HADIOBARL',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_8.png',
      title: 'FISTAR',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_9.png',
      title: 'PATRUS PATRUL',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_10.png',
      title: 'TULPIN VEL TUYYA',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_11.png',
      title: 'CASTA RIKO',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_12.png',
      title: 'POUMINGFAL',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_13.png',
      title: 'TIMISOARA',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_14.png',
      title: 'BRASOV',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_15.png',
      title: 'TIMISU DE JOS',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_16.png',
      title: 'CONSTANTA',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_17.png',
      title: 'BUSTENI',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_18.png',
      title: 'CLUJ NAPOCA',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_19.png',
      title: 'IASI',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_20.png',
      title: 'CHISINAU',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_21.png',
      title: 'PLOIESTI',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_22.png',
      title: 'BOLDESTI SCAENI',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_23.png',
      title: 'SIBIU',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_24.png',
      title: 'SINAIA',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_25.png',
      title: 'BUCURESTI',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_26.png',
      title: 'SIGHISOARA',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_27.png',
      title: 'TARGOVISTE',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_28.png',
      title: 'BOTOSANI',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_29.png',
      title: 'CRAIOVA',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      imageUrl: '/assets/images/place_30.png',
      title: 'VALENII DE MUNTE',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
  ];
  private _cityNames!: string[];

  constructor() {
    this._cityNames = [];
    this._placeCards.forEach((card) => {
      this._cityNames.push(card.title);
    });
    this._cityNames.sort();
  }

  get placeCards(): PlaceCard[] {
    return this._placeCards.slice(
      6 * (this._currentPage - 1),
      6 * (this._currentPage - 1) + 6
    );
  }
  get cityNames(): string[] {
    return this._cityNames;
  }

  nextPage(): void {
    if (this._currentPage * 6 >= this._placeCards.length) {
      this._currentPage = 1;
      return;
    }
    ++this._currentPage;
  }

  previousPage(): void {
    if (this._currentPage == 1) {
      this._currentPage =
        this._placeCards.length % 6 == 0
          ? Math.floor(this._placeCards.length / 6)
          : Math.floor(this._placeCards.length / 6) + 1;
      return;
    }
    --this._currentPage;
  }
}
