import modelsData from '../data/models.json';
import type { Model } from '../types';

export function getAllModels(): Model[] {
    // This is where you'd write code to fetch the list
    // of models from a database. We're mocking that with
    // our JSON array of data in models.json for now.
    return modelsData;
}
