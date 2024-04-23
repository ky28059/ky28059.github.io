'use client'

import { useMemo, useState } from 'react';
import AutoResizingTextArea from '../../../components/AutoResizingTextArea';
import {SyntaxHighlighter} from '../../../components/CodeBlock';


export default function ObfuscationContent() {
    const [corpus, setCorpus] = useState(defaultCorpus);

    const {defineString, parsedString, tokens, errors} = useMemo(() => {
        const words = corpus.split(/(?:[\s\n().\-,/;:'"]|\[.+?])+/);

        const wordCounts: {[word: string]: number} = {};

        for (const word of words) {
            if (!wordCounts[word]) wordCounts[word] = 0;
            wordCounts[word]++;
        }

        const maxLength = Math.max(...Object.keys(wordCounts).map(w => w.length));
        const filtered = Object.entries(wordCounts)
            .filter(([word, _]) => isNaN(Number(word)));

        // Remove all duplicate tokens from the string
        const removeRegex = RegExp(`\\b(?:${filtered
            .filter(([_, count]) => count > 1)
            .map(([word, _]) => word)
            .join('|')})\\b`, 'g');

        // Split parsed string into tokens, attempt to escape punctuation
        let parsedString = corpus.replaceAll(removeRegex, '');
        const tokens = parsedString
            .split(/\s+|\b/)
            .filter(t => !!t);

        const wordMappings: {[word: string]: string} = {};
        let prefix = '';

        const errors: string[] = [];

        for (let i = 0; i < tokens.length; i++) {
            const current = tokens[i];
            const next = tokens[i + 1];

            if (!/[a-zA-Z]+/.test(current)) {
                if (i === 0) errors.push('File does not begin with controllable token.')
                continue; // TODO
            }

            let mapping = prefix;
            prefix = '';

            if (next === ',') {
                mapping += '(void)((void)0';
                prefix = '0);' + prefix;
                i++;
            } else if (next === '.') {
                mapping += '(void)0';
                prefix = ';' + prefix;
                i++;
            } else if (next === '-') {
                mapping += '(void)(0';
                prefix = '0);' + prefix;
                i++;
            }

            if (mapping) parsedString = parsedString.replaceAll(RegExp(`\\b${current}\\b`, 'g'), mapping);
            wordMappings[current] = mapping || '// free';
        }

        if (prefix) errors.push('File does not end with controllable token.')
        console.log(tokens, wordMappings)

        const defineString = filtered
            .map(([word, count]) => `#define ${word}${count > 1 ? '' : `${' '.repeat(maxLength - word.length)} ${wordMappings[word] ?? ''}`}`)
            .join('\n');

        return {defineString, parsedString, tokens, errors}
    }, [corpus]);

    return (
        <div className="flex gap-6">
            <div className="flex-grow [&>pre]:h-max">
                <h5 className="text-secondary dark:text-secondary-dark text-sm mb-1">
                    Parsed corpus
                </h5>
                <SyntaxHighlighter language="c">
                    {parsedString}
                </SyntaxHighlighter>
                {errors.length > 0 && (
                    <div>
                        {errors.map((e) => (
                            <p key={e}>{e}</p>
                        ))}
                    </div>
                )}

                <h5 className="text-secondary dark:text-secondary-dark text-sm mt-4 mb-1">
                    Tokens
                </h5>
                <SyntaxHighlighter language="c">
                    {JSON.stringify(tokens)}
                </SyntaxHighlighter>

                <h5 className="text-secondary dark:text-secondary-dark text-sm mt-4 mb-1">
                    Generated program
                </h5>
                <SyntaxHighlighter language="c">
                    {defineString + '\n\n' + corpus}
                </SyntaxHighlighter>
            </div>

            <div className="w-[26rem]">
                <h5 className="text-secondary dark:text-secondary-dark text-sm mb-1">
                    Corpus
                </h5>
                <AutoResizingTextArea
                    value={corpus}
                    onChange={(e) => setCorpus(e.target.value)}
                    className="text-sm rounded px-6 py-4 h-24 dark:bg-[#2b2b2b] mb-2 w-full border border-gray-400/50 dark:border-gray-100/10 placeholder:text-gray-400 placeholder:dark:text-gray-100/40"
                />
            </div>
        </div>
    )
}

const defaultCorpus = `A cantilever is a rigid structural element that extends horizontally and is
unsupported at one end. Typically it extends from a flat vertical surface such
as a wall, to which it must be firmly attached. Like other structural elements,
a cantilever can be formed as a beam, plate, truss, or slab.

When subjected to a structural load at its far, unsupported end, the cantilever
carries the load to the support where it applies a shear stress and a bending
moment.[1]

Cantilever construction allows overhanging structures without additional
support.

Cantilevers are widely found in construction, notably in cantilever bridges and
balconies (see corbel). In cantilever bridges, the cantilevers are usually built
as pairs, with each cantilever used to support one end of a central section. The
Forth Bridge in Scotland is an example of a cantilever truss bridge. A
cantilever in a traditionally timber framed building is called a jetty or
forebay. In the southern United States, a historic barn type is the cantilever
barn of log construction.

Temporary cantilevers are often used in construction. The partially constructed
structure creates a cantilever, but the completed structure does not act as a
cantilever. This is very helpful when temporary supports, or falsework, cannot
be used to support the structure while it is being built (e.g., over a busy
roadway or river, or in a deep valley). Therefore, some truss arch bridges (see
Navajo Bridge) are built from each side as cantilevers until the spans reach
each other and are then jacked apart to stress them in compression before
finally joining. Nearly all cable-stayed bridges are built using cantilevers as
this is one of their chief advantages. Many box girder bridges are built
segmentally, or in short pieces. This type of construction lends itself well to
balanced cantilever construction where the bridge is built in both directions
from a single support.

These structures rely heavily on torque and rotational equilibrium for their
stability.

In an architectural application, Frank Lloyd Wright's Fallingwater used
cantilevers to project large balconies. The East Stand at Elland Road Stadium in
Leeds was, when completed, the largest cantilever stand in the world[2] holding
17,000 spectators. The roof built over the stands at Old Trafford uses a
cantilever so that no supports will block views of the field. The old (now
demolished) Miami Stadium had a similar roof over the spectator area. The
largest cantilevered roof in Europe is located at St James' Park
in Newcastle-Upon-Tyne, the home stadium of Newcastle United F.C.[3][4]

Less obvious examples of cantilevers are free-standing (vertical) radio towers
without guy-wires, and chimneys, which resist being blown over by the wind
through cantilever action at their base.

The cantilever is commonly used in the wings of fixed-wing aircraft. Early
aircraft had light structures which were braced with wires and struts. However,
these introduced aerodynamic drag which limited performance. While it is 
heavier, the cantilever avoids this issue and allows the plane to fly faster.

Hugo Junkers pioneered the cantilever wing in 1915. Only a dozen years after the
Wright Brothers' initial flights, Junkers endeavored to eliminate virtually all
major external bracing members in order to decrease airframe drag in flight. The
result of this endeavor was the Junkers J 1 pioneering all-metal monoplane of
late 1915, designed from the start with all-metal cantilever wing panels. About
a year after the initial success of the Junkers J 1, Reinhold Platz of Fokker
also achieved success with a cantilever-winged sesquiplane built instead with
wooden materials, the Fokker V.1.

In the cantilever wing, one or more strong beams, called spars, run along the
span of the wing. The end fixed rigidly to the central fuselage is known as the
root and the far end as the tip. In flight, the wings generate lift and the
spars carry this load through to the fuselage.

To resist horizontal shear stress from either drag or engine thrust, the wing
must also form a stiff cantilever in the horizontal plane. A single-spar design
will usually be fitted with a second smaller drag-spar nearer the trailing edge,
braced to the main spar via additional internal members or a stressed skin. The
wing must also resist twisting forces, achieved by cross-bracing or otherwise
stiffening the main structure.

Cantilever wings require much stronger and heavier spars than would otherwise be
needed in a wire-braced design. However, as the speed of the aircraft increases,
the drag of the bracing increases sharply, while the wing structure must be
strengthened, typically by increasing the strength of the spars and the
thickness of the skinning. At speeds of around 200 miles per hour (320 km/h) the
drag of the bracing becomes excessive and the wing strong enough to be made a
cantilever without excess weight penalty. Increases in engine power through the
late 1920 s and early 1930 s raised speeds through this zone and by the late
1930 s cantilever wings had almost wholly superseded braced ones.[5] Other
changes such as enclosed cockpits, retractable undercarriage, landing flaps and
stressed-skin construction furthered the design revolution, with the pivotal
moment widely acknowledged to be the MacRobertson England-Australia air race of
1934, which was won by a de Havilland DH.88 Comet.[6]

Currently, cantilever wings are almost universal with bracing only being used
for some slower aircraft where a lighter weight is prioritized over speed, such
as in the ultralight class.

Cantilevered beams are the most ubiquitous structures in the field of
microelectromechanical systems (MEMS). An early example of a MEMS cantilever is
the Resonistor,[7][8] an electromechanical monolithic resonator. MEMS
cantilevers are commonly fabricated from silicon (Si), silicon nitride (Si3N4),
or polymers. The fabrication process typically involves undercutting the
cantilever structure to release it, often with an anisotropic wet or dry etching
technique. Without cantilever transducers, atomic force microscopy would not be
possible. A large number of research groups are attempting to develop cantilever
arrays as biosensors for medical diagnostic applications. MEMS cantilevers are
also finding application as radio frequency filters and resonators. The MEMS
cantilevers are commonly made as unimorphs or bimorphs.

Two equations are key to understanding the behavior of MEMS cantilevers. The
first is Stoney's formula, which relates cantilever end deflection δ to applied
stress σ:

[math equations]

The principal advantage of MEMS cantilevers is their cheapness and ease of
fabrication in large arrays. The challenge for their practical application lies
in the square and cubic dependences of cantilever performance specifications on
dimensions. These superlinear dependences mean that cantilevers are quite
sensitive to variation in process parameters, particularly the thickness as this
is generally difficult to accurately measure.[9] However, it has been shown that
microcantilever thicknesses can be precisely measured and that this variation
can be quantified.[10] Controlling residual stress can also be difficult.

A chemical sensor can be obtained by coating a recognition receptor layer over
the upper side of a microcantilever beam.[12] A typical application is the
immunosensor based on an antibody layer that interacts selectively with a
particular immunogen and reports about its content in a specimen. In the static
mode of operation, the sensor response is represented by the beam bending with
respect to a reference microcantilever. Alternatively, microcantilever sensors
can be operated in the dynamic mode. In this case, the beam vibrates at its
resonance frequency and a variation in this parameter indicates the
concentration of the analyte. Recently, microcantilevers have been fabricated
that are porous, allowing for a much larger surface area for analyte to bind to,
increasing sensitivity by raising the ratio of the analyte mass to the device
mass.[13] Surface stress on microcantilever, due to receptor-target binding,
which produces cantilever deflection can be analyzed using optical methods like
laser interferometry. Zhao et al., also showed that by changing the attachment
protocol of the receptor on the microcantilever surface, the sensitivity can be
further improved when the surface stress generated on the microcantilever is
taken as the sensor signal.[14]

See also
- Applied mechanics
- Cantilever bicycle brakes
- Cantilever bicycle frame
- Cantilever chair
- Cantilever method
- Cantilevered stairs
- Corbel arch
- Euler-Bernoulli beam theory
- Grand Canyon Skywalk
- Knudsen force in the context of microcantilevers
- Orthodontics
- Statics`
