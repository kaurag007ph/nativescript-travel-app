import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Destination } from './../service/data.service';

@Component({
    selector: 'app-destination-detail',
    template: `
        <GridLayout rows="auto, *, 130">
            <FlexboxLayout row="0" justifyContent="space-between" margin="12 24">
                <Button text="\uf053" class="fas" fontSize="22" (tap)="back()"></Button>
                <Button text="\uf7a4" class="fas" fontSize="24"></Button>
            </FlexboxLayout>
            <ScrollView row="1" rowSpan="2" scrollBarIndicatorVisible="false">
                <StackLayout paddingBottom="130">
                    <Label row="1" [text]="destination.name + ', ' + destination.country" fontSize="22" fontWeight="bold" padding="24"></Label>
                    <app-destination-activities row="2" [destination]="destination"></app-destination-activities>
                    <app-tab-selection row="3" [items]="['About', 'Price', 'Insurance']" [stretch]="false"></app-tab-selection>
                    <Label class="description" margin="0 24" textWrap="true" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></Label>
                </StackLayout>
            </ScrollView>
            
            <GridLayout padding="24" row="2" columns="auto, *" backgroundColor="white" background="linear-gradient(to top, rgba(255,255,255,1) 80%, rgba(255,255,255,0.738532913165266) 100%)">
                <Button text="$2,350" class="secondary-btn"></Button>
                <Button col="2" text="Buy now" marginLeft="24" class="primary-btn"></Button>
            </GridLayout>
        </GridLayout>
    `
})

export class DestinationDetailComponent implements OnInit {
    destination: Destination;

    constructor(
        private page: Page,
        private route: ActivatedRoute,
        private router: RouterExtensions,
        private dataService: DataService
    ) {
        this.page.actionBarHidden = true;

        let id = this.route.snapshot.params.id;

        this.destination = this.dataService.getDestination(id);
    }

    ngOnInit() {

    }

    back() {
        this.router.back();
    }
}