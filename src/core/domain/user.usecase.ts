import { User } from './user.model';
import { UserRepository } from './user.repository';
import { UserRequest, UserResult } from './user.type';

export class GetDetailUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(params: UserRequest.getDetailUser): Promise<UserResult.getDetailUser> {
    const response = await this.userRepository.getDetailUser(params);
    return {
      status: {
        code: 'SUCCESS',
        message: 'SUCCESS HIT API',
      },
      data: new User({
        id: response?.id ?? '',
        email: response?.email ?? '',
        username: response?.username ?? '',
        fullname: `${response?.name?.firstname ?? ''} ${response?.name?.lastname ?? ''}`,
        phone: response?.phone ?? '',
      }),
    };
  }
}
