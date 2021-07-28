import React, { ReactNode } from 'react';
import { PerfectScrollbar } from '../ScrollBar';

type Props = {
  children: ReactNode;
  showScrollbar: boolean;
};

export const ScrollbarWrapper = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { children, showScrollbar } = props;

    return showScrollbar ? (
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <div className="box-border h-screen" ref={ref}>
          {children}
        </div>
      </PerfectScrollbar>
    ) : (
      <div className="box-border" ref={ref}>
        {children}
      </div>
    );
  }
);
