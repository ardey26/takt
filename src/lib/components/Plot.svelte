<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Chart, registerables } from 'chart.js';

	Chart.register(...registerables);

	type DataPoint = {
		label?: string;
		value: number;
	};

	export interface PlotProps {
		data: DataPoint[];
		type?: 'bar' | 'step';
		height?: number;
		class?: string;
	}

	let { 
		data = [],
		type = 'bar',
		height = 120,
		class: className 
	}: PlotProps = $props();

	let canvas: HTMLCanvasElement;
	let chart: Chart | null = null;

	const chartColors = {
		matte: 'rgba(51, 51, 51, 0.7)',
		matteSolid: 'rgba(51, 51, 51, 1)',
		positive: 'rgba(51, 51, 51, 0.6)',
		negative: 'rgba(239, 68, 68, 0.6)',
		gridLine: 'rgba(51, 51, 51, 0.1)',
	};

	function createChart() {
		if (!canvas) return;

		if (chart) {
			chart.destroy();
		}

		const labels = data.map((d, i) => d.label || `${i + 1}`);
		const values = data.map(d => d.value);
		
		// Background colors based on positive/negative values
		const backgroundColors = values.map(v => 
			v < 0 ? chartColors.negative : chartColors.positive
		);

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		if (type === 'bar') {
			chart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels,
					datasets: [{
						data: values,
						backgroundColor: backgroundColors,
						borderRadius: 2,
						borderSkipped: false,
					}]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: { display: false },
						tooltip: {
							backgroundColor: chartColors.matteSolid,
							titleFont: { family: 'monospace', size: 10 },
							bodyFont: { family: 'monospace', size: 10 },
							padding: 8,
							cornerRadius: 2,
						}
					},
					scales: {
						x: {
							grid: { display: false },
							ticks: {
								font: { family: 'monospace', size: 8 },
								color: 'rgba(51, 51, 51, 0.4)',
							},
							border: { display: false }
						},
						y: {
							grid: { 
								color: chartColors.gridLine,
							},
							ticks: {
								font: { family: 'monospace', size: 8 },
								color: 'rgba(51, 51, 51, 0.4)',
							},
							border: { display: false }
						}
					}
				}
			});
		} else {
			// Step/line chart
			chart = new Chart(ctx, {
				type: 'line',
				data: {
					labels,
					datasets: [{
						data: values,
						borderColor: chartColors.matte,
						backgroundColor: 'rgba(51, 51, 51, 0.05)',
						borderWidth: 2,
						fill: true,
						stepped: 'before',
						tension: 0,
						pointRadius: 0,
						pointHoverRadius: 4,
						pointHoverBackgroundColor: chartColors.matteSolid,
					}]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: { display: false },
						tooltip: {
							backgroundColor: chartColors.matteSolid,
							titleFont: { family: 'monospace', size: 10 },
							bodyFont: { family: 'monospace', size: 10 },
							padding: 8,
							cornerRadius: 2,
						}
					},
					scales: {
						x: {
							grid: { display: false },
							ticks: {
								font: { family: 'monospace', size: 8 },
								color: 'rgba(51, 51, 51, 0.4)',
							},
							border: { display: false }
						},
						y: {
							grid: { 
								color: chartColors.gridLine,
							},
							ticks: {
								font: { family: 'monospace', size: 8 },
								color: 'rgba(51, 51, 51, 0.4)',
							},
							border: { display: false }
						}
					}
				}
			});
		}
	}

	onMount(() => {
		createChart();
	});

	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});

	$effect(() => {
		// Recreate chart when data or type changes
		data;
		type;
		if (canvas) {
			createChart();
		}
	});
</script>

<div 
	class="bg-bone/50 border border-stone-300 rounded-sm p-4 {className || ''}"
	style="height: {height}px"
>
	<canvas bind:this={canvas}></canvas>
</div>
