import { CLIEngine } from 'eslint'
import { resolve } from 'path'

import * as PLUGIN from '../src/index'

const settings = {
  extensions: ['.brs'],
  useEslintrc: false,
  ...PLUGIN.configs.recommended
}

const cli = new CLIEngine(settings)
const formatter = cli.getFormatter('stylish')

describe('Plugin', () => {
  it(`Should ignore JavaScript files`, () => {
    const output = cli.executeOnFiles([resolve(__dirname, 'assets') + '/*.js'])

    console.log(formatter(output.results))

    expect(output).toBeTruthy()
  })
})
