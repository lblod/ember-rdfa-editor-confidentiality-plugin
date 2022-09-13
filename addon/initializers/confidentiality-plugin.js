import ConfidentialityPlugin from '../confidentiality-plugin';

function pluginFactory(plugin) {
  return {
    create: (initializers) => {
      const pluginInstance = new plugin();
      Object.assign(pluginInstance, initializers);
      return pluginInstance;
    },
  };
}

export function initialize(application) {
  application.register(
    'plugin:confidentiality-plugin',
    pluginFactory(ConfidentialityPlugin),
    {
      singleton: false,
    }
  );
}

export default {
  initialize,
};
