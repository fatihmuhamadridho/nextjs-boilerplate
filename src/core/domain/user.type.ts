import { BaseResponse } from '../../common/types/base.type';
import { User } from './user.model';

export declare namespace UserResult {
  export type getDetailUser = BaseResponse<User>;
}

export declare namespace UserResponse {
  export type getDetailUser = UserDataProps;
}

export declare namespace UserRequest {
  export type getDetailUser = {
    id: string;
  };
}

export interface UserDataProps {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
}
