export class ShortUrl {
    data?: ShortUrl | undefined;
    constructor(
        public readonly id: string,
        public readonly url: string,
        public readonly shortUrlKey: string,
    ) {}
}