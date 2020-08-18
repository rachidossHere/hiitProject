import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortUrl'
})
 /**
  * @param url describe the long url
  * ShortUrlPipe for generate new shortUrl
  */
export class ShortUrlPipe implements PipeTransform {

  transform(url: string, args?: any): any {
    if (url) {
      const len = url.length;
      if (len > 10) {// only shorten if greater than 10
        // change value 11 and 5 as per requirement
        return url.substr(0, 11) + '...' + url.substring(len - 5, len);
      }
      return url;
    }
    return url;
  }

}
