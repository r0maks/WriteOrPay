import * as moment from 'moment';
import { Moment } from 'moment';
import { Guid } from "guid-typescript";



export default class Note {
    public id: string;
    public createdDate: Moment;
    public lastUpdatedDate: Moment;
    public title: string;
    public content: string;

    constructor() {
        this.id = Guid.create().toString();
        this.createdDate = moment();
    }

    public createdDateFormat(): string {
        if (this.createdDate) {
            return this.createdDate.format('dddd, MMMM DD, YYYY');
        }
        return '';
    }
}