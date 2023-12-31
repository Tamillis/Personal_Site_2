import {marked} from 'marked';
export const putMdinElement = async (path, elementId) => {
    let res = await fetch(path);
    let content = await res.text();
    document.getElementById(elementId).innerHTML = marked.parse(content);
};

export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}