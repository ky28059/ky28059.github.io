const { readFile, writeFile } = require('node:fs/promises');

(async () => {
    const raw = (await readFile('./x.txt')).toString();
    const ret = [];

    const groups = raw.matchAll(/<CTF name="(.+?)">([^]+?)<\/CTF>/g);
    for (const [, name, inner] of groups) {
        const obj = {
            name,
            writeups: []
        }

        const projectMatches = inner.matchAll(/<Writeup([^]+?)>([^]+?)<\/Writeup>/g);
        for (const [, innerer, name] of projectMatches) {
            const writeup = {
                name: name.trim().replaceAll(/\s+/g, ' ')
            }
            for (const [, prop, jsRaw] of innerer.matchAll(/(\w+)={?(.+?)}?(?: |$)/g)) {
                writeup[prop] = eval(jsRaw);
            }
            obj.writeups.push(writeup);
        }

        ret.push(obj)
    }

    await writeFile('./out.json', JSON.stringify(ret, null, 4));
})();
