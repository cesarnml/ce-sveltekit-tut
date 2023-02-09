<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1>Congrats you made it to my post: {$page.params.slug}</h1>
<div>{JSON.stringify($page, null, 2)}</div>
