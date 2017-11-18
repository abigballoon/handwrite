import { Component, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'character-component',
  templateUrl: './character.component.html',
  styleUrls: ['./character.styles.css', ],
})
export class CharacterComponent {
  private _character: string = '';
  @Input() set character(char: string) {
    this._character = char;
  }
  get character(): string {
    return this._character;
  }
}