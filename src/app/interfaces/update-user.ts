export class UpdateUser {
    constructor(
        public user_id: string,
        public name: string,
        public desc: string,
        public user: string,
        public postperm: boolean
    ) {}
}
