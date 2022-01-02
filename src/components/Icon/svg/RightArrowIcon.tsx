import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function RightArrowIcon({
  width = 22,
  height = 30,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 492.432 492.432" width={width} height={height} {...props}>
      <path
        fill="white"
        d="M142.238 492.432c-9.79 0-19.588-3.736-27.05-11.209-14.945-14.934-14.945-39.162 0-54.098l180.9-180.909-180.9-180.91c-14.945-14.935-14.945-39.163 0-54.098 14.926-14.944 39.172-14.944 54.098 0l207.96 207.958c14.943 14.935 14.943 39.164 0 54.1l-207.96 207.957c-7.462 7.474-17.26 11.209-27.048 11.209z"
      />
    </svg>
  );
}

const MemoRightArrowIcon = React.memo(RightArrowIcon);
export default MemoRightArrowIcon;
