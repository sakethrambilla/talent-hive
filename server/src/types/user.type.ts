export type userType = {
  email: string;
  password_hash: string;
  username: string;
  phone_number: string;
  profile_id: string;

  is_user_active: boolean;
  is_email_verified: boolean;
  is_phone_verified: boolean;

  first_name: string;
  last_name: string;
  profile_picture_url: string;
  gender: string;
  date_of_birth: Date;
  createdAt: Date;
  updatedAt: Date;
};
