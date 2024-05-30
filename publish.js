
import {ghpages} from 'gh-pages';
/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish('dist', {
    branch: 'main',
    repo: 'https://rubenochando.github.io/react-tic-tac-toe/'
  }, callback);