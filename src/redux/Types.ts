export interface EmailTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  email: string;
}

export interface BankAccountTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  back_account: string | number;
}

export interface BankCartTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  back_cart: string | number;
}

export interface PhoneUserTypes {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  user: string;
  phone_number: string | number;
}
