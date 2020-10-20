import { Component, OnInit } from '@angular/core';
import { DataService, Destination } from './../service/data.service';

@Component({
    selector: 'app-desintation-card',
    styles: [`
        Image, .locations, .overlay {
            border-radius: 18;
        }
        .location {
            width: 200;
            height: 300;
            margin: 0 12;
        }

        .overlay {
            opacity: 0.3;
            background: #000;
        }
    `],
    template: `
        <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false" marginBottom="24">
            <StackLayout orientation="horizontal" paddingLeft="12">
                <GridLayout [nsRouterLink]="['/destinations', destination.id]" class="location" rows="*, auto, auto" *ngFor="let destination of destinations">
                    <Image row="0" rowSpan="3" [src]="destination.photo" stretch="aspectFill"></Image>
                    <StackLayout class="overlay" rowSpan="3" row="0"></StackLayout>
                    <Label row="1" [text]="destination.name" textWrap="true" fontSize="22" color="white" margin="12 24" fontWeight="bold"></Label>
                    <Label row="2" margin="0 24 24" color="#f36f7b" [text]="'&#xf3c5; ' + destination.country" class="fas"></Label>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    `
})

export class DestinationCardsComponent implements OnInit {
    destinations: Destination[] = [];

    constructor(private dataService: DataService) {
        this.destinations = this.dataService.destinations;
    }

    ngOnInit() {

    }
}