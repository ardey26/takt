<script lang="ts">
	import Rocker from '$lib/components/Rocker.svelte';
	import Meter from '$lib/components/Meter.svelte';
	import Surface from '$lib/components/Surface.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';
	import PartsList from '$lib/components/PartsList.svelte';
	import type { Part } from '$lib/components/PartsList.svelte';

	const parts: Part[] = [
		{
			id: 'meter',
			name: 'Meter',
			desc: 'Visual progress indicator',
			importSnippet: "import { Meter } from 'takt';",
			usageSnippet: '<Meter value={75} label="Progress" />'
		},
		{
			id: 'rocker',
			name: 'Rocker',
			desc: 'Segmented switch control',
			importSnippet: "import { Rocker } from 'takt';",
			usageSnippet: '<Rocker options={opts} bind:value={selected} />'
		},
		{
			id: 'surface',
			name: 'Surface',
			desc: 'Paper container element',
			importSnippet: "import { Surface } from 'takt';",
			usageSnippet: '<Surface variant="paper">Content</Surface>'
		}
	];

	const QUOTES = [
		"Good design is innovative. The possibilities for innovation are not exhausted.",
		"Good design makes a product useful. A product is bought to be used.",
		"Good design is aesthetic. The aesthetic quality of a product is integral to its usefulness.",
		"Good design makes a product understandable. It clarifies the structure.",
		"Good design is unobtrusive. Products fulfilling a purpose are like tools.",
		"Good design is honest. It does not attempt to manipulate the consumer.",
		"Good design is long-lasting. It avoids being fashionable.",
		"Good design is thorough down to the last detail. Nothing must be arbitrary.",
		"Good design is environmentally friendly. It conserves resources.",
		"Good design is as little design as possible. Less, but better."
	];

	const CODE_SAMPLES = [
		"const sum = (a, b) => a + b;",
		"function fibonacci(n) { return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2); }",
		"const arr = [1, 2, 3].map(x => x * 2);",
		"export default function handler(req, res) { res.status(200).json({ ok: true }); }",
		"const [state, setState] = useState(0);",
		"async function fetchData() { const res = await fetch(url); return res.json(); }"
	];

	let timeOption = $state('30');
	let modeOption = $state('words');
	let isRunning = $state(false);
	let isFinished = $state(false);
	let showResults = $state(false);

	let text = $state('');
	let currentIndex = $state(0);
	let errors = $state<Set<number>>(new Set());
	let correctCount = $state(0);
	let startTime = $state(0);
	let timeRemaining = $state(100);
	let wpm = $state(0);
	let accuracy = $state(100);

	let timerInterval: ReturnType<typeof setInterval> | null = null;
	let paperElement: HTMLDivElement;

	const timeOptions = [
		{ value: '15', label: '15s' },
		{ value: '30', label: '30s' },
		{ value: '60', label: '60s' }
	];

	const modeOptions = [
		{ value: 'words', label: 'Words' },
		{ value: 'code', label: 'Code' }
	];

	function generateText() {
		const source = modeOption === 'code' ? CODE_SAMPLES : QUOTES;
		let result = '';
		while (result.length < 500) {
			const randomIndex = Math.floor(Math.random() * source.length);
			result += source[randomIndex] + ' ';
		}
		return result.trim();
	}

	function resetTest() {
		if (timerInterval) clearInterval(timerInterval);
		text = generateText();
		currentIndex = 0;
		errors = new Set();
		correctCount = 0;
		isRunning = false;
		isFinished = false;
		showResults = false;
		timeRemaining = 100;
		wpm = 0;
		accuracy = 100;
		startTime = 0;
		setTimeout(() => paperElement?.focus(), 50);
	}

	function startTest() {
		if (isRunning) return;
		isRunning = true;
		startTime = Date.now();
		const duration = parseInt(timeOption) * 1000;
		const startTimeMs = Date.now();

		timerInterval = setInterval(() => {
			const elapsed = Date.now() - startTimeMs;
			const remaining = Math.max(0, 1 - elapsed / duration);
			timeRemaining = remaining * 100;

			if (remaining <= 0) {
				endTest();
			}
		}, 50);
	}

	function endTest() {
		if (timerInterval) clearInterval(timerInterval);
		isRunning = false;
		isFinished = true;
		timeRemaining = 0;

		const elapsedMinutes = (Date.now() - startTime) / 60000;
		const wordsTyped = correctCount / 5;
		wpm = Math.round(wordsTyped / elapsedMinutes) || 0;
		accuracy = currentIndex > 0 ? Math.round((correctCount / currentIndex) * 100) : 100;

		setTimeout(() => {
			showResults = true;
		}, 300);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (isFinished) return;
		if (e.key === 'Tab' || e.key === 'Escape') return;
		e.preventDefault();

		if (!isRunning && e.key.length === 1) {
			startTest();
		}

		if (e.key === 'Backspace') {
			if (currentIndex > 0) {
				currentIndex--;
				if (errors.has(currentIndex)) {
					errors.delete(currentIndex);
					errors = new Set(errors);
				} else {
					correctCount = Math.max(0, correctCount - 1);
				}
			}
			return;
		}

		if (e.key.length === 1 && currentIndex < text.length) {
			const expected = text[currentIndex];
			if (e.key === expected) {
				correctCount++;
			} else {
				errors.add(currentIndex);
				errors = new Set(errors);
			}
			currentIndex++;
			accuracy = currentIndex > 0 ? Math.round((correctCount / currentIndex) * 100) : 100;

			if (currentIndex >= text.length) {
				endTest();
			}
		}
	}

	$effect(() => {
		text = generateText();
	});

	$effect(() => {
		modeOption;
		timeOption;
		if (!isRunning) {
			resetTest();
		}
	});
</script>

<svelte:head>
	<title>Takt · Showroom 04: The Teletype</title>
	<meta name="description" content="Mechanical typing speed test inspired by Dieter Rams principles." />
</svelte:head>

<section class="min-h-screen flex flex-col lg:flex-row">
	<main class="flex-1 chassis p-4 sm:p-6">
		<header class="mb-6">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
				Showroom 04
			</p>
			<h1 class="font-mono text-xl font-bold tracking-tight text-matte">
				The Teletype
			</h1>
		</header>

		<div class="mb-6 flex flex-wrap items-center gap-4">
			<div class="flex items-center gap-2">
				<span class="font-mono text-[9px] tracking-[0.2em] text-matte/50 uppercase">Time</span>
				<Rocker options={timeOptions} bind:value={timeOption} size="sm" />
			</div>
			<div class="flex items-center gap-2">
				<span class="font-mono text-[9px] tracking-[0.2em] text-matte/50 uppercase">Mode</span>
				<Rocker options={modeOptions} bind:value={modeOption} size="sm" />
			</div>
			<div class="flex-1"></div>
			<div class="flex items-center gap-6">
				<Meter value={accuracy} label="Accuracy" variant="normal" />
				<Meter value={timeRemaining} label="Timer" variant="heat" />
			</div>
		</div>

		<Surface variant="paper" class="p-6 sm:p-8 min-h-[300px] relative">
			<div
				bind:this={paperElement}
				tabindex={0}
				onkeydown={handleKeydown}
				class="font-mono text-xl sm:text-2xl leading-relaxed tracking-wide focus:outline-none cursor-text select-none"
				role="textbox"
				aria-label="Typing area"
			>
				{#each text.split('') as char, i}
					<span class="relative inline">
						{#if i === currentIndex}
							<span class="absolute inset-0 bg-signal -mx-px px-px"></span>
						{/if}
						<span class={
							i < currentIndex 
								? errors.has(i) 
									? "text-led-hot relative z-10" 
									: "text-matte relative z-10"
								: "text-matte/30 relative z-10"
						}>{char}</span>
					</span>
				{/each}
			</div>

			{#if !isRunning && !isFinished}
				<div class="absolute inset-0 flex items-center justify-center bg-[#FAFAF6]/80">
					<p class="font-mono text-sm text-matte/60 tracking-wide">
						Start typing to begin...
					</p>
				</div>
			{/if}
		</Surface>

		<div class="mt-4 flex justify-center">
			<Button label="Reset" onclick={resetTest} />
		</div>
	</main>

	<div class="hidden lg:block sticky top-0 h-screen">
		<PartsList {parts} showroomNumber="04" showroomName="Teletype" class="h-full overflow-y-auto" />
	</div>
</section>

<Modal bind:open={showResults} title="Test Complete">
	<div class="text-center">
		<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-2">
			Words Per Minute
		</p>
		<p class="font-mono text-6xl font-bold text-matte mb-6">
			{wpm}
		</p>
		<div class="flex justify-center gap-8 mb-6">
			<div>
				<p class="font-mono text-[9px] tracking-[0.2em] text-matte/40 uppercase">Accuracy</p>
				<p class="font-mono text-2xl font-bold text-matte">{accuracy}%</p>
			</div>
			<div>
				<p class="font-mono text-[9px] tracking-[0.2em] text-matte/40 uppercase">Characters</p>
				<p class="font-mono text-2xl font-bold text-matte">{currentIndex}</p>
			</div>
		</div>
		<Button label="Try Again" onclick={resetTest} />
	</div>
</Modal>

