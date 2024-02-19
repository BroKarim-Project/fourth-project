import React from 'react';
import classNames from 'classname';

const SectionContainer = ({ children, className }) => (
  <>
    <div className={classNames('overflow-hidden container mx-auto mb-2 py-10', className)}>
      <div className="px-6 sm:px-2 mx-auto">{children}</div>
    </div>
  </>
);

export default SectionContainer;
