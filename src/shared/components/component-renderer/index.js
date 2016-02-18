import React, { Component } from 'react';
import Paragraph from './paragraph';
import Link from './link';
import Strong from './strong';
import Title1 from './title1';
import Title2 from './title2';
import Title3 from './title3';
import Content from '../content';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';

const componentIndex = {
  Paragraph: Paragraph,
  Link: Link,
  Strong: Strong,
  Content: Content,
  Title1: Title1,
  Title2: Title2,
  Title3: Title3
};

export default class ComponentRenderer extends Component {
  static propTypes = {
    data: React.PropTypes.shape({
      type: React.PropTypes.string
    }).isRequired
  };

  build (data) {
    const componentName = data.type;
    const Component = componentIndex[componentName];
    const componentChildren = data.props.children;

    let text = null;
    let childNodes = [];

    if (isArray(componentChildren)) {
      childNodes = componentChildren.map((child, index) => {
        if (child.type && componentIndex[child.type]) {
          child.props.key = index;
          return this.build(child);
        }
        return child;
      });
    } else if (React.isValidElement(componentChildren)) {
      childNodes = componentChildren;
    } else if (isString(componentChildren)) {
      text = componentChildren;
    }

    return React.createElement(Component, data.props, text || childNodes);
  }

  render () {
    return this.build(this.props.data);
  }
}
