/* eslint-disable import/no-relative-packages */

import * as base from './base/index.js'
import * as node from './node/index.js'
import * as react from './react/index.js'
import * as reactStylish from './react-stylish/index.js'
import * as reactWeb from './react-web/index.js'
import * as stylish from './stylish/index.js'
import * as typescript from './typescript/index.js'
import * as typescriptStrict from './typescript-strict/index.js'
import * as typescriptStylish from './typescript-stylish/index.js'

const ESLINT_CONFIG = [
  base.apply(),
  node.apply(),
  react.apply(),
  reactWeb.apply(),
  stylish.apply(),
  typescript.apply({ tsconfigRootDir: import.meta.dirname }),
  typescriptStrict.apply(),
  typescriptStylish.apply(),
  reactStylish.apply(),
]

export default ESLINT_CONFIG
