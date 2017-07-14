import React from 'react';

// Components
import { Clipboard, Crosshair, UserCheck, Package, UploadClouds } from 'react-feather';

class CategoryIcon extends React.PureComponent {
  render() {
    switch(this.props.category.toLowerCase()) {
      case 'deployments':
        return <UploadClouds />;
      case 'testing':
        return <Crosshair />;
      case 'checks':
        return <UserCheck />;
      case 'builds':
        return <Package />;
      default:
        return <Clipboard />;
    }
  }
}

export default CategoryIcon;
