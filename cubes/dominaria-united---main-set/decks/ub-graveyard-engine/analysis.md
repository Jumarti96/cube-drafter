---
deck_name: "ub-graveyard-engine"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "UB"
format: "40-card"
built_at: "2026-07-11T16:38:59Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
 6x Island
 6x Swamp
 2x Contaminated Aquifer     UB dual (typed Island Swamp), enters tapped
 2x Crystal Grotto           Scry 1 on ETB; {T}: {C} or {1},{T}: any color
```

### CREATURES (12)
```
CMC  Card                        Qty   Color  Role                                      Rar
  2  Vohar, Vodalian Desecrator  x2    UB     Engine core — loot fills yard; sac        U
                                              recasts an i/s (exiles it after)
  3  Eerie Soultender            x2    B      Mill 3 on ETB; yard-exile rebuys creature C
  3  Academy Wall                x1    U      Defensive loot — once per turn on i/s     C
  3  Haughty Djinn               x1    U      Threat + engine: power = i/s in yard,     R
                                              i/s cost {1} less
  4  Rona, Sheoldred's Faithful  x2    UB     Drain per i/s cast; recasts from yard     U
  4  Ertai Resurrected           x1    UB     Flash counter-or-removal on a body        R
  4  Monstrous War-Leech         x1    B      Kicked mill 4; P/T = greatest MV in yard  U
  7  Tolarian Terror             x1    U      Spell-count finisher — 5/5 ward           C
  7  Writhing Necromass          x1    B      Creature-count finisher — 7/7 deathtouch  C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                        Qty   Color  Role                                      Rar
  1  Cut Down                    x2    B      Cheap removal                             U
  2  Essence Scatter             x1    U      Counter a creature bomb (promoted main)   C
  2  Tribute to Urborg           x2    B      Removal; kicked scales with i/s in yard   C
  3  Phyrexian Espionage         x2    U      Draw 2; kicked adds discard               C
  3  Shadow Prophecy             x2    B      Instant dig; leftovers feed the yard      C
```

### OTHER SPELLS (3)
```
CMC  Card                        Qty   Color  Role                                      Rar
  2  Founding the Third Path     x2    U      Saga: free 1-2 MV i/s, mill 4, flashback  U
  5  The Cruelty of Gix          x1    B      Discard / tutor / reanimate a finisher    R
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                       Rar
Essence Scatter             x1    U      Second counter vs creature bombs              C
Extinguish the Light        x2    B      Hard removal for big threats                  C
Impede Momentum             x1    U      Stun a huge ward/hexproof attacker            C
Negate                      x2    U      Control, sagas, sweepers                      C
Rona's Vortex               x2    U      Tempo bounce; kicked bottoms recursion/
                                         reanimation targets                           U
Drag to the Bottom          x1    B      -3/-3 sweeper vs go-wide (domain capped at 2) R
Silver Scrutiny             x1    U      Flash draw X vs control                       R
```

## ANALYSIS

**The hybrid premise, honestly stated.** Enablers here are type-agnostic — Vohar's loot, Academy Wall's loot, Soultender's mill 3, Founding's mill 4, kicked War-Leech's mill 4, and Shadow Prophecy's leftovers all fill the graveyard with whatever the top of the library holds — while each payoff reads only the pile it cares about: Terror, Djinn, Epiphany-style effects, and kicked Tribute read instants/sorceries; Necromass reads creature cards; War-Leech reads the single largest mana value. The deck never has to choose which count to feed. The cost, flagged by the grill and worth internalizing: any single game usually cashes only one or two payoff axes, since each is a 1-of.

**The engine eats its own fuel — pilot accordingly.** This is the grill's most important finding. Vohar's sacrifice *exiles* the recast spell; Founding chapter III *exiles* the flashbacked card; Eerie Soultender's rebuy exiles itself AND removes a creature from the yard (a net −2 to Necromass's count); Rona's self-recast removes Rona from the count; Cruelty chapter III pulls a creature out. Every recursion activation shrinks the very counts Terror/Djinn/Necromass read. The discipline: cash recursion *after* the count-payoffs have landed, not before. Don't Vohar away your Terror fuel on turn 4.

**Tempo of the payoffs.** With 9 mainboard instants/sorceries (22.5% of the deck), mill hits fewer than one i/s per activation on average — Tolarian Terror realistically lands turn 6+ for {2–3}{U}, kicked Tribute is around −4/−4, and Haughty Djinn typically swings for 3–4 by turn 5. That is a grind clock, not a race. Academy Wall's loot is once per turn (not per spell) — it is a defensive body with a slow value drip, no more.

**Grill fixes applied.** The Challenger approved with changes, all adopted: Cosmic Epiphany → Haughty Djinn (1-for-1 rare swap — the pool's most on-plan rare; adds threat density the original list lacked and discounts every spell); Academy Wall trimmed to 1 with an Essence Scatter promoted to the mainboard (an opposing bomb resolving through zero maindeck counters was the primary loss path); 1 Impede Momentum and the promoted Scatter's sideboard slot became 2 Rona's Vortex. Proportions after fixes run threat-light versus the Midrange table (7 true threats ≈ 17.5% of 40) — accepted deliberately: this is an engine-grind deck whose "extra threats" are the recursion layer itself (Rona recasts, Soultender rebuys, Cruelty reanimation), which conventional threat-counting misses.

**Mana notes.** Crystal Grotto's colored mana costs an extra {1} — its free mode is colorless. Effective tax-free untapped sources are 6 Island + 6 Swamp; sequence Contaminated Aquifer on turns 1–2 whenever possible so Rona's {1}{U}{B}{B} is on time at turn 4. Domain is capped at 2 basic land types in this deck: Shadow Prophecy digs exactly 2, and sideboard Drag to the Bottom is always −3/−3.

**Play patterns.** Founding the Third Path usually enters on chapter II (mill 4) — chapter I has only 4 free-castable targets (Cut Down ×2, unkicked Tribute ×2) and whiffs often. Cruelty of Gix's chapter III can take a creature from ANY graveyard — against other graveyard decks it's removal-plus-threat in one. War-Leech is a 7/7 exactly when a Terror or Necromass is dead or milled; a median yard makes it a 3/3–4/4, so kick it for the mill and treat the body as a bonus.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card limit:**
- Sheoldred, the Apocalypse (M) — the Challenger's alternate recommendation for the Epiphany slot; in a loot/draw-heavy shell she is the raw-power pick. Haughty Djinn won the slot on plan-fit; Sheoldred is swap #1 if you want more standalone power.
- Cosmic Epiphany (R) — cut in grill resolution for Haughty Djinn; it refuels but added no board presence to a threat-light list. Swap it back in if you find the deck flooding on threats and starving on cards.
- Liliana of the Veil (M) — symmetric discard fights the hand this engine wants to sculpt.
- Vesuvan Duplimancy (M) — needs self-targeting spells; the deck has none.
- Braids, Arisen Nightmare (R) — sacrifice engine wants cheaper, more expendable bodies than this list runs.
- Academy Loremaster (R) — feeds a draw-go opponent as much as us.

**Uncommons/commons that are strong fits, a tier below:**
- Djinn of the Fountain — 6-mana spells payoff; too slow next to Haughty Djinn.
- Micromancer — flagged by the grill as a trap here: its only tutor targets are Cut Down and unkicked-castable Tribute.
- Impulse — pure i/s count + selection; the last cut from the instant suite (Shadow Prophecy's yard-feeding won the slot).
- Phyrexian Rager / Talas Lookout — good value bodies that went to the graveyard-value build; here they feed neither count efficiently.
- Haunting Figment — wants a spell-per-turn tempo deck, not a grind deck.
- Coral Colony — mill engine needing a defender count this list doesn't have.

**Sideboard considerations that missed the cut:**
- Impede Momentum #2 — cut by the grill (sorcery-speed stun, feeds no count).
- Pilfer — targeted discard; take it over a Negate if control matchups are saga-light.
- Shore Up — protection for Djinn/Terror; worth a slot if removal-heavy decks dominate your meta.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.12   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  57.6%  prod  62.5%  gap  -4.9pp  [OK]
  U  demand  42.4%  prod  62.5%  gap -20.1pp  [OK]

Pip demand: 14 U / 19 B. Sources: 10 U / 10 B of 16 lands
(Crystal Grotto's colored mode costs an extra {1}; tax-free untapped
sources are 6 Island / 6 Swamp + 2 Aquifer taplands).
```

## RESTRICTIONS COMPLIANCE
```
[PASS] commons/uncommons max 2 copies each (main+side combined) — max observed 2
       (Essence Scatter: 1 main + 1 side = 2, common)
[PASS] rares/mythics max 1 copy each — Haughty Djinn, Ertai Resurrected,
       The Cruelty of Gix, Drag to the Bottom, Silver Scrutiny all x1
[PASS] max 5 rares/mythics total across main+side — exactly 5 (3 main + 2 side), 0 mythics
[PASS] all cards from cube mainboard — verified by exact name against working pool
[PASS] color identity within UB — all non-land cards UB-legal
[PASS] challenger verification — APPROVE-WITH-CHANGES; all four recommendations applied
       (Djinn rare swap, Essence Scatter promoted, Academy Wall role corrected,
       Impede Momentum #2 replaced)
```
