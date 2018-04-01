import {Component} from "@angular/core";
import { SharedService } from '../sharedservice/shared.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    constructor(private sharedService: SharedService) {}
    
    searchHandler (searchString){
        console.log('searchString-->', searchString);
        this.sharedService.publishSearchString(searchString);
    }
}