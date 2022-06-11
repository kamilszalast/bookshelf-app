interface TableBookElement {
  id: number;
  title: string;
  description: string;
}

interface SinglePageBookList {
  id: number;
  count: number;
  results: TableBookElement[];
}
export type { TableBookElement, SinglePageBookList };
