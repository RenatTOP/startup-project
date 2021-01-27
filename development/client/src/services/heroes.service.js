import api from '@/services/api'
import authHeader from '@/services/auth-header'

class HeroesService {
    getHeroes() {
        return api().get('api/heroes', { headers: authHeader() })
    }
}

export default new HeroesService()