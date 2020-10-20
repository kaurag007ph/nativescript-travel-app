import { Injectable } from '@angular/core';

export interface Activities {
    name: string;
    photo: string;
    rating: number;
}
export interface Destination {
    id: string;
    name: string;
    country: string;
    photo: string;
    activities: Activities[];
}

@Injectable({ providedIn: 'root' })
export class DataService {

    private _destinations: Destination[] = [
        { 
            id: '1',
            name: 'Santorini',
            country: 'Greece',
            photo: '~/assets/images/santorini.jpeg',
            activities: [
                { name: 'Santorini', photo: '~/assets/images/santorini.jpeg', rating: 4.5 },
                { name: 'The Eiffel Tower', photo: '~/assets/images/eiffeltower.jpg', rating: 4.5 },
                { name: 'Taj Mahal', photo: '~/assets/images/tajmahal.jpg', rating: 4.5 }
            ]
        },
        {
            id: '2',
            name: 'The Eiffel Tower',
            country: 'France',
            photo: '~/assets/images/eiffeltower.jpg',
            activities: [
                { name: 'The Eiffel Tower', photo: '~/assets/images/eiffeltower.jpg', rating: 4.0 },
                { name: 'Santorini', photo: '~/assets/images/santorini.jpeg', rating: 4.5 },
                { name: 'Taj Mahal', photo: '~/assets/images/tajmahal.jpg', rating: 4.0 }
            ]
        },
        {
            id: '3',
            name: 'Taj Mahal',
            country: 'India',
            photo: '~/assets/images/tajmahal.jpg',
            activities: [
                { name: 'Taj Mahal', photo: '~/assets/images/tajmahal.jpg', rating: 4.0 },
                { name: 'The Eiffel Tower', photo: '~/assets/images/eiffeltower.jpg', rating: 4.0 },
                { name: 'Santorini', photo: '~/assets/images/santorini.jpeg', rating: 4.5 }
            ]
        },
    ];

    constructor() { }

    get destinations(): Destination[] {
        return this._destinations;
    }

    getDestination(id: string): Destination {
        return this._destinations.find(destination => destination.id === id);
    }
}