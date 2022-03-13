import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { World } from './world.class';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  styles: ['canvas { border-style: solid; background-color: black }']
})
export class GameComponent implements OnInit {

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key == 'ArrowDown') {
      console.log(event.key)
    }

  }
  @ViewChild('canvas', { static: true })


  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;


  constructor() { }

  ngOnInit(): void {
    new World(this.ctx, this.canvas);

  }


}
