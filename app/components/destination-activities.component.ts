import { Component, Input, OnInit } from '@angular/core';
import { Destination } from 'app/service/data.service';

@Component({
    selector: 'app-destination-activities',
    template: `
        <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
            <StackLayout orientation="horizontal">
                <GridLayout rows="80, 120, 60" width="320" margin="24" *ngFor="let activity of destination.activities">
                    <MDCardView row="1" rowSpan="2" borderRadius="24" margin="12"></MDCardView>
                    <Image androidElevation="1" row="0" rowSpan="2" borderRadius="24" margin="0 24" [src]="activity.photo" stretch="aspectFill"></Image>
                    <FlexboxLayout androidElevation="1" row="2" justifyContent="space-between" padding="0 24">
                        <Label [text]="activity.name"></Label>
                        <Label [text]="activity.rating + ' \uf005'" class="fas" color="#f36f7b"></Label>
                    </FlexboxLayout>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    `
})

export class DestinationActivitiesComponent implements OnInit {
    @Input() destination: Destination;

    constructor() { }

    ngOnInit() {
        
    }
}