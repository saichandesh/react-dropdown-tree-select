import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import ReactDropdownTreeSelect from '../../src'

import data from '../../docs/demo-data.json'

const onChange = (curNode, selectedNodes) => { console.log('onChange::', curNode, selectedNodes) }
const onAction = ({ action, node }) => { console.log(`onAction:: [${action}]`, node) }
const onNodeToggle = (curNode) => { console.log('onNodeToggle::', curNode) }

storiesOf('React Dropdown Tree Select', module)
  .add('Vanilla styles', () => (
    <ReactDropdownTreeSelect
      data={data}
      onChange={onChange}
      onAction={onAction}
      onNodeToggle={onNodeToggle}
      className="mdl-demo"
    />
  ))
  .add('Styled With Bootstrap', () => (
    <ReactDropdownTreeSelect
      data={data}
      onChange={onChange}
      onAction={onAction}
      onNodeToggle={onNodeToggle}
      className="mdl-demo"
    />
  ));
