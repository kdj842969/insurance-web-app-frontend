import {Type} from './type';

export class Policy {
  id?: number;
  startDate: string;
  endDate: string;
  policyDocumentAddress?: string;
  types: Type[];
  applicationStatus: string;
}
