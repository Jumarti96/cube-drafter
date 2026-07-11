---
deck_name: "go-wide-wolf-tokens-aggro"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "RG"
format: "40-card"
built_at: "2026-07-08T16:40:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
7x  Mountain
7x  Forest
2x  Wooded Ridgeline           RG dual, enters tapped
```

### CREATURES (15)
```
CMC  Card                                          Qty   Color  Role                              Rar
  1  Village Messenger // Moonrise Intruder         x2    R      Hasty 1-drop, flips to menace     C
  1  Young Wolf                                     x2    G      Undying Wolf body, Wolf count     C
  2  Mayor of Avabruck // Howlpack Alpha             x1    G      Keystone: anthem->Wolf engine     R
  2  Runebound Wolf                                 x2    R      Payoff: Wolf/Werewolf-count burn  U
  2  Duskwatch Recruiter // Krallenhorde Howler      x2    G      Card selection, cost reduction    U
  3  Kruin Outlaw // Terror of Kruin Pass            x1    R      Keystone: double strike + menace  R
  3  Geier Reach Bandit // Vildin-Pack Alpha         x2    R      Hasty, mass-flips other Werewolves U
  3  Ulrich's Kindred                                x1    R      Wolf typal protector, trample     U
  4  Huntmaster of the Fells // Ravager of the Fells x1    RG     Keystone: Wolf token + lifegain    R
  4  Pack Guardian                                   x1    G      Flash Wolf token, ambush block    U
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                    Qty   Color  Role                              Rar
  1  Lightning Axe            x2    R      Premium cheap removal             U
  2  Moonlight Hunt           x2    G      Removal scaling off Wolf power    U
  2  Abrade                   x1    R      Flexible creature/artifact removal U
  3  Wild Hunger              x1    G      Combat trick, flashback           U
  4  Second Harvest           x1    G      Payoff: doubles all tokens        R
```

### OTHER SPELLS (2)
```
CMC  Card                                          Qty   Color  Role                                    Rar
  3  Howlpack Resurgence                             x1    G      Flash team pump for Wolves/Werewolves  U
  4  Arlinn Kord // Arlinn, Embraced by the Moon      x1    RG     Keystone: pump/token/burn planeswalker M
```

## SIDEBOARD (10)
```
Card                                        Qty   Color  Role / When to board in              Rar
Ambush Viper                                x2    G      Flash deathtouch vs aggro/big creatures  C
Fiery Temper                                x2    R      Cheap burn vs low-toughness decks        U
Smoldering Werewolf // Erupting Dreadwolf   x2    R      ETB double-ping vs token swarms          U
Clear Shot                                  x1    G      Fight removal vs single big threats      U
Savage Alliance                             x1    R      Modal mini-sweeper vs go-wide mirrors     U
Abrade                                      x1    R      Extra artifact hate (Vehicles/equipment) U
Hungry Ridgewolf                            x1    R      On-tribal payoff vs grindy/attrition      C
```

## ANALYSIS

Every werewolf keystone in this cube (Huntmaster of the Fells, Arlinn Kord, Mayor of Avabruck, Kruin Outlaw) stacks into the same plan: flip early, generate 2/2 Wolf tokens, and let Runebound Wolf / Moonlight Hunt / Howlpack Resurgence scale off however many Wolves and Werewolves are on the table. All 15 mainboard creatures are Wolf- or Werewolf-typed, so every payoff is live off the full curve, not a subset. Second Harvest is the one splurge slot — it doubles the token board Mayor/Huntmaster/Pack Guardian/Arlinn have already built, turning a wide board into a lethal one in a single instant.

**Slot allocation.** Lands: 16 (40.0% of N=40) — RG's two dual duty-cards (Huntmaster, Arlinn Kord) plus Ulrich's Kindred and one tapped dual land push above the pure-Aggro 30-35% band toward Midrange norms; the mana audit independently computed 16 as the exact recommended target given avg CMC 2.33, so this isn't padding, it's the deck's real number. Interaction: 6 of 24 nonland (25%) — Lightning Axe x2, Moonlight Hunt x2, Abrade, Wild Hunger — above the nominal 10-15% Aggro band, but Moonlight Hunt and Wild Hunger double as tribal payoffs (their output scales with Wolf/Werewolf power), so the "pure interaction" share is really closer to 12.5% (Lightning Axe + Abrade only). Threats/Payoffs: 18 of 24 (75%) — all 15 creatures plus Second Harvest, Arlinn Kord, and Howlpack Resurgence; no separate Engine budget was reserved, matching this skill's Midrange guidance that value pieces should pull double duty rather than compete for slots, since nearly every creature here is simultaneously a body and a flip-engine.

**100% tribal density.** All 15 mainboard creatures are Wolf- or Werewolf-typed — there is no filler creature that doesn't count toward Runebound Wolf's damage or Moonlight Hunt's/Howlpack Resurgence's team-wide triggers. Combined with 4 more Wolf-token sources off Mayor's back side, Huntmaster, Pack Guardian, and Arlinn Kord's 0-ability, a turn-6 board realistically has 6-8 Wolf/Werewolf bodies — enough for Runebound Wolf to close a game in one activation and for Second Harvest to double an already-winning board.

**Flip-tempo interaction.** Geier Reach Bandit's back side ("Whenever a Werewolf you control enters, you may transform it") lets any werewolf cast after Geier Reach Bandit has flipped skip the day/night timing check entirely — a real combo line worth sequencing around, since it turns Duskwatch Recruiter, Kruin Outlaw, or Huntmaster into an immediate flipped threat the turn they're cast, rather than waiting a full no-spell turn.

**Mana note.** Pip demand is R14/G15 (48%/52%), and land production is symmetric (R9/G9 including the 2 Wooded Ridgeline). The deck is close enough to 50/50 that either keystone curves out reliably; the only tapped land is the RG dual itself.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget (all 4 keystones + Second Harvest filled it):**
- Garruk Relentless // Garruk, the Veil-Cursed (mythic) — actually color identity B/G, not RG (its back side makes a black Wolf token and has a black sac ability); excluded on identity grounds before budget even mattered.
- Hanweir Garrison (rare) — strong attack-trigger token maker, but makes Human tokens, not Wolf tokens; lost the last rare slot to Second Harvest for being more directly on-theme.
- Tireless Tracker, Cryptolith Rite, Metallic Mimic (rares) — all strong standalone cards but none tie into the Wolf/Werewolf count plan specifically.
- Chandra, Dressed to Kill, Wrenn and Seven, Cultivator Colossus (mythics) — off-theme (spellslinger/ramp) or too slow (CMC 7) for a low-curve aggro shell.

**Uncommons that are strong fits but a tier below the current includes:**
- Villagers of Estwald // Howlpack of Estwald — solid flip body, but weaker floor than Geier Reach Bandit/Duskwatch Recruiter at the same 3-drop slot.
- Hinterland Logger // Timber Shredder — fine filler, cut for curve reasons (already 7 two-drops).
- Ulvenwald Mysteries — token engine, but produces Human tokens off nontoken-creature deaths, not Wolf-specific.
- Stensia Masquerade — good card, but built around Vampires attacking, no synergy here.
- A second copy each of Ulrich's Kindred and Pack Guardian were available under the 2-copy cap; left as 1-ofs to keep the curve from getting top-heavy.

**Sideboard-consideration cards not included:**
- Voldaren Ambusher — initially in the build, cut after self-grill review: its damage scales off Vampires you control, and this deck has none, making it a near-fixed 1-damage effect rather than real removal. Replaced with Hungry Ridgewolf.
- Duel for Dominance, Aim High, Neonate's Rush, Uncaged Fury, Blood Mist — all playable RG cards that lost out to more matchup-specific sideboard picks.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.33   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  51.7%  prod  56.2%  gap  -4.5pp  [OK]
  R  demand  48.3%  prod  56.2%  gap  -7.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] All commons/uncommons at or under 2-copy cap (verified per-card, main+sideboard combined)
[PASS] All rares/mythics at 1-copy cap
[PASS] Total rare/mythic count across main+sideboard: 5 / 5 max (Mayor of Avabruck, Kruin Outlaw,
       Huntmaster of the Fells, Second Harvest, Arlinn Kord)
[PASS] Sideboard rare/mythic count: 0 (all budget consumed by mainboard keystones)
[PASS] All non-basic cards verified to exist in the working pool cache by exact name
[PASS] All card color identities within {R, G} (no off-color inclusions, no splash needed)
```
