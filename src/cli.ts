import yargs from 'yargs'
import { check } from './commands/check'
import { usage } from './commands/usage'

// eslint-disable-next-line no-unused-expressions
yargs
  .scriptName('taze')
  .usage('$0 [args]')
  .command(
    'usage',
    'List dependencies versions usage across packages',
    (args) => {
      args
        .option('cwd', {
          alias: 'C',
          default: '',
          type: 'string',
          describe: 'specify the current working directory',
        })
        .option('recursive', {
          alias: 'r',
          default: false,
          type: 'boolean',
          describe: 'recursively search for package.json in subdirectories',
        })
        // TODO:
        .option('detail', {
          alias: 'a',
          type: 'boolean',
          default: false,
          describe: 'show more info',
        })
        // TODO:
        .option('filter', {
          type: 'string',
          describe: 'filter rules to restrict dependencies to check updates',
          array: true,
        })
        .option('ignore', {
          type: 'string',
          describe: 'ignore rules to restrict dependencies to not check updates',
        })
        // TODO:
        .option('dev', {
          alias: 'D',
          default: false,
          type: 'boolean',
          describe: 'update only for devDependencies',
        })
        // TODO:
        .option('prod', {
          alias: 'P',
          default: false,
          type: 'boolean',
          describe: 'update only for dependencies',
        })
    },
    usage,
  )
  .command(
    '* [mode]',
    'Keeps your deps fresh',
    (args) => {
      args
        .positional('mode', {
          default: 'default',
          type: 'string',
          describe: 'the mode how version range resolves, can be "default", "major", "minor", "latest" or "newest"',
        })
        .option('cwd', {
          alias: 'C',
          default: '',
          type: 'string',
          describe: 'specify the current working directory',
        })
        .option('recursive', {
          alias: 'r',
          default: false,
          type: 'boolean',
          describe: 'recursively search for package.json in subdirectories',
        })
        .option('write', {
          alias: 'w',
          default: false,
          type: 'boolean',
          describe: 'write to package.json',
        })
        .option('usage', {
          type: 'boolean',
          default: false,
          describe: 'list usages of dependencies accross packages',
        })
        // TODO:
        .option('filter', {
          type: 'string',
          describe: 'filter rules to restrict dependencies to check updates',
          array: true,
        })
        .option('ignore', {
          type: 'string',
          describe: 'ignore rules to restrict dependencies to not check updates',
        })
        // TODO:
        .option('prompt', {
          alias: 'p',
          default: false,
          type: 'boolean',
          describe: 'prompt whether write to files after update checking',
        })
        // TODO:
        .option('dev', {
          alias: 'D',
          default: false,
          type: 'boolean',
          describe: 'update only for devDependencies',
        })
        // TODO:
        .option('prod', {
          alias: 'P',
          default: false,
          type: 'boolean',
          describe: 'update only for dependencies',
        })
        // TODO:
        .option('outputRange', {
          default: 'preseve',
          type: 'string',
          describe: 'output version range, can be "fixed", "major", "minor" or "patch"',
        })
        // TODO:
        .option('guard', {
          default: false,
          type: 'boolean',
          describe: 'exit with non-zero code if there are existing upgrades',
        })
    },
    check,
  )
  .help()
  .argv
