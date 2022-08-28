export const state = () => ({
  blogPosts: [],
  projects: [],
  hackathons: [],
  talks: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setProjects(state, list) {
    state.projects = list
  },
  setHackathons(state, list) {
    state.hackathons = list
  },
  setTalks(state, list) {
    state.talks = list
  }
}

export const getters = {
  getBlogposts: state => {
    return state.blogPosts.filter(post => post.published);
  },
  getProjects: state => {
    return state.projects;
  },
  getHackathons: state => {
    return state.hackathons;
  },
  getTalks: state => {
    return state.talks;
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

    let hackathonFiles = await require.context(
      '~/assets/content/hackathons/',
      false,
      /\.json$/
    )
    let hackathons = hackathonFiles.keys().map(key => {
      let res = hackathonFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    let talksFiles = await require.context(
      '~/assets/content/talks/',
      false,
      /\.json$/
    )
    let talks = talksFiles.keys().map(key => {
      let res = talksFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setProjects', projects)
    await commit('setBlogPosts', blogPosts)
    await commit('setHackathons', hackathons)
    await commit('setTalks', talks)
  }
}
