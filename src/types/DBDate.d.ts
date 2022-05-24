type User = {
  _id;
  email: string;
  password?: string;
  first_name: string;
  last_name: string;
  personal_img: string;
  date_of_birth?: Date;
};

type Post = {
  _id: string;
  user: User;
  content: string;
  create_time_stamp: Date;
  imgSrc?: string;
};

type PostComment = {
  _id: string;
  userPost: Types.ObjectId;
  user: User;
  commentContent: string;
  creationTimeStamp: Date;
};

type PostLike = {
  _id: string;
  userPost: Types.ObjectId;
  user: Types.ObjectId;
  creationTimeStamp: Date;
};
