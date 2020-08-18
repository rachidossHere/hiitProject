import { Component, OnInit } from '@angular/core';
import { ShortUrlPipe } from '../../shared/pipes/short-url.pipe';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {
  shortUrl: string;
  shortUrlCopy: string;
  constructor(private shortUrlPipe: ShortUrlPipe, private clipboard: Clipboard) { }
  ngOnInit(): void {
  }
  /**
   * @param shortUrl describe the long url
   * search function for transform the long url to short url with pipe shortUrlPipe
   */
  search(shortUrl) {
    this.shortUrlCopy = this.shortUrlPipe.transform(shortUrl);
  }
  /**
   * copyShortUrl function for copy shorturl in clipboard
   */
  copyShortUrl() {
    this.clipboard.copy(this.shortUrlCopy);
  }
}
