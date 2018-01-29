import * as storybook from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  showAddonPanel: false
})

storybook.configure(() => require('./stories'), module)
