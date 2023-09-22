import { Task } from "./task.model";

export class Project {
    constructor(
        public id? : number,
        public name?:string,
        public description?: string,
        public startedDate?: Date,
        public completedPercentage?: number,
        public departmantId?:number,
        public tasks?: Task[]

    ){

    }
}