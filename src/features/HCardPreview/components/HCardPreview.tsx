import React from 'react';
import ComponentPreview from '../../ComponentPreview/components/ComponentPreview';
import HCard from '../../HCard/components/HCard';
import { HCardPreviewProps } from '../containers/HCardPreview';

const HCardPreview: React.FC<HCardPreviewProps> = props => {
  return (
    <ComponentPreview name="hCard Preview">
      <HCard {...props} />
    </ComponentPreview>
  );
};

export default React.memo(HCardPreview);
