/**
 * Interface representing values of the wordpress api response for posts
 * 
 * @author Andrzej Sikorski
 * @since  2021-07-22
 */
export interface IWordpressPostResponse {
    found: number;
    meta: {};
    posts: [IPostressPostEntity];
}

/**
 * Interface representing values of the wordpress api response for posts comments
 * 
 * @author Andrzej Sikorski
 * @since  2021-07-22
 */
 export interface IWordpressCommentResponse {
    found: number;
    site_ID: number;
    comments: [IPostressEntity];
}

/**
 * Interface representing common values for all postress entities
 * 
 * @author Andrzej Sikorski
 * @since  2021-07-22
 */
export interface IPostressEntity {
    ID: number;
    content: string;
    date: Date;
}

/**
 * Interface for postress post entity
 * 
 * @author Andrzej Sikorski
 * @since  2021-07-22
 */
export interface IPostressPostEntity extends IPostressEntity {
    title: string;
}

/**
 * Class representing a common postress entity
 * 
 * @author Andrzej Sikorski
 * @since  2021-07-22
 */
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

/**
 * Class representing a postress post entity
 * 
 * @author Andrzej Sikorski
 * @since  2021-07-22
 */
export class PostressPostEntity extends PostressEntity {
    title: string;
    comments: PostressCommentEntity[] = [];

    constructor(data: IPostressPostEntity) {
        super(data);

        this.title = data.title;
    }
}

/**
 * Class representing a postress post comment entity
 * 
 * @author Andrzej Sikorski
 * @since  2021-07-22
 */
export class PostressCommentEntity extends PostressEntity {
    constructor(data: IPostressEntity) {
        super(data);
    }
}