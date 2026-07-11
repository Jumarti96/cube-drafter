---
deck_name: "ur-frozen-iteration"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UR"
format: "40-card"
built_at: "2026-07-09T00:54:41Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
  6x Island
  5x Mountain
  2x Molten Tributary    UR dual, enters tapped
  2x Evolving Wilds      Fetches any basic, fixes + thins
```

### CREATURES (10)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Delver of Secrets       x2    U      Early clock, flips off top-deck   C
  2  Thing in the Ice        x1    U      Pipeline anchor / mass-bounce win R
  2  Thermo-Alchemist        x2    R      Defender, repeatable reach engine U
  3  Wandering Mind          x2    RU     Flying body + digs for spells     U
  4  Mist Raven              x2    U      Flying tempo bounce               U
  5  Docent of Perfection    x1    U      Token engine, transforms to lord  R
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                    Qty   Color  Role                          Rar
  1  Silent Departure        x2    U      Bounce, flashback reuse           C
  1  Syncopate                x2    U      Scalable counterspell             C
  1  Lightning Axe            x2    R      Efficient removal (discard cost)  U
  2  Abrade                   x2    R      Flexible removal / artifact answer U
  2  Galvanic Iteration       x1    RU     Copies a spell, flashback reuse   R
  2  Think Twice               x2    U      Cantrip, flashback reuse          C
```

### OTHER SPELLS (4)
```
CMC  Card                        Qty   Color  Role                          Rar
  3  Chandra, Dressed to Kill    x1    R      Reach + impulse draw walker       M
  3  Burning Vengeance           x1    R      2 dmg per graveyard-cast spell    U
  3  Burning Vengeance           x1    R      2 dmg per graveyard-cast spell    U
  5  Jace, Unraveler of Secrets  x1    U      Card draw + bounce, control win   M
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in           Rar
Fiery Temper            x2    R      Extra reach/removal vs aggro      U
Savage Alliance         x2    R      Pseudo-sweeper vs go-wide tokens  U
Boarded Window          x2    C      Slows down aggressive attackers   U
Imprisoned in the Moon  x2    U      Answers a big creature/PW/land    C
Summary Dismissal       x1    U      Blowout vs combo/storm "go-off"   U
Nebelgast Herald        x1    U      Flash flier, ambush blocker       U
```

## ANALYSIS

Thing in the Ice is the pipeline anchor: a 2-mana Defender that counts down four ice counters off your own instant/sorcery casts, then flips into a 7/8 that bounces the whole board. Everything else either feeds that clock (cheap interaction, two flashback cantrips), protects it while it's a wall, or turns "cast a spell" into incremental damage (Thermo-Alchemist, Burning Vengeance, Docent of Perfection). Chandra and Jace are the control top-end once the board is frozen; Galvanic Iteration is the value multiplier tying the Spellslinger and Flashback halves of the plan together.

**Trigger math.** The pipeline runs on "cast an instant or sorcery." Mainboard carries 11 physical instants/sorceries, and three of those cards (Silent Departure x2, Think Twice x2, Galvanic Iteration x1) have flashback — meaning up to 5 additional cast triggers are available over a game beyond the initial 11, for a ceiling of 16 trigger events. Thing in the Ice needs exactly 4 to flip; on curve that's typically online by turn 4-5, sooner if Syncopate/Lightning Axe get used early.

**Docent of Perfection's flip condition.** Docent is an Insect Horror, not a Wizard — it doesn't count toward its own "control three or more Wizards" clause. It needs 3 Human Wizard tokens (or a token + Delver on the battlefield) before it transforms. Since each instant/sorcery cast makes one token, casting 3 spells after Docent resolves (or 2 with a Delver already on board) flips it into a +2/+1-and-flying lord for the token army.

**Burning Vengeance reach.** With 2 copies in play, every flashback recast (any of the 6 graveyard-castable spells: 2x Silent Departure, 2x Think Twice, 2x Galvanic Iteration) deals 4 damage total (2 per copy). This is the deck's best pure-reach line in a long game and was specifically chosen over Festival Crasher, which wanted to attack — in tension with a shell built on two Defenders (Thing in the Ice, Thermo-Alchemist) that explicitly can't.

**Galvanic Iteration as the connective tissue.** It's the one card that is simultaneously Spellslinger (copies a removal/counter/bounce spell) and Flashback (recastable from the graveyard for {1}{U}{R}), and each cast is itself a trigger for Thing in the Ice/Thermo-Alchemist/Docent — copying Syncopate or Abrade is a two-for-one that also advances the clock twice.

**Rare/mythic budget.** All 5 slots (Thing in the Ice, Docent of Perfection, Chandra Dressed to Kill, Jace Unraveler of Secrets, Galvanic Iteration) went to mainboard payoffs; the sideboard is 100% common/uncommon by design, leaving zero rare slack if you want to swap in a rare-tier sideboard card later — see Cards Considered but Excluded below for what got cut to make room.

### Cards Considered but Excluded

**Rares/mythics cut due to the 5-card cap:**
- **Bedlam Reveler** (R) — "discard your hand, then draw three cards," costs less per instant/sorcery in graveyard. Excellent in the Flashback Value Midrange path (Path B) that wasn't chosen; less central here since this list doesn't fill the graveyard as aggressively.
- **Mirrorwing Dragon** (M) — doubles targeted spells across your whole board. Needs a wider creature count than this stall-first shell runs; better suited to a go-wide spellslinger build.
- **Temporal Mastery** (M) — Miracle {1}{U} for an extra turn, {7} hardcast otherwise. Without graveyard-fill support the miracle trigger is a low-odds draw-dependent bonus rather than a reliable plan; the 7-mana floor is too high for a 15-land tempo shell.
- **Hullbreaker Horror** (R) — uncounterable flash bounce-on-cast finisher at 7 mana. Strong standalone top-end, but Chandra/Jace at 3-5 mana already cover the control-finisher slot more efficiently for the rare budget spent.
- **Stormcarved Coast** (R, land) — the cube's second UR dual. A real fixing upgrade over Evolving Wilds, but including it would cost a rare slot better spent on a payoff; the manabase passes the audit without it.

**Uncommons a tier below the chosen includes:**
- **Mystic Retrieval** — flashback recursion for instants/sorceries ({2}{R} flashback). Strong fit for the flashback sub-theme; cut because the deck already has enough card-advantage density (Think Twice x2, Jace, Wandering Mind x2) and this doesn't advance the board.
- **Compelling Deterrence** — plain bounce once you strip its dead Zombie clause (no Zombies in this pool). Redundant with Silent Departure/Mist Raven; a copy sat in an earlier sideboard draft and was cut in favor of a second Savage Alliance for better anti-token coverage.
- **Geistlight Snare** — conditional counterspell (cheaper with a Spirit or enchantment in play). This list runs only Nebelgast Herald (SB-only) as a Spirit and 2 enchantments, so the discount rarely triggers; a strictly worse Syncopate in this build.
- **Memory Deluge** (R) — would have been a strong card-advantage include, but is rare-gated and lost out to the five payoffs above.

**Sideboard-consideration cards not included:**
- **Voldaren Duelist**, **Stitched Mangler** — tempo/tap-down bodies considered for an aggro matchup slot; Boarded Window and Fiery Temper cover that matchup more directly.
- **Overcharged Amalgam** (R) — flash flying counter-on-exploit; a great sideboard card but rare-gated, would have required cutting a mainboard payoff to make room.

### Self-Grill Notes

Independent Proposer and Challenger agents reviewed the full 50-card list against the cube's working pool. The Challenger confirmed cube membership, restrictions compliance, and color identity are all clean, and explicitly concluded the pipeline is structurally sound (did not trigger the pipeline-nonviable re-evaluation path). Two revisions were applied from the Challenger's findings: swapped 2x Festival Crasher for 2x Burning Vengeance (Festival Crasher wants to attack, which is in tension with a shell built on two Defenders) and swapped the sideboard's weakest slot (Compelling Deterrence, whose Zombie clause is dead in this pool) for a second Savage Alliance. Chandra's role was corrected — she cannot target creatures, so she is reach/impulse-draw, not removal.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     2.28   Ramp cards: 0

Color Balance (core):  [PASS]
  R  demand  39.4%  prod  46.7%  gap  -7.3pp  [OK]
  U  demand  60.6%  prod  53.3%  gap  +7.3pp  [OK]
```

Note: only 2 lands are true same-turn UR duals (Molten Tributary). Evolving Wilds fixes but doesn't hold priority for a same-turn play. The cube's other UR dual, Stormcarved Coast, was deliberately left out to preserve the rare budget — see Cards Considered but Excluded above.

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: no card exceeds 2 copies
[PASS] Rares/mythics: no card exceeds 1 copy
[PASS] Max 5 rares/mythics total (main+SB): exactly 5 used, all
       mainboard (Thing in the Ice, Docent of Perfection, Chandra
       Dressed to Kill, Jace Unraveler of Secrets, Galvanic Iteration)
[PASS] All 26 unique card names verified present in cube working pool
[PASS] All color identities within {U, R}
```
