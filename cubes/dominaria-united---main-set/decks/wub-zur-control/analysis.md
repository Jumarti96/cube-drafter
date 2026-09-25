---
deck_name: "wub-zur-control"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WUB"
format: "40-card"
built_at: "2026-08-20T05:36:31Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (22 spells + 18 lands = 40)

### LANDS (18)

```
  1x Caves of Koilos          WB painland, enters UNTAPPED. The single rare spent on mana. No basic type, so 0 Domain
  2x Contaminated Aquifer     UB dual, enters tapped. Land - Island Swamp (2 Domain types)
  2x Idyllic Beachfront       WU dual, enters tapped. Land - Plains Island (2 Domain types)
  5x Island                   Basic U source. Domain type: Island
  3x Plains                   Basic W source. Domain type: Plains
  2x Sunlit Marsh             WB dual, enters tapped. Land - Plains Swamp (2 Domain types)
  3x Swamp                    Basic B source. Domain type: Swamp
```

### CREATURES (8)

```
CMC  Card                            Qty   Color  Role                                          Rar
  2  Phyrexian Missionary            x2    W      Lifelink blocker / Zur rebuy (kicked)         U
  3  Zur, Eternal Schemer            x1    WUB    Wincon package - upgrades the exile-enchantments into bodies M
  4  Ertai Resurrected               x1    UB     Interaction - flash counter OR removal        R
  4  Sheoldred, the Apocalypse       x1    B      Standalone threat / draw tax                  M
  5  Sphinx of Clear Skies           x1    U      Evasive finisher (ward 2)                     M
  7  Tolarian Terror                 x2    U      Finisher - cost scales down with the graveyard C
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                            Qty   Color  Role                                          Rar
  1  Cut Down                        x2    B      Interaction (early curve)                     U
  2  Essence Scatter                 x1    U      Interaction (counterspell)                    C
  2  Impulse                         x2    U      Card selection + Terror fuel                  C
  3  Phyrexian Espionage             x2    U      Card advantage + Terror fuel                  C
  4  Extinguish the Light            x1    B      Interaction (unconditional)                   C
```

### OTHER SPELLS (6)

```
CMC  Card                            Qty   Color  Role                                          Rar
  2  Founding the Third Path         x2    U      Saga - free spell, mill-4 Terror fuel; 2/2 animation target U
  3  Citizen's Arrest                x2    W      Removal + 3/3 animation target                C
  4  Prayer of Binding               x2    W      Removal + 4/4 animation target                U
```

## SIDEBOARD (10)

```
Card                            Qty   Color  Role / When to board in                                                   Rar
Rona's Vortex                   x1    U      Bounce - Against indestructible or otherwise hard-to-destroy permanents; kicked {2}{B} it reads 'put that permanent on the bottom of its owner's library instead', which is the deck's only permanent answer to a recursive threat. U
Artillery Blast                 x1    W      Removal - Against evasion decks -- the cube's largest threat class at 51 cards / 20.7% density. Domain sets X = 1 + 3 = 4 by this deck's land census, at instant speed. Limit: 'target tapped creature', so it answers attackers, not blockers. C
Destroy Evil                    x2    W      Enchantment answer - Against the cube's 18 enchantments. This is one of only THREE enchantment answers in the entire cube and the only one castable in these colours; it also kills a creature with toughness 4 or greater. C
Essence Scatter                 x1    U      Counterspell - Second copy against creature-dense decks, particularly the cube's large top end that outclasses a 3/3 animated Citizen's Arrest. C
Knight of Dusk's Shadow         x1    B      Hate bear - Against the cube's lifegain class (22 cards, 8.9% density). 'Your opponents can't gain life' is the pool's only such effect. U
Negate                          x2    U      Counterspell - Against the cube's 18 enchantments and 15 artifacts -- W/U/B has zero artifact removal anywhere in this cube, so countering the spell is the cleanest answer. Also answers all 6 of the cube's sweepers, every one of which is a noncreature spell. C
Choking Miasma                  x2    B      Sweeper - The answer to the conceded wide_boards class, and this deck's only sweeper. 'All creatures get -2/-2' spares Sheoldred (4/5), Sphinx (5/5), Tolarian Terror (5/5) and an animated Prayer of Binding (4/4); it kills Phyrexian Missionary (2/3) and Zur (1/4 becomes -1/2 and survives). U
```

## ANALYSIS

### DECK IDENTITY

A conventional competitive WUB control deck that closes with Zur rather than being built around him. The shell is card quality first -- Sheoldred taxing every draw, Sphinx of Clear Skies as a ward-2 evasive finisher, two graveyard-discounted Tolarian Terrors, and eight pieces of interaction -- and the Zur package is six cards: Citizen's Arrest x2 and Prayer of Binding x2, which are removal the deck would run anyway, plus Founding the Third Path x2, whose chapter II mill directly discounts Tolarian Terror. Zur upgrades all six into deathtouch, lifelink, hexproof bodies for {1}{W}. The distinguishing structural fact is that this build does not NEED Zur: four of its threats win on their own oracle text, which is what separates it from its two sibling builds.


### WHAT THIS DECK IS

Of the three sibling Zur builds from this pool, this is the one where **Zur is a win condition, not
an engine**. The shell is a conventional WUB draw-go control deck; the Zur package is six cards, all
common or uncommon, and four of them are removal spells the deck would run with Zur nowhere in the
list. The four discretionary rare/mythic slots went to **Sheoldred**, **Sphinx of Clear Skies**,
**Ertai Resurrected** and **Caves of Koilos** — not one of them an enchantment.

That is a deliberate design, and it has a measurable payoff: **removing Zur costs this deck an
upgrade on four removal spells, not its win condition.** Four threats win unassisted on their own
oracle text — Sheoldred (`"Whenever an opponent draws a card, they lose 2 life"`), Sphinx of Clear
Skies (`"Flying, ward {2}"`, 5/5), and two Tolarian Terrors (5/5, `"Ward {2}"`) — and two of those
four are **commons**, so the deck's decapitation-resistance cost zero against the rare cap.

### THE THING THE GRILL CAUGHT, AND WHY IT MATTERED

The first version of this deck ran **zero Sagas**, against a brief that asked for "Zur Enchantments
& **Sagas**." The build defended that as a consequence of the five-rare cap. The Challenger showed
the defence was false: there are exactly three non-Aura enchantments in this pool that cost *nothing*
against the cap, and **all three are Sagas** — Founding the Third Path, Braids's Frightful Return,
Love Song of Night and Day. None of them appeared anywhere in this deck's sweep, as a candidate or as
a recorded exclusion. The package was lean by taste, described as lean by necessity.

**Founding the Third Path x2** is now maindecked, and it earns the slot on this shell's own terms
rather than on fidelity grounds:

- `{1}{U}` in a deck that is 43% blue pips;
- chapter I free-casts an instant or sorcery of mana value 1 or 2 — **5 of 22** cards qualify;
- chapter II reads `"Target player mills four cards"`, which is **direct Tolarian Terror discount
  fuel** and can be pointed at yourself;
- chapter III exiles an instant or sorcery from the graveyard and copies it;
- and it is a fifth and sixth Zur animation target.

It displaced Shadow Prophecy, whose Domain X the same grill showed is only 3 about 69–81% of the
time. The honest cost of that swap is card draw: Sheoldred's draw-trigger count falls from 6
supporting cards to 4.

### THE ZUR PACKAGE: SMALLEST, BUT MOST DURABLE

| Build | Animation targets | Of which permanent |
|---|---|---|
| Animated Removal (sibling A) | 11 | 5 |
| Saga Chapters (sibling B) | 11 | 4 |
| **This deck** | **6** | **4** |

This is the leanest package of the three and the highest *proportion* of permanent targets. Citizen's
Arrest and Prayer of Binding carry no `"Sacrifice after III"` clause, so unlike most of the sibling
decks' targets they never expire. The assembly gate scores the role at 6 raw / **5.2 effective**
copies, p = 0.89.

### THE MANA, AND A CORRECTION WORTH READING

The mana audit reports PASS on aggregate colour share. That measure is **structurally blind to double
pips**, and this deck had a real problem hiding behind it: `{2}{B}{B}` — Sheoldred and Extinguish the
Light — was castable on curve **51.1%** of the time on the play.

Worse, the fix in the first draft was bought for the wrong reason. It spent a rare on **Adarkar
Wastes**, justified by "this build is blue-primary and carries Sphinx of Clear Skies `{3}{U}{U}`."
Simulation of the actual base showed Adarkar contributed **0.0 points to Sphinx** and **0.0 to
Sheoldred**; its entire value landed on the *white* double pip. The land was earning, but the
argument for it was wrong in both premises.

**Caves of Koilos** now holds that slot. Measured across six candidate 18-land configurations:

| | Zur T3 | Citizen's Arrest T3 | Sheoldred T4 | Sphinx T5 |
|---|---|---|---|---|
| Adarkar Wastes (first draft) | 68.9% | 56.4% | **51.1%** | 59.1% |
| **Caves of Koilos (final)** | **70.3%** | 56.4% | **58.2%** | 56.6% |

The grill re-ran these independently on the final base and reproduced every cell to within 0.4 points, and confirmed the choice: taking the more aggressive black fix instead (also cutting an Island for a Swamp) would push Sheoldred to 63.6% but cost 3.7 points on Sphinx and 3.2 on Founding the Third Path — shifting sources toward the colour whose demand had just *fallen*.

Net **+10.6 aggregate points** from a single card change. A second correction from the same audit:
this base is **not** "all-tapland" — 12 of 18 lands enter untapped, and the measured tapland penalty
is under one point on every spell tested. The constraint here is **colour density**, not tapped
lands.

### A TENSION UNIQUE TO THIS PLAN

All six animation targets read `"exile ... until this enchantment leaves the battlefield."` Animating
one moves it from the enchantment axis — which this cube answers with **3 cards in total**, only
Destroy Evil in these colours — onto the creature axis, where removal is everywhere. And if the
animated creature dies, **the exiled permanent comes back**. Zur's hexproof grant covers targeted
removal while he lives, but not sweepers.

Practical rule: don't animate an Arrest or a Prayer that is holding something important unless you
need the attack that turn.

### PLAY PATTERN

Hold up interaction; both Prayer of Binding and Ertai Resurrected have flash, so passing with mana up
is rarely a wasted turn. Use Cut Down and Extinguish the Light on early threats and save the exile
enchantments for what they can't kill. Founding the Third Path wants to enter at chapter I when you
have a cheap spell to free-cast, or later purely for the mill if you're setting up a Terror. The
Terrors are the real clock — by the mid-game they cost three or four mana for a 5/5 with ward 2 — and
Zur is the card that turns a stabilised board into a lethal one.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Control):  [PASS]
  MV distribution (22 nonland):  1:2  2:7  3:5  4:5  5:1  7:2
Assembly (thesis turn 9, 16 cards seen):  [PASS]
  PASS  threat: 7 copies (effective 6.6: Tolarian Terror@0.8, Tolarian Terror@0.8) → p=0.94 (need ≥ 0.75)
  PASS  animation_target: 6 copies (effective 5.2: Founding the Third Path@0.6, Founding the Third Path@0.6) → p=0.89 (need ≥ 0.75)
  PASS  removal: 8 copies → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 82% (need ≥ 80%)   3 lands by turn 3: 94%
  play by turn: T1 30%  T2 89%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. This build spends its four discretionary rare/mythic slots on standalone card quality (Sheoldred, Sphinx of Clear Skies, Ertai Resurrected, Adarkar Wastes) rather than on a sweeper, and the only sweepers available in WUB are Choking Miasma at {1}{B}{B} and Temporary Lockdown, a rare. Mitigating would cost either a rare slot or a third double-pip demand. Choking Miasma x2 boards in.
  OK        single_large_threat: Citizen's Arrest, Prayer of Binding, Extinguish the Light, Ertai Resurrected
  OK        noncreature_permanents: Prayer of Binding
  OK        stack: Essence Scatter, Ertai Resurrected
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour (dossier structural_census: GY hate = 0), so the class is unanswerable by construction rather than by omission. Partial mitigation only: Citizen's Arrest and Prayer of Binding read 'exile ... until this enchantment leaves the battlefield' rather than destroy, denying recursion targets in the first place.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | 18 lands is the highest count of the three sibling builds, so flood is the most likely of the six modes, and several cards convert it. Zur's '{1}{W}: Target non-Aura enchantment you control becomes a creature' is a repeatable sink with 6 legal targets. Tolarian Terror x2 turns surplus mana into a 5/5 at any point and gets cheaper as the game goes long. Impulse x2 bottoms three cards per cast, and Founding the Third Path chapter I free-casts a spell. |
| screw | mitigation | 18 lands and the goldfish simulation reports 94% for three lands by turn 3 -- the best of the three builds. 7 of 22 nonland cards cost 2 or less (Cut Down x2, Phyrexian Missionary x2, Impulse x2, Essence Scatter x1), and Phyrexian Missionary is a 2/3 with printed 'Lifelink' that holds the ground on two lands. Keepable hands 82%. |
| decapitation | mitigation | This is the build that answers decapitation structurally rather than with rebuys, and it is the main reason to choose it over its siblings. Zur is NOT load-bearing: all four of this deck's discretionary rare and mythic slots bought cards that win without him -- Sheoldred, the Apocalypse ('Whenever an opponent draws a card, they lose 2 life'), Sphinx of Clear Skies (5/5 flying, ward 2) and Ertai Resurrected -- alongside Tolarian Terror x2, a common 5/5 with ward 2. Removing Zur costs this deck an upgrade on four removal spells, not its win condition. Phyrexian Missionary x2 kicked still returns him from the graveyard if you want him back. |
| gas-out | mitigation | 7 of 22 nonland cards are card-positive, self-replacing or recursive: Impulse x2 (selection), Phyrexian Espionage x2 ('Draw two cards', kicked for a discard), Founding the Third Path x2 (chapter I free-casts an instant or sorcery with mana value 1 or 2 from hand -- 5 of 22 cards qualify -- and chapter III exiles one from the graveyard and copies it), and Sphinx of Clear Skies, whose combat-damage trigger reveals cards and splits them. Sheoldred converts the opponent's refuelling into 2 life loss per card while gaining 2 on every card this deck draws. |
| raced | mitigation | Evasion is the cube's largest threat class (51 cards, 20.7% density) and this build is the slowest of the three to deploy, so racing is the main risk. The honest position, corrected by the grill: Tolarian Terror is a 5/5 with 'Ward {2}' but has NEITHER flying NOR reach, so it cannot block the 31 pool cards with flying at all -- the first draft's claim that it 'blocks almost anything in the cube profitably' was wrong. Only 2 of the deck's 8 creature cards can block a flier (Zur, a 1/4 flier, and Sphinx of Clear Skies, a 5/5 flier). The real mitigation is therefore lifegain plus interaction, not blockers: Phyrexian Missionary x2 has printed 'Lifelink', Prayer of Binding gains 2 on entry, Extinguish the Light gains 3 when the creature killed had mana value 3 or less, Sheoldred gains 2 per card drawn, and every Zur-animated body has lifelink while Zur lives. Eight pieces of interaction buy the turns, and Choking Miasma x2 boards in against the widest boards. |
| disruption-fizzle | mitigation | This deck has no single critical turn to interact with -- that is the structural payoff of building the Zur package lean. There is no combo turn and no assembly requirement; the plan is to answer threats one at a time and deploy one of five redundant finishers (Sheoldred, Sphinx of Clear Skies, Tolarian Terror x2, or an animated enchantment). Ertai Resurrected has 'Flash' and Prayer of Binding has 'Flash', so the deck can hold up interaction and still develop. Zur's animation also has no duration clause, so removal in response to the {1}{W} activation still leaves the body behind. One tension worth naming, which the grill surfaced and the first draft did not: animating a Citizen's Arrest or Prayer of Binding moves it from the enchantment axis -- which this cube answers with only 3 cards in total, one of them in these colours -- onto the creature axis, where removal is abundant, and both read 'exile ... until this enchantment leaves the battlefield', so killing the animated creature RETURNS the exiled permanent. Zur's hexproof grant covers targeted removal while he lives but not sweepers. The practical rule: do not animate an Arrest or a Prayer that is holding something important unless you need the attack that turn. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Haughty Djinn | CUT as a weak keystone by the shape judge. 'Haughty Djinn's power is equal to the number of instant and sorcery cards in your graveyard' means it is a 0/4 flier on curve and only becomes a clock several turns later; the assigned 'evasive clock' role is unsupported. Its cost-reduction half is real (it would discount 10 of 22 nonland cards), but the rare slot was worth more as Adarkar Wastes. |
| Djinn of the Fountain | CUT by the builder: at {4}{U}{U} it would be a fourth double-blue card alongside Sphinx of Clear Skies {3}{U}{U}, and the sibling grills quantified double-pip castability as this archetype's real constraint. |
| Ertai's Scorn | RE-ARGUED after the grill withdrew the reason originally given. It was cut as 'a third double-blue card', which measurement falsified: {1}{U}{U} is castable 69.9% on curve here while Citizen's Arrest {1}{W}{W}, which the deck runs at 2 copies, is 56.4%. Blue is this deck's best-supported colour. The honest reason it is still out is slot count at 22 nonland cards, and that Essence Scatter plus Ertai Resurrected already cover the stack class at two mana and at flash speed respectively -- not that {U}{U} is expensive, because it is not. |
| Leyline Binding | The largest animation target in the pool (MV 6 = a 6/6) and Domain-discounted to {2}{W} here, but it is a RARE and this build deliberately spends all four discretionary rare slots on cards that win without Zur. It is the first card to try if you want to make the Zur package larger. |
| Temporary Lockdown | A rare, and 'exile each nonland permanent with mana value 2 or less' would also exile this deck's own Phyrexian Missionary x2 (MV 2) -- 2 of 22 nonland cards. |
| Liliana of the Veil | The judge rejected its assigned 'attrition axis' role in the rejected sketch: '+1: Each player discards a card' is symmetric and punishes a controller that wants to hold up flash answers (Prayer of Binding, Ertai Resurrected). A mythic slot competing with Sheoldred and Sphinx of Clear Skies. |
| Serra Paragon | 'cast a permanent spell with mana value 3 or less from your graveyard' is excellent, and it is the recursion engine in both sibling builds -- but this build's thesis spends rares on standalone threats, and with only 4 animation targets and no Sagas there is far less in the graveyard worth rebuying. |
| Ratadrabik of Urborg | The judge found its role contingent: 'Whenever another legendary creature you control dies' needs another legend, and this list contains only Zur and Ertai Resurrected, so 'redundancy for Zur' is only reachable after Zur has already died -- a rare slot staked on losing the mandatory mythic. |
| Aether Channeler | A rare in a spent budget; its three modes are all reasonable but none of them is an enchantment, so it contributes nothing to the Zur package, and it is not a finisher. |
| Anointed Peacekeeper | A rare 3/3 that taxes one named card {2}; the budget went to cards that end the game. |
| Archangel of Wrath | A rare 3/4 'Flying, lifelink'; a fine body, but Sphinx of Clear Skies is a bigger flier with ward 2 for one more mana and the budget allows only one of them. |
| Silver Scrutiny | 'Draw X cards' with flash at X<=3 is a real draw-go refuel, but it is a rare that does not affect the board, and this build's thesis is that the rare slots buy threats. |
| Caves of Koilos | NO LONGER EXCLUDED -- this card is in the final mainboard. It was excluded in the first draft in favour of Adarkar Wastes, on the reasoning that this build is blue-primary and carries Sphinx of Clear Skies {3}{U}{U}. The grill falsified that by simulation (Adarkar contributed 0.0 points to Sphinx and 0.0 to Sheoldred), and the swap was made. Entry retained only to record the reversal. |
| Thran Portal | Would fix all three colours and add a 4th Domain type for Shadow Prophecy and Sphinx of Clear Skies, but it is a rare, its mana abilities cost an additional 1 life, and it is only conditionally untapped. |
| Plaza of Heroes | '{T}: Add one mana of any color. Spend this mana only to cast a legendary spell' fixes Zur and Ertai Resurrected specifically, and its exile ability grants a legendary creature hexproof and indestructible -- but it is a rare and the cap is spent. |
| Crystal Grotto | Declined despite being a common: '{1}, {T}: Add one mana of any color' taxes coloured mana one generic, so it is not a free coloured source. It also carries no basic land type, so it would contribute 0 to Domain for Shadow Prophecy and Sphinx of Clear Skies. |
| Micromancer | 'search your library for an instant or sorcery card with mana value 1' has 2 legal targets in this list (Cut Down x2). Too thin for a four-mana 3/3. |
| Academy Wall | 'Whenever you cast an instant or sorcery spell, you may draw a card. If you do, discard a card' is filtering, not card advantage, and a 0/5 defender does not advance a build whose thesis is deploying a clock. |
| Gibbering Barricade | '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' needs fodder; this deck runs 7 creature cards and wants all of them. |
| Elas il-Kor, Sadistic Pilgrim | Printed deathtouch on a two-drop is real, but its 'Whenever another creature you control enters' trigger does not fire on Zur animations, and Phyrexian Missionary's printed lifelink plus a Zur rebuy is the better use of the same slot. |
| Phyrexian Rager | 'you draw a card and you lose 1 life' on a 2/2 is fine filler, but the six Engine slots are all instants and sorceries specifically so they fuel Tolarian Terror's cost reduction; a creature does not. |
| Frostfist Strider | {3}{U}{U} is a fourth double-blue card, and a 4/4 ward 2 is strictly worse here than Sphinx of Clear Skies or a discounted Tolarian Terror. |
| Vohar, Vodalian Desecrator | '{T}: Draw a card, then discard a card' loops cards, but a 1/2 body does not block anything in this cube and this build's engine slots are already instants that feed Tolarian Terror. |
| Tribute to Urborg | RE-ARGUED. The original rejection quoted only half the card ('Target creature gets -2/-2') and claimed Cut Down covers the same range. Both were wrong: the full text adds 'Kicker {1}{U} ... an additional -1/-1 until end of turn for each instant and sorcery card in your graveyard', which scales without bound off the same graveyard the deck already builds for Tolarian Terror, whereas Cut Down caps at total power and toughness 5 or less. It is out on slot count, and because kicked it costs {2}{U}{B} across three colours; it is a legitimate swap for Extinguish the Light if the metagame is full of large creatures. |
| Protect the Negotiators | 'Counter target spell unless its controller pays {1} for each creature you control' scales with a board this control deck does not reliably have -- it runs 7 creature cards and often controls 0-1 early. |
| The Cruelty of Gix | The best Saga in the pool and the centrepiece of the sibling Saga build, but a rare that does not fit a shell with only 4 animation targets and no other Sagas to support it. |
| The Phasing of Zhalfir | Cut from the sibling Saga build during its grill for three oracle-grounded reasons and not revisited here: chapters I/II phase-outs return when chapter III sacrifices the Saga, chapter III's token clause upgrades a wide token board, and {2}{U}{U} is the least castable cost available. |
| Urza Assembles the Titans | Chapter II wants a planeswalker; the whole WUB pool contains exactly 2, both mythic. |
| The World Spell | Costs {5}{G}{G}; green is not castable in these colours at all. |
| Vesuvan Duplimancy | Triggers only on 'a spell that targets only a single artifact or creature you control'; this list runs 0 such spells. |
| Combat Research | An Aura. Zur's ability reads 'Target NON-AURA enchantment', so it is explicitly excluded from the animation plan. |
| Stronghold Arena | A rare whose trigger requires 'creatures you control deal combat damage to a player', so it is inert until the board is already winning; the shape judge flagged exactly this circularity on the sibling build. |
| Karn's Sylex | Symmetric mass removal that eats this deck's own enchantments and creatures; also a mythic slot. |
| Impede Momentum | 'Tap target creature and put three stun counters on it' delays rather than answers, and a control deck at thesis turn 9 needs permanent answers. |
| Shadow Prophecy | CUT during grill repair for Founding the Third Path. Its Domain X is 3 only when all three basic land types are on the battlefield -- 69.0% on turn 3, 75.7% turn 4, 81.3% turn 5 -- so 'look at 3, take 2' is often 'look at 2'. Founding the Third Path's chapter II mill-4 is better Tolarian Terror fuel. The honest cost of the swap: Sheoldred's draw-trigger support falls from 6 cards to 4. |
| Adarkar Wastes | CUT during grill repair for Caves of Koilos. It was originally bought on the reasoning that this deck is blue-primary and carries Sphinx of Clear Skies {3}{U}{U}; simulation of the actual base showed Adarkar contributes 0.0 points to Sphinx and 0.0 to Sheoldred, with its entire measured value landing on the WHITE double pip. Only one untapped nonbasic is affordable under the cap and Caves patches the thin colour. |
| Braids's Frightful Return | MISSING FROM THE ORIGINAL SWEEP -- the grill was right to flag this. {2}{B} uncommon Saga costing nothing against the rare cap. Chapter II returns a creature card from the graveyard to hand (a Zur/Sheoldred rebuy) and chapter III is an edict clause that beats hexproof and ward, which this deck has 0 answers to. Excluded on slot count only: at 22 nonland cards it would displace interaction, and Founding the Third Path was the better fit for a blue-primary shell whose engine is Tolarian Terror fuel. This is the first card to try if you want more Saga density in this build. |
| Love Song of Night and Day | MISSING FROM THE ORIGINAL SWEEP -- flagged by the grill. {2}{W} uncommon Saga, zero rare cost, a 3/3 animation target. Chapter I's 'You and target opponent each draw two cards' is symmetric, and unlike the sibling builds this deck runs Sheoldred at only 1 copy in 40, so the flip to 4 damage is the exception. Excluded on slot count and on the symmetry being unpaid-for here. |
| Stall for Time | NOT SURFACED ORIGINALLY -- raised by the grill. {2}{W} common: 'Tap up to two target creatures ... Draw a card', a cantripping fog against the cube's largest threat class (evasion, 51 cards / 20.7%). Out on slot count; a reasonable sideboard addition if racing is the recurring problem. |
| Tolarian Geyser | NOT SURFACED ORIGINALLY -- raised by the grill. {2}{U} common: 'Return target creature to its owner's hand. Draw a card.' The deck has 0 answers to a resolved threat with ward or hexproof, and bouncing sidesteps both. Rona's Vortex covers this role from the sideboard at one mana. |
| Runic Shot | NOT SURFACED ORIGINALLY -- raised by the grill. {W} uncommon: 'Destroy target tapped creature', with no size cap, covering exactly the band Cut Down's 'total power and toughness 5 or less' leaves open. It is a sorcery, so it answers attackers rather than blockers -- which a draw-go deck being attacked satisfies by default. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  18 / 18 recommended  [PASS]
Avg CMC:     3.18   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.91 adj [MV 3.18 vs 2.5, 0 accel, scaled N/60]  ->  18 lands  (P(2-4 in 7) = 0.789)

Color Balance (core):  [PASS]
  B  demand  26.7%  prod  44.4%  gap -17.7pp  [OK]
  U  demand  43.3%  prod  50.0%  gap  -6.7pp  [OK]
  W  demand  30.0%  prod  44.4%  gap -14.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons up to 2 copies each
        Max common count is 2 (Citizen's Arrest 2, Impulse 2, Phyrexian Espionage 2, Tolarian Terror 2, Destroy Evil 2); Extinguish the Light 1, Artillery Blast 1, Essence Scatter 1 main + 1 side = 2.
[PASS] Uncommons up to 2 copies each
        Max uncommon count is 2 (Cut Down 2, Prayer of Binding 2, Phyrexian Missionary 2, Founding the Third Path 2, Choking Miasma 2); Knight of Dusk's Shadow 1, Rona's Vortex 1.
[PASS] Rares/mythics up to 1 copy each
        All five rare/mythic cards appear exactly once.
[PASS] Max 5 rares/mythics total across mainboard + sideboard
        Exactly 5: Zur, Eternal Schemer (M), Sheoldred, the Apocalypse (M), Sphinx of Clear Skies (M), Ertai Resurrected (R), Caves of Koilos (R). The sideboard is entirely commons/uncommons as a direct consequence.
[PASS] All cards from the cube mainboard pool
        Phase 5C check 2 verified every name by exact string match against the working pool; 0 phantoms.
[PASS] 40-card mainboard, 10-card sideboard
        40 and 10 exactly.
```