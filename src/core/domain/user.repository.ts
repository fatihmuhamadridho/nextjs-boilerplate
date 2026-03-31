import { UserRequest, UserResponse } from './user.type';

export abstract class UserRepository {
  abstract getDetailUser(params: UserRequest.getDetailUser): Promise<UserResponse.getDetailUser>;
}
