import ScrollBar from 'react-perfect-scrollbar';

export const PerfectScrollbar = ({ children, ...props }) => (
  <ScrollBar
    options={{ suppressScrollY: true }}
    containerRef={ref => {
      if (ref) {
        // https://github.com/mdbootstrap/perfect-scrollbar/pull/934/files
        // injecting a fix for this issue
        // @ts-ignore
        ref._getBoundingClientRect = ref.getBoundingClientRect;

        // @ts-ignore
        ref.getBoundingClientRect = () => {
          // @ts-ignore
          const original = ref._getBoundingClientRect();

          return {
            bottom: original.bottom,
            left: original.left,
            right: original.right,
            top: original.top,
            width: Math.round(original.width),
            _width: original.width,
            height: Math.round(original.height),
            _height: original.height,
            x: original.x,
            y: original.y
          };
        };
      }
    }}
    {...props}
  >
    {children}
  </ScrollBar>
);
