import index from "@/assets/index.json"
import { marked } from "marked"

const termMap = new Map()

for (const [key, entry] of Object.entries(index)) {
    termMap.set(key.toLowerCase(), key)
    const aliases = entry.aliases ?? []
    for (const alias of aliases) {
        termMap.set(alias.toLowerCase(), key)
    }
}

const sortedTerms = [...termMap.keys()].sort((a, b) => b.length - a.length);

export function searchTerms(term) {
    const t = term.trim().toLowerCase()
    if (!t) return { matchedKeys: [], extraPaths: new Set() }

    const matchedEntries = Object.entries(index).filter(([key, obj]) =>
        key.toLowerCase().includes(t) ||
        obj.aliases?.some(a => a.toLowerCase().includes(t))
    )

    const extraPaths = new Set(
        matchedEntries
            .filter(([, val]) => val.page)
            .map(([, val]) => `/mewiki/${val.page.toLowerCase()}`)
    )

    return { matchedKeys: matchedEntries.map(entry => entry.key), extraPaths }
}

export function useHighlighter(el, content, onHover, onLeave) {
    if (!el) return

    el.innerHTML = marked.parse(content)

    const pattern = new RegExp(
        sortedTerms.map(t => `(?<![\\p{L}\\p{N}])${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}])`).join('|'),
        'giu'
    );

    const highlighted = content.replace(pattern, match => {
        const canonicalKey = termMap.get(match.toLowerCase())
        if (!canonicalKey) return match
        return `<span class="wiki-term intext-link pointer" data-key="${canonicalKey}">${match}</span>`
    });

    el.innerHTML = marked.parse(highlighted);

    el.querySelectorAll('.wiki-term').forEach(span => {
        span.addEventListener('mouseenter', e => onHover(span.dataset.key, e))
        span.addEventListener('mouseleave', () => onLeave?.())
    })
}