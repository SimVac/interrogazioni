<script>
    import { isAuthenticated } from '../../store/store';
    import Back from '$lib/components/Back.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    //import { PASSWORD } from '$lib/env';
    export let data;
    export const PASSWORD = data.PASSWORD;

    export function handleSubmit(event){
        const form = event.target;
        const formData = new FormData(form);

        const dati = {password: formData.get('password')};
        $: {
            if (formData.get('password') == PASSWORD)
                $isAuthenticated = true;
        }
    }
</script>

<section>
    <Back/>
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form on:submit|preventDefault={handleSubmit} class="card-body">
                    <div class="form-control">
                        <h1 class="text-xl text center font-bold">Accedi</h1>
                    </div>
                    <div class="form-control">
                        <span class="label-text">Password</span>
                        <input type="password" name="password" placeholder="password" class="input input-bordered" required />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary btn-outline" type="submit">
                        Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Navbar/>
</section>