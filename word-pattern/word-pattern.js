/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(' ')
    if (pattern.length !== s.length) return false
    const m = new Map()
    const n = new Map()
    for(let i=0; i<pattern.length; i++){  
        if(!m.has(pattern[i])) m.set(pattern[i], s[i])
        else if(m.get(pattern[i]) !== s[i]) return false
        if(!n.has(s[i])) n.set(s[i], pattern[i])
        else if(n.get(s[i]) !== pattern[i]) return false
    }
    return true
}