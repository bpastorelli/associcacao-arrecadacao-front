import { Response } from '@angular/http';


export class ExtractData{

  static extract(res: Response){

      let body = res.json();
      console.log(`Body Data = ${body.data}`);
      return body.data || [];

  }

}
