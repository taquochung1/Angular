import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-client-layout',
    standalone: true,
    templateUrl: './client-layout.component.html',
    styleUrl: './client-layout.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class ClientLayoutComponent {

}
