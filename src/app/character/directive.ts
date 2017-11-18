import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[fontfamily]'
})
export class FontFamilyDirective {
  private _fontfamily: string = 'SimSun';
  @Input() set fontfamily(ff: string) {
    this._fontfamily = ff;
    this.el.nativeElement.style['font-family'] = ff;
  }

  get fontfamily(): string {
    return this._fontfamily;
  }

  constructor (
    private el: ElementRef,
  ) {}
}