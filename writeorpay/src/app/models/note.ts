import * as moment from 'moment';
import { Moment } from 'moment';
import { Guid } from "guid-typescript";

const NOTE_DATE_FORMAT = 'dddd, MMMM DD, YYYY';

export default class Note {
    public id: string;
    public createdDate: Moment;
    public lastUpdatedDate: Moment;
    public title: string;
    public content: string;

    constructor(content?: string, title?: string) {
        this.init();
    }

    public init() {
        this.id = Guid.create().toString();
        this.createdDate = moment();
    }

    public getFormattedCreatedDate(): string {
        if (this.createdDate) {
            return this.createdDate.format(NOTE_DATE_FORMAT);
        }
        return '';
    }

    public getFormattedUpdatedDate(): string {
        if (this.lastUpdatedDate) {
            return this.lastUpdatedDate.format(NOTE_DATE_FORMAT);
        }
        return '';
    }
}