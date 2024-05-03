import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-censura',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './censura.component.html',
  styleUrl: './censura.component.scss'
})
export class CensuraComponent {


}
