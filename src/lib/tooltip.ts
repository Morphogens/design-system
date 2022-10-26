import tippy from 'tippy.js'
// import 'tippy.js/dist/tippy.css'
// import 'tippy.js/themes/light.css'
import type { Props } from 'tippy.js'

export function makeTooltipVideo(src) {
	const vid = document.createElement('video')
	vid.autoplay = true
	vid.muted = true
	vid.playsInline = true
	vid.loop = true
	vid.src = src
	vid.style.width = '200px'
	vid.style.height = '200px'
	vid.style.margin = '-4px -8px -10px -8px'
	return vid
}

export default function tooltip(node: HTMLElement, params?: Partial<Props>) {
	params = { theme: 'light', ...params }
	if (!tippy) return

	// Determine the title to show. We want to prefer
	// 	the custom content passed in first, then the
	// HTML title attribute then the aria-label
	// in that order.
	const custom = params?.content
	const title = node.title
	const label = node.getAttribute('aria-label')
	const content = (title ?? label).toString()

	if (!(title || label)) {
		return {}
	}

	// Let's make sure the "aria-label" attribute
	// is set so our element is accessible:
	// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
	if (!label) node.setAttribute('aria-label', content)

	// Clear out the HTML title attribute since
	// we don't want the default behavior of it
	// showing up on hover.
	node.title = ''

	// Support any of the Tippy props by forwarding all "params":
	// https://atomiks.github.io/tippyjs/v6/all-props/
	const tip = tippy(node, {
		content: custom ?? content,
		...params,
		onShow: () => (custom as any)?.play(),
	})

	return {
		// If the props change, let's update the Tippy instance:
		update: (newParams) => tip.setProps({ content, ...newParams }),
		// Clean up the Tippy instance on unmount:
		destroy: () => tip.destroy(),
	}
}
