import { Injectable } from '@angular/core';
import { ServicePresentation } from '../models/service-presentation.model';

@Injectable({
  providedIn: 'root',
})
export class ServicePresentationService {
  private _servicePresentations: ServicePresentation[] = [
    {
      mainTitle: 'TRAVEL',
      secondaryTitle: 'ARTICLE TITLE',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      mainTitle: 'TRAVEL ARRANGMENTS',
      secondaryTitle: 'ARTICLE TITLE',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      mainTitle: 'OUR PROFESSIONAL GUIDE',
      secondaryTitle: 'ARTICLE TITLE',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
    {
      mainTitle: 'ACTIVITIES',
      secondaryTitle: 'ARTICLE TITLE',
      description:
        'Scelerisque fermentum dui faucibus in ornare quam viverra orci.',
    },
  ];

  constructor() {}

  get servicePresentations() {
    return this._servicePresentations
  }
}
