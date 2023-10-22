import { Component, OnDestroy, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
    selector: 'typer',
    template: `<div class="elemento-typed"></div>
    `,
})
export class TyperComponent implements OnInit, OnDestroy {
    private typed: any;
  
    ngOnInit(): void {
      const options = {
        strings: [
          'A full stack developer',
          'A DBA',
          'And U/X designer'
        ],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
      };
  
      this.typed = new Typed('.elemento-typed', options);
    }
  
    ngOnDestroy(): void {
      this.typed.destroy();
    }
  }
  
