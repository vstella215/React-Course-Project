import { COMMENTS } from '../../app/shared/COMMENTS';

export const selecCommentsByCampiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
};

