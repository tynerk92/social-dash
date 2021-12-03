import { writable } from 'svelte/store'
import netlifyIdentity from 'netlify-identity-widget'
import md5 from 'md5'
import { navigate } from 'svelte-routing'
import { browser } from '$app/env'

function createUser() {
  let localUser = browser ? JSON.parse(localStorage.getItem('gotrue.user')) : null

  let u = null
  if (localUser) {
    u = {
      username: localUser.user_metadata.full_name,
      email: localUser.email,
      access_token: localUser.token.access_token,
      expires_at: localUser.token.expires_at,
      refresh_token: localUser.token.refresh_token,
      token_type: localUser.token.token_type,
      gravatarHash: md5(localUser.email.trim().toLowerCase())
    }
  }
  const { subscribe, set } = writable(u)

  return {
    subscribe,
    login(user) {
      const currentUser = {
        username: user.user_metadata.full_name,
        email: user.email,
        access_token: user.token.access_token,
        expires_at: user.token.expires_at,
        refresh_token: user.token.refresh_token,
        token_type: user.token.token_type,
        gravatarHash: md5(user.email.trim().toLowerCase())
      }
      set(currentUser)
    },
    logout() {
      set(null)
    },
  }
}

function subscribeToLogin(user) {
    netlifyIdentity.on('login', userData => {
      user.login(userData)
      netlifyIdentity.close()
      navigate('/')
    })
}

function createNetlifyIdentity() {
  return {
    login(user) {
      netlifyIdentity.open('login')
      subscribeToLogin(user)
    },
    signup(user) {
      netlifyIdentity.open('signup')
      subscribeToLogin(user)
    },
    logout(user) {
      navigate('/')
      user.logout()
      netlifyIdentity.logout()
    },
    init() {
      netlifyIdentity.init()
    }
  }
}

export const user = createUser()
export const identity = createNetlifyIdentity()
