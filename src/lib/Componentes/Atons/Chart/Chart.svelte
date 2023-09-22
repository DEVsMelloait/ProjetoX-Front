<script context="module">
	import Chart from 'chart.js/auto'
</script>

<script>
	/**
     * @type {any}
     */
	 export let config
	
	const handleChart = (/** @type {HTMLCanvasElement} */ element, /** @type {any} */ config) => {
		let theChart = new Chart(element, config)
		
		return {
			/**
             * @param {any} config
             */
			update(config) {
				theChart.destroy()
				theChart = new Chart(element, config)
			},
			destroy() {
				theChart.destroy()
			}
		}
	}
</script>

<canvas use:handleChart={config} />