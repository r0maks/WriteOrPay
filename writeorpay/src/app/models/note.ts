import * as moment from 'moment';
import { Moment } from 'moment';
import { Guid } from 'guid-typescript';

export const NOTE_DATE_FORMAT = 'dddd, MMMM DD, YYYY';

export default class Note {
    public id: string;
    public userId: string;
    public createdDate: string;
    public lastUpdatedDate: string;
    public title: string;
    public content: string;

    constructor(title?: string, content?: string) {
        this.init();
        this.title = title;
        this.content = content;
    }

    public init() {
        this.id = Guid.create().toString();
    }
}