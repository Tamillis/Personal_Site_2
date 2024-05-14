import {marked} from 'marked';

const MarkedDone = new CustomEvent("MarkedDone");

export const putMdinElement = async (path, elementId) => {
    let res = await fetch(path);
    let content = await res.text();
    document.getElementById(elementId).innerHTML = marked.parse(content);
    window.dispatchEvent(MarkedDone);
};

export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

export function format(name) {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(" ");
}