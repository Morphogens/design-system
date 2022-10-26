import tippy from 'tippy.js'
import type { Props } from 'tippy.js'

injectTippyCss()

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

function injectTippyCss() {
	if (typeof document === 'undefined') {
		return
	}

	const tippyCss = `.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}`
	document.head.innerHTML += `<style type="text/css">
${tippyCss}
</style>`

	const lightTheme = `.tippy-box[data-theme~=light]{color:#26323d;box-shadow:0 0 20px 4px rgba(154,161,177,.15),0 4px 80px -8px rgba(36,40,47,.25),0 4px 4px -2px rgba(91,94,105,.15);background-color:#fff}.tippy-box[data-theme~=light][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.tippy-box[data-theme~=light][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff}.tippy-box[data-theme~=light][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.tippy-box[data-theme~=light][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff}.tippy-box[data-theme~=light]>.tippy-backdrop{background-color:#fff}.tippy-box[data-theme~=light]>.tippy-svg-arrow{fill:#fff}`
	document.head.innerHTML += `<style type="text/css">
${lightTheme}
</style>`
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
