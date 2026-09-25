---
deck_name: "wu-spell-tokens-tempo"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WU"
format: "40-card"
built_at: "2026-07-11T08:12:04Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

# DECK: wu-spell-tokens-tempo | 40-card | WU | 40 cards

White-blue Spell-Tokens Tempo — the spellslinger arm of "Soldiers & Go-Wide Tokens": every instant and sorcery leaves a body behind (Tura Kennerüd, Skyknight; kicked Protect the Negotiators) while Raff, Weatherlight Stalwart taps the spare Soldiers to draw a card per spell. Haunting Figment, Haughty Djinn, and graveyard-discounted Tolarian Terror provide the clock; counterspells, stun counters, and bounce protect the lead until the token air-and-ground force closes.

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
8x Island
5x Plains
2x Idyllic Beachfront    WU dual, enters tapped
```

### CREATURES (13)
```
CMC  Card                        Qty   Color  Role                                              Rar
  2  Resolute Reinforcements     x2    W      Flash Soldier pair; Raff tap fodder               U
  2  Raff, Weatherlight Stalwart x2    WU     Draw engine: tap two tokens per spell cast        U
  2  Stenn, Paranoid Partisan    x1    WU     Instant discount engine (self-blinks)             R
  2  Haunting Figment            x2    U      Unblockable clock on spell turns                  C
  3  Haughty Djinn               x1    U      Growing flyer + spell discount                    R
  3  Aether Channeler            x1    U      Flexible: Bird token / bounce / draw              R
  5  Tura Kennerüd, Skyknight    x2    WU     Token engine: Soldier per instant/sorcery         U
  7  Tolarian Terror             x2    U      Graveyard-discounted 5/5 ward finisher            C
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                        Qty   Color  Role                                              Rar
  1  Runic Shot                  x2    W      Removal for tapped creatures; kicked scry 2       U
  2  Impulse                     x2    U      Instant-speed dig/selection                       C
  2  Essence Scatter             x2    U      Counter creatures                                 C
  2  Protect the Negotiators     x2    U      Counter scaling with width; kicked Soldier        U
  2  Impede Momentum             x2    U      Proactive stun-lock (sorcery); Runic Shot setup   C
  2  Silver Scrutiny             x1    U      Flash draw 3 / late-game refuel                   R
```

### OTHER SPELLS (1)
```
CMC  Card                        Qty   Color  Role                                              Rar
  2  Founding the Third Path     x1    U      Engine saga: free spell, yard fill, flashback     U
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                                Rar
Negate                      x2    U      Counter noncreature vs control/combo                   C
Destroy Evil                x2    W      Enchantment removal + big-toughness answer             C
Citizen's Arrest            x2    W      Exile creatures/PWs when counters are wrong            C
Ertai's Scorn               x2    U      Discounted hard counter vs spell-heavy decks           U
Shore Up                    x1    U      One-mana hexproof + untap for a key engine piece       C
Anointed Peacekeeper        x1    W      Tax the sweeper/removal in slow matchups               R
```

## ANALYSIS

**The token-draw loop.** With Tura Kennerüd and Raff, Weatherlight Stalwart both in play, every instant or sorcery reads "create a 1/1 Soldier, then tap two creatures and draw a card" — the deck never runs out of gas while going wide. Raff's tap cost is real: tokens that just entered can be tapped (tapping isn't attacking), so the Soldiers Tura makes immediately pay for Raff's draws. Raff's {3}{W}{W} anthem-plus-vigilance activation is the finishing move — pump and swing while keeping blockers.

**Protect the Negotiators gets harder as you go wide.** "Counter target spell unless its controller pays {1} for each creature you control" is a soft counter on turn 2 and a hard counter once the token engine runs — the rare counterspell that improves with board width, exactly this pipeline's geometry.

**The stun-shot two-card kill.** Impede Momentum (tap + three stun counters) converts Runic Shot's "destroy target tapped creature" into unconditional removal; Runic Shot otherwise hits attackers and Raff-style tap engines. Both are sorceries — sequence them proactively, they cannot ambush.

**Graveyard dividends.** Twelve maindeck instants/sorceries feed Haughty Djinn (power = spells in yard, plus a discount that stacks with Stenn) and Tolarian Terror ({1} less per spell in yard — routinely a {1}{U} or {2}{U} 5/5 ward 2 by turn 5-6). Founding the Third Path stitches the whole engine together: chapter I free-casts an MV≤2 instant/sorcery from hand (still triggering Tura, Raff, and Figment), chapter II mills fuel for Djinn/Terror, chapter III flashbacks the best spell in the yard.

**No unconditional removal maindeck — by design.** The game-1 plan is counter it, stun it, or race it. Against a resolved bomb that never taps, board in Citizen's Arrest and Destroy Evil liberally; that is what six white sideboard answers are for.

**Curve and mulligans.** Sixteen of 25 spells sit at MV 2 and nothing lives at MV 4; turns 4+ are double-spell turns or a Tura/discounted Terror deployment. Mulligan toward 2-3 lands plus cheap action. Tura's {2}{W}{U}{U} is the hardest cast — 10 blue sources support the double blue by turn 5, with only the two taplands as friction. The 15th land was kept (audit recommends 16, PASS at ±1) because the deck is dense in 2-drops and draws extra cards through Raff.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap:**
- Vesuvan Duplimancy (M) — copy a creature whenever you target it with a spell; a genuine build-around (Shore Up becomes "copy Tura"), but it wants a deck built entirely around it. The most interesting cut.
- The Phasing of Zhalfir (R) — the best anti-creature sideboard card we couldn't afford a cap slot for.
- Academy Loremaster (R) — symmetric extra draws suit a harder control shell.
- Vodalian Hexcatcher (R) — flash lord + sacrifice-counter, but for Merfolk, not Soldiers.
- Defiler of Dreams (R) — discounts blue permanents; this deck casts spells, not permanents.
- Sphinx of Clear Skies (M) — domain payoff on a two-basic-type manabase.
- Valiant Veteran (R) — fewer Soldier bodies here than in the WR/WG builds; the anthem underperforms Raff's activation.
- Temporary Lockdown (R) — exiles our own tokens and half the deck.

**Uncommons/commons a tier below the chosen includes:**
- Micromancer (U) — tutors only MV-1 instants/sorceries; Runic Shot is the lone maindeck target.
- Djinn of the Fountain (U) — a five-mana Tura impression without the token.
- Academy Wall (C) — real card filtering, but a defender in a tempo deck.
- Combat Research (U) — draw engine that donates a card to the first removal spell.
- Volshe Tideturner (C) — its mana can't cast Tura (creature, unkicked); too narrow.
- Stall for Time (C), Voda Sea Scavenger (C), Soaring Drake (C), Talas Lookout (C) — replaceable filler.

**Sideboard considerations that missed the cut:**
- Artillery Blast (C) — 3 damage to a tapped creature at instant speed; fourth-best removal spell in the 75, first one in when more interaction is needed.
- Take Up the Shield (C) — Shore Up's expensive cousin; one protection effect is enough.
- Frostfist Strider (U) — a fine tempo body vs aggro, but the sideboard is answers-first.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.64   Ramp cards: 0

Color Balance (core):  [PASS]
  U  demand  73.5%  prod  66.7%  gap  +6.8pp  [OK]
  W  demand  26.5%  prod  46.7%  gap -20.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons max 2 copies each (across main + side)
[PASS] Rares/mythics max 1 copy each
[PASS] Max 5 rares/mythics total across main + side: 5/5 used
       (Stenn, Paranoid Partisan, Haughty Djinn, Aether Channeler,
        Silver Scrutiny, Anointed Peacekeeper)
[PASS] All cards from cube mainboard (basic lands exempt)
[PASS] Color identity within W/U for all cards
```
