import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
/*


import { Component, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';





  constructor(
    private sanitizer: DomSanitizer
    ) {
  }

  ngOnChanges(changes: SimpleChanges) {




    Promise
      .all(promises)
      .then((values) => {
        this.textFullSafe = this.sanitizer.bypassSecurityTrustHtml(values.join(''));
        this.moreInfoClasses['pt-hidden'] = false;
      })
      .catch((e) => {
        this.isLoading = false;
        console.log('error while reading content blocks', e);
      });

  }






* */
