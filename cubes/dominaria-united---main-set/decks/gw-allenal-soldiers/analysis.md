---
deck_name: "gw-allenal-soldiers"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-08-18T23:50:42Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  x5   Forest                     basic
  x8   Plains                     basic
  x2   Radiant Grove              ({T}: Add {G} or {W}.) This land enters tapped.
  x1   Thran Portal               This land enters tapped unless you control two or fe
```

### CREATURES (14)

```
CMC Card                       Qty   Color  Role                             Rar
1   Llanowar Stalker           x2    G      Payload/Payoff                   C
2   Juniper Order Rootweaver   x1    W      Payload/Payoff                   C
2   Llanowar Loamspeaker       x1    G      Infrastructure/Consistency       R
2   Quirion Beastcaller        x1    G      Payload/Payoff                   R
2   Resolute Reinforcements    x2    W      Payload/Payoff                   U
2   Valiant Veteran            x1    W      Payload/Payoff                   R
3   Argivian Cavalier          x2    W      Payload/Payoff                   C
3   Deathbloom Gardener        x1    G      Infrastructure/Consistency       C
3   King Darien XLVIII         x1    GW     Payload/Payoff                   R
3   Queen Allenal of Ruadach   x2    GW     Payload/Payoff                   U
```

### INSTANTS & SORCERIES (8)

```
CMC Card                       Qty   Color  Role                             Rar
1   Strength of the Coalition  x2    G      Payload/Payoff                   U
2   Destroy Evil               x2    W      Interaction/Disruption           C
3   Scout the Wilderness       x2    G      Infrastructure/Consistency       C
4   Captain's Call             x2    W      Payload/Payoff                   C
```

### OTHER SPELLS (2)

```
CMC Card                       Qty   Color  Role                             Rar
3   Citizen's Arrest           x1    W      Interaction/Disruption           C
3   Love Song of Night and Day x1    W      Infrastructure/Consistency       U
```

## SIDEBOARD (10)

```
Card                       Qty   Color  Role / When to board in                      Rar
Bite Down                  x2    G      Interaction/Disruption â€” vs a single large C
Broken Wings               x2    G      Interaction/Disruption â€” vs fliers, artifa C
Griffin Protector          x2    W      Payload/Payoff â€” vs ground stalls and life C
Magnigoth Sentry           x2    G      Interaction/Disruption â€” vs decks whose cl C
Prayer of Binding          x2    W      Interaction/Disruption â€” vs any resolved n U
```

## ANALYSIS
### DECK IDENTITY
A Selesnya token swarm that counts creatures rather than mana. Queen Allenal of Ruadach's power and toughness each equal the number of creatures you control, and her replacement effect staples a 1/1 Soldier onto every token event — so eight token-generating cards each produce one more body than they print, and each of those bodies also makes Allenal a point bigger. King Darien XLVIII's 'Other creatures you control get +1/+1' and Valiant Veteran's Soldier anthem turn the resulting board into lethal damage on turn six. This is deliberately the LEAST Elf-y of the four Elf builds: Leaf-Crowned Visionary was cut by all three independent sketchers on the same oracle ground — its anthem reads 'Other Elves' while every token this deck makes is a Soldier.
**This is the least Elf-y of the four Elf decks, and that is a finding rather than a failure.** Three independent pool-blind sketchers were each handed Leaf-Crowned Visionary and each cut it, all on the same oracle ground: the anthem reads 'Other ELVES you control get +1/+1', and every token this deck makes is a 1/1 white **Soldier**. King Darien XLVIII's 'Other creatures you control get +1/+1' costs the same one rare slot and hits the Elves *and* the fourteen-to-twenty-two tokens a game produces. When an archetype's named lord loses to a generic lord on a count, the count wins.

**Read Queen Allenal's replacement effect carefully — it is one Soldier per token EVENT, not per token.** Captain's Call goes from three tokens to four, not to six. Scout the Wilderness kicked goes two to three; Resolute Reinforcements and Argivian Cavalier each go one to two. Across the nine token-event cards that is roughly fourteen base tokens becoming twenty-two — and because her power and toughness *equal* the number of creatures you control, every one of those extra bodies is also a point of Allenal.

**The manabase was wrong and the self-grill caught it.** The first draft ran Crystal Grotto ×2 and counted them as both a white and a green source for the deck's hardest cast, Queen Allenal at {G}{W}{W} on turn three. Crystal Grotto reads '{T}: Add {C}. **{1}**, {T}: Add one mana of any color' — producing one coloured pip costs the Grotto's tap plus a mana from another land, so on three lands it caps the turn at two coloured pips against a three-pip cost. It contributes nothing to that cast. Both Grottos became basics, and Llanowar Loamspeaker moved maindeck because at MV2 it is the only any-colour source in this colour pair that can actually be online by turn three. The measured improvement was about four percentage points on the key cast, and the audit's colour gaps tightened from −10.0pp/−8.8pp to −3.8pp/−2.5pp.

**The anthems are a 55% proposition; Allenal is not.** Only two of the twenty-four nonland cards are static anthems and both are singleton rares, so you see at least one by turn six a little over half the time. The deck does not need them: a turn-six board of Allenal plus three creatures plus five tokens is nine creatures, which makes her a 9/9 on her own text. Strength of the Coalition ×2 — kicked for {2}{W}{G}, 'put a +1/+1 counter on each creature you control' — was added during the grill precisely because its counters are permanent and instant-speed, surviving the removal spell that a static anthem does not.

| Token source | Base | With Allenal |
|---|---|---|
| Resolute Reinforcements | 1 token | 2 |
| Argivian Cavalier | 1 token | 2 |
| Scout the Wilderness (kicked) | 2 tokens | 3 |
| Captain's Call | 3 tokens | 4 |
| Love Song of Night and Day, ch. II | 1 Bird | Bird + Soldier |
| King Darien, {3}{G}{W} | 1 token | 2, repeatable |

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (24 nonland):  1:4  2:8  3:10  4:2
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.9: Valiant Veteran@0.7, Llanowar Stalker@0.6, Llanowar Stalker@0.6) → p=0.82 (need ≥ 0.75)
  PASS  enabler: 9 copies → p=0.96 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 83% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 45%  T2 92%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No sweeper exists in G/W in this pool. This is the one deck of the four where a wide opposing board is not purely bad news: Queen Allenal's toughness equals YOUR creature count, so she blocks a swarm as well as she attacks into one. The plan is to be the wider board.
  OK        single_large_threat: Citizen's Arrest, Destroy Evil
  OK        noncreature_permanents: Destroy Evil
  CONCEDED  stack: Neither green nor white has a counterspell in this pool; the deck's answer to a key spell is to have already built a board that survives it.
  CONCEDED  graveyard: The dossier reports 0 graveyard-hate cards in the entire cube, so no colour can cover this class.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | King Darien XLVIII's '{3}{G}{W}: Put a +1/+1 counter on King Darien and create a 1/1 white Soldier creature token' is a repeatable mana sink that makes TWO bodies with Allenal out (the token event triggers her replacement effect), so a surplus land turns directly into Allenal power. Juniper Order Rootweaver's {G} kicker and Scout the Wilderness's {1}{W} kicker also give extra mana somewhere to go. |
| screw | mitigation | Scout the Wilderness x2 reads 'Search your library for a basic land card, put it onto the battlefield tapped' — the deck's own land-finder, with 13 basics to find, and it is a token event when kicked. Llanowar Loamspeaker (MV2) and Deathbloom Gardener (MV3) each add any colour. Only 2 of the 24 nonland cards cost more than three mana. |
| decapitation | mitigation | Queen Allenal is run at 2 copies (she is uncommon, so this is legal) precisely because she is the payoff; the second is the redraw when the first is answered. King Darien and Valiant Veteran are two further independent anthems, and the nine token-generating cards keep producing bodies whether or not any anthem is on the battlefield. The real anti-decapitation card is Strength of the Coalition x2, maindecked in the Phase 9 repair: 'If this spell was kicked, put a +1/+1 counter on each creature you control' leaves PERMANENT counters spread across the board, so answering the payoff or the anthem afterwards does not take the damage back. Quirion Beastcaller's 'When this creature dies, distribute X +1/+1 counters among any number of target creatures you control' does the same on a smaller scale. (An earlier draft named Take Up the Shield here; that card was cut from the sideboard during the same repair and no longer exists in this list.) |
| gas-out | mitigation | Nine cards produce more than one body each, which is card-economy rather than card-draw, and after the Phase 9 grill the list also carries the one card in the pool that is BOTH: Love Song of Night and Day, 'I — You and target opponent each draw two cards. II — Create a 1/1 white Bird creature token with flying. III — Put a +1/+1 counter on each of up to two target creatures.' Chapter II is a token event Queen Allenal upgrades to two bodies, and the Bird is the only flier the maindeck owns. The earlier draft filed this mode as an acceptance whose stated cost was 'a value engine IN PLACE OF a token maker' — that cost was false, because this card is both, in-colour, at zero rare cost. Stated limit: read ahead makes the chapters sequential, so the draw and the Bird arrive on different turns, and chapter I draws the opponent two as well. |
| raced | mitigation | Queen Allenal blocks as well as she attacks — her toughness also equals the creature count, so a wide board makes her an enormous blocker, and the Soldier tokens chump profitably while the anthems make each one a real body. Against the cube's 51 evasion cards the deck boards in Magnigoth Sentry x2 (4/4 reach) and Broken Wings x2 ('Destroy target artifact, enchantment, or creature with flying'). |
| disruption-fizzle | mitigation | The critical turn is an attack with a wide board, not a single spell, so a counterspell has one target among many. Citizen's Arrest exiles the blocker that would otherwise eat the alpha strike, and Quirion Beastcaller's 'When this creature dies, distribute X +1/+1 counters among any number of target creatures you control' means removal on the grown body leaves its counters spread across the Soldiers. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Leaf-Crowned Visionary | The Elf lord this whole archetype family is named for, and the honest verdict here is that it is the WEAKEST of the four builds' payoffs: its anthem reads 'Other ELVES', and this deck's tokens are Soldiers and Birds. It also demands {G}{G} on turn 2 from the cube's worst-fixing colour pair, which has no untapped dual at all. It fights King Darien's unconditional anthem for the same slot and loses. EXCLUDE — and this is the reason pipeline 4 is the least Elf-y of the four. |
| Llanowar Loamspeaker | A rare Elf that fixes any colour — genuinely good here given the fixing problem, but it competes with King Darien, Valiant Veteran, Serra Redeemer and Quirion Beastcaller for five rare slots and adds no bodies. SIDEBOARD-CONSIDERATION. |
| Thran Portal | 'enters tapped unless you control two or fewer other lands... Mana abilities cost an additional 1 life' — a rare land that is untapped exactly on turns 1-3. Real value in a two-colour deck with no untapped dual, but a rare slot is 20% of the deck's rare equity and the token payoffs need it more. SIDEBOARD-CONSIDERATION. |
| Love Song of Night and Day | Chapter I reads 'You AND target opponent each draw two cards' — symmetrical card draw in an aggro deck, and the Bird arrives on chapter II, a turn later. EXCLUDE. |
| Charismatic Vanguard | '{4}{W}: Creatures you control get +1/+1 until end of turn' — a five-mana activation for a temporary anthem in a deck that wants to be attacking by turn 4. The 3/2 body is fine; the ability is not the reason. EXCLUDE. |
| Benalish Faithbonder | {1}{W} 1/3 vigilance enlist — a defensive statline in a deck whose payoff counts creatures but needs them to attack. EXCLUDE. |
| Mesa Cavalier | {2}{W} 2/1 flier that gains 2 life — the flying is real, but 2/1 dies to everything and the lifegain does nothing for a creature-count payoff. EXCLUDE. |
| Coalition Skyknight | {3}{W} 2/2 flier with enlist — four mana for a 2/2 in a deck that wants its four-mana slot to be Captain's Call (three, or four, bodies). EXCLUDE. |
| Juniper Order Rootweaver | {1}{W} 2/2 whose kicker {G} puts a single +1/+1 counter — a vanilla 2/2 most of the time and no token. EXCLUDE. |
| Take Up the Shield | A +1/+1 counter with lifelink and indestructible on ONE creature; a go-wide deck wants Strength of the Coalition's kicked mode, which counters the whole board. EXCLUDE. |
| Join Forces | 'Untap up to two target creatures. They each get +2/+2' — a two-creature trick in a deck built around many small ones. EXCLUDE. |
| Magnigoth Sentry | {3}{G} 4/4 reach — a fine body but it makes no token, takes no anthem synergy beyond the generic one, and costs four. SIDEBOARD. |
| Anointed Peacekeeper / Danitha, Benalia's Hope / Temporary Lockdown | White rares outside the token plan; Temporary Lockdown in particular ('exile each nonland permanent with mana value 2 or less') would exile this deck's own Soldier tokens and half its curve. EXCLUDE. |
| Meria's Outrider / Radha, Coalition Warlord / Nael, Avizoa Aeronaut / Meria, Scholar of Antiquity | Elves whose costs include {R} or {U}. EXCLUDE. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.42   Ramp cards: 4   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.77 adj [MV 2.42 vs 2.5, 4 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  40.0%  prod  43.8%  gap  -3.8pp  [OK]
  W  demand  60.0%  prod  62.5%  gap  -2.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] 1 mainboard size  40 vs 40
  [PASS] 1 sideboard size  10 vs 10
  [PASS] 2 exact-name membership  []
  [PASS] 3 copy limits  []
  [PASS] 3b rare/mythic cap <=5  5 rares/mythics: ['King Darien XLVIII', 'Llanowar Loamspeaker', 'Quirion Beastcaller', 'Thran Portal', 'Valiant Veteran']
  [PASS] 4 colour usability via best_mode  []
  [PASS] 5 splash cap  []
```
