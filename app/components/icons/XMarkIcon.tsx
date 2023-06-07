
import { IconProps } from './index';

export interface XMarkIconProps extends IconProps { }

const XMarkIcon = ({ color, width, height, additionalCss }: XMarkIconProps) => {
  return (
    <svg
      className={`${color ? color : 'fill-blue-500'} ${additionalCss}`}
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox='0 0 320 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z' />
    </svg>
  );
};

export default XMarkIcon;