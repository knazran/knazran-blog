export const state = () => ({
  blogPosts: [],
  projects: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setProjects(state, list) {
    state.projects = list
  }
}

export const getters = {
  getBlogposts: state => {
    return state.blogPosts;
  },
  getProjects: state => {
    return state.projects;
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let blogFiles = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    let blogPosts = blogFiles.keys().map(key => {
      let res = blogFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    let projectFiles = await require.context(
      '~/assets/content/projects/',
      false,
      /\.json$/
    )
    let projects = projectFiles.keys().map(key => {
      let res = projectFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setProjects', projects)
  }
}
