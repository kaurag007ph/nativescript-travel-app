import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    template: `
        <StackLayout>
            <Label text="search"></Label>
        </StackLayout>
    `
})

export class SearchComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}