import { Injectable } from '@angular/core';
import { Plant } from '../models/interfaces/plant-interface';
import { mockPlantMeasurements } from '../assets/plant-measurement-data';
import { MOCK_PLANTS } from '../assets/plant-data';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  getAll(): Plant[] {
    return MOCK_PLANTS;
  }

  getById(id: string): Plant | undefined {
    return MOCK_PLANTS.find((p) => p.id === id);
  }
}
