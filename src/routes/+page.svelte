<script lang="ts">
	import { routes } from '$lib';
</script>

<div class="hero-container">
	<div class="welcome-section">
		<p class="welcome-text">Welcome to</p>
		<h1 class="library-name">@sierra-95/svelte-scaffold</h1>
	</div>

	<div class="hero-content">
		<div class="hero-text">
			<h2 class="hero-title">Build Your App in a Week</h2>
			<p class="hero-subtitle">
				A powerful Svelte scaffold with pre-built components, modules, and stores to jumpstart your project.
			</p>
			<div class="hero-cta">
				<a href={routes.installation} class="btn-primary">Get Started</a>
				<a href={routes.core.base} class="btn-secondary">Explore Components</a>
			</div>
		</div>

		<div class="features-grid">
			<div class="feature-card">
				<div class="feature-icon">
					<i class="fas fa-cubes"></i>
				</div>
				<h3>Core Components</h3>
				<p>Pre-built, accessible UI components ready to use in your project</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<i class="fas fa-puzzle-piece"></i>
				</div>
				<h3>Powerful Modules</h3>
				<p>Layout system, file picker, and editor modules for complex features</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<i class="fas fa-store"></i>
				</div>
				<h3>Smart Stores</h3>
				<p>Pre-configured stores for theme, user, and general app state</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<i class="fas fa-bolt"></i>
				</div>
				<h3>Production Ready</h3>
				<p>Dark mode support, TypeScript, and best practices built-in</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<i class="fas fa-gift"></i>
				</div>
				<h3>Out of the Box</h3>
				<p>Powerful, production-ready modules you can use immediately without setup</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<i class="fas fa-rocket"></i>
				</div>
				<h3>Fast Development</h3>
				<p>Skip boilerplate and focus on building features that matter</p>
			</div>
		</div>
	</div>

	<div class="features-highlight">
		<h2>What's Inside</h2>
		<div class="highlight-grid">
			<div class="highlight-item">
				<span class="highlight-label">Components</span>
				<p>Buttons, inputs, modals, toasts, progress bars, date pickers, and more</p>
			</div>
			<div class="highlight-item">
				<span class="highlight-label">Modules</span>
				<p>Reusable layout system, file picker with backend integration, and rich text editor</p>
			</div>
			<div class="highlight-item">
				<span class="highlight-label">Stores</span>
				<p>Theme management, user state, and general app state stores</p>
			</div>
			<div class="highlight-item">
				<span class="highlight-label">Built with Svelte</span>
				<p>Modern, reactive, and efficient. No framework bloat, pure performance</p>
			</div>
		</div>
	</div>

	<div class="quick-start">
		<h2>Quick Start</h2>
		<div class="quick-start-steps">
			<div class="step">
				<div class="step-number">1</div>
				<h4>Install</h4>
				<p>Add the scaffold to your SvelteKit project</p>
			</div>
			<div class="step">
				<div class="step-number">2</div>
				<h4>Explore</h4>
				<p>Browse components and modules in the docs</p>
			</div>
			<div class="step">
				<div class="step-number">3</div>
				<h4>Build</h4>
				<p>Start building your amazing app</p>
			</div>
		</div>
		<a href={routes.installation} class="cta-link">Read installation guide →</a>
	</div>
</div>

<style>
	.hero-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	.welcome-section {
		text-align: center;
		margin-bottom: 3rem;
	}

	.welcome-text {
		font-size: 1rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 500;
	}

	.library-name {
		font-size: 2.5rem;
		font-weight: 800;
		color: var(--primary);
		margin-bottom: 0;
		font-family: monospace;
		letter-spacing: -0.02em;
	}

	.hero-content {
		margin-bottom: 5rem;
	}

	.hero-text {
		margin-bottom: 4rem;
		text-align: center;
	}

	.hero-title {
		font-size: 3.5rem;
		font-weight: 800;
		margin-bottom: 1.5rem;
		background: linear-gradient(135deg, var(--primary), var(--accent));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		color: var(--text-secondary);
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.6;
	}

	.hero-cta {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-primary,
	.btn-secondary {
		padding: 0.875rem 2rem;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.btn-primary {
		background-color: var(--primary);
		color: white;
		border: 2px solid var(--primary);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}

	.btn-secondary {
		background-color: transparent;
		color: var(--primary);
		border: 2px solid var(--primary);
	}

	.btn-secondary:hover {
		background-color: var(--primary);
		color: white;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.feature-card {
		padding: 2rem;
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		background-color: var(--surface);
		transition: all 0.3s ease;
		text-align: center;
	}

	.feature-card:hover {
		border-color: var(--primary);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		transform: translateY(-4px);
	}

	.feature-icon {
		font-size: 2.5rem;
		color: var(--primary);
		margin-bottom: 1rem;
	}

	.feature-card h3 {
		font-size: 1.1rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
		color: var(--text);
	}

	.feature-card p {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.features-highlight {
		background-color: var(--surface);
		border: 1px solid var(--border);
		border-radius: 1rem;
		padding: 3rem 2rem;
		margin-bottom: 4rem;
	}

	.features-highlight h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 2rem;
		text-align: center;
	}

	.highlight-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.highlight-item {
		padding: 1.5rem;
		border-left: 4px solid var(--primary);
	}

	.highlight-label {
		display: block;
		font-weight: 700;
		color: var(--primary);
		margin-bottom: 0.5rem;
		font-size: 0.95rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.highlight-item p {
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.quick-start {
		text-align: center;
		padding: 3rem 2rem;
		background: linear-gradient(135deg, var(--surface), var(--background));
		border-radius: 1rem;
		border: 1px solid var(--border);
	}

	.quick-start h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 2rem;
	}

	.quick-start-steps {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.step {
		padding: 2rem 1rem;
	}

	.step-number {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: var(--primary);
		color: white;
		font-weight: 700;
		font-size: 1.25rem;
		margin: 0 auto 1rem;
	}

	.step h4 {
		font-size: 1.1rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.step p {
		color: var(--text-secondary);
		font-size: 0.95rem;
	}

	.cta-link {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		color: var(--primary);
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
		border: 2px solid transparent;
	}

	.cta-link:hover {
		border-bottom: 2px solid var(--primary);
	}

	@media (max-width: 768px) {
		.hero-container {
			padding: 2rem 1rem;
		}

		.library-name {
			font-size: 1.75rem;
		}

		.hero-title {
			font-size: 2rem;
		}

		.hero-subtitle {
			font-size: 1rem;
		}

		.features-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.hero-cta {
			flex-direction: column;
			align-items: center;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
			max-width: 300px;
		}

		.quick-start-steps {
			grid-template-columns: 1fr;
		}
	}
</style>
