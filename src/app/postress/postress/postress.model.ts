export interface IWordpressPostResponse {
    found: number;
    meta: {};
    posts: [IPostressPostEntity];
}

export interface IPostressEntity {
    ID: number;
    content: string;
    date: Date;
}

export interface IPostressPostEntity extends IPostressEntity {
    title: string;
}

export interface IWordpressCommentResponse {
    found: number;
    site_ID: number;
    comments: [IPostressEntity];
}

export class PostressEntity {
    id: number;
    content: string;
    date: Date;

    constructor(data: IPostressEntity) {
        this.id = data.ID;
        this.content = data.content;
        this.date = data.date;
    }
}

export class PostressPostEntity extends PostressEntity {
    title: string;
    comments: PostressCommentEntity[] = [];

    constructor(data: IPostressPostEntity) {
        super(data);

        this.title = data.title;
    }
}

export class PostressCommentEntity extends PostressEntity {
    constructor(data: IPostressEntity) {
        super(data);
    }
}