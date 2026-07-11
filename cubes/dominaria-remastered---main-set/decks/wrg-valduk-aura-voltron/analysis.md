---
deck_name: "wrg-valduk-aura-voltron"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "WRG"
format: "40-card"
built_at: "2026-07-09T23:02:48Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
6x Plains
2x Mountain
1x Forest
2x Rith's Grove        Naya tri-land (GRW), sac unless you return a non-Lair land
1x Sacred Peaks        RW dual, enters tapped
2x Radiant Grove       GW dual, enters tapped
1x Wooded Ridgeline    GR dual, enters tapped
```

### CREATURES (16)
```
CMC  Card                              Qty   Color  Role                                    Rar
  1  Savannah Lions                    x2    W     Aggressive 1-drop / early Voltron host   C
  1  Birds of Paradise                 x1    G     Ramp/fixing (any color)                  R
  2  Radha, Heir to Keld                x1    RG    Aggro body + fixing (draws RR attacking) U
  2  Werebear                           x1    G     Mana + late-game host (threshold 4/4)    C
  2  Fa'adiyah Seer                     x1    G     Card selection, fuels Threshold          C
  3  Valduk, Keeper of the Flame        x2    R     Payoff — Auras become hasty attackers    U
  3  Vigilant Sentry                    x1    W     Body; threshold combat-pump ability      C
  3  Penumbra Bobcat                    x2    G     Resilient host, leaves a token on death  C
  4  Flametongue Kavu                   x2    R     Removal + body                           U
  4  Mystic Enforcer                    x1    WG    Evasive/protected host                   U
  5  Serra Angel                        x1    W     Evasive, vigilant host                   U
  5  Lyra Dawnbringer                   x1    W     Bomb / Angel lord / best host            M
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                              Qty   Color  Role                                    Rar
  1  Chain Lightning                    x2    R     Burn/removal/reach                       C
  1  Worldly Tutor                      x1    G     Tutors Valduk to the top of library      R
  3  Sevinne's Reclamation              x1    W     Recursion insurance (CMC <= 3)            R
```

### OTHER SPELLS (5)
```
CMC  Card                              Qty   Color  Role                                    Rar
  1  Spirit Link                        x1    W     Cheap Aura payoff, lifelink buffer       C
  3  Griffin Guide                      x1    W     Aura payoff, evasion + death insurance   U
  3  Undying Rage                       x1    R     Resilient Aura payoff (returns to hand)  C
  3  Seton's Desire                     x1    G     Aura payoff, threshold forced-block      C
  3  Divine Sacrament                   x1    W     Team anthem (White creatures)            R
```

## SIDEBOARD (10)
```
Card                              Qty   Color  Role / When to board in                       Rar
Tormod's Crypt                     x1    C      Graveyard hate vs. recursion/flashback         U
Wax // Wane                        x2    WG     Trick or enchantment removal (vs. Pacifism-style locks on your hosts) U
Orim's Thunder                      x2    W      Artifact/enchantment removal, kicker reach     U
Icy Manipulator                     x1    C      Tempo tapper, generic value                     U
Solar Blast                         x1    R      Extra burn/reach, cycles when dead             C
Renewed Faith                       x2    W      Lifegain buffer vs. aggro/burn, cycles         C
Damping Sphere                      x1    C      Anti-combo/storm/ritual tech                    U
```

## ANALYSIS

**Macro-Archetype: Aggro. Projected Avg MV: 2.60 (nonland).**

**Slot allocation:** Lands 15 (37.5% of N=40) — at the top of the Aggro 30–35% guidance band; 3-color THIN fixing (only 1 common dual per off-pair, one Naya tri-land) justified running slightly over the aggro baseline. Modifiers applied: Birds of Paradise + Radha + Werebear count as 3 cheap (MV<=2) mana sources, pulling 1 land off the baseline of 16. Creatures 16 (64% of 25 nonland). Instants/Sorceries 4 (16%). Other Spells (Auras + Divine Sacrament) 5 (20%) — this is a deliberate deviation from the generic Aggro "Engine & Infra 0–10%" guidance, because for this archetype the Auras aren't generic value engine pieces, they're the deck's namesake payoff multiplier (Valduk's whole function is converting them into extra attackers), so they're counted and weighted as core payload rather than filler.

**Mana base:** Core pips W:14 (45.2%), G:9 (29.0%), R:8 (25.8%) across 25 nonland core cards. Land sources: W 11 (Plains x6 + 3 W-producing duals), G 6 (Forest + 3 G-producing duals), R 6 (Mountain x2 + 3 R-producing duals + Rith's Grove). No splash colors — Naya is played as a true 3-color core, not W-base-with-splash.

**Self-grill revision history:** the Phase 9 Proposer/Challenger pass (run against the full cube working pool) flagged three real issues in the first draft, all addressed before finalizing:
1. *Curve congestion* — the initial list had 12-13 of 25 nonland cards (52%) at exactly 3 CMC. Fixed by cutting Radiant's Judgment, one Vigilant Sentry, one Griffin Guide, and one Seton's Desire, and adding real 2-drops (Werebear, Fa'adiyah Seer) and a second Valduk + Worldly Tutor (both 1-3 CMC). 3-CMC share dropped from 52% to 40%.
2. *Under-committed payoff* — only 1 of 2 legal Valduk copies was originally run despite zero rare-cap cost to add the second. Fixed by running 2x Valduk and adding Worldly Tutor (rare, {G}, "Search your library for a creature card... put it on top") to find him specifically. This uses the last of the 5 permitted rare/mythic slots.
3. *Manabase gap* — the draft ran RW and GW duals but no GR dual, despite Wooded Ridgeline (a legal common GR dual) sitting unused in the pool. Swapped in for one Sacred Peaks, patching the two thinnest colors without adding tempo cost (both lands enter tapped, so the swap is free).

Neither agent concluded the pipeline was non-viable — both explicitly noted that every Aura in the package functions as a fine standalone combat trick even without Valduk live, so the deck has a generic-aggro floor and a Voltron-payoff ceiling.

**Key interaction:** Valduk's trigger reads "for each Aura and Equipment attached to Valduk" at the beginning of combat, and the tokens are newly created each turn (not the Auras being consumed) — so a single Aura stuck to Valduk generates a fresh 3/1 haste/trample attacker every single combat he survives, not just once. Undying Rage is the highest-value Aura to land on him specifically, since even if Valduk dies, the Aura bounces back to hand to be recast on a fresh host.

**Threshold sub-theme:** Vigilant Sentry, Mystic Enforcer, Seton's Desire, and Divine Sacrament all upgrade once your graveyard hits 7+ cards. Fa'adiyah Seer is the only dedicated enabler (loot-discard), so Threshold should be treated as a mid-to-late-game bonus the deck drifts into via combat trades and card cycling (Chain Lightning, Solar Blast in the sideboard) rather than something to actively rush.

**Divine Sacrament caveat:** it buffs White creatures only — it does not buff Valduk (red) or his Elemental tokens (red). It's a pure beatdown-package anthem (hits 7 of 16 creatures: both Savannah Lions, Vigilant Sentry, Mystic Enforcer, Serra Angel, Lyra, plus Griffin Guide's Griffin tokens), independent of the Voltron sub-plan.

### Cards Considered but Excluded

*Rares/mythics cut for the 5-card budget:* Enlightened Tutor (finds an Aura but not Valduk himself — Worldly Tutor was the higher-priority tutor); Shivan Dragon, Rith the Awakener, Kamahl Fist of Krosa (all strong Naya top-end, but 6 CMC is too slow for this curve and the rare budget was already committed); Windborn Muse (great tax effect, more control-shaped than this build wants); Siege-Gang Commander (go-wide payoff, competes with Valduk for the "payoff" rare slot); Test of Endurance, Wrath of God, Gamble (off-plan for an aggro shell).

*Uncommons/commons a tier below the chosen includes:* Improvised Armor and Sun Clasp (both fine Auras with resilience clauses; cut to keep the Aura count at 4 rather than diluting further); Tiana, Ship's Caretaker (returns dead Auras to hand — thematically excellent, but a 5th 5-drop was one too many for this curve); Lightning Reflexes (cheap combat-trick Aura, redundant with Spirit Link at 1 CMC).

*Sideboard-consideration cards not included:* Grim Lavamancer (repeatable removal engine, rare — would need to displace a rare already at the 5-cap); Emerald Charm (modal enchantment removal/untap/anti-flying, close alternate to Wax // Wane); Sandstorm (1-damage-to-all-attackers sweeper, useful vs. go-wide 1/1 tokens); Crop Rotation (could fetch Rith's Grove on demand, cut as too cute for a 10-slot board).

## MANA AUDIT: PASS
```
Land Count:      15 / 16 recommended   [PASS]
Avg CMC (nonland): 2.60
Ramp detected:    0 (tool's literal "ramp" tag check under-detects Birds of Paradise/Werebear/Radha's mana abilities — verified manually, not a real gap)
Pip Demand (core): W 14 (45.2%) | G 9 (29.0%) | R 8 (25.8%)
Land Production:  W 11 (73.3%) | G 6 (40.0%) | R 6 (40.0%)
Color Balance:    PASS — all gaps negative (production exceeds demand in every color)
Splash Check:     PASS (no splash colors — true 3-color core)
Overall:          PASS
```

## RESTRICTIONS COMPLIANCE
```
[x] Commons: all <= 2 copies
[x] Uncommons: all <= 2 copies
[x] Rares: all <= 1 copy (Birds of Paradise, Worldly Tutor, Sevinne's Reclamation, Divine Sacrament)
[x] Mythics: all <= 1 copy (Lyra Dawnbringer)
[x] Total rare/mythic copies across main + sideboard: 5 / 5 max — PASS (at the cap, no room for more)
[x] All color identities within {W, R, G}
[x] Every card verified present in the cube's working pool by exact name
```
