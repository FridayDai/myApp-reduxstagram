/**
 * Created by xplusz on 9/9/16.
 */
export function increment(i) {
    return {
        type: 'INCREMENT_LIKES',
        i
    }
}

export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}
