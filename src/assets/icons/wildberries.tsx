import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'30.468506'}
    viewBox={'0 0 30.4688 30.4685'}
    width={'30.468750'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <defs>
      <linearGradient
        gradientUnits={'userSpaceOnUse'}
        id={'paint_linear_391_914_0'}
        x1={'-0.000004'}
        x2={'30.468756'}
        y1={'30.468500'}
        y2={'0.000013'}
      >
        <stop stopColor={'#B52181'} />
        <stop offset={'1.000000'} stopColor={'#50327C'} />
      </linearGradient>
    </defs>
    <rect
      fill={'url(#paint_linear_391_914_0)'}
      fillOpacity={'1.000000'}
      height={'30.468506'}
      id={'Rectangle 59'}
      rx={'5.000000'}
      width={'30.468506'}
    />
    <path
      d={
        'M28.2183 17.749C28.2183 18.6963 27.8804 19.4834 27.1909 20.1104C26.5015 20.7373 25.6899 21.0574 24.6899 21.0574L19.6738 21.0574L19.6738 9.49146L24.3247 9.49146C25.2847 9.49146 26.0952 9.81152 26.7578 10.4119C27.4341 11.0256 27.7588 11.7859 27.7588 12.6931C27.7588 13.707 27.353 14.4807 26.5688 15.0544C27.5962 15.5879 28.2183 16.5483 28.2183 17.749ZM21.6069 11.2791L21.6069 14.3206L24.3379 14.3206C25.1899 14.3206 25.8389 13.6536 25.8389 12.7998C25.8389 11.946 25.1899 11.2791 24.3379 11.2791L21.6069 11.2791ZM24.7031 19.2698C25.5952 19.2698 26.2988 18.5627 26.2988 17.6558C26.2988 16.7485 25.5952 16.0415 24.7031 16.0415L21.6069 16.0415L21.6069 19.2832L24.7031 19.2832L24.7031 19.2698Z'
      }
      fill={'#FFFFFF'}
      fillOpacity={'1.000000'}
      fillRule={'nonzero'}
      id={'Vector'}
    />
    <path
      d={
        'M5.39062 20.9854L2.25098 9.41187L4.31055 9.41187L6.72266 18.301L9.30762 9.41113L11.2275 9.41187L13.8218 18.3481L16.2446 9.41406L18.3042 9.41113L15.1631 20.9834L12.7764 20.981L10.2686 12.3379L7.7583 20.9832L5.39062 20.9854Z'
      }
      fill={'#FFFFFF'}
      fillOpacity={'1.000000'}
      fillRule={'nonzero'}
      id={'Vector'}
    />
  </svg>
)

export default memo(forwardRef(SvgComponent))
