
import { IconProps } from './index';

export interface CreditCardIconProps extends IconProps { }

const CreditCardIcon = ({ color, width, height, additionalCss }: CreditCardIconProps) => {
  return (
    <svg
      className={`${color ? color : 'fill-blue-500'} ${additionalCss}`}
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox='0 0 576 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M96 368C96 359.2 103.2 352 112 352H176C184.8 352 192 359.2 192 368C192 376.8 184.8 384 176 384H112C103.2 384 96 376.8 96 368zM224 368C224 359.2 231.2 352 240 352H368C376.8 352 384 359.2 384 368C384 376.8 376.8 384 368 384H240C231.2 384 224 376.8 224 368zM0 96C0 60.65 28.65 32 64 32H512C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96zM32 96V128H544V96C544 78.33 529.7 64 512 64H64C46.33 64 32 78.33 32 96zM32 224H544V160H32V224zM32 256V416C32 433.7 46.33 448 64 448H512C529.7 448 544 433.7 544 416V256H32z' />
    </svg>
  );
};

export default CreditCardIcon;