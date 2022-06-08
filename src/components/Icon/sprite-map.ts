const map = new Map<string, { id: string, viewBox: string, markup: string }>();

map.set("chevron-down", Object.freeze({ 
  id: "chevron-down", 
  viewBox: "0 0 24 24", 
  markup: `
  <path fill="currentcolor" d="M16.6 8.6 12 13.2 7.4 8.6 6 10l6 6 6-6z"></path>
`
}))

const iconsMap = {
  get(key: string) {
    return map.get(key)
  }
}

export { iconsMap };
