import { Component, ViewContainerRef } from '@angular/core';
import { Page } from '@nativescript/core';
@Component({
  selector: 'app-home',
  template: `
  <GridLayout rows="auto, *">
      <FlexboxLayout row="0" justifyContent="space-between" margin="12 24">
        <Image src="~/assets/images/avatar.jpg" width="50" height="50" borderRadius="100%" stretch="aspectFill"></Image>
        <Button text="\uf7a4" class="fas" fontSize="24"></Button>
      </FlexboxLayout>
      <ScrollView row="1">
        <StackLayout>  
          <Label text="Discover \nworld with us!" fontSize="32" class="heading" padding="24" textWrap="true"></Label>
      
          <GridLayout padding="24" columns="*, auto">
            <TextField col="0" colSpan="2" hint="Search something..." backgroundColor="#eeeeee" padding="24" borderRadius="24"></TextField>
            <Button text="&#xf002;" class="fas primary-btn" col="1" width="56" height="56" padding="0" marginRight="8"></Button>
          </GridLayout>
      
          <app-category-selection (onCategorySelected)="categorySelected($event)"></app-category-selection>
          <app-tab-selection [items]="tabItems"></app-tab-selection>
          <app-desintation-card></app-desintation-card>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  `
})
export class HomeComponent {
  tabItems = ['New', 'Most viewed', 'Hot tours', 'All'];

  constructor(
    private page: Page
  ) {
    this.page.actionBarHidden = true;
  }

  categorySelected(selectedCategory: string) {
    console.log(selectedCategory);
  }
}
