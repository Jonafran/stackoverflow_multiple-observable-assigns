import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

interface ISource {
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public source$: Observable<ISource>;

  ngAfterViewInit() {
    setTimeout(() => this.source$ = of({name: 'Seems like it works!'}), 2000)
    setTimeout(() => this.source$ = of({name: 'Another one!'}), 4000)
    setTimeout(() => this.source$ = undefined, 6000)
    setTimeout(() => this.source$ = of({name: 'Trustworthy async pipe!'}), 8000)
  }
}
