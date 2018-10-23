import { Moment } from "moment";
import { Guid } from "guid-typescript";


export default class Note {
    public id: string;
    public createdDate: Moment;
    public lastUpdatedDate: Moment;
    public title: string;
    public content: string;

    // TODO: generate a new id on init
    constructor() {
        this.id = Guid.create().toString();
    }
}