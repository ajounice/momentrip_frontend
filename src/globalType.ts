export type Size = 'sm' | 'md' | 'lg';
export type StyleType = 'line' | 'full';
export type ButtonType = 'button' | 'submit' | 'reset';
export type FontWeight = 'light' | 'normal' | 'bold';

export interface IButton{
  text : string;
  buttonType : ButtonType;
  styleType: StyleType;
  color : string;
  size : Size;
  fontWeight : FontWeight;
  disabled : boolean;
}
