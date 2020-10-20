import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
    selector: 'app-welcome',
    template: `
        <GridLayout rows="*, auto">
            <Image iosOverflowSafeArea="true" row="0" rowSpan="2" src="~/assets/images/man.jpg" stretch="aspectFill"></Image>
            <StackLayout row="1" horizontalAlignment="center">
                <Label text="Enjoy every \n moment with us!" color="#ffffff" textWrap="true" textAlignment="center" class="heading"></Label>
                <Button text="Sign in" class="primary-btn" width="60%" margin="32" (tap)="login()"></Button>
                <Button text="Create an account" color="#ffffff" textAlignment="center" textDecoration="underline" margin="0 24"></Button>
            </StackLayout>
        </GridLayout>
    `
})

export class WelcomeComponent {
    constructor(
        private router: RouterExtensions,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }

    login() {
        this.router.navigate(['/home'], { clearHistory: true });
    }
}