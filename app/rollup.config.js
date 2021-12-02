import replace from '@rollup/plugin-replace'
import { config } from 'dotenv'

const production = !process.env.ROLLUP_WATCH

export default {
  plugins: [
    replace({ FOO: 'bar',
      process: JSON.stringify({
        env: {
          isProd: production,
          ...config().parsed
        }
      })
    })
  ]
}
