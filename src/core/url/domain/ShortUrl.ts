export class ShortUrl {
    constructor(
        public readonly id: string,
        public readonly url: string,
        public readonly shortUrlKey: string,
    ) {}
}