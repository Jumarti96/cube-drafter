---
deck_name: "ur-crab-gun-burn"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "UR"
format: "40-card"
built_at: "2026-08-02T19:08:36Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  11x Island                 blue source, High Tide census member
  3x Mountain               red source
  2x Molten Tributary       UR dual, Island-typed (High Tide census member)
  1x Sulfur Falls           UR dual, untapped-capable
```

### CREATURES (8)

```
CMC  Card                          Qty   Color  Role                                        Rar
  1  Grim Lavamancer               x1    R      Payoff — independent repeating damage source  R
  2  Cloud of Faeries              x2    U      Engine — mana refund body / evasive Aura hos  C
  3  Horseshoe Crab                x2    U      Engine — untap body / Aura host (multiplier)  C
  4  Thieving Magpie               x1    U      Payoff — evasive Aura host; converts each pi  U
  5  Peregrine Drake               x2    U      Engine — mana refund body / Aura host         C
```

### INSTANTS & SORCERIES (11)

```
CMC  Card                          Qty   Color  Role                                        Rar
  1  High Tide                     x2    U      Engine — kill-turn mana multiplier            U
  2  Counterspell                  x2    U      Interaction — stack                           C
  2  Impulse                       x1    U      Infrastructure — engine-piece selection       C
  2  Snap                          x1    U      Interaction — mana-neutral bounce             C
  3  Frantic Search                x2    U      Engine — free filter + land untap             C
  4  Turnabout                     x2    U      Engine — instant mass land-untap; the bigges  U
  5  Force of Will                 x1    U      Interaction — free stack protection           M
```

### OTHER SPELLS (4)

```
CMC  Card                          Qty   Color  Role                                        Rar
  2  Hermetic Study                x2    U      Engine — repeating damage source (Aura)       C
  3  Quicksilver Dagger            x2    RU     Engine — repeating damage source + card draw  U
```

## SIDEBOARD (10)

```
Card                          Qty   Color  Role / When to board in                             Rar
Tormod's Crypt                x2    C      SB — graveyard hate                                   U
Ovinize                       x2    U      SB — single large threat / ability shutoff            C
Man-o'-War                    x2    U      SB — tempo bounce                                     C
Fire // Ice                   x2    RU     SB — small-creature removal / cantrip tempo           U
Floodgate                     x1    U      SB — wide-board sweeper (Islands-scaling)             U
Confiscate                    x1    U      SB — noncreature permanent answer                     U
```

## ANALYSIS

### DECK IDENTITY

A blue-red engine deck built on Horseshoe Crab's '{U}: Untap this creature'. Attach a tap-ability Aura to the Crab and every blue mana becomes one point of damage: Hermetic Study grants '{T}: This creature deals 1 damage to any target', Quicksilver Dagger grants the same at a player plus a card. High Tide, Frantic Search, Cloud of Faeries and Peregrine Drake multiply how many blue mana exist in a single turn, so an assembled board converts a normal turn into a lethal burst. Because Horseshoe Crab is a 2-of with no functional redundancy in this cube, the list is built to win without it too: Thieving Magpie and Cloud of Faeries are evasive Aura hosts, Grim Lavamancer is an independent repeating damage source, and Counterspell / Force of Will protect whichever half landed first.

### HOW THE GUN ACTUALLY FIRES

The engine is two cards. Horseshoe Crab reads `{U}: Untap this creature`, and it is the **only** card in this 271-card cube with a repeatable self-untap — verified by sweeping every oracle_text containing "untap". Hermetic Study grants the host `"{T}: This creature deals 1 damage to any target"`. So once both are on the battlefield, the Crab's damage output for the turn is simply *the number of blue mana you can produce*, plus one for the initial tap.

That makes the mana base the damage dealer, and it is why this list runs so much land-untap:

| Card | Oracle mechanism | Net blue on a 7-land board under High Tide |
|---|---|---|
| High Tide x2 | "whenever a player taps an Island for mana, that player adds an additional {U}" | doubles all 13 Island-typed lands |
| Turnabout x2 | "untap all tapped permanents of that type that player controls" | ~+8 (costs 4, returns ~12) |
| Peregrine Drake x2 | "untap up to five lands" | ~+5 |
| Frantic Search x2 | "Untap up to three lands" | +1 to +3, and draws 2 |
| Cloud of Faeries x2 | "untap up to two lands" | ~0, but a free evasive Aura host |

A concrete turn-5 goldfish: six lands, five of them Islands, High Tide resolved. Tapping five Islands yields ten blue. Cast nothing else; the Crab pings ten times. That is half the opponent's life in one turn, and Turnabout can extend it.

### THE HONEST WEAKNESS: THE CRAB IS A 2-OF

P(seeing at least one Horseshoe Crab in 12 cards from 40) is **46%**. There is no second self-untapper in the pool, and no tutor worth a rare slot. So the list is deliberately built to also win *without* the Crab:

- **Hermetic Study on any creature** is still 1 damage per turn at any target — the deck runs 7 legal hosts (Crab x2, Cloud of Faeries x2, Peregrine Drake x2, Thieving Magpie).
- **Quicksilver Dagger** on any host is 1 damage plus a card every turn — a grindy inevitability engine on its own.
- **Grim Lavamancer** needs no Aura and no Crab at all: `{R}, {T}, Exile two cards from your graveyard: This creature deals 2 damage to any target`.

The structural gate is declared honestly against this: the engine role that must assemble by turn 5 is *a repeating damage source* (5 copies, effective 4.5 after reliability weights, p = 0.76), **not** "Horseshoe Crab" — which would fail the 0.75 gate outright at 2 copies.

### WHY THE AURAS ARE SAFE HERE

The cube contains exactly **4** enchantment answers across all 271 cards (Break Asunder, Legacy Weapon, Orim's Thunder, Wax // Wane) — a density of 1.67%, and **none of them is blue or red**. An Aura that resolves onto a creature is, in this specific environment, close to permanent. That fact is what justifies spending 4 of 23 nonland slots on Auras rather than on creatures that carry their own damage.

The corollary is the trap: **do not bounce your own enchanted Crab.** The shape judge caught this during the build — returning an enchanted creature to hand puts the Aura in the graveyard as a state-based action. Snap is in this deck as tempo and as a mana-neutral answer, never as engine protection. Protection is Counterspell and Force of Will, which stop the answer before it resolves.

### THIEVING MAGPIE — A SMALLER SYNERGY THAN IT LOOKS

Magpie's trigger is `"Whenever **this creature** deals damage to an opponent, draw a card."` Hermetic Study's ping does count as the creature dealing damage — but only when the Aura is on the **Magpie**, and the Magpie cannot untap itself. So Magpie draws exactly one card per turn in that configuration and draws *zero* on the real kill turn, where the Aura is on the Crab. It is in the list as a flying host with upside, at 1 copy, not as a combo piece.

### PLAY PATTERN

Turns 1-3 are selection and land drops; hold Counterspell up from turn 2. Land a host on 2-3, Aura it on 3-4, and only then decide whether the turn is a kill turn. High Tide is the tell: cast it only when the Crab plus an Aura are already down and the untapped Island count plus the untappers in hand add to lethal or near-lethal. Against creature decks, remember that Hermetic Study says "any target" — the same engine machine-guns a board of x/1s for one blue each.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Combo):  [PASS]
  MV distribution (23 nonland):  1:3  2:8  3:6  4:3  5:3
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  repeating_damage_source: 5 copies (effective 4.5: Quicksilver Dagger@0.85, Quicksilver Dagger@0.85, Grim Lavamancer@0.8) → p=0.76 (need ≥ 0.75)
  PASS  aura_host_creature: 7 copies → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 86% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 45%  T2 94%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Hermetic Study, Horseshoe Crab, Grim Lavamancer
  OK        single_large_threat: Snap, Counterspell, Force of Will, Turnabout
  CONCEDED  noncreature_permanents: No mainboard answer: the cube holds only 4 enchantment answers and 5 artifact answers in total, none in blue or red, so the pool offers this deck nothing at a castable rate; Confiscate is sideboarded instead and the mainboard spends the slot on engine assembly.
  OK        stack: Counterspell, Force of Will
  CONCEDED  graveyard: No mainboard graveyard answer; Tormod's Crypt is the cube's only graveyard hate card and sits in the sideboard at 2 copies, because maindecking a card that is blank against half the field costs an engine slot in a 23-nonland combo list.
```

- Curve check PASS and goldfish check PASS — no WARN flags to respond to. Recorded for completeness: MV distribution 1:3 2:10 3:6 4:2 5:2, keepable 87%, 3 lands by turn 3 88%.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands are ammunition, not dead cards: Horseshoe Crab "{U}: Untap this creature" converts every surplus blue mana into a point of damage, and High Tide doubles every Island tap, so a surplus land is 1-2 damage. Turnabout x2 untaps all of them at once. Impulse bottoms extras. Stated caveat: this holds in the assembled configuration; unassembled, surplus lands still fuel Grim Lavamancer activations and Peregrine Drake. |
| screw | mitigation | Keepable-on-two hands are real: High Tide ({U}), Hermetic Study ({1}{U}), Impulse ({1}{U}), Snap ({1}{U}) and Cloud of Faeries ({1}{U}) are all castable on two lands, and Cloud of Faeries/Frantic Search/Peregrine Drake untap lands to stretch a short mana base. Goldfish sim: 87% keepable, 88% on three lands by turn 3. |
| decapitation | mitigation | The Aura half has 4 functional copies (Hermetic Study x2, Quicksilver Dagger x2) and the cube contains only 4 enchantment answers in total (Break Asunder, Legacy Weapon, Orim's Thunder, Wax // Wane), none in blue or red — so an attached Aura is very rarely answered. When the Crab itself is killed, Thieving Magpie and Cloud of Faeries are legal hosts that keep a 1-per-turn ping running, and Grim Lavamancer needs no host at all. |
| gas-out | mitigation | Quicksilver Dagger draws a card per ping (2 copies). Before assembly the self-replacing count is 5 of 23 nonland cards - Impulse x1, Frantic Search x2, Cloud of Faeries x2 - and Cloud of Faeries replaces itself only by cycling, i.e. by NOT being cast as a host, so it cannot be both in the same game (Challenger caveat accepted). Peregrine Drake x2 refund their own cost in mana. Per Challenger F5 the Thieving Magpie half of this claim is withdrawn: Magpie draws only when it is itself the enchanted creature. |
| raced | accepted | Against the cube's fastest clocks (evasion density 17.5%, 42 cards) this deck can lose before turn 5. Mitigating further would mean maindecking Man-o'-War, Ovinize and Fire // Ice over engine pieces, which is exactly the trade that pushes the goldfish past turn 5 and turns the deck into a tempo deck that happens to own a Crab. The cost of mitigating is the archetype itself, so the answers live in the sideboard and come in on the draw. |
| disruption-fizzle | mitigation | The kill turn is held up behind Counterspell x2 and Force of Will, and Force of Will's alternative cost ('pay 1 life and exile a blue card from your hand') means it is live on a turn the deck is tapped out feeding the Crab — the exact turn the plan is most vulnerable. If the turn is broken anyway the engine is not consumed: the Aura and Crab stay on the battlefield and the deck simply gets another turn's worth of mana. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Opposition (rare) | Cut on the 5-rare budget and on mechanism: 'Tap an untapped creature you control: Tap target artifact, creature, or land' deals zero damage, so on a kill turn whose entire budget is {U} -> 1 damage, every {U} routed into Opposition is a point not dealt. It is a 1-of rare with no redundancy. It is the locked centerpiece of the sibling deck u-crab-lock-opposition. |
| Mystic Remora (rare) | Rare-budget cut. 'Whenever an opponent casts a noncreature spell, you may draw a card unless that player pays {4}' is card advantage keyed entirely off the opponent's deck; its cumulative upkeep competes for the same blue mana the Crab spends every turn. |
| Stroke of Genius (rare) | Rare-budget cut. 'Target player draws X cards' is a fine surplus-mana sink, but the Crab already converts surplus blue into damage at 1 mana per point and does not need a second sink at {X}{2}{U}. |
| Urza, Lord High Artificer (mythic) | Rare-budget cut. 'Tap an untapped artifact you control: Add {U}' is real mana, but this list contains 0 mainboard artifacts other than Urza's own token, so the ability produces at most 1 blue. |
| Gamble (rare) | Rare-budget cut. 'Search your library for a card, put that card into your hand, discard a card at random' would tutor a Horseshoe Crab, but the random discard can discard the Crab it just found, and at {R} it needs one of only 6 red sources. |
| Sulfuric Vortex (rare) | Rare-budget cut. 'deals 2 damage to that player' at each upkeep hits both players; this deck's clock is turn 5-6, slower than the aggro decks it would be racing, so the symmetric half lands on the wrong side. |
| Fireblast | Alternative cost is 'sacrifice two Mountains'. Mountain-typed lands in this list: 5 of 17 (3 Mountain + 2 Molten Tributary). Sacrificing two removes 2 of the mana the Crab needs on every subsequent turn. |
| Grapeshot | Storm count equals spells cast before it this turn. Outside the kill turn this list casts 1-2 spells per turn, so Grapeshot is a 1-2 damage sorcery. |
| Circular Logic | 'unless its controller pays {1} for each card in your graveyard' — cards reliably in the graveyard by turn 3 in this list: 2-4, so the tax is 2-4 on exactly the turns the engine is most vulnerable. Counterspell taxes without limit for the same 2 mana. |
| Leaden Fists | 'Enchanted creature gets +3/+3 and doesn't untap during its controller's untap step.' Horseshoe Crab's own {U} untap negates the drawback, but the Aura adds no damage output, which is the only thing this deck converts mana into. |
| Goblin Medics | 'Whenever this creature becomes tapped, it deals 1 damage to any target' needs a repeatable way to tap it. The pool's only untapper, Horseshoe Crab, untaps only itself, and this deck runs no tapper. It belongs in the Opposition build instead. |
| Deep Analysis | 'Target player draws two cards / Flashback {1}{U}, Pay 3 life' is 4 cards from one slot, but at {3}{U} sorcery speed it does not advance a turn-5 kill, and the Challenger's absence finding for it was weighed against Turnabout, which won the slot. |
| Chain Lightning | 3 damage for {R}, but at 6 red sources of 17 lands a turn-1 or turn-2 Chain Lightning is unreliable, and Fire // Ice's Ice half ({1}{U}: tap a permanent, draw a card) is never dead in a 90%-blue list. Fire // Ice took the slot, in the sideboard. |
| Remote Isle / Smoldering Crater | Both enter tapped and neither is Island-typed, so they would dilute High Tide (which keys off Islands) while also costing a turn of tempo. Their cycling does not repay that in a deck that wants untapped mana every turn. |
| Tangled Islet / Contaminated Aquifer / Idyllic Beachfront | Genuine Islands for High Tide, but each enters tapped and its second mode produces G / B / W, outside this deck's colours — each would displace either an untapped basic Island or one of the 6 red sources the three red-requiring engine cards need. |
| Icy Manipulator (SB consideration) | '{1}, {T}: Tap target artifact, creature, or land' is colourless interaction, but at {4} to cast plus {1} per activation it competes with the Crab for the same mana on every turn after it lands. |
| Sneak Attack / Worldgorger Dragon | Powerful red mythics in the pool, but they win by putting a large creature onto the battlefield, which is a different win condition entirely — including them would replace the archetype rather than support it. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 6   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.63 adj [MV 2.78 vs 2.5, 6 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  R  demand   9.7%  prod  35.3%  gap -25.6pp  [OK]
  U  demand  90.3%  prod  82.4%  gap  +7.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool: All 40 mainboard + 10 sideboard cards are exact-name members of the working pool cache; basics are format-supplied.
[PASS] copies: Commons/uncommons at most 2 copies, rares/mythics 1 copy — verified against cube_search.get_max_copies with per_rarity {common:2, uncommon:2, rare:1, mythic:1} and default 1. Basic lands exempt.
[PASS] rare_cap: 3 rare/mythic cards total across mainboard + sideboard (Force of Will mythic, Grim Lavamancer rare, Sulfur Falls rare) - under the 5 limit.
[PASS] colors: Every nonland card usable in U/R via effective_cost.best_mode; no splash.
1 mainboard count: PASS 40
1 sideboard count: PASS 10
2 exact-name membership: PASS
3 copy limits: PASS
4 colour usability (best_mode): PASS — all modes 'cast'
5 splash cap: PASS — no splash
6 rare/mythic cap <=5: PASS — 3
validator_self_check: Validator was first run against a planted known-bad fixture (41 cards, 3x Horseshoe Crab, 3x Quicksilver Dagger, off-colour Wrath of God, 7 rares). It initially PASSED the copy-limit check because get_max_copies was being handed the card_pool_rules shape instead of a copies_policy; the bug was fixed (multipliers -> per_rarity, default 1) and the fixture then failed checks 1, 3, 4 and 6 as expected.
```
