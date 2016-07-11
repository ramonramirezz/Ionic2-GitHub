import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Service } from '../../providers/service/service';
/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details/details.html',
  providers: [Service]
})
export class DetailsPage {

  public readme = '';
  public repo;

  constructor(private service: Service,
              private nav: NavController,
              private navParam: NavParams) {

      this.repo = navParam.get('repo');

      this.service.getDetails(this.repo).subscribe(
        data => this.readme = data.text(),
        err => {
          if(err.status == 404){
              this.readme = 'This repo does not have a README.';
          }else{
              console.log(err);
          }
        },
        () => console.log('getDetails completed')
      );

  }

}
