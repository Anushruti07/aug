import { Component } from '@angular/core';
import { NewNoticeService } from '../../services/new-notice.service';

@Component({
  selector: 'app-new-notice',
  standalone: true,
  imports: [],
  templateUrl: './new-notice.component.html',
  styleUrl: './new-notice.component.css'
})
export class NewNoticeComponent {
  notices:any
  constructor(private newNotice:NewNoticeService){}
  ngOnInit(){
    this.newNotice.getAll()
    .subscribe(res=>
    {
      console.log(res)
      this.notices=res
    }
    )
  }
}
