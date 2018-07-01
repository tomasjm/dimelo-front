export class Post {
    constructor(
        public text: string,
        public from: number,
        public receiver: number,
        public anonymous: boolean
    ) {}
}
