import { v4 as id } from 'uuid';
import { Datetime, Goal } from './types';

const createGoal = (title = undefined) => {
    return {
        id: id(),
        public: true,
        created: (new Date() ) as Datetime,
        title: title || "Cestana vrchol",
        price: 1000,
        deadline: (new Date() ) as Datetime,
        userId: id(),
        timelineId: id(),
        galleryId: id()
    }
}

export const goals: Array<Goal> = [
    createGoal(),
    createGoal(),
    createGoal(),
];
