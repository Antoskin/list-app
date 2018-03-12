export function increment() {
    return {
        type: 'INC'
    }
}

export function decrement() {
    return {
        type: 'DEC'
    }
}

export function deleteArticle(id) {
    return {
        type: 'DEL',
        payload: {id}
    }
}
