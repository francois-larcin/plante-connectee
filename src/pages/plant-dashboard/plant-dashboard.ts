import { Component, inject } from '@angular/core';
import { Plant } from '../../models/interfaces/plant-interface';
import { PlantService } from '../../service/plant-service';
import { PlantList } from "../../shared/components/plant-list/plant-list";

@Component({
  selector: 'app-plant-dashboard',
  imports: [PlantList],
  templateUrl: './plant-dashboard.html',
  styleUrl: './plant-dashboard.css',
})
export class PlantDashboardComponent {
  plants: Plant[] = [];
  selectedPlantId: string | null = null;

  private _plantService = inject(PlantService);

  ngOnInit(): void {
    this.plants = this._plantService.getAll();
  }

  onPlantSelected(plantId: string): void {
    this.selectedPlantId = plantId;
    //TODO display the plant measurement detail 
  }
}
