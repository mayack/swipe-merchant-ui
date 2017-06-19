interface SearchResult {
    subtitle: string;
    id: number;
    title: string;
}

export interface SearchResponseDto {
    invoices: SearchResult[];
    clients: SearchResult[];
}

export interface SearchRequestQueryData {
    query: string;
}
