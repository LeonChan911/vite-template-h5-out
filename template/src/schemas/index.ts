import * as LoginSchema from './login';

export { LoginSchema };

// response wrapper
export interface Response<T> {
  code: number;
  msg: string;
  data: T;
}
