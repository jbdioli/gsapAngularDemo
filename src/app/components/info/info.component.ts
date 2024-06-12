import {Component, OnInit} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{

  ngOnInit(): void {
    document.querySelectorAll('details').forEach(detail => {
      const summary = detail.querySelector('summary');
      const content = detail.querySelector('.content');

      if (summary == null) return;
      if (content == null) return;

      const contentHeight = content.scrollHeight;

      summary.addEventListener('click', () => {
        if (detail.open) {
          // Closing animation
          gsap.fromTo(content,
            {height: contentHeight, opacity: 1},
            {height: 0, opacity: 0, duration: 1},
          );
        } else {
          // Opening animation
          gsap.fromTo(content,
            {height: 0, opacity: 0},
            {height: contentHeight, opacity: 1, duration: 1}
          );
        }
      });
    });
  }

}
