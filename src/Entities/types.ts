type ID = string

export interface Datetime {}

interface Meta {
    created: Datetime;
    updated?: Datetime;
}
interface WithPrimaryID {
    id: ID;
}

export interface Goal extends Meta, WithPrimaryID {
    public: boolean;
    title: string;
    description?: string;
    price?: number;
    deadline?: Datetime;
    setDate?: Datetime;
    userId: ID;
    timelineId: ID;
    galleryId: ID;
}

interface Date extends WithPrimaryID {
    parentId?: ID // self ID if there was some
    goalId: ID;
    created: Datetime;
    value: Datetime; // maybe month/day/week/year - whole
}

enum TimelineType {
    Primary,
    Secondary
}

interface Timeline extends WithPrimaryID {
    parentId?: ID;
    userId: ID;
    type: TimelineType;
}

interface User extends WithPrimaryID {
    email: string;
    username?: string;
    password?: string; // not be here on FE i think
    age?: number;
    facebook?: string;
    instagram?: string;
    google?: string;
    vision?: string;
}

enum GalleryType {
    Mansonery,
    Slider,
    Gallery,
    Video
}

interface Gallery extends WithPrimaryID  {
    nodes: Array<Node>; // tbc check it
    type: GalleryType;
}

enum NodeType {
    Video,
    Picture,
    Text
}

interface Node extends WithPrimaryID  {
    type: NodeType;
    title?: string;
    url?: string;
    source?: string;
}

