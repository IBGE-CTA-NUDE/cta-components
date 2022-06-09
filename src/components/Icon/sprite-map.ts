const map = new Map<string, { id: string, viewBox: string, markup: string }>();

map.set("chevron-down", Object.freeze({ 
  id: "chevron-down", 
  viewBox: "0 0 24 24", 
  markup: `
  <path fill="currentcolor" d="M16.6 8.6 12 13.2 7.4 8.6 6 10l6 6 6-6z"></path>
`
}))
map.set("close-circle", Object.freeze({ 
  id: "null", 
  viewBox: "0 0 252 252", 
  markup: `
  <path d="M126 0a126 126 0 1 0 0 252 126 126 0 0 0 0-252zm0 234a108 108 0 1 1 0-216 108 108 0 0 1 0 216z"></path>
  <path d="M165 87c-4-3-10-3-13 0l-26 26-26-26a9 9 0 1 0-13 13l26 26-26 26a9 9 0 1 0 13 13l26-26 26 26a9 9 0 0 0 13 0c3-4 3-10 0-13l-26-26 26-26c3-3 3-9 0-13z"></path>
`
}))

const iconsMap = {
  get(key: string) {
    return map.get(key)
  }
}

export { iconsMap };
