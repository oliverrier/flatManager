interface Route {
  path: String;
  name: String;
}

const profile: Route = {
  path: '/profile',
  name: 'profile'
}

const details: Route = {
  path: '/details',
  name: 'details'
}

const list: Route = {
  path: '/list',
  name: 'list'
}
const oui: Route = {
  path: '/oui',
  name: 'oui'
}

export { profile, details, list, oui }