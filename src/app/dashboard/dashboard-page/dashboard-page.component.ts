import { Component, OnInit } from '@angular/core';
import { PlaceCard } from 'src/app/models/place-card.model';
import { ServicePresentation } from 'src/app/models/service-presentation.model';
import { PlaceCardService } from 'src/app/services/place-card.service';
import { ServicePresentationService } from 'src/app/services/service-presentation.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  typedCity: string = '';
  mainTitle: string = 'NEW ADVENTURE';
  arrayOfServicePresentations!: ServicePresentation[];
  arrayOfPlaceCards!: PlaceCard[];
  searchBar!: any;
  cityNames!: string[];

  constructor(
    private servicePresentationService: ServicePresentationService,
    private placeCardService: PlaceCardService
  ) {}

  ngOnInit(): void {
    this.arrayOfServicePresentations =
      this.servicePresentationService.servicePresentations;
    this.arrayOfPlaceCards = this.placeCardService.placeCards;
    this.cityNames = this.placeCardService.cityNames;
    this.searchBar = document.getElementById('search-bar');
    this.searchBar.addEventListener('keyup', () => {
      this.removeAllElementsFromUl();
      for (let cityName of this.cityNames) {
        if (
          cityName
            .toLowerCase()
            .startsWith(this.searchBar.value.toLowerCase()) &&
          this.searchBar.value != ''
        ) {
          let listItem = document.createElement('li');
          listItem.classList.add('list-items');
          listItem.style.fontFamily = 'SoleSans Medium';
          listItem.style.cursor = 'pointer';
          listItem.style.color = 'rgb(97, 221, 160)';
          listItem.style.width = '540px';
          listItem.addEventListener('mouseenter', () => {
            listItem.style.backgroundColor = 'rgb(50,180,140)';
            listItem.style.color = 'white';
          });
          listItem.addEventListener('mouseleave', () => {
            listItem.style.backgroundColor = 'transparent';
            listItem.style.color = 'rgb(97, 221, 160)';
          });
          listItem.style.position = 'relative';
          listItem.style.left = '-42px';
          listItem.style.borderRadius = '5px';
          listItem.style.borderLeft = '25px solid transparent';
          listItem.addEventListener('click', () => {
            this.mainTitle = cityName;
            this.searchBar.value = cityName;
            this.removeAllElementsFromUl();
          });
          let word =
            '<b>' +
            cityName.substring(0, this.searchBar.value.length) +
            '</b>' +
            cityName.substring(this.searchBar.value.length);
          listItem.innerHTML = word;
          document.querySelector('.search-results')?.appendChild(listItem);
        }
      }
    });
  }

  nextPage(): void {
    this.placeCardService.nextPage();
    this.arrayOfPlaceCards = this.placeCardService.placeCards;
  }
  previousPage(): void {
    this.placeCardService.previousPage();
    this.arrayOfPlaceCards = this.placeCardService.placeCards;
  }

  removeAllElementsFromUl(): void {
    let elements = document.querySelectorAll('.list-items');
    elements.forEach((element) => {
      element.remove();
    });
  }

  setMainTitle(event: any): void {
    this.mainTitle = (event as PlaceCard).title;
  }
}
