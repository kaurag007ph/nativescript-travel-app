import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-tab-selection',
    styles: [`
        FlexboxLayout {
            padding: 24;
        }
        
        StackLayout {
            margin-right: 24;
        }

        .stretch {
            justify-content: space-between;
        }

        .stretch StackLayout {
            margin-right: 0;
        }
        

        Button { color: #000000; }

        .indicator {
            opacity: 0;
            width: 6;
            height: 6;
            background-color: #f36f7b;
            border-radius: 100%;
        }

        .active Button,
        .active Label {
            color: #f36f7b;
            opacity: 1;
        }
    `],
    template: `
        <FlexboxLayout [class.stretch]="stretch">
            <StackLayout
                *ngFor="let item of items; let i = index;"
                horizontalAlignment="center"
                [class.active]="selectedItemIndex === i">
                <Button
                    [text]="item"
                    (tap)="setSelectedTab(i)"
                >
                </Button>
                <Label class="indicator"></Label>
            </StackLayout>
        </FlexboxLayout>
    `
})

export class TabsComponent implements OnInit {
    @Input() items: string[];
    @Input() stretch: boolean = true;
    @Output() selectedItem: EventEmitter<string> = new EventEmitter();

    selectedItemIndex = 0;

    constructor() { }

    ngOnInit() { }

    setSelectedTab(selectedTab) {
        this.selectedItemIndex = selectedTab;
    }
}