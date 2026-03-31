type UserProps = {
  readonly id?: number;
  email?: string;
  username?: string;
  fullname?: string;
  phone?: string;
};

export class User implements UserProps {
  readonly id?: number;
  email?: string;
  username?: string;
  fullname?: string;
  phone?: string;

  constructor(props?: UserProps) {
    Object.assign(this, props);
  }
}
