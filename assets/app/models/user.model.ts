export class User {
    constructor(
        public email: string,
        public password: string,
        public firstName?: string,
        public lastName?: string,
        public sex?: string,
        public country?: string
    ) { }
}
