type User = {
  _id;
  email: string;
  password?: string;
  first_name: string;
  last_name: string;
  date_of_birth?: Date;
};
type Post = {
  _id: string;
  user: User;
  content: string;
  create_time_stamp: Date;
  imgSrc?: string;
};
