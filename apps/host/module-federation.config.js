module.exports = {
  name: 'host',
  remotes: ['about', 'cart', 'shop'],
  shared: (packageName) => {
    /**
     * By default, NX shares all the dependencies, this excludes number-flow
     */

    if (packageName === '@number-flow/react') return false;

    if (packageName === '@react-module-federation/shared-components')
      return false;
  },
};
