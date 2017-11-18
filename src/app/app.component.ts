import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private _words: string = "好好学习 天天向上";
    private _max_length: number = 4;
    set words(words: string) {
        // this._words = words.slice(0, this._max_length);
        this._words = words;
    }
    get words(): string {
        return this._words;
    }

    fontfamily: string = "KaiTi";
    fontfamilylist: Array<string> = [
        "SimSun", "KaiTi",
    ]

    toArray() {
        let result = new Array();
        if (!this.words) {
            return result;
        }
        for(let i = 0; i < this.words.length; i++) {
            let char = this.words[i];
            if (char.trim()) {
                result.push(char);
            }
        }
        return result;
    }

    choose(ff: string) {
        this.fontfamily = ff;
    }
}
