---
deck_name: "gw-ground-voltron"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GW"
format: "40-card"
built_at: "2026-08-11T18:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  7x Forest
  5x Plains
  2x Radiant Grove  (dual, enters tapped)
  1x Evolving Wilds  (fetches a basic, tapped)
  1x Temple Garden  (dual, untapped for 2 life)
```

### CREATURES (10)

```
CMC  Card                    Qty   Color Role                 Rar
  1  Figure of Fable         x1    GW    Threat/Payoff        R
  1  Kinsbaile Aspirant      x1    W     Threat/Payoff        U
  1  Virulent Emissary       x2    G     Threat/Payoff        U
  2  Eclipsed Kithkin        x2    GW    Threat/Payoff        U
  2  Thoughtweft Lieutenant  x2    GW    Threat/Payoff        U
  3  Adept Watershaper       x1    W     Protection           R
  3  Dawn's Light Archer     x1    G     Threat/Payoff        C
```

### INSTANTS & SORCERIES (7)

```
CMC  Card                    Qty   Color Role                 Rar
  1  Blossoming Defense      x1    G     Interaction          U
  2  Assert Perfection       x2    G     Interaction          C
  2  Thoughtweft Charge      x1    G     Interaction          U
  3  Crib Swap               x2    W     Interaction          U
  3  Unforgiving Aim         x1    G     Interaction          C
```

### OTHER SPELLS (7)

```
CMC  Card                    Qty   Color Role                 Rar
  1  Evershrike's Gift       x2    W     Threat/Payoff        U
  2  Stalactite Dagger       x2    C     Threat/Payoff        C
  3  Gilt-Leaf's Embrace     x2    G     Threat/Payoff        C
  4  Pitiless Fists          x1    G     Threat/Payoff        U
```

## SIDEBOARD (10)

```
Card                    Qty   Color Role / When to board in  Rar
Keep Out                x2    W     Hate — Against attacking decks (an attacking flier is tapped, so 'deals 4 damage to target tapped creature' reaches it) and against enchantment decks via the second mode.  [C]
Protective Response     x2    W     Flex — Against a single large attacker or blocker — convoke 'Destroy target attacking or blocking creature'; a deck attacking into one blocker creates the 'blocking' condition itself.  [U]
Pyrrhic Strike          x2    W     Hate — Against the cube's 11 artifacts and 21 enchantments, and against 3+ MV creatures; blight 2 to take both modes — but that cost kills most of this deck's own bodies, so take one mode by default.  [U]
Rooftop Percher         x2    C     Hate — Against the cube's 39 graveyard cards — 'exile up to two target cards from graveyards'; doubles as the deck's only 3/3 flying blocker.  [C]
Selfless Safewright     x1    G     Flex — Against removal-dense decks — flash + convoke, and 'Other permanents you control of that type gain hexproof and indestructible until end of turn'; naming Kithkin covers the Auras on the carrier too, since Auras are permanents.  [R]
Winnowing               x1    W     Hate — Against wide boards — 'For each player, you choose a creature that player controls. Then each player sacrifices all other creatures they control that don't share a creature type with the chosen creature they control.' Naming Kithkin keeps 8 of this deck's 12 bodies (6 Kithkin creatures + both changeling Stalactite Dagger tokens); convoke pays for it off the same bodies.  [R]
```

## ANALYSIS

### DECK IDENTITY

A two-colour ground Voltron deck that wins by attaching Auras and Equipment to one cheap creature and pushing it through the only blocker that matters. The kill card is Gilt-Leaf's Embrace, which is simultaneously the stat buff, the evasion (trample) and the removal-blank (indestructible) at flash speed — the one card in the pool that answers a removal spell and converts a chump block on the same turn. Adept Watershaper covers every ATTACK for free ('Other tapped creatures you control have indestructible', and attacking taps) — note the two limits its own text imposes: it says OTHER, so it never protects itself, and it says TAPPED, so a carrier sitting untapped on the opponent's turn or declared as a blocker is uncovered. The deck has no counterspells and no mainboard mass removal; its interaction is seven cheap protection, pump and exile spells plus the fight stapled to Pitiless Fists.


### THE CENTRAL INTERACTION: DEATHTOUCH + TRAMPLE

The single highest-leverage line in this deck is not the biggest Aura — it is Virulent Emissary wearing trample. A creature with both deathtouch and trample assigns only **1 damage per blocker** as lethal and tramples the entire remainder to the face. Virulent Emissary is a `{G}` 1/1, so a turn-1 Emissary into a turn-3 Gilt-Leaf's Embrace is a 3/1 that a 6/6 blocker cannot profitably stop: 1 damage kills the blocker, 2 go through, and the Emissary is indestructible for the turn.

Trample sources against this list: Gilt-Leaf's Embrace ×2 (grants it on ETB) and Thoughtweft Lieutenant ×2 (grants it on every Kithkin entering) — **4 of 24 nonland cards** can hand the Emissary trample, and Thoughtweft Lieutenant does it repeatedly without spending a card.

### WHY THE COLOURLESS EQUIPMENT MATTERS MORE THAN ITS STATS

Stalactite Dagger is a `{2}` +1/+1 — unremarkable in isolation. In this list it does four jobs at once:

| Job | Mechanism |
|---|---|
| Spare carrier | Its ETB token is a body, so the Equipment is never stranded when the first carrier dies — unlike an Aura, which goes to the graveyard with it |
| Kithkin count | The token has changeling (*"It's every creature type"*), so it enters as a Kithkin and fires Thoughtweft Lieutenant |
| ETB trigger fodder | 5 creature copies read "whenever another creature you control enters"; the token turns each on |
| Type-fixing | *"Equipped creature is all creature types"* — which makes any carrier a legal Winnowing survivor and a legal Selfless Safewright target |

### THE ADEPT WATERSHAPER LOCK, AND ITS TWO HOLES

*"Other tapped creatures you control have indestructible."* Attacking taps, so the suited attacker is immune to destroy-based removal every combat, for zero mana and zero cards. Two limits are written into the card and are worth playing around deliberately:

- It says **other** — Watershaper never protects itself, so it is the one creature the lock does not cover.
- It says **tapped** — a carrier is *unprotected* while blocking (blockers do not tap) and while idling untapped on the opponent's turn. Against a removal-heavy opponent, attacking is safer than holding back.

Neither indestructible nor hexproof answers exile or −X/−X, and the cube contains both.

### KITHKIN DENSITY IS LOAD-BEARING IN THREE PLACES

Six of 10 creatures are Kithkin, and both Stalactite Dagger tokens enter as Kithkin — **8 of 12 bodies**. That single number is what makes three separate cards work: Thoughtweft Lieutenant's trample grant, Kinsbaile Aspirant's *"behold a Kithkin or pay {2}"* additional cost, and Winnowing out of the sideboard (naming Kithkin spares 8 of your 12 bodies while the opponent keeps one creature type).

### THE MANA IS THE REAL CONSTRAINT

Every nonbasic dual in this cube enters tapped — there are zero untapped-capable duals for any colour pair. Temple Garden (*"you may pay 2 life. If you don't, it enters tapped"*) is the sole exception in G/W, which is why it is worth one of only five rare slots in a deck that wants a turn-1 play. Tapped lands are held to 3 of 16 (19%) for that reason.

### PLAY PATTERN

Deploy a cheap body turn 1–2, hold `{G}` or `{2}{G}` open rather than jamming the Aura on your own turn. Gilt-Leaf's Embrace has flash — casting it in response to a removal spell both saves the creature (indestructible) and buffs it, and casting it after blockers are declared converts a chump block into face damage. The deck loses to the Aura being cast into an untapped opponent and answered on the spot; it wins by making every Aura a two-for-one in the other direction.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:7  2:9  3:7  4:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies → p=0.90 (need ≥ 0.75)
  PASS  enabler: 10 copies (effective 9.8: Figure of Fable@0.8) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 76%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: CORRECTED after the grill: mass removal DOES exist for these colours — Winnowing ({4}{W}{W}, 'each player sacrifices all other creatures they control that don't share a creature type with the chosen creature they control') is mono-white and, naming Kithkin, spares 8 of this deck's 12 bodies. It is in the SIDEBOARD, not the mainboard, because at MV 6 (convoke-reduced only by tapping the same creatures the deck wants attacking) it resolves after the stated thesis turn of 5. The mainboard's answer to a wide board remains Gilt-Leaf's Embrace's 'trample and indestructible until end of turn', which converts chump blocks into face damage.
  OK        single_large_threat: Crib Swap, Assert Perfection, Pitiless Fists
  OK        noncreature_permanents: Unforgiving Aim
  CONCEDED  stack: Verified across all 75 G/W-identity cards in the pool: there are zero counterspells in these colours. The deck interacts only on the battlefield; Gilt-Leaf's Embrace and Blossoming Defense are held as instant-speed responses to a removal spell resolving, not to it being cast.
  CONCEDED  graveyard: No G/W mainboard graveyard hate exists at this curve. Rooftop Percher ('exile up to two target cards from graveyards') is colourless and sits in the sideboard for the cube's 39 graveyard cards; maindecking a 5-MV card in a deck with a turn-5 thesis is the cost not paid.
```

No WARN-tier flags were raised on either the pre-grill or the post-repair run: curve, assembly, goldfish and coverage all returned PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Figure of Fable absorbs surplus mana across three staged activations totalling 10 mana ({G/W} -> 2/3, {1}{G/W}{G/W} -> 4/5, {3}{G/W}{G/W}{G/W} -> 7/8 with protection from each of your opponents), and Stalactite Dagger's 'Equip {2}' turns extra lands into re-suiting a fresh carrier after the first is answered. Three of 24 nonland cards are genuine mana sinks. |
| screw | mitigation | Seven of 24 nonland cards cost 1 and nine cost 2, so two-land hands function. Eclipsed Kithkin x2 digs directly for the third land ('look at the top four cards of your library. You may reveal a Kithkin, Forest, or Plains card from among them and put it into your hand' — and Radiant Grove and Temple Garden are both typed Land — Forest Plains, so they are live reveals too) and Evolving Wilds fixes either colour. Goldfish sim: 84% keepable, 84% on three lands by turn 3. |
| decapitation | mitigation | The key piece is the suited creature, and the deck carries four independent ways to keep it alive: Adept Watershaper ('Other tapped creatures you control have indestructible') covers every attack for zero mana; Gilt-Leaf's Embrace x2 grants indestructible at flash speed; Blossoming Defense x1 grants hexproof for {G}; and Evershrike's Gift x2 returns from the graveyard for '{1}{W}, Blight 2'. Six of 24 nonland cards. Limits recorded honestly: Watershaper covers only TAPPED creatures, so a blocker or a carrier idling on the opponent's turn is uncovered, and indestructible stops neither exile nor -X/-X. |
| gas-out | accepted | REWRITTEN after the grill. This list holds 0 of 24 nonland cards tagged Cards: Net-Positive or Cards: Self-Replacing. The true cost of mitigating further is NOT 'cutting an Aura or a carrier' — the Challenger correctly showed the pool offers Thoughtweft Charge in the combat-trick slot, and it was added. The cost actually paid was one of the two Blossoming Defense copies, i.e. one of the deck's two hexproof effects, which is the thesis's own named answer to the 2-for-1. That is the trade, accepted at 1-for-1 and not further. Correction to the previous entry: Evershrike's Gift is NOT re-castable 'indefinitely' — its cost is '{1}{W}, Blight 2', i.e. two -1/-1 counters on a creature you control, and only Adept Watershaper (3/4) survives that at base stats; 9 of 10 creature copies and 11 of 12 bodies die to paying it once (only Adept Watershaper 3/4 survives at 1/2; Dawn's Light Archer 4/2 goes to 2/0 and dies). It is a one-shot rebuy that usually costs the board, and it is planned as such. |
| raced | mitigation | REWRITTEN after the grill. The cube's fastest clocks are evasive (threat_profile: 41 evasion cards, 15.8%, 13 of them blue), and the previous entry named two blockers — Virulent Emissary and Adept Watershaper — whose oracle text contains no flying and no reach, so they could not block the threat named. Repaired: Dawn's Light Archer ({2}{G}, 'Flash / Reach', 4/2) was maindecked and is the only body in the list that can block a flier; at flash speed it ambushes and kills any flier with toughness 4 or less. Alongside it the deck answers the flier itself with Unforgiving Aim x1 ('Destroy target creature with flying') and Crib Swap x2 (unconditional exile at instant speed) = 4 of 24 nonland cards that address an evasive attacker, up from 3. Virulent Emissary x2 remains a deathtouch blocker against GROUND races only. |
| disruption-fizzle | mitigation | The kill turn is a combat step, not a spell chain, so there is no chain for a counterspell to break mid-sequence. One piece of interaction on that turn meets Blossoming Defense ({G}, hexproof) or Gilt-Leaf's Embrace ({2}{G} flash, indestructible) held up as the response; if the opponent instead counters the protection spell, the second copy of each (4 protection cards total in 24 nonland) retries on the following turn, and Adept Watershaper's static needs no spell at all and so cannot be countered. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bark of Doran | CUT AT PHASE 9. Its damage-swap needs equipped creature's toughness > power, and it grants only +0/+1 itself, so the margin is exactly +1 on 6 of the 7 creatures that qualified. This deck runs four Aura copies that grant +X/+0 — Gilt-Leaf's Embrace x2 ('+2/+0') and Evershrike's Gift x2 ('+1/+0'), 4 of 8 payoff cards — every one of which inverts power past toughness and reduces Bark of Doran to a plain +0/+1. The deck's own named kill card disables it. |
| Crossroads Watcher | CUT AT PHASE 9 to make room for Assert Perfection x2 and Dawn's Light Archer. A {2}{G} 3/3 with native trample and a Kithkin type line is a fine carrier, but it was the least load-bearing creature once the deck needed cheap one-sided removal and a reach blocker. First card back in if you want more raw trample. |
| Kinsbaile Aspirant (2nd copy) | Trimmed to 1 at Phase 9. The 'behold a Kithkin or pay {2}' additional cost means a turn-1 Aspirant on an empty board either reveals a Kithkin from hand or costs 3 mana; one copy is enough to draw the turn-1 draw without flooding on a conditional one-drop. |
| Blossoming Defense (2nd copy) | Trimmed to 1 at Phase 9 to fit Thoughtweft Charge. This is the explicit price paid in the gas-out acceptance: one of the deck's two hexproof effects, which is the thesis's own named answer to the 2-for-1. |
| Bristlebane Battler | RARE, cut at Step 0 by the shape judge. {1}{G} 6/6 trample ward {2} — but it 'enters with five -1/-1 counters on it' and sheds one per other-creature ETB, so it is a 1/1 on the turn a lowest-curve deck most wants a carrier. Costs a rare slot for a body that is at its worst early. |
| Kinbinding | RARE. 'Creatures you control get +X/+X, where X is the number of creatures that entered the battlefield under your control this turn' — a go-wide anthem. This deck rarely deploys more than one creature per turn, so X is 0 or 1 when it matters. Wrong axis for a one-creature-tall deck. |
| Champion of the Clachan | RARE. {3}{W} 4/5 flash whose 'Other Kithkin you control get +1/+1' would pump 8 of 12 bodies — genuinely close. Excluded on the behold-and-exile additional cost (card disadvantage a Voltron deck cannot absorb) and on the 5-rare cap, where Winnowing and Adept Watershaper won the slots. The strongest rare on the bubble. |
| Brigid's Command | RARE. {1}{G}{W} 'choose two' with a fight mode and a +3/+3 mode, and it is itself a Kithkin card for Kinsbaile Aspirant's behold. Excluded because Pitiless Fists already supplies fight-plus-permanent-buff and the rare budget is fully spent. |
| Ajani, Outland Chaperone | MYTHIC. '+1: Create a 1/1 Kithkin token' and '-2: deals 4 damage to target tapped creature'. A token-per-turn planeswalker is a go-wide payoff; a Voltron deck wants that mana on Auras and protection. |
| Kinscaer Sentry | RARE. Its attack trigger cheats in a creature with mana value X or less 'where X is the number of attacking creatures you control' — a deck that attacks with one creature has X=1, so it cheats in at most a one-drop. |
| Bloom Tender | MYTHIC. 'For each color among permanents you control, add one mana of that color' taps for exactly 2 in a two-colour deck. Real acceleration, but it spends a mythic slot on mana. |
| Mutable Explorer | RARE. {2}{G} 1/1 changeling that makes a Mutavault token — the token is a colourless manland, not coloured fixing, and a 1/1 is a poor Aura carrier for a rare slot. |
| Rhys, the Evermore | RARE. The persist grant is a one-shot save; Burdened Stoneback grants indestructible twice without a rare slot. |
| Slumbering Walker | RARE. A 4/7 reanimator engine at one creature per end step — grindy midrange in a deck that resolves by turn 5. |
| Spry and Mighty | RARE. 'X is the difference between the chosen creatures' powers' is large in a Voltron deck, but at 5 mana sorcery speed it does nothing on the turn removal arrives. |
| Sapling Nursery | RARE. The indestructible mode is real but 8 mana (minus Forests) is far outside a turn-5 clock. |
| Curious Colossus | MYTHIC. Seven mana. 'Each creature target opponent controls ... has base power and toughness 1/1' is excellent against blockers, but the thesis turn is 5. |
| Aurora Awakener | MYTHIC. Its Vivid ETB scales with colour count; X is 2 in a two-colour deck. Seven mana for a body the deck does not need. |
| Morningtide's Light | MYTHIC. 'Exile any number of target creatures ... return those cards to the battlefield tapped' would exile your own carrier, and Auras fall off — it destroys the deck's own investment. |
| Selfless Safewright | RARE — SIDEBOARD ONLY. Flash + convoke, 'Other permanents you control of that type gain hexproof and indestructible' (and Auras are permanents, so the suit is covered too). Maindecking a 5-MV card breaks the locked lowest-curve lens; it comes in against removal-dense decks. |
| Spiral into Solitude | SIDEBOARD CONSIDERATION, declined at Phase 9. A 2-mana 'can't attack or block' with a later exile mode, but it leaves the creature on board; Crib Swap exiles unconditionally at instant speed for one more mana. |
| Clachan Festival | SIDEBOARD CONSIDERATION. 'create two 1/1 Kithkin tokens' plus a repeatable token maker — two Kithkin entering off one card would fire 7 of 24 nonland cards twice. Declined as a go-wide card in a one-creature-tall deck, but the best option if you want to pivot this list toward Kinbinding/anthems. |
| Prismabasher | 'Vivid — up to X target creatures get +X/+X, where X is the number of colors among permanents you control'. X = 2 here, so a 6-mana 6/6 with a +2/+2 rider. |
| Wildvine Pummeler | 'costs {1} less for each color among permanents you control' — X = 2, so it still costs {4}{G}. |
| Thoughtweft Imbuer | {3}{W} 0/5 whose 'attacks alone' trigger is literally the Voltron attack pattern, but X is the Kithkin count and a 0/5 body is the anti-thesis of the aggressor role at 4 mana. |
| Bristlebane Outrider | {3}{G} 3/5 'can't be blocked by creatures with power 2 or less' — the evasion clause fails against any power-3 blocker, and the +2/+0 needs another creature to have entered that turn. |
| Safewright Cavalry | 'can't be blocked by more than one creature' is not evasion — a single chump blocker still eats the attack, which is exactly what a Voltron deck is trying to avoid. |
| Springleaf Drum | Harvested from the rejected resilience sketch and declined: it taps a creature you control for mana, and this deck's only win route is attacking with a creature. |
| Personify | 'Exile target creature you control, then return that card to the battlefield' — blinking a carrier makes every Aura on it fall off. Directly destroys the deck's investment. |
| Flock Impostor | Same anti-synergy: its ETB returns your own creature to hand, discarding every Aura attached to it. |
| Timid Shieldbearer | '{4}{W}: Creatures you control get +1/+1' is a five-mana go-wide sink; this deck attacks with one creature. |
| Surly Farrier | 'Activate only as a sorcery' means it cannot save a creature in combat, and tapping the Farrier removes a blocker. |
| Gallant Fowlknight | A one-shot team pump whose Kithkin first-strike rider needs a wide Kithkin board this deck does not build. |
| Reluctant Dounguard | {2}{W} 4/4 that starts as a 2/2 and only sheds counters when other creatures enter — a go-wide dependency. |
| Liminal Hold | 4-mana sorcery-speed exile against Crib Swap's 3-mana instant exile. |
| Lofty Dreams | The only card the deterministic splash filter qualified, but its cost is {3}{U}{U} — two off-colour pips, not one — and its convoke can only be paid by blue creatures, of which this deck has zero. Declined. |
| Barbed Bloodletter | {1}{B} Equipment with flash and free auto-attach — mechanically the best cheap Equipment in the cube, but black is outside core_colors and the W/B and B/G duals are one common each. |
| Shimmerwilds Growth | An Aura that enchants a LAND, not a creature. Mana fixing dressed as an Aura; it adds nothing to a creature's stats. |
| Blossombind / Noggle the Mind | Blue Auras, outside core_colors, and both are removal Auras rather than buffs. |
| Mirrormind Crown | RARE. 'the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature' — a real engine with Stalactite Dagger and Clachan Festival, but {4} to cast plus {2} to equip is 6 mana before it copies anything, against a turn-5 thesis, and it would cost a rare slot. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.08   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.56 adj [MV 2.08 vs 2.5, 0 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  61.9%  prod  62.5%  gap  -0.6pp  [OK]
  W  demand  38.1%  prod  50.0%  gap -11.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool base: cube_mainboard (ecl)                                    PASS
Commons/uncommons max 2 copies                                     PASS
Rares/mythics max 1 copy                                           PASS
Max 5 rare/mythic cards (main+side): 5 used -> Adept Watershaper, Figure of Fable, Selfless Safewright, Temple Garden, Winnowing   PASS
Every card present in the cube by exact name                       PASS
Colour usability via effective_cost.best_mode                      PASS
Mainboard = 40                                                    PASS
Sideboard = 10                                                    PASS
```
