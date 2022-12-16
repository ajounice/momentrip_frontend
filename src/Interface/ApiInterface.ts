export type WishType = "TOUR" | "FORM";

/**
 * get
 */

export interface Login{
  accessToken : string;
}

export interface SignUp{
  email : string;
  password : string;
  nickname : string;
  name : string;
  image : string;
  id : number;
  type : boolean;
}

export interface MyInfo{
  id : number;
  email : string;
  nickname : string;
  password : string;
  name : string;
  intro : string;
  type : boolean;
  image : string;
}

export interface OtherInfo{
  nickname : string;
  name : string;
  intro : string;
  type : boolean;
  image : string;
}

export interface TourInfo{
  id : number;
  name : string;
  place : string;
  image : string;
  price : number;
  viewCount : number;
}

export interface Tag{
  id : number;
  name : string;
}

export interface Form{
  id : number;
  content : string;
  title : string;
  thumbnail : string;
  video : string;
  viewCount : number;
  tags: Tag[];
  user : MyInfo;
}

export interface SpecificForm{
  id : number;
  content : string;
  title : string;
  thumbnail : string;
  video : string;
  viewCount : number;
  tags : Tag[];
  user : MyInfo;
  tourInfo : TourInfo;
}

export interface FormComment{
  id : number;
  content : string;
  form : Form;
  user : MyInfo;
}

export interface Wish{
  id : number;
  type: WishType;
  targetId : number;
}

export interface WishFolder{
  id : number;
  name : string;
  wishlists : Wish[];
}

/**
 * set
 */

export interface SetSF{
  content : string;
  tag : Tag[];
  site : string;
  video : string;
}
