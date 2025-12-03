import { Plant } from '../models/interfaces/plant-interface';
import { mockPlantMeasurements } from './plant-measurement-data';

export const MOCK_PLANTS: Plant[] = [
  {
    id: 'basilic-01',
    name: 'Basilic',
    species: 'Ocimum basilicum',
    imageUrl: '',
    lastMeasurement: mockPlantMeasurements[mockPlantMeasurements.length - 3],
  },
  {
    id: 'menthe-02',
    name: 'Menthe',
    species: 'Mentha',
    imageUrl: 'assets/menthe.jpg',
    lastMeasurement: mockPlantMeasurements[mockPlantMeasurements.length - 2],
  },
  {
    id: 'romarin-03',
    name: 'romarin',
    species: 'Romarinus',
    imageUrl: '',
    lastMeasurement: mockPlantMeasurements[mockPlantMeasurements.length - 1],
  },
];
