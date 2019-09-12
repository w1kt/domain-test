import React from 'react';
import ComponentPreview from '../../ComponentPreview/components/ComponentPreview';
import HCard from '../../HCard/components/HCard';
import { HCardPreviewProps } from '../containers/HCardPreview';

/**
 *  Created a preview component and gives it a hCard as a subject.
 *  The hCard is fed its props from the form state in the store.
 */
const HCardPreview: React.FC<HCardPreviewProps> = props => {
  return (
    <ComponentPreview name="hCard Preview">
      <HCard {...props} />
    </ComponentPreview>
  );
};

export default React.memo(HCardPreview);
