import React from 'react';
import theme from '../../../style/theme';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function TrashIcon({
  width = 30,
  height = 30,
  fill = theme.palette.backgrounds.red,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" width={width} height={height} {...props}>
      <path
        d="M35.644 94.969a11.438 11.438 0 01-11.455-10.488l-3.551-49.724a6.472 6.472 0 01-1.411-1.426 6.508 6.508 0 01-.891-5.859l.347-1.042a13.685 13.685 0 0110.424-9.15 17.388 17.388 0 018.618-3.183c1.322-2.981 4.31-5.065 7.775-5.065h13c3.465 0 6.453 2.084 7.775 5.065 3.107.27 6.085 1.37 8.618 3.183a13.69 13.69 0 0110.425 9.15l.349 1.047a6.509 6.509 0 01-.895 5.857 6.45 6.45 0 01-1.409 1.423L79.82 84.373c-.535 6.077-5.461 10.596-11.464 10.596H35.644z"
        opacity={0.35}
      />
      <path
        fill="white"
        d="M33.644 92.969a11.438 11.438 0 01-11.455-10.488l-3.551-49.724a6.472 6.472 0 01-1.411-1.426 6.508 6.508 0 01-.891-5.859l.347-1.042a13.685 13.685 0 0110.424-9.15 17.388 17.388 0 018.618-3.183c1.322-2.981 4.31-5.065 7.775-5.065h13c3.465 0 6.453 2.084 7.775 5.065 3.107.27 6.085 1.37 8.618 3.183a13.69 13.69 0 0110.425 9.15l.349 1.047a6.509 6.509 0 01-.895 5.857 6.45 6.45 0 01-1.409 1.423L77.82 82.373c-.535 6.077-5.461 10.596-11.464 10.596H33.644z"
      />
      <path
        fill={fill}
        d="M60 21.031H40v-5.5c0-1.93 1.57-3.5 3.5-3.5h13c1.93 0 3.5 1.57 3.5 3.5v5.5zm-17-3h14v-2.5a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v2.5z"
      />
      <path
        fill={fill}
        d="M77.5 27.531l-.349-1.046a7.245 7.245 0 00-6.874-4.954 10.898 10.898 0 00-7.509-3H37.231a10.897 10.897 0 00-7.509 3 7.247 7.247 0 00-6.874 4.954l-.348 1.046h55z"
      />
      <path
        fill={fill}
        d="M24.795 26l3.887 54.445A4.997 4.997 0 0033.659 85h32.683a4.996 4.996 0 004.976-4.555L75.205 26h-50.41z"
      />
      <path
        fill="white"
        d="M37.046 80.964a1.5 1.5 0 01-1.498-1.437l-1.897-44.845a1.5 1.5 0 112.997-.127L38.546 79.4a1.5 1.5 0 01-1.435 1.562l-.065.002zM45.691 80.964a1.501 1.501 0 01-1.5-1.479L43.56 34.64a1.5 1.5 0 011.479-1.521c.781-.016 1.509.65 1.521 1.479l.632 44.845a1.5 1.5 0 01-1.479 1.521h-.022zM54.337 80.964h-.021a1.5 1.5 0 01-1.479-1.521l.632-44.845a1.484 1.484 0 011.521-1.479 1.5 1.5 0 011.479 1.521l-.632 44.845a1.501 1.501 0 01-1.5 1.479zM62.982 80.964l-.064-.001a1.5 1.5 0 01-1.435-1.562l1.897-44.845a1.5 1.5 0 112.997.127L64.48 79.528a1.501 1.501 0 01-1.498 1.436z"
      />
      <path
        fill="white"
        d="M66.356 87.969H33.644a6.465 6.465 0 01-6.475-5.927l-3.785-53.01H22.5a1.501 1.501 0 01-1.423-1.974l.349-1.046a8.73 8.73 0 017.695-5.959 12.343 12.343 0 018.11-3.021h25.537c2.999 0 5.856 1.068 8.11 3.021a8.732 8.732 0 017.695 5.959l.349 1.046a1.497 1.497 0 01-1.423 1.974h-.884l-3.783 52.985c-.299 3.404-3.083 5.952-6.476 5.952zM24.674 26.031h.106a1.5 1.5 0 011.496 1.393l3.883 54.378a3.476 3.476 0 003.484 3.166h32.713a3.48 3.48 0 003.486-3.191l3.881-54.354a1.5 1.5 0 011.496-1.393h.106a5.738 5.738 0 00-5.048-3c-.385 0-.755-.148-1.034-.413a9.362 9.362 0 00-6.476-2.587H37.231a9.362 9.362 0 00-6.476 2.587 1.501 1.501 0 01-1.034.413 5.744 5.744 0 00-5.047 3.001z"
      />
    </svg>
  );
}

const MemoTrashIcon = React.memo(TrashIcon);
export default MemoTrashIcon;
