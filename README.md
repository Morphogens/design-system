# Gizmo

This is our design system!

## Adding Gizmo to your project

Add it to package.json like this:

```
{
    "dependencies": {
        "design-system": "git://github.com/Morphogens/design-system.git#d2ac701fe2b7ac43bc4b39b259882b90691948f2"
    }
}
```

where `d2ac701fe2b7ac43bc4b39b259882b90691948f2` is any commit hash. Then ask npm to install it:

```
npm install
```

Next, update tailwind.config.cjs to use the Tailwind config from the design system:

```
const designSystemConfig = require('design-system/package/tailwind/config.cjs')

module.exports = designSystemConfig
```

`designSystemConfig` is just a regular JS object, so all the normal JS approaches are available for customizing it. For example, using the spread operator:

```
const designSystemConfig = require('design-system/package/tailwind/config.cjs')

module.exports = {
    // By default, accept all the design system Tailwind config options.
    ...designSystemConfig,

    // Disable Tailwind Preflight, but use the design system's settings for all of Tailwind's other core plugins.
    corePlugins: {
        ...designSystemConfig.corePlugins,
		preflight: false,
	},
}
```

## Importing Gizmo

Import it like this:

```
<script lang="ts">
import Switch from 'design-system/package/Switch.v1.svelte'
</script>

<Switch />
```

## Making updates to Gizmo

Start the development server with

```bash
npm run dev
```

When you change a component, make a copy and increment the version number. `Switch.v1.svelte` becomes `Switch.v2.svelte`.

When you're done, run `npm run build` and push your changes to GitHub.

## Updating the version of Gizmo your project is using

In package.json, update the commit hash you're pointing to, then run `npm install`.
