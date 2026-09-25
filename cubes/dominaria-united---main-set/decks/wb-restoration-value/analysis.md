---
deck_name: "wb-restoration-value"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-19T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  4x Plains                 
  10x Swamp                 
  1x Caves of Koilos        WB dual, untapped, deals 1 damage to you
  2x Sunlit Marsh           WB dual (Plains Swamp), enters tapped
```

### CREATURES (13)

```
CMC  Card                           Qty  Color  Role            Rar
1    Cult Conscript                 x2   B      Threat/Enabler  U
2    Elas il-Kor, Sadistic Pilgrim  x2   WB     Threat          U
3    Eerie Soultender               x2   B      Engine/Enabler  C
3    Gibbering Barricade            x2   B      Engine/Outlet   C
4    Monstrous War-Leech            x2   B      Threat          U
4    Serra Paragon                  x1   W      Engine/Payoff   M
4    Sheoldred, the Apocalypse      x1   B      Threat          M
7    Writhing Necromass             x1   B      Threat          C
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                     Qty  Color  Role                 Rar
1    Bone Splinters           x2   B      Interaction/Enabler  C
1    Cut Down                 x2   B      Interaction          U
1    Urborg Repossession      x1   B      Engine               C
2    Destroy Evil             x1   W      Interaction          C
4    Sheoldred's Restoration  x2   B      Engine/Payoff        U
```

### OTHER SPELLS (2)

```
CMC  Card                 Qty  Color  Role            Rar
3    Liliana of the Veil  x1   B      Engine/Enabler  M
5    The Cruelty of Gix   x1   B      Engine/Payoff   R
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in                                                                                                                                                                                                                                                   Rar
Destroy Evil             x1   W      Hate — Second copy in against the cube's 18 enchantments (Sagas, Citizen's Arrest, Leyline Binding) and toughness-4+ green fat.                                                                                                                                           C
Knight of Dusk's Shadow  x1   B      Hate — Against the 22 lifegain cards — 'Your opponents can't gain life' blanks Mossbeard Ancient, Silverback Elder, Prayer of Binding and mirror-match kicked Sheoldred's Restoration.                                                                                    U
Choking Miasma           x2   B      Hate — Against wide token boards (Tokens is the cube's 2nd-largest cluster at 38 cards); 'All creatures get -2/-2' — board out Cult Conscript and Elas il-Kor when bringing it in. Cast unkicked for {1}{B}{B}; the {G} kicker is declined, so it needs no green source.  U
Citizen's Arrest         x2   W      Hate — Against single large threats and bombs the removal suite misses (Silverback Elder, Defiler of Vigor, Sphinx of Clear Skies).                                                                                                                                       C
Extinguish the Light     x2   B      Flex — Against planeswalkers and against creatures the mainboard's conditional removal misses — 'Destroy target creature or planeswalker' is the deck's only unconditional answer that costs no creature.                                                                 C
Prayer of Binding        x2   W      Hate — Against artifacts (15 in cube) and noncreature permanents — the only nonland catch-all W/B has; flash makes it live against Vehicles and planeswalkers.                                                                                                            U
```

## ANALYSIS

### DECK IDENTITY

A W/B graveyard-value midrange deck. It stocks its own graveyard on purpose (Eerie Soultender's ETB mill, Gibbering Barricade's repeatable sacrifice, Bone Splinters' additional cost, Liliana's symmetric discard) and then spends that yard three different ways: Sheoldred's Restoration and The Cruelty of Gix return a body to the battlefield, Serra Paragon rebuys the MV<=3 half every turn, and Monstrous War-Leech and Writhing Necromass read the yard directly off the cast side so no reanimation spell is needed at all. Elas il-Kor turns every creature that dies on the way there into direct damage, so filling the yard and building the clock are one action. It is deliberately built around LOW-mana-value reanimation targets, because Sheoldred's Restoration unkicked charges life equal to the returned card's mana value.

### THE INVERTED REANIMATOR — WHY THIS DECK WANTS *SMALL* TARGETS

The single most important line of text in this deck is the one everybody skips. Sheoldred's Restoration, unkicked, reads *"you lose that much life"* — where "that much" is the **mana value of the card you returned**. In every other Magic format the reanimator instinct is to bin the biggest thing you own. Here that instinct is a life-total tax.

Against this list's 13 creature cards:

| Returned card | MV | Unkicked life cost | What you get |
|---|---|---|---|
| Cult Conscript | 1 | 1 | 2/1 that returns itself again |
| Elas il-Kor | 2 | 2 | 2/2 deathtouch + drain engine |
| Eerie Soultender | 3 | 3 | mill 3 again |
| Gibbering Barricade | 3 | 3 | 2/4 + a repeatable sac outlet |
| Serra Paragon | 4 | 4 | 3/4 flier + a per-turn rebuy engine |
| Sheoldred, the Apocalypse | 4 | 4 | 4/5 deathtouch + 2-life-per-draw drain |
| Monstrous War-Leech | 4 | 4 | scales with the yard it was just in |
| Writhing Necromass | 7 | **7** | 5/5 deathtouch |

**12 of 13** creature cards cost 4 life or less to return. That is why the top of the curve is a 4-mana mythic rather than a 6-drop bomb, and why Tyrannical Pitlord — a 6/6 flier that the sweep did surface — is not here. Kicking for `{2}{W}` flips the sign entirely (*"you gain life equal to that card's mana value"*), which is the deck's late-game mode and the reason white is not run as a splash.

### THREE ROUTES OUT OF ONE GRAVEYARD

The graveyard is spent three structurally different ways, which is what makes the plan survive removal:

1. **To the battlefield** — Sheoldred's Restoration ×2 and The Cruelty of Gix chapter III. Cruelty reads *"a graveyard"*, not *your* graveyard, so it also steals whatever the removal suite just killed.
2. **To the hand** — Urborg Repossession for `{B}`, Serra Paragon once per turn (capped at MV≤3, which reaches **9 of 23** nonland cards), Eerie Soultender's exile ability.
3. **Off the cast side, with no reanimation spell at all** — Writhing Necromass gets cheaper per creature card in the yard (**13 of 23**), and Monstrous War-Leech's power and toughness equal *the greatest mana value among cards in your graveyard* (**8 of 23** nonland cards are MV≥4, one of them MV 7).

Route 3 is the answer to "what if they kill every Restoration." It is also why the `decapitation` failure mode is a mitigation rather than an acceptance.

### THE SKELETON TRAP

Cult Conscript returns itself for `{1}{B}` — but only *"if a **non-Skeleton** creature died under your control this turn."* Cult Conscript is a `Creature — Skeleton Warrior`. It **cannot** sacrifice itself to Bone Splinters and then buy itself back off that death. The fodder has to be one of the other **11 of 13** creature cards. This is exactly why Gibbering Barricade ×2 is in the list: `{2}{B}, Sacrifice a creature: You gain 1 life and draw a card` is the deck's only *repeatable* way to guarantee a non-Skeleton death on demand, and it draws a card while doing it.

### THE MANABASE COSTS A RARE SLOT, ON PURPOSE

With only 5 rare/mythic cards allowed across both boards, spending one on a **land** looks extravagant. It isn't. The deck's pip demand is 24 black to 5 white — a 5-pip splash by the numbers — but 2 of those 5 white pips are `{W}{W}` on Serra Paragon, the locked build's #1 keystone. The cube's only free W/B duals are Sunlit Marsh ×2, and both read *"This land enters tapped."* Caves of Koilos is the sole untapped W/B source in the entire pool. Ratadrabik of Urborg lost its slot to pay for it: its trigger needs *another **legendary** creature* to die, and only **3 of 23** nonland cards qualify.

### KNOWN WEAKNESS: THE AIR

The cube has **51 evasion cards** (20.6% density — the largest threat class in the dossier). This deck's only flier is Serra Paragon. The ground is very well defended (two deathtouch blockers in Elas il-Kor, two 2/4 defenders in Gibbering Barricade, five removal spells all at MV≤2), but a deck that goes over the top is the matchup to fear. Citizen's Arrest ×2 and Prayer of Binding ×2 in the sideboard are the answer, and they come in aggressively.

One environmental note that cuts in this deck's favour: the dossier's graveyard-hate probe matched **0 cards**, and no exile-from-graveyard text appears anywhere in the W/B/G/U pool. Nobody in this cube can attack the resource this deck is built on.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:7  2:3  3:5  4:6  5:1  7:1
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 5.9: The Cruelty of Gix@0.8, Serra Paragon@0.6, Writhing Necromass@0.8, Monstrous War-Leech@0.85, Monstrous War-Leech@0.85) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.3: Gibbering Barricade@0.9, Gibbering Barricade@0.9, Bone Splinters@0.8, Bone Splinters@0.8, Liliana of the Veil@0.9) → p=0.87 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 80%  T2 92%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: Three sweepers are mainboard-legal for this deck - Choking Miasma ({1}{B}{B} unkicked, 'All creatures get -2/-2'), Drag to the Bottom ({2}{B}{B}, 'Each creature gets -X/-X where X is 1 plus the number of basic land types'), and Temporary Lockdown ({1}{W}{W}, 'exile each nonland permanent with mana value 2 or less'). All three are symmetric against a list whose engine is cheap: 11 of 23 nonland cards cost 2 or less and 8 of the 11 creature cards have toughness 3 or less, so any of them kills Cult Conscript x2, Elas il-Kor x2, Eerie Soultender x2 and Urborg Repossession's targets. Maindecking one would cost the recursion loop that is the deck's identity; Choking Miasma is in the sideboard for the matchups where that trade is correct.
  OK        single_large_threat: Bone Splinters, Destroy Evil, Cut Down
  OK        noncreature_permanents: Destroy Evil
  CONCEDED  stack: No card in W or B in this cube counters a spell; the pool's only counterspells (Negate, Essence Scatter, Ertai's Scorn, Protect the Negotiators) are blue. Mitigating would mean adding a third colour to a manabase already carrying {W}{W} on Serra Paragon alongside {B}{B} on three cards.
  CONCEDED  graveyard: The cube contains zero graveyard hate in any colour (dossier structural_census: gy_hate = 0, and no exile-from-graveyard text appears anywhere in the W/B/G/U pool). There is no card to mitigate with; the resource is uncontested for both players.
```

_No WARN-tier structural flags were raised; `structural_responses` is empty._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands become action through three mana sinks that cost no cards: Gibbering Barricade's '{2}{B}, Sacrifice a creature: You gain 1 life and draw a card' (repeatable every turn), Eerie Soultender's '{4}{B}, Exile this card from your graveyard: Return another target creature card from your graveyard to your hand', and the {2}{W} kicker on Sheoldred's Restoration. Liliana of the Veil's '+1: Each player discards a card' converts a surplus land in hand into graveyard fuel. Cult Conscript's '{1}{B}: Return this card from your graveyard to the battlefield' is deliberately NOT counted here - the Challenger correctly noted its 'non-Skeleton creature died this turn' condition is exactly what a flood lacks. |
| screw | mitigation | 10 of 23 nonland cards cost 2 or less (Cut Down x2, Bone Splinters x2, Cult Conscript x2, Elas il-Kor x2, Urborg Repossession, Destroy Evil), and 7 of those are castable off a single land. The goldfish sim returns 84% keepable hands and 88% on 3 lands by turn 3, T1 play 80%. Serra Paragon's 'you may play a land from your graveyard' recovers a land binned by Eerie Soultender's mill or Liliana's +1. |
| decapitation | mitigation | There is no single key piece: the payoff role holds 7 copies across 5 different cards (Sheoldred's Restoration x2, The Cruelty of Gix, Serra Paragon, Writhing Necromass, Monstrous War-Leech x2), assembly p=0.85 by turn 5. Two of those five - Monstrous War-Leech and Writhing Necromass - read the graveyard off the CAST side and need no reanimation spell at all, so answering every Restoration does not turn the graveyard off. |
| gas-out | mitigation | The deck refuels from the graveyard rather than from draw steps. Gibbering Barricade x2 turn a spent body into a card every turn ('You gain 1 life and draw a card'); Serra Paragon generates a card per turn from the yard; Cult Conscript x2 return themselves for {1}{B} with no card spent; Urborg Repossession returns a creature card from the graveyard to hand for {B}; Eerie Soultender x2 return a creature to hand from exile; and Sheoldred turns every draw into 2 life. An empty hand with a stocked yard is a working position for this deck. |
| raced | mitigation | All 5 removal spells cost MV<=2 (Cut Down x2 at {B}, Bone Splinters x2 at {B}, Destroy Evil at {1}{W}), two deathtouch blockers in Elas il-Kor x2 trade up against anything, Gibbering Barricade x2 are 2/4 defenders that wall the ground, and four life sources (Gibbering Barricade, Urborg Repossession, kicked Sheoldred's Restoration, Sheoldred's 'Whenever you draw a card, you gain 2 life') buy turns. The known gap is the air: the cube has 51 evasion cards and this list's only flier is Serra Paragon, which is why Citizen's Arrest x2 and Prayer of Binding x2 sit in the sideboard. |
| disruption-fizzle | mitigation | The critical turn is a 4-mana Sheoldred's Restoration. If it is answered, the reanimation target is still in the graveyard - nothing is exiled except Restoration itself ('Exile Sheoldred's Restoration') - so the second copy, The Cruelty of Gix chapter III ('Put target creature card from a graveyard onto the battlefield'), Serra Paragon, Urborg Repossession, or simply casting a discounted Writhing Necromass / a large Monstrous War-Leech all retry the same conversion off the same yard. The plan survives and retries rather than folding. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Bortuk Bonerattle | 6 mana, and 'Return that card to the battlefield if its mana value is less than or equal to the number of basic land types among lands you control' — a W/B manabase supports at most 2 basic land types, so it returns only MV<=2 creatures to the battlefield. Strictly worse than the 4-mana Sheoldred's Restoration here. |
| Balduvian Atrocity | The reanimation clause requires the {R} kicker and then reads 'Sacrifice it at the beginning of the next end step' — a temporary MV<=3 body. Unkicked it is a vanilla 2/3 menace. |
| Rivaz of the Claw | Its graveyard clause is 'you may cast a Dragon creature spell from your graveyard'; 0 of the pool's 3 Dragons are castable in W/B. Blank text here. |
| Shadow-Rite Priest | '{3}{B}{B}, {T}, Sacrifice another Cleric: Search your library for a black creature card, put it onto the battlefield' costs 5 mana plus a Cleric and a turn of setup, and it fetches from the LIBRARY, not the graveyard — it does not use the resource this pipeline builds. |
| Defiler of Faith | 5/5 for 5 whose text 'Those spells cost {W} less' only reduces white pips; this list's white pips concentrate in Sheoldred's Restoration's kicker and Archangel, so the discount reaches few cards. Costs one of only 5 rare/mythic slots. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' is symmetric and this deck runs cheap enablers (Cult Conscript, Elas il-Kor, Toxic Abomination) that it would exile alongside the opponent's. |
| Leyline Binding | Domain cost reduction: a W/B manabase reaches 2 basic land types, so it costs {3}{W} — a 4-mana sorcery-speed-equivalent answer that Prayer of Binding beats at the same cost with flash. |
| Drag to the Bottom | Domain sweeper giving -X/-X where X = 1 + basic land types; at 2 types that is -3/-3, which kills this deck's own Elas il-Kor, Cult Conscript, Eerie Soultender and Phyrexian Missionary. |
| Anointed Peacekeeper | A taxing 3/3 that names one card; it does nothing for the graveyard plan and would consume one of the 5 rare/mythic slots. |
| Valiant Veteran | 'Other Soldiers you control get +1/+1' — this list contains 0 Soldiers, and its graveyard ability also only pumps Soldiers. |
| Serra Redeemer | 'Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature' — a counters payoff, not a graveyard one; rare slot better spent on the reanimation package. |
| Guardian of New Benalia | 'Discard a card: This creature gains indestructible until end of turn. Tap it' is a genuine discard outlet, but it taps the creature and costs a rare slot; Liliana of the Veil's +1 does the binning repeatedly and adds disruption. |
| Wingmantle Chaplain | 'create a 1/1 white Bird creature token with flying for each creature with defender you control' — this list runs 0-1 defenders, so it makes 0-1 Birds. |
| Blight Pile | 'each opponent loses X life, where X is the number of creatures with defender you control' — 1 of 23 nonland cards in this list has defender. X would be 1. |
| Argivian Cavalier | Enlist + a Soldier token is a fine limited body but generates no graveyard value and does not fit the Threats/Payoffs budget above the reanimation targets. |
| Captain's Call | Three 1/1 Soldiers is sacrifice fodder, but 4 mana for zero board impact against removal-heavy decks is too slow at competitive power. |
| Battle-Rage Blessing | A combat trick; this deck's interaction budget is better spent on unconditional removal that also answers cards it cannot race. |
| Knight of Dusk's Shadow | 'Your opponents can't gain life' is a sideboard-grade effect, and its pump is mana-hungry; no graveyard interaction. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.37 adj [MV 2.78 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  82.8%  prod  76.5%  gap  +6.3pp  [OK]
  W  demand  17.2%  prod  41.2%  gap -24.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] 1a mainboard size — 40 (need 40)
[PASS] 1b sideboard size — 10 (need 10)
[PASS] 2 exact-name membership — all 24 distinct names found
[PASS] 3 copy limits — all within per-rarity caps (basics exempt)
[PASS] 3b rare/mythic cap (<=5) — 5: Caves of Koilos x1, Liliana of the Veil x1, Serra Paragon x1, Sheoldred, the Apocalypse x1, The Cruelty of Gix x1
[PASS] 4 colour usability (best_mode) — all nonland cards usable in WB; off-cast modes: none
[PASS] 5 splash cap — splashed cards: none; per-splash-colour counts {} (splash_colors=[])
[PASS] 5-selftest validator rejects a known-bad card (Silverback Elder) — fixture correctly identified as an illegal splash
```
