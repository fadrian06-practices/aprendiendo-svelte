const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat'

export function getCatImage({ fact }) {
  if (!fact) {
    return {
      url: '',
      alt: ''
    }
  }

  const firstThreeWords = fact.split(' ', 3).join(' ')

  return {
    url: `${CAT_PREFIX_IMAGE_URL}/says/${firstThreeWords}?fontSize=50&fontColor=white`,
    alt: `Cat saying the first three words of ${fact}`
  }
}
