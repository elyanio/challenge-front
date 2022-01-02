import MemoLightBulbIcon from './svg/LightBulbIcon';
import MemoPlusCircleIcon from './svg/PlusCircleIcon';
import MemoRightArrowIcon from './svg/RightArrowIcon';
import TrashIcon from './svg/TrashIcon';

export const icons = {
  trash: TrashIcon,
  lightBulb: MemoLightBulbIcon,
  plusCircle: MemoPlusCircleIcon,
  rightArrow: MemoRightArrowIcon,
};

export type IconNames = keyof typeof icons;
