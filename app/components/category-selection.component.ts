import { Component, EventEmitter, OnInit, Output } from '@angular/core';
    
interface Category {
    id: number,
    icon: string;
    iconName?: string;
    iconSize: number;
}
@Component({
    selector: 'app-category-selection',
    styles: [`
        .container {
            padding: 12 24;
            justify-content: space-between;
        }

        Button {
            color: #f36f7b;
            background-color: #FDE2E5;
            width: 56;
            height: 56;
            border-radius: 18;
            font-size: 18;
        }
        .active {
            color: white;
            background-color: #f36f7b;
        }
    `],
    template: `
        <FlexboxLayout class="container">
            <Button 
                *ngFor="let category of categories; let i = index;"
                [text]="category.icon"
                [fontSize]="category.iconSize"
                class="fas"
                [class.active]="category.id === selectedCategory"
                (tap)="setSelectedIndex(category)">
            </Button>
        </FlexboxLayout>
    `
})

export class CategorySelectionComponent implements OnInit {
    @Output() onCategorySelected: EventEmitter<number> = new EventEmitter();
    selectedCategory: number = 1;
    categories: Category[] = [
        { id: 1, icon: String.fromCharCode(0xf5b0), iconSize:  18, iconName: 'plane' },
        { id: 2, icon: String.fromCharCode(0xf1ad), iconSize:  24, iconName: 'building' },
        { id: 3, icon: String.fromCharCode(0xf030), iconSize:  24, iconName: 'camera' },
        { id: 4, icon: String.fromCharCode(0xf207), iconSize:  24, iconName: 'bus' }
    ]
    constructor() { }

    ngOnInit() { }

    setSelectedIndex(category: Category) {
        this.selectedCategory = category.id;

        this.onCategorySelected.emit(this.selectedCategory);
    }
}