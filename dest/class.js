function Component(props, context, updater) {
  try {
    console.group("Component")
    {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }
  } finally {
    console.groupEnd("Component");
  }
}

Component.prototype.setState = function (partialState, callback) {
  try {
    console.group("setState")
    {
      invariant(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    }
  } finally {
    console.groupEnd("setState");
  }
};