
type position =  'start' | 'end';

export enum ButtonTypeEnum  {
  DANGER='danger',
}


type ButtonType = 'danger' | 'success' | 'submit' |'warning';


export  interface ButtonProps{
    type?: ButtonType;
    btnType?:ButtonTypeEnum;
    text?: string;
    styles?: React.CSSProperties;
    styleClass?: string
    matIcon?: string
    iconPosition?: position;
}