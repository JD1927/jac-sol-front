export interface ErrorModel {
  statusCode?: number;
  message?: string | string[];
  error?: string;
}

export enum ModalType {
  ERROR = 'ERROR',
  WARNING = 'WARNING'
}
