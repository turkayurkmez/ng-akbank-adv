import { Project } from "../project.model";
import { Task } from "../task.model";

export const projects: Project[] = [
    new Project(1, 'Project A', 'Project A Description', new Date(2023,8,22),0.1,1,
    [
        new Task(1,'Task A','Desc of A', new Date(2023,9,1),1,false),
        new Task(2,'Task B','Desc of B', new Date(2023,9,3),1,true),
        new Task(3,'Task C','Desc of C', new Date(2023,9,4),1,false),

    ]),

    new Project(2, 'Project B', 'Project B Description', new Date(2023,11,22),0.1,1,
    [
        new Task(4,'Task D','Desc of D', new Date(2023,9,1),2,false),
        new Task(5,'Task E','Desc of E', new Date(2023,9,3),2,false),
        new Task(6,'Task F','Desc of F', new Date(2023,9,4),2,true),

    ]),

    new Project(3, 'Project C', 'Project C Description', new Date(2023,8,22),0.1,1,
    [
        new Task(7,'Task X','Desc of X', new Date(2023,9,1),3,true),
        new Task(8,'Task Y','Desc of Y', new Date(2023,9,3),3,false),
        new Task(9,'Task Z','Desc of Z', new Date(2023,9,4),3,false),

    ])


];