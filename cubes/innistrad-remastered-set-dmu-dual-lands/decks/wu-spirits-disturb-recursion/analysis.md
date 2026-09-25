---
deck_name: "wu-spirits-disturb-recursion"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-08-26T21:15:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  8x Island
  6x Plains
  1x Deserted Beach  This land enters tapped unless you control two or more other lands. {T}: Add {W} or {U}.
  2x Idyllic Beachfront  WU dual. This land enters tapped.
```

### CREATURES (15)

```
CMC  Card                                     Qty  Color  Role                Rar
  1  Lantern Bearer // Lanterns' Lift         x2   U      threat              C
  1  Mausoleum Wanderer                       x1   U      threat/interaction  R
  2  Metallic Mimic                           x1   C      payoff              R
  2  Niblis of the Urn                        x2   W      threat/interaction  U
  2  Twinblade Geist // Twinblade Invocation  x2   W      payoff              U
  3  Drogskol Shieldmate                      x1   W      threat/interaction  C
  3  Nebelgast Herald                         x2   U      payoff              U
  3  Spell Queller                            x1   WU     interaction/threat  R
  4  Tower Geist                              x2   U      infrastructure      C
  5  Battleground Geist                       x1   U      payoff              C
```

### INSTANTS & SORCERIES (6)

```
CMC  Card              Qty  Color  Role                    Rar
  1  Essence Flux      x1   U      interaction/protection  C
  1  Silent Departure  x1   U      interaction             C
  3  Geistlight Snare  x2   U      interaction             U
  3  Lingering Souls   x2   W      enabler                 U
```

### OTHER SPELLS (2)

```
CMC  Card                    Qty  Color  Role         Rar
  1  Gryff's Boon            x1   W      payoff       U
  3  Imprisoned in the Moon  x1   U      interaction  C
```

## SIDEBOARD (10)

```
Card                  Qty  Color  Role / When to board in                                                                                                                   Rar
Cathar Commando       x2   W      vs artifacts (24 in cube) and enchantments (25); Flash keeps it live on the opponent's turn                                               C
Valorous Stance       x2   W      vs the 4 sweepers and vs any toughness-4+ blocker walling the air force                                                                   U
Angelic Purge         x1   W      vs a resolved must-answer permanent of any type; the sacrifice cost is paid by a Lingering Souls token                                    C
Bound by Moonsilver   x2   W      vs a single large threat and the 13 Werewolves ('can't attack, block, or transform'); its sacrifice cost is paid by a spent Disturb body  C
Slayer of the Wicked  x1   W      vs Vampire (23) / Werewolf (13) / Zombie (15) — 51 creatures across the cube                                                              U
Soul-Guide Gryff      x2   W      vs graveyard decks (75 cards / 27.1% density) — and it is a Spirit, so it still triggers Nebelgast Herald                                 C
```

## ANALYSIS

### DECK IDENTITY

WU Spirits built so that the deck's threats keep coming back. Six of the twenty-three nonland cards cast or activate a second time from the graveyard — Lantern Bearer and Twinblade Geist return as Disturb Auras, Gryff's Boon re-attaches for {3}{W}, Silent Departure has flashback. Seventeen of the twenty-three put a Spirit onto the battlefield, the highest tribal density of the three builds in this series, so Nebelgast Herald strips a blocker on nearly every deployment and Battleground Geist plus Metallic Mimic convert the wide evasive board into lethal. Removal does not answer this deck's Disturb threats so much as convert them into Auras — but note the limit: EXILE removal takes both halves at once, and recasting an Aura is not a creature entering, so the Aura half pumps without tapping.

### THE DENOMINATORS

Every claim below is a count against this 23-card nonland list, recomputed by script after the self-grill (which found four of the pre-grill figures wrong).

| Denominator | Count |
|---|---|
| Nonland cards | 23 |
| Creature cards | 15 |
| …that fly **on their front face** | 11 of 15 |
| …that are Spirits | 14 of 15 (15 once Metallic Mimic names the type) |
| Nonland cards that put a Spirit onto the battlefield | **17 of 23** — the highest tribal density of the three builds |
| Cards that cast or activate a **second time** from the graveyard | 6 of 23 |
| Cards that can put an enchantment onto the battlefield | 6 of 23, but only **2 unconditionally** |
| True card flow | 2 of 23 (Tower Geist), and it selects rather than draws |

### THE MOST IMPORTANT RULE IN THIS ARCHETYPE

**Recasting a Disturb Aura is not a creature entering the battlefield.**

Nebelgast Herald reads `Whenever this creature **or another Spirit you control enters**, tap target creature an opponent controls`. When Twinblade Geist dies and you pay `Disturb {2}{W}`, what returns is `Twinblade Invocation` — an Aura reading `Enchant creature`. No creature entered. **No Herald trigger.**

So the two halves of this deck do different jobs:
- The **body** half taps a blocker (Herald) and adds to the anthem count (Battleground Geist).
- The **Aura** half pumps what is already there.

The shape judge caught me overstating this as "tapping blockers on every deployment," and the correction matters for how you sequence: if you have a Herald out and a choice between deploying a body and Disturbing an Aura, the body is the one that also removes a blocker.

### WHAT REMOVAL ACTUALLY DOES TO THIS DECK — AND WHAT IT DOESN'T

The pitch is "removal converts a creature into an Aura." That is true for **destroy** and **damage** effects. It is not true for **exile**: an exiled Twinblade Geist never reaches the graveyard, so it never becomes an Aura, and you lose both halves at once.

The first version of this deck accepted that hole and pointed at Valorous Stance in the sideboard. That was wrong, and the grill caught it cleanly: Valorous Stance grants **indestructible**, and the card's own reminder text says exactly what that stops — `Damage and effects that say "destroy" don't destroy it`. Exile is not on the list.

The real answer is now maindecked. **Essence Flux** (`{U}` instant: `Exile target creature you control, then return that card to the battlefield under its owner's control. If it's a Spirit, put a +1/+1 counter on it`) held up for one mana fizzles *any* targeted removal including exile, leaves a permanent counter on 14 of 15 creature cards, and re-triggers six cards' ETBs. It costs zero Spirit-count bodies — which is why the old acceptance's claimed trade wasn't real.

Valorous Stance stays in the sideboard, but on its **destroy** mode (36 of 166 pool creatures have toughness 4+), not the mode that was doing the false work.

### GEISTLIGHT SNARE: THE ONE BUILD WHERE THE SECOND CLAUSE MATTERS — WITH A CAVEAT

`This spell costs {1} less to cast if you control a Spirit. It also costs {1} less to cast if you control an enchantment.`

Across the three builds in this series:

| | Spirit-producing cards | Enchantment-capable cards | …unconditional |
|---|---|---|---|
| Flash-Tempo | 17 / 23 | 5 / 23 | 1 |
| Blink Value | 9 / 22 | 2 / 22 | 2 |
| **Disturb (this deck)** | **17 / 23** | **6 / 23** | **2** |

This deck has the most enchantment enablers — but the grill was right to push back on "routinely `{U}` from turn 4." Four of the six are Disturb backs, and each requires that its creature has *already died*, a sorcery-speed main phase, and **three extra mana that turn** on top of the Snare's own cost. And the Aura evaporates permanently (`exile it instead`) the moment its host leaves. Only Gryff's Boon and Imprisoned in the Moon are standing enchantments with no precondition.

Honest read: **plan at `{1}{U}` from turn 2 on the Spirit clause; `{U}` is a bonus you'll sometimes get.**

### GRYFF'S BOON IS BETTER THAN IT LOOKS

It's the only card in the deck that recurs **indefinitely**. Both Disturb backs read `If [this] would be put into a graveyard from anywhere, exile it instead` — one-shot by design. Gryff's Boon has no such clause: `{3}{W}: Return this card from your graveyard to the battlefield attached to target creature.` Kill the creature, pay four, put it on another one, forever.

It also solves a specific problem. Four of the 15 creature cards don't fly, and **Twinblade Geist is one of them** — the card whose double strike doubles every anthem it's under. Gryff's Boon on a Twinblade Geist, under Battleground Geist and a Metallic Mimic counter, is a 5/4 double-striking flier for 10 in the air.

The Aura-into-sweepers worry doesn't survive the count: the cube contains **4 sweepers across 277 nonland cards — 1.4% density.**

### WHY THIS IS THE MIDRANGE BUILD

Same colours, same tribe, three different macro-archetypes across the series:

| Build | Family | Goldfish | Lands | Avg MV |
|---|---|---|---|---|
| Flash-Tempo | tempo | T5 | 17 | 2.48 |
| Blink Value | control | T8 | 18 | 3.05 |
| **Disturb (this deck)** | **midrange** | **T6** | **17** | **2.44** |

The land counts fall out of the curve term alone — there is no archetype term in the model. This deck and the tempo deck land on the same 17 from nearly the same average mana value; the control deck's extra land is bought entirely by its 3.05 curve.

### THE HONEST WEAK SPOT

**Card flow is 2 of 23**, and Tower Geist selects rather than draws. P(seeing at least one by turn 6) is 55%, so in roughly 45% of games the entire refuel is the six graveyard rebuys — each of which costs a full turn's mana. The deck refuels in *board presence*, not hand size, and that's a deliberate trade for a list where 17 of 23 cards feed a tribal count. **Mentor of the Meek** is the pool's fix (live on 13 of the 14 other creature cards); it's out because it's a Human that pays no Herald trigger and takes no anthem. Add it first if the deck plays out slow.

### PLAY PATTERN

Curve out with bodies — the count is what Herald, Battleground Geist and Metallic Mimic all read. Hold `{U}` for Essence Flux when the opponent has removal up, and `{1}{U}` for Geistlight Snare otherwise. Don't Disturb early: a Disturb Aura on turn 3 is worse than a second body, because the body taps a blocker and the Aura doesn't. Disturb is what you do with turns 5+ and with flood.

The alpha strike is a combat step, not a spell, so a counterspell has no target on the turn that matters.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (23 nonland):  1:6  2:5  3:9  4:2  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 9 copies (effective 8.1: Metallic Mimic@0.8, Niblis of the Urn@0.8, Niblis of the Urn@0.8, Gryff's Boon@0.7) → p=0.95 (need ≥ 0.75)
  PASS  enabler: 12 copies (effective 11.5: Spell Queller@0.9, Essence Flux@0.6) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 74%  T2 95%  T3 100%
Coverage:  [PASS]
  OK        wide_boards: Nebelgast Herald, Niblis of the Urn, Silent Departure, Battleground Geist
  OK        single_large_threat: Imprisoned in the Moon, Spell Queller, Geistlight Snare, Silent Departure
  OK        noncreature_permanents: Imprisoned in the Moon, Spell Queller, Geistlight Snare
  OK        stack: Geistlight Snare, Spell Queller, Mausoleum Wanderer
  CONCEDED  graveyard: No mainboard graveyard answer, and this is the one deck of the three for which that is a deliberate trade rather than a slot shortage: its own graveyard is a resource, so a symmetrical answer would cost it more than the opponent. Soul-Guide Gryff sits in the sideboard at 2 copies for the cube's 75 graveyard cards. Partial insurance is structural: both Disturb Auras read 'If this would be put into a graveyard from anywhere, exile it instead', so once cast they cannot be answered by graveyard hate at all.
```

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Six of the twenty-three nonland cards have a second cost waiting in the graveyard: Disturb {2}{U} on Lantern Bearer x2, Disturb {2}{W} on Twinblade Geist x2, {3}{W} on Gryff's Boon to re-attach, and Flashback {4}{U} on Silent Departure. Gryff's Boon is the only REPEATABLE sink of the six - it carries no self-exile clause, unlike the two Disturb backs, so it returns after every removal spell indefinitely. A flooded turn 7 is 'Disturb a Geist and re-attach a Boon', not a dead draw. CORRECTED: an earlier version of this entry called it ten cards, which was wrong - it counted Lingering Souls, whose {1}{B} flashback is uncastable here, and two Dauntless Cathar since cut. |
| screw | mitigation | Six 1-mana cards (Mausoleum Wanderer, Lantern Bearer x2, Gryff's Boon, Essence Flux, Silent Departure) and five 2-drops mean a 2-land hand casts spells on turns 1-2; nothing costs more than 5. The goldfish sim reports 87% keepable hands, 74% making a turn-1 play, 95% by turn 2, 99.6% by turn 3 (an earlier version rounded that last figure to 100%, which the grill flagged). Colour requirements are forgiving: W 9 pips against 9 sources, U 14 against 11, no double-coloured cost anywhere except Spell Queller's {1}{W}{U}. |
| decapitation | mitigation | There is no key card, and the archetype is built so that answering a threat does not remove it: killing Twinblade Geist or Lantern Bearer leaves a Disturb cost in the graveyard that returns the card as an Aura, and both Aura halves read 'If this would be put into a graveyard from anywhere, exile it instead', so they cannot subsequently be answered by graveyard hate. Battleground Geist and Metallic Mimic are two independent damage converters. Nebelgast Herald x2 (on a creature entering) and Niblis of the Urn x2 (on attack) are two independent blocker-strippers on different triggers, so removing the Heralds does not remove the plan. |
| gas-out | mitigation | The deck refuels in board presence rather than in hand size, and that distinction is the honest version of this mode. Six of twenty-three cards are a second cast from the graveyard; Tower Geist x2 puts a card into hand on arrival AND bins a card that may itself be a castable Disturb half; Lingering Souls is two bodies per card. Stated limit, which the grill sharpened: true card flow is 2 of 23 (Tower Geist), it selects rather than draws, and P(seeing at least one by turn 6) is 55% - so in roughly 45% of games the entire refuel is the six graveyard rebuys, each costing a full turn's mana. Mentor of the Meek is the pool's answer (live on 13 of the 14 other creature cards) and is the first card to add if the deck plays out slow; it is out because it is a Human that pays no Herald trigger and takes no anthem. |
| raced | mitigation | REWRITTEN - the previous entry claimed 'thirteen of the sixteen creature cards fly' and described them as blocking 'in the air', both of which the grill refuted. The true count is ELEVEN of fifteen creature cards with flying on their front face; the earlier figure counted Dauntless Cathar (a 3/2 Human Soldier) as evasive off a dossier tag that belongs to the token its graveyard ability makes. The mechanism was also wrong: flying constrains who may block THIS creature, it does not help it block a ground attacker - what those eleven bodies actually do on defence is chump-block or trade. The real defence: Nebelgast Herald has Flash, so it deploys during the opponent's upkeep and its trigger taps an attacker before the attack step; Drogskol Shieldmate also has Flash and is a Spirit, so it is a second Herald trigger at instant speed AND its 'other creatures you control get +0/+1 until end of turn' lifts a board that is largely x/1 out of one-damage range for that combat; Spell Queller has Flash and exiles the pump or burn spell; Twinblade Geist's double strike deals first-strike damage on a block, killing any attacker with toughness 2 or less before it strikes back. From the sideboard: Bound by Moonsilver ('can't attack, block, or transform') and Slayer of the Wicked (51 of 277 nonland cube cards are Vampire, Werewolf or Zombie - the cube's fastest shells). |
| disruption-fizzle | mitigation | REWRITTEN from an acceptance the grill correctly rejected. The old entry conceded that exile removal takes both halves of a Disturb card and then pointed at Valorous Stance in the sideboard - but Valorous Stance grants INDESTRUCTIBLE, and its own reminder text limits that to 'Damage and effects that say destroy'. It does nothing against exile, so the acceptance's escape hatch did not work, and it closed on 'thin in this environment', which is the hedge the gate forbids. The real answer is now maindecked: Essence Flux ({U} instant - 'Exile target creature you control, then return that card to the battlefield under its owner's control. If it's a Spirit, put a +1/+1 counter on it') held up for one mana fizzles ANY targeted removal including exile, leaves a permanent counter on 14 of 15 creature cards, and re-triggers the ETBs on Nebelgast Herald x2, Tower Geist x2, Spell Queller and Drogskol Shieldmate. Crucially it costs zero Spirit-count bodies, which falsifies the trade the old acceptance claimed was unavoidable. Beyond that: the critical turn is an alpha strike, not a spell, so a counterspell has no target on it, and Geistlight Snare x2 protects the swing turn. Remaining honest limit: a Twinblade Geist exiled directly from the battlefield never becomes an Aura, and Essence Flux answers only one such spell per copy. |

### COUNT-DEPENDENT VERDICTS

| Card | Count against this list | Verdict |
|---|---|---|
| Twinblade Geist // Twinblade Invocation | The locked payoff. As a body it is a Spirit Warrior with double strike; as 'Disturb {2}{W}' it returns as an Aura reading 'Enchanted creature has double strike', castable onto any of the 15 other creature cards. Double strike doubles BOTH of this deck's pump effects — Battleground Geist's +1/+0 and Metallic Mimic's +1/+1 counter — so a Twinblade Geist under both is a 4/4 double striker dealing 8. | **INCLUDE x2** |
| Battleground Geist | 'Other Spirit creatures you control get +1/+0' pumps 15 of the 16 other creature cards (13 natively Spirit, plus Metallic Mimic once it names Spirit, plus Niblis and Nebelgast Herald which are already counted) plus 4 Lingering Souls tokens plus every Dauntless Cathar token. Against a board of six-plus fliers by turn 5-6, that is the difference between a turn-7 and a turn-6 kill. | **INCLUDE** |
| Metallic Mimic | Names Spirit. Spirits that can enter after it: 16 of the other 22 nonland cards produce a Spirit body. Unlike the blink build, this deck never re-enters its own creatures, so the +1/+1 counters are permanent and accumulate — which is why Mimic is an include here and a cut there. | **INCLUDE** |
| Geistlight Snare | Spirit clause: 17 of 23 nonland cards put a Spirit onto the battlefield, so from turn 2 on it is essentially always discounted once, to {1}{U}. Enchantment clause: 6 of 23 cards can put an enchantment onto the battlefield, but only 2 of those UNCONDITIONALLY (Gryff's Boon, Imprisoned in the Moon). The other four are the Disturb backs of Lantern Bearer x2 and Twinblade Geist x2, and each requires three things first: that specific creature must already have died, a sorcery-speed main phase, and 3 extra mana that same turn on top of the Snare's own cost - so the discount is not free on the turn it is enabled. The resulting Aura also evaporates permanently ('exile it instead') the moment its host leaves the battlefield. P(seeing one of the two unconditional enchantments by turn 6, 13 cards of 40) = 55%. | **INCLUDE x2 - plan at {1}{U} from turn 2; {U} is an occasional bonus, NOT a plan. CORRECTED: an earlier version of this verdict read 'routinely {U} from turn 4' and claimed 'THIS is the build where the second clause is a plan rather than a bonus'. The grill refuted that on timing and it is withdrawn. The card still earns two slots on the Spirit clause alone: a 2-mana soft counter an aggressor can hold up alongside a deployment rather than instead of one.** |
| Gryff's Boon | 'Enchanted creature gets +1/+0 and has flying. {3}{W}: Return this card from your graveyard to the battlefield attached to target creature.' Flying targets that need it: 3 of 16 creature cards do not fly (Metallic Mimic, Twinblade Geist x2) — and Twinblade Geist is exactly the card that most wants to be airborne, since its double strike doubles every anthem. It is also 1 of the 6 enchantment-producers for Geistlight Snare, and it recurs after every removal spell. Discounted to 0.7 in the assembly gate because an Aura is lost outright if its creature leaves the battlefield. | **INCLUDE** |
| Nebelgast Herald | 'Whenever this creature OR ANOTHER SPIRIT you control enters, tap target creature an opponent controls' — live off 17 of 23 nonland cards, the highest Spirit density of the three builds. IMPORTANT CORRECTION, which the shape judge raised as a weak keystone: recasting a Disturb Aura is NOT a creature entering the battlefield, so the Aura half of the kill mechanism fires NO Herald trigger. Herald is fed by the body slots and the tokens only. The locked sketch's phrase 'tapping blockers on every deployment' overstated this and is not carried forward. | **INCLUDE x2** |
| Lingering Souls | WEAK KEYSTONE, resolved by pricing it honestly rather than by cutting it. The shape judge's finding is accepted: this is a 3-mana card in a build whose curve argument rests on 1- and 2-drops, and its {1}{B} flashback is uncastable here, so it is NOT the four-body two-for-one it is elsewhere. What it actually is: two 1/1 flying Spirit bodies for three mana — two Nebelgast Herald triggers, two Battleground Geist anthem recipients, two Metallic Mimic counters. No other card in these colours at this cost does any of that, and the deck's wide-board plan needs the bodies. | **INCLUDE x2, priced as a 3-mana two-body Spirit card** |
| Mausoleum Wanderer | 'Whenever another Spirit you control enters, this creature gets +1/+1 until end of turn' — live off 16 of the other 22 nonland cards, so on a turn where two Spirits land it attacks as a 3/3 and its sacrifice-counter taxes for 3. In a deck this Spirit-dense it is the best 1-drop available. | **INCLUDE** |
| Niblis of the Urn | 'Whenever this creature attacks, you may tap target creature' — the same blocker-stripping conversion Nebelgast Herald provides, on a different trigger, which is what makes the payoff role survive removal of the Heralds. Discounted to 0.8 because it must survive to attack. | **INCLUDE x2** |
| Tower Geist | 'When this creature enters, look at the top two cards of your library. Put one of them into your hand and the other into your graveyard.' In Deck A the bin half was incidental; here it is an ENABLER, because a Disturb card milled into the graveyard is castable from there. It is also a Spirit flier that pays a Herald trigger. | **INCLUDE x2** |
| Syncopate | CUT in a pre-grill repair. It is the only card in the drafted list with no graveyard half and no Spirit type — it neither recurs nor counts. Replaced by Imprisoned in the Moon, which answers a RESOLVED permanent (the coverage class the counterspells were falsely satisfying) and is itself an enchantment, raising Geistlight Snare's second-clause enablers from 5 to 6. | **CUT** |
| Covetous Castaway // Ghostly Castigator | 'When this creature dies, mill three cards' plus 'Disturb {3}{U}{U}'. The mill genuinely enables this deck. The cut is on cost: {3}{U}{U} is five mana to re-buy a 2-drop, and it is the single heaviest colour requirement available against a goldfish turn of 6. The locked sketch's read — that expensive Disturb belongs to a grindy build, not this one — is the correct one. | **CUT** |
| Lunarch Veteran // Luminous Phantom | A 1-mana body with 'Disturb {1}{W}', the cheapest re-buy in the pool, and it is genuinely on-thesis. Cut because its trigger is lifegain ('you gain 1 life' per creature entering), and lifegain does nothing for an aggressor whose plan is to close on turn 6 — whereas Dauntless Cathar at the same graveyard-cost band produces a Spirit BODY, which the Herald and the anthem both count. | **CUT** |
| Soulcipher Board // Cipherbound Spirit | '{1}{U}, {T}: Look at the top two cards of your library. Put one of them into your graveyard' is real Disturb fuel, and the flip is a flier that draws two. Cut because it mills one card per turn at sorcery speed and does nothing to the board — the shape judge's ground against the grindy sketch, that these cards push the clock past turn 6, applies directly. | **CUT** |
| Forbidden Alchemy | 'Look at the top four cards of your library. Put one of them into your hand and the rest into your graveyard' — three cards of Disturb fuel plus selection, at instant speed, for {2}{U}. The closest call in the whole sweep. Cut because it puts nothing on the board in a deck that needs 17 Spirit-producing cards to fill a board by turn 6, and its own flashback ({6}{B}) is uncastable here so it is a genuine one-shot. | **CUT — the first card to add if the deck proves too slow** |
| Thalia, Heretic Cathar | 'Creatures and nonbasic lands your opponents control enter tapped' is strong for an aggressor, and the locked sketch budgeted a rare for her. Cut for the same reason as in Deck A: she is a Human, so she pays no Nebelgast Herald trigger and takes no Battleground Geist anthem, in a deck where 17 of 23 cards do one or both. The rare went to Metallic Mimic, which is a Spirit by choice and pumps the whole tribe. | **CUT** |
| Wedding Announcement // Wedding Festivity | Attacker width of 2+ is reliably met here from turn 3, and the flip ('Creatures you control get +1/+1') is a second anthem alongside Battleground Geist. Cut on tribal grounds rather than on rate: the tokens it makes are 1/1 HUMANS, which take neither anthem, get no Mimic counter, and trigger no Herald — whereas Lingering Souls at the same cost makes two Spirit fliers that do all three. | **CUT** |
| Voice of the Blessed | Cards in this list that gain life: 0 of 23. The denominator is zero. | **CUT** |
| Delver of Secrets // Insectile Aberration | Instants + sorceries: 5 of 23 = 21.7%. P(flip on a given upkeep) = 0.217, and it is a Human Wizard that neither triggers Herald nor takes the anthem. | **CUT** |
| Odric, Lunarch Marshal | Creatures with flying: 11 of 15 (CORRECTED from a stale 13 of 16 that survived the first repair pass). This deck does have a keyword worth sharing that the other two builds lack - Twinblade Geist's double strike - and Odric would grant it to all 11 fliers at each combat. | **CUT - he is a 4-mana ground Human with no recursion, in a deck whose 4-slot belongs to Tower Geist (a Spirit that flies, replaces itself and bins Disturb fuel). The double-strike sharing is already available more cheaply and more reliably by casting Twinblade Invocation onto a flier for {2}{W} from the graveyard.** |
| Intangible Virtue | Creature tokens this list makes: 4 from Lingering Souls plus up to 2 from Dauntless Cathar = 6 potential token bodies, the highest of the three builds — but they arrive across many turns and the anthem does nothing for the 16 nontoken creature cards, whereas Battleground Geist pumps 15 of them. | **CUT** |
| Guardian of Pilgrims | SEED-GAP CARD (the sweep's clusters_note flagged that neither band reaches it — third run in a row). A {1}{W} Spirit Cleric that does trigger Herald and does take the anthem. Cut because its ETB ('target creature gets +1/+1 until end of turn') expires and it has no evasion and no graveyard half, while Niblis of the Urn at the identical cost flies, strips a blocker every attack, and Twinblade Geist at the same cost comes back from the graveyard. | **CUT** |
| Mausoleum Guard | SEED-GAP CARD. 'When this creature dies, create two 1/1 white Spirit creature tokens with flying' — three Spirit-count bodies from one card, two of which arrive THROUGH removal and through the cube's 4 sweepers. This is the build where it fits best of the three, because dying is on-plan here. Cut on cost: {3}{W} for a 2/2 whose payoff is gated on death competes with Tower Geist, which at 4 mana is a Spirit that flies, digs, and fuels Disturb immediately. It is the strongest sideboard candidate against a sweeper-heavy opponent. | **CUT** |
| Essence Flux | ADDED IN GRILL REPAIR, and it is the card that makes disruption-fizzle a real mitigation instead of a hedge. Blink targets: 15 of 15 creature cards; the '+1/+1 counter if it is a Spirit' rider is live on 14 of 15. It re-triggers the ETBs on Nebelgast Herald x2, Tower Geist x2, Spell Queller and Drogskol Shieldmate = 6 of 23 cards. Critically it answers EXILE-based removal, which Valorous Stance cannot: that card grants indestructible and its own reminder text limits it to 'Damage and effects that say destroy'. | **INCLUDE** |
| Drogskol Shieldmate | ADDED IN GRILL REPAIR. 'Flash / When this creature enters, other creatures you control get +0/+1 until end of turn' - a Spirit Soldier, so it is a Nebelgast Herald trigger deployable on the OPPONENT'S turn, and the toughness bump lifts a board that is largely x/1 out of one-damage range for a combat. It is the only card in the pool that improves the raced mode without costing a Spirit-count body. | **INCLUDE** |
| Dauntless Cathar | CUT IN GRILL REPAIR (was 2 copies). The Proposer named it the single weakest defence in the list and the Challenger traced a factual error to it. The card is a {2}{W} 3/2 Human Soldier: it takes no Battleground Geist anthem, no Metallic Mimic counter, and triggers no Nebelgast Herald. Its entire contribution is deferred to a token requiring three simultaneous conditions (card already in the graveyard, a sorcery-speed window, {1}{W} spare). It was also the source of the 13-of-16 flier miscount, because dossier.threat_profile.evasion tags it for a token its body does not have. | **CUT** |
| Mentor of the Meek | DEFERRED AT 5A, VERDICT OWED. 'Whenever another creature you control with power 2 or less enters, you may pay {1}. If you do, draw a card.' Creature cards with power 2 or less: 13 of the 14 others (only Battleground Geist at 3/3 misses), plus 4 Lingering Souls tokens. That is the largest live denominator of any card considered for this deck, against a true card-flow count of 2 of 23. | **CUT - it is a Human with no evasion, so it pays no Herald trigger and takes no anthem in a list where 17 of 23 cards do one or both, and 'you may pay {1}' competes for the same mana as the Disturb costs that ARE the thesis. It is the first card to add if the deck plays out slow.** |
| Apothecary Geist | DEFERRED AT 5A, VERDICT OWED. 'if you control another Spirit' is live off 16 of the other 22 nonland cards - essentially always. | **CUT - on the 4-mana slot: Tower Geist costs the same, also flies, is also a Spirit, and replaces itself, whereas 3 life does nothing for an aggressor closing on turn 6.** |
| Docent of Perfection // Final Iteration | DEFERRED AT 5A, VERDICT OWED. Instants + sorceries: 5 of 23 = 21.7%. Wizards on board for the flip: 0. | **CUT** |
| Spontaneous Mutation | DEFERRED AT 5A, VERDICT OWED. '-X/-0 where X is the number of cards in your graveyard'. This deck fills its graveyard on purpose but slowly: Tower Geist bins 1 per cast and creatures arrive there by dying, so by turn 4 the yard holds roughly 2-4 cards. | **CUT - a -2/-0 to -4/-0 flash effect removes no blocker permanently, and this deck already taps blockers with Nebelgast Herald x2 and Niblis of the Urn x2.** |
| Crusader of Odric | DEFERRED AT 5A, VERDICT OWED. 'Power and toughness are each equal to the number of creatures you control' - at this deck's turn-5 board width of 5-7 creatures (the widest of the three builds) it is a 5/5 to 7/7 for {2}{W}, the best raw rate of any excluded card. | **CUT - it is a ground Human with no evasion in a deck whose damage comes from 11 fliers, and it neither triggers Herald nor takes the Battleground Geist anthem. A 6/6 that cannot attack past a blocker is worth less here than a 1/1 that flies.** |
| Cathars' Crusade | DEFERRED AT 5A, VERDICT OWED. 'Whenever a creature you control enters, put a +1/+1 counter on each creature you control' fires on 15 creature cards plus 4 Lingering Souls tokens - roughly 19 ETB events across the list, and the counters are permanent because this deck never blinks its own board. | **CUT - {3}{W}{W} is two more white pips than any card in the list against 9 white sources, and it adds no board on the turn it resolves against a goldfish turn of 6. It is the strongest card cut on cost rather than fit, and the first rare to add if the 5-card cap is raised.** |
| Rally the Peasants | DEFERRED AT 5A, VERDICT OWED. 'Creatures you control get +2/+0 until end of turn' across a turn-5 board of 5-7 creatures is +10 to +14 damage; its flashback is {2}{R} and is uncastable here, so it is a one-shot. | **CUT - a one-shot pump that does nothing unless the board is already assembled and unblocked, in a deck that already runs two PERMANENT anthem effects (Battleground Geist, Metallic Mimic) doing the same work every turn.** |
| Angel's Tomb | DEFERRED AT 5A, VERDICT OWED. 'Whenever a creature you control enters, you may have this artifact become a 3/3 white Angel artifact creature with flying until end of turn' - the trigger reads OTHER creatures entering, this deck's most common event (15 creature cards + 4 tokens). | **CUT - the animation lasts only until end of turn and needs a creature to enter on the turn you want to attack; it is a conditional 3/3 in a deck already fielding 11 fliers, and it is neither a Spirit nor an anthem recipient.** |
| Soul Separator | DEFERRED AT 5A, VERDICT OWED. '{5}, {T}, Sacrifice this artifact: Exile target creature card from your graveyard. Create a token that is a copy of that card, except it is 1/1, it is a Spirit in addition to its other types, and it has flying.' Creature cards that can reach this graveyard: 15 of 23. | **CUT - 8 total mana against a goldfish turn of 6, and it EXILES the creature card, which is directly anti-thesis: a Twinblade Geist or Lantern Bearer exiled from the graveyard can never be Disturbed.** |
| Rise from the Tides | DEFERRED AT 5A, VERDICT OWED. 'Create X 2/2 black Zombie creature tokens, where X is the number of instant and sorcery cards in your graveyard.' Instants + sorceries: 5 of 23, and they reach the yard only after being cast, so realistic X at turn 6 is 1-3. | **CUT - and the tokens are Zombies, so they take no Battleground Geist anthem, no Metallic Mimic counter, and trigger no Herald.** |
| Vanquish the Horde | DEFERRED AT 5A, VERDICT OWED. 'This spell costs {1} less to cast for each creature on the battlefield. Destroy all creatures.' This deck's own board when the discount makes it castable is 5-7 creatures - the widest of the three builds - all of which it destroys. | **CUT - the cost reduction is cheapest exactly when the card is worst, and the accumulated wide board IS the win condition. Partial mitigation exists (the Disturb halves survive in the graveyard) but paying 4-5 mana to reset a board you are ahead on is not a plan.** |
| Inspiring Captain | DEFERRED AT 5A, VERDICT OWED. 'When this creature enters, creatures you control get +1/+1 until end of turn' across a turn-5 board of 5-7 is a +5/+5 to +7/+7 spread - a genuine alpha-strike enabler. | **CUT - {3}{W} for a Human Knight that adds no Herald trigger and takes no anthem, and whose pump expires; the 4-slot belongs to Tower Geist, a Spirit that flies and replaces itself.** |
| Ambitious Farmhand // Seasoned Cathar | COUNT OWED (Challenger finding). The sweep cut it in a batch whose reason addressed only the ETB ('fetches basics in a two-colour deck with no fixing problem') and never touched 'Coven - {1}{W}{W}: Transform this creature. Activate only if you control three or more creatures with different powers', which reads a quantity of other cards. The count: powers available are 1 (Mausoleum Wanderer, Niblis x2, Lantern Bearer x2, tokens), 2 (Metallic Mimic, Nebelgast Herald x2, Spell Queller, Tower Geist x2, Drogskol Shieldmate) and 3 (Battleground Geist) - three distinct powers are reachable from turn 3, so Coven IS live. | **CUT - the count survives but the cut stands on the flip cost: {1}{W}{W} on top of a 2-mana body, for a 3/3 lifelink Human that triggers no Herald and takes no anthem, against 9 white sources.** |
| Thraben Inspector | COUNT OWED (Challenger finding). Cut in a batch reason whose clause list ('an Equipment, an empty-handed opponent, creatures dying to untap, three Clues') maps onto other cards in the batch but not onto this one. Its real count: 'When this creature enters, investigate' is a 1-mana body plus a card, in a deck whose true card flow is 2 of 23. | **CUT on the correct ground - it is a Human Soldier with no evasion, so it takes no Battleground Geist anthem, no Metallic Mimic counter and triggers no Nebelgast Herald, which is exactly the reason given for Wedding Announcement.** |
| Gather the Townsfolk | COUNT OWED (same batch). 'Create two 1/1 white Human creature tokens' is two bodies for two mana, one mana cheaper than Lingering Souls for the same body count. | **CUT on the correct ground - the tokens are HUMANS. They take no Battleground Geist anthem, no Metallic Mimic counter, and trigger no Nebelgast Herald, whereas Lingering Souls' Spirit tokens do all three. One extra mana buys three separate synergies per token.** |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Throng, Drunau Corpse Trawler, Necroduality, Rooftop Storm | Zombie-typed payoffs and enablers; this Spirit list runs zero Zombies, so the rider text is blank and the bodies are below rate without it. |
| Bruna, the Fading Light, Brisela, Voice of Nightmares, Hullbreaker Horror, Wretched Gryff, Distended Mindbender, Elder Deep-Fiend, Geistcatcher's Rig, Abundant Maw, It of the Horrid Swarm, Decimator of the Provinces, Emrakul, the Promised End, Temporal Mastery | Mana value 6+ (or an emerge/miracle cost that still lands there) against a stated goldfish turn of 6. Bruna is the closest call — 'return target Angel or Human creature card from your graveyard to the battlefield' is genuine recursion — but at {5}{W}{W} it recurs only Angels and Humans, and this deck's graveyard is full of Spirits. |
| Thing in the Ice // Awoken Horror | 'When this creature transforms into Awoken Horror, return all non-Horror creatures to their owners' hands' bounces this deck's own Spirit board back to hand — and a Disturb permanent returned to hand is a dead card, because Disturb can only be cast from the graveyard. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.43   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.09 adj [MV 2.43 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  60.9%  prod  64.7%  gap  -3.8pp  [OK]
  W  demand  39.1%  prod  52.9%  gap -13.8pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
  [PASS] base: cube_mainboard only - every card verified by exact-name match against the working pool cache (Phase 5C check 2: PASS)
  [PASS] copy_limits: commons/uncommons <= 2, rares/mythics <= 1 - Phase 5C check 3: PASS
  [PASS] rare_mythic_cap: 4 of 5 used. Mainboard: Mausoleum Wanderer (R), Metallic Mimic (R), Spell Queller (R), Deserted Beach (R, land). Sideboard: 0 - all ten board cards are commons or uncommons. One slot deliberately unspent. Three rares were considered for it and all three lost on tribal grounds: Thalia, Heretic Cathar and Wedding Announcement (Humans, or making Humans, which take no anthem and trigger no Herald) and Cathars' Crusade ({3}{W}{W} against 9 white sources, adding no board on arrival). Cathars' Crusade is the first to add if the cap is raised.
  [PASS] basics: Island x8, Plains x6 - format-supplied, exempt from copy limits
  [PASS] colour: all 23 nonland cards usable in [W,U] via effective_cost.best_mode (Phase 5C check 4: PASS); no splashed cards (check 5: PASS)
```
