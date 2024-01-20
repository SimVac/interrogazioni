<script>
    import { goto, afterNavigate } from '$app/navigation';
    import { base } from '$app/paths';

    let previousPage = base;
    afterNavigate(({from}) => {
        previousPage = from?.url.pathname || previousPage;
    }) 
</script>

<div class="bg-base-200" style="height: 5vh;">
    <button on:click={() => goto(previousPage)} class="btn btn-ghost absolute top-2 left-2">
        <svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
    </button>
</div>