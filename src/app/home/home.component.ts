import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: []
})
export class HomeComponent implements AfterViewInit {

  public isLightTheme = true;
  elements: ParallaxElement[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    // Initialize parallax elements with their properties
    this.elements = [
      {
        element: document.getElementById('element1'),
        initialY: 0,
        speed: 1,
        scrollStart: 0,
        scrollEnd: 500
      },
      {
        element: document.getElementById('element2'),
        initialY: 0,
        speed: 1,
        scrollStart: 200,
        scrollEnd: 700
      },
      // Add more elements as needed
    ];

    // Capture initial Y positions of elements relative to the viewport
    this.elements.forEach(elem => {
      if (elem.element) {
        const rect = elem.element.getBoundingClientRect();
        elem.initialY = rect.top + window.scrollY;
      }
    });
  }

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

  translateY = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset;

    // Iterate over each parallax element and adjust its position
    this.elements.forEach(elem => {
      if (elem.element) {
        let translateY = 0;

        // Check if the current scroll position is within the range of the element
        if (scrollPosition >= elem.scrollStart && scrollPosition <= elem.scrollEnd) {
          // Calculate the translation based on the element's speed
          translateY = (scrollPosition - elem.scrollStart) * elem.speed;
        } else if (scrollPosition > elem.scrollEnd) {
          // If scroll position exceeds the scrollEnd, set translateY to the maximum value
          translateY = (elem.scrollEnd - elem.scrollStart) * elem.speed;
        }

        // Apply the translation to the element
        elem.element.style.transform = `translateY(${elem.initialY + translateY}px)`;
      }
    });
  }
}
