<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<div class="grid grid-cols-4 gap-y-16">
		{#each data.pools as pool}
			<div>
				<div class="w-56 rounded-3xl">
					<img src={pool.image} alt="location" class="h-56 object-cover rounded-3xl" />
				</div>
				<div>
					<div class="w-56 flex justify-between">
						<h3 class="text-lg ">{pool.location}</h3>
						<div class="flex items-center">
							<i class="fa-solid fa-star " />
							<h5>{pool.interested}</h5>
						</div>
					</div>
					<div>
						<p>Invested Amount: <span>₹{pool.invested}</span></p>
						<p>Targeted Amount: <span>₹{pool.cost}</span></p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
