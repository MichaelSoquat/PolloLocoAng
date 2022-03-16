import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Keyboard } from './keyboard.class';
import { World } from './world.class';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  styles: ['canvas { border-style: solid; background-color: black }']
})
export class GameComponent implements OnInit {

  // create Keyboard
  keyboard = new Keyboard;

  //Keybaord event keydown

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {

    if (event.key == 'ArrowLeft') {
      this.keyboard.LEFT = true;
    }
    if (event.key == 'ArrowRight') {
      this.keyboard.RIGHT = true;
    }
    if (event.key == 'ArrowUp') {
      this.keyboard.JUMP = true;
      
    }
    if (event.keyCode == 32) {
      this.keyboard.THROW = true;
    }
  }

  //Keyboard event keyup

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {

    if (event.key == 'ArrowLeft') {
      this.keyboard.LEFT = false;
    }
    if (event.key == 'ArrowRight') {
      this.keyboard.RIGHT = false;
    }
    if (event.key == 'ArrowUp') {
      this.keyboard.JUMP = false;
      
    }
    if (event.keyCode == 32) {
      
      this.keyboard.THROW = false;
    }
  }
  
  //get canvas


  @ViewChild('canvas', { static: true })


  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;


  constructor() { }

  ngOnInit(): void {
    new World(this.ctx, this.canvas, this.keyboard);


  }


}
