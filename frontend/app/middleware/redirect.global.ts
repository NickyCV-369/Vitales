export default defineNuxtRouteMiddleware((to) => {
  // Redirect from root path to index2
  if (to.path === '/') {
    return navigateTo('/index2')
  }
}) 