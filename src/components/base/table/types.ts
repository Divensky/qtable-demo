import type { QTableProps } from 'quasar';

export type QTableColumns = NonNullable<QTableProps['columns']>;
export type Pagination = NonNullable<QTableProps['pagination']>;
export type OnRequest = QTableProps['onRequest'];
export type RequestProp = Parameters<NonNullable<OnRequest>>[0];

export type SearchFilter = {
  search?: string;
};

export type Filter = SearchFilter;

export type SortedColumns = QTableColumns &
  {
    isVisible: boolean;
  }[];

export type TableProps = {
  name: string;
  tableTitle?: string;
  topButton?: string;
  topButtonAction?: string;
  hasFilter?: boolean;
  searchPlaceholder?: string;
  hasActionButtons?: {
    edit: boolean;
    view: boolean;
    delete: boolean;
  };
};

export type TableConfig = {
  props: TableProps;
  columns: QTableColumns;
};

export type TableAction = 'delete'; // todo: добавить действия по массовому редактированию

export type Row = Record<string, unknown>;
