export interface Comic {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
}

export interface ApiResponse<T> {
    data: T;
}
