import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

interface ParallaxElement {
  element: HTMLElement | null;
  initialY: number;
  speed: number;
  scrollStart: number;
  scrollEnd: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './animation.css']
})
export class HomeComponent {

  public isLightTheme = true;
  public brliso = false;
  public ptliso = false;
  public ptlistrado = false;
  public brlistrado = false;

  constructor() { }

  teste() {
    console.log('1')
  }


  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }


  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Adjust this threshold as needed
    this.isVisible = offset > 100;
  }
}
