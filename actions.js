import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id, text) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    }
}

function ThumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    }
}

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';