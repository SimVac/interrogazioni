
<script>
  import { isAuthenticated } from './store';

  let password = '';

  function handleLogin() {
    // Controlla la password (puoi implementare la tua logica qui)
    if (password === 'passwordCorretta') {
      isAuthenticated.set(true);
    } else {
      alert('Password errata. Riprova.');
    }
  }
</script>

<div>
  <label for="password">Password:</label>
  <input type="password" bind:value={password} />
  <button on:click={handleLogin}>Login</button>
</div>