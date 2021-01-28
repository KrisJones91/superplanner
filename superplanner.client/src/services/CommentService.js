import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommentService {
  async getComments(taskId) {
    const res = await api.get('/api/tasks/' + taskId + '/comments')
    AppState.comments[taskId] = res.data
    logger.log(res.data)
  }
}
export const commentService = new CommentService()
