import { Cep } from './cep/cep.model';

export interface RootObject {
  sucess: boolean;
  message: string;
  data: Cep;
}
