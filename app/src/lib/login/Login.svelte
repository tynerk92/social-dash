<script>
  import Button from '$lib/button/Button.svelte'

  let email = ''
  let password = ''
  let remember = true

  async function logIn() {
    const submit = await fetch('/api/login', {
      method: "POST",
      body: JSON.stringify({email, password, remember})
    })

    const data = await submit.json()

    window.localStorage.setItem('currentUser', JSON.stringify(data.user));
  }

  function activateInput(name) {
    const label = document.querySelector(`label[for="${name}"]`)
    label.classList.add('active')
  }

  function deactivateInput(name) {
    const label = document.querySelector(`label[for="${name}"]`)
    const input = document.querySelector(`input[name="${name}"]`)
    if (!input.value) {
      label.classList.remove('active')
    }
  }
</script>
<div class="login-wrapper">
  <div class="login-container">
    <form on:submit|preventDefault={logIn}>
      <h1>Log In</h1>
      <div class="input-group">
        <label hidden class="active"></label>
        <label for="email">Email</label>
        <input type="email" name="email" bind:value={email} on:focus={() => activateInput('email')} on:blur={() => deactivateInput('email')}>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" name="password" bind:value={password} on:focus={() => activateInput('password')} on:blur={() => deactivateInput('password')}>
      </div>
      <div class="input-group checkbox">
        <label for="remember">
          Remember Me
          <input type="checkbox" name="remember" bind:checked={remember}>
        </label>
      </div>
      <Button text="Log In"/>
    </form>
  </div>
</div>
<style lang="scss">
  .login-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-container {
      padding: 1rem;
      background: var(--pure-white);
      border-radius: 6px;
      box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.1);

      h1 {
        text-align: center;
      }

      .input-group:not(.checkbox) {
        position: relative;
        margin: 1rem 0;

        label {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 1rem;
          transition: top 0.2s ease, background-color 0.2s ease, font-size 0.2s ease, padding 0.2s ease;

          &.active {
            top: -1px;
            font-size: 0.6em;
            background: white;
            padding: 0 6px;
          }
        }

        input[type="email"],
        input[type="password"] {
          height: 50px;
          border: 1px solid #ccc;
          border-radius: 6px;
          padding: 0 1rem;
        }
      }

      .input-group.checkbox {
        margin: 1rem 0;
        label {
          display: inline;
          position: static;
        }
      }
    }
  }
</style>
