import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
import {Service} from '../../providers/service/service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Service]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(private service: Service) {}

  getRepos() {
      this.service.getRepos(this.username).subscribe(
          data => {
              this.foundRepos = data.json();
          },
          err => console.error(err),
          () => console.log('getRepos completed')
      );
  }

}
