---
deck_name: "gw-anthem-go-wide-tokens"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-07-09T02:08:49Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
9x Plains
5x Forest
2x Radiant Grove          GW dual, enters tapped
```

### CREATURES (10)
```
CMC  Card                          Qty   Color  Role                       Rar
  1  Thraben Inspector              x2    W      Cantrip/fodder             C
  3  Dauntless Cathar               x2    W      Token gen (GY recursion)   C
  4  Mausoleum Guard                x1    W      Token gen (death trigger)  U
  3  Torens, Fist of the Angels     x1    GW     Payoff/Engine              R
  3  Crusader of Odric              x2    W      Payoff/Threat              C
  3  Mentor of the Meek             x1    W      Card advantage engine      U
  2  Cathar Commando                x1    W      Interaction/flex body      C
```

### INSTANTS & SORCERIES (9)
```
CMC  Card                          Qty   Color  Role                       Rar
  2  Gather the Townsfolk           x2    W      Token generator            C
  2  Join the Dance                 x2    GW     Token gen (flashback)      U
  4  Second Harvest                 x1    G      Payoff/Finisher            R
  2  Valorous Stance                x2    W      Interaction                U
  3  Clear Shot                     x1    G      Interaction                U
  3  Angelic Purge                  x1    W      Interaction                C
```

### OTHER SPELLS (5)
```
CMC  Card                          Qty   Color  Role                       Rar
  3  Wedding Announcement // Wedding Festivity x1 W  Payoff/Engine          R
  5  Cathars' Crusade               x1    W      Payoff/Finisher            R
  2  Cryptolith Rite                x1    G      Mana engine/fixing         R
  2  Intangible Virtue              x2    W      Anthem                     U
```

## SIDEBOARD (10)
```
Card                          Qty   Color  Role / When to board in        Rar
Duel for Dominance             x1    G      Removal vs single big threats  C
Ambush Viper                   x2    G      Flash deathtouch vs aggro      C
Avacynian Priest               x2    W      Tap-down vs non-Human threats  C
Slayer of the Wicked           x1    W      Destroy hate vs Vamp/WW/Zombie U
Fiend Hunter                   x1    W      Exile removal on a body        U
Cathar Commando                x1    W      Artifact/enchantment hate      C
Bound by Moonsilver            x1    W      Lock down a problem creature   C
Strength of Arms               x1    W      Combat trick vs control        C
```

## ANALYSIS

**Macro-Archetype: Midrange. Projected Avg MV: 2.58.** Lands: 16 (40% of N=40) — Midrange band is 38–42%; no cantrip/dork/MDFC modifiers applied (0 cantrips, 0 dorks, 0 MDFC-lands in the 40). Interaction: 5 cards (Valorous Stance x2, Clear Shot, Angelic Purge, Cathar Commando) = 20.8% of 24 nonland — bottom of the 20–30% Midrange band, appropriate since the deck's own board presence (wide token count) doubles as its best interaction. Threats/Payoffs (absorbing Engine per the Midrange convention): 19/24 = 79.2%.

**Torens' engine triggers less than its text suggests.** Only 8 of the 24 nonland cards are creature spells (Thraben Inspector x2, Dauntless Cathar x2, Mausoleum Guard, Crusader of Odric x2, Mentor of the Meek) — Gather the Townsfolk, Join the Dance, and Wedding Announcement are sorceries/enchantments and don't trigger Torens' "whenever you cast a creature spell" clause. Play Torens as a strong body + counters payoff first, bonus token engine second.

**The mana base was rebuilt mid-review.** The original inclusion of Unnatural Growth ({1}{G}{G}{G}{G}) was flagged during the self-grill: needing 4 concurrent green sources off only 7 green lands in a 68%-white manabase is a genuine reliability problem (per Karsten-style source-count heuristics you'd want 16+ green sources for a 4-pip card, not 7) — it would often sit dead in hand. It was swapped for Cryptolith Rite ({1}{G}), which stays in the same rare slot, is itself in the Tokens synergy cluster, and directly patches the problem by letting every token tap for mana of any color — insurance for Cathars' Crusade's {3}{W}{W} and Second Harvest's {2}{G}{G}. Post-swap: avg CMC dropped from 2.71 to 2.58, and green pip demand dropped to 24.1% against 43.8% green sources (comfortable margin, still enough to reliably cast Second Harvest's double green).

**Mana source allocation:** 22 W pips / 7 G pips across core cards (75.9% / 24.1%). Targeting 11 W sources (9 Plains + 2 Radiant Grove) and 7 G sources (5 Forest + 2 Radiant Grove) out of 16 lands — G sources sit above raw pip share intentionally, since Second Harvest's {2}{G}{G} is the one remaining concentrated-green cost in the 40.

**Token math for Cathars' Crusade:** once it resolves, every subsequent token ETB triggers counters on the *entire* board — a single post-Crusade Gather the Townsfolk (2 tokens) adds 2 counters to every creature you control, not just the new tokens. This is what makes the enchantment a same-turn kill rather than a slow grind once it's live alongside 3+ bodies already in play.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap (or swapped out):**

| Card | Reason |
|---|---|
| Unnatural Growth | Included initially, cut during self-grill — {1}{G}{G}{G}{G} is unreliable off a 68%-white manabase; replaced by Cryptolith Rite in the same rare slot. |
| Decimator of the Provinces | Emerge {6}{G}{G}{G} needs a high-CMC creature to sacrifice for a meaningful discount; this deck's creatures are all 1–4 CMC, so the reduction is minimal and it'd rarely be castable below ~9 mana. Wrong shape for this curve. |
| Tamiyo's Journal | Slow (needs 3 accumulated Clues to do anything); doesn't touch the Tokens cluster, just Artifacts. Too grindy for a low-curve go-wide plan. |
| Metallic Mimic | Needs a single named creature type; this deck's tokens split across Human/Spirit/Human Soldier, so it only buffs a subset. |
| Mayor of Avabruck // Howlpack Alpha | Good Human anthem front-side, but the flip condition (no spells cast last turn) fights an active, spell-heavy go-wide plan. |
| Tireless Tracker | Strong generic card advantage but built around landfall/clues, not tokens — good-stuff pick that doesn't advance the pipeline. |
| Voice of the Blessed | Lifegain-counters shell overlap is thin in this build; no dedicated lifegain package to feed it. |
| Hopeful Initiate | Counters payoff, but its removal mode competes with counters we want on the board, not spent on itself. |

**Uncommons that are strong fits, a tier below the chosen includes:**

| Card | Reason |
|---|---|
| Cathar's Call | Recurring token-generating Aura — genuinely good, but Auras are a 2-for-1 risk against removal-heavy decks; consider over Cathar Commando if the meta is light on artifact/enchantment hate. |
| Ulvenwald Mysteries | Clue-into-token engine, overlaps with Thraben Inspector's clue but adds a repeatable sac-for-token loop; a reasonable swap-in for Mentor of the Meek in slower metas. |
| Hamlet Captain | Human-specific combat pump; redundant with the anthems already in the 40, cut for slot efficiency. |
| Howlpack Resurgence | Wolf/Werewolf-specific anthem — off-theme for a Human-token shell. |
| Pack Guardian | Flash 2/2 Wolf-maker; fine curve-filler, lost the slot to Mausoleum Guard's better death synergy with Cathars' Crusade. |

**Sideboard-consideration cards not included:**

| Card | Reason |
|---|---|
| Moonlight Hunt | Requires a Wolf/Werewolf to deal the damage — this deck has none, dead card. |
| Thalia, Heretic Cathar | Excellent tempo/stax rare vs. control, but the 5-rare budget was already spent mainboard. |
| Vanquish the Horde | A scaling board wipe is thematically backwards for a deck trying to keep the board wide — only relevant vs. mirror/other go-wide decks, and also a rare that doesn't fit the budget. |

## MANA AUDIT: PASS
```
── Mana Audit: PASS ──────────────────────────────────────────
Land count: 16 (recommended: 16) — PASS
Avg CMC: 2.58, Ramp count: 0
Pip demand: W=22, G=7 (75.9% / 24.1%)
Land production: W=11, G=7 (68.8% / 43.8%)
Color balance: W gap +7.1pp (OK), G gap -19.7pp (OK — green intentionally overserved to safely support Second Harvest's {2}{G}{G})
No splash colors.
Overall: PASS
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons: max 2 copies each — no violations (checked across mainboard+sideboard)
[PASS] Uncommons: max 2 copies each — no violations
[PASS] Rares/mythics: max 1 copy each — no violations
[PASS] Max 5 rares/mythics total (mainboard+sideboard combined): exactly 5 —
       Wedding Announcement // Wedding Festivity, Torens Fist of the Angels,
       Cathars' Crusade, Second Harvest, Cryptolith Rite
[PASS] Every card verified present by exact name in the cube's working pool cache
```
