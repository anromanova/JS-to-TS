export interface SourcesInterface {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ResponseSources {
    readonly status: string;
    sources: Array<SourcesInterface>;
}

export interface ArticleSource {
    id: string | null;
    name: string;
}

export interface Article {
    source: ArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ResponseNews {
    status: string;
    totalResults: number;
    articles: Array<Article>;
}

export interface Endpoint {
    endpoint: string;
    options?: Options;
}

export interface Options {
    sources?: string;
    apiKey?: string;
}

export type Callback<T> = (data: T) => void;

export enum CategoryType {
    category = 'everything',
}
