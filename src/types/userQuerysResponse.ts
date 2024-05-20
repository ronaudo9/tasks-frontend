type User = {
  id: number;
  name: string;
  email: string;
};

export type GetUserResponse = {
  getUser: User;
};
