import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PlantMeasurement } from '../../../models/interfaces/plant-measurement-interface';
import { Plant } from '../../../models/interfaces/plant-interface';
import { PlantService } from '../../../service/plant-service';

@Component({
  selector: 'app-plant-detail',
  imports: [],
  templateUrl: './plant-detail.html',
  styleUrl: './plant-detail.css',
})
export class PlantDetail {
  @Input() plantId!: string;
  @Output() close = new EventEmitter<void>();

  plant: Plant | undefined;
  measurements: PlantMeasurement[] = [];

  private _plantService = inject(PlantService);

  ngOnInit(): void {
    this.plant = this._plantService.getById(this.plant!.id);
  }

  onClose(): void {
    this.close.emit();
  }

  
}
