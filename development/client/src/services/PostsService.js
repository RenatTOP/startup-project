import api from '@/services/api'

export default {
    fetchPosts () {
        return api().get('/api/posts')
    },
    addNewPost (params) {
        return api().post('/api/posts/new', params)
    },
    getPost (params) {
        return api().get(`/api/posts/${params.id}`)
    },
    updatePost (params) {
        return api().put(`/api/posts/${params.id}`, params)
    },
    deletePost (id) {
        return api().delete(`/api/posts/${id}`)
    }
}
