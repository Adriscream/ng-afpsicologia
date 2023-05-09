// TODO refactor
export interface Dict {
  [key: string]: string | number | boolean | QueryParameters | File;
}

export interface QueryParameters {
  [key: string]: string | number;
}

export interface LqipOptions {
  active?: boolean;
  quality?: number;
  threshold?: number;
  blur?: number;
  raw?: string;
}
