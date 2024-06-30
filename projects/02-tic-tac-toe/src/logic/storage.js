export function saveGameToStorage(board, turn) {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export function resetGameInStorage() {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
