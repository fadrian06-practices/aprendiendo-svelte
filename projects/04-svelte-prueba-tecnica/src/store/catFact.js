import { writable } from 'svelte/store'
import { getRandomFact } from '../services/facts'

function createFact() {
  const { set, subscribe } = writable('')

  const refreshFact = () => getRandomFact().then(newFact => set(newFact))

  refreshFact()

  return {
    subscribe,
    refreshFact
  }
}

export const fact = createFact()
