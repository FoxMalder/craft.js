import React, { useCallback } from 'react';
import { useNode, useEditor } from '@craftjs/core';

export const CraftWrapper = React.forwardRef(
  ({ children, ...props }: any, ref: any) => {
    const { id } = useNode();
    const { connectors } = useEditor();

    // Important: ref must be memoized otherwise Slate goes insane
    const refCallback = useCallback((dom) => {
      ref.current = dom;
      connectors.connect(dom, id);
      connectors.drag(dom, id);
    }, []);

    return (
      <div {...props} ref={refCallback}>
        {children}
      </div>
    );
  }
);
