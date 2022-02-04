<template>
	<div class="bg-scrap relative h-screen w-screen bg-gray-100">
		<div class="flex h-full w-full lg:flex-col">
			<div class="w-8 bg-capi lg:h-8 lg:w-full" />
			<div class="flex flex-grow">
				<slot />
			</div>
			<div class="w-8 bg-capi lg:h-8 lg:w-full" />
		</div>
	</div>
</template>
