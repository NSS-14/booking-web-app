import { Component, Input } from '@angular/core';
import { ServicePresentation } from 'src/app/models/service-presentation.model';

@Component({
  selector: 'app-service-presentation',
  templateUrl: './service-presentation.component.html',
  styleUrls: ['./service-presentation.component.scss'],
})
export class ServicePresentationComponent {
  @Input() servicePresentation!: ServicePresentation;
}
