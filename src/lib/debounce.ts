export default function debounce(
	func: (...args: unknown[]) => void,
	wait: number,
	immediate = false
) {
	let timeout: NodeJS.Timeout | null = null
	return function (...args: unknown[]) {
		function later() {
			timeout = null
			if (!immediate) func(args)
		}
		const callNow = immediate && !timeout
		if (timeout) {
			clearTimeout(timeout)
		}
		timeout = setTimeout(later, wait)
		if (callNow) func(args)
	}
}
