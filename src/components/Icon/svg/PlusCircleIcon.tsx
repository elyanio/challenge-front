import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function PlusCircleIcon({
  width = 40,
  height = 30,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 50" width={width} height={height} {...props}>
      <path
        fill="black"
        d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm-1 9v11H13v2h11v11h2V26h11v-2H26V13h-2z"
      />
    </svg>
  );
}

const MemoPlusCircleIcon = React.memo(PlusCircleIcon);
export default MemoPlusCircleIcon;
