---
deck_name: "exactly-thirteen"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "B"
format: "40-card"
built_at: "2026-07-09T18:09:56Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
14 Swamp
2 Evolving Wilds           Fetches basic land, enters tapped
```

### CREATURES (10)
```
CMC  Card                    Qty   Color  Role                    Rar
  1  Sanitarium Skeleton     x2    B      Recurring blocker       C
  2  Asylum Visitor          x2    B      Card draw engine        U
  2  Butcher Ghoul           x2    B      Undying sac fodder      C
  3  Morbid Opportunist      x1    B      Draw on death           U
  4  Haunted Dead            x1    B      Graveyard recursion     U
  4  Tree of Perdition       x1    B      Combo payload           M
```

### INSTANTS & SORCERIES (11)
```
CMC  Card                    Qty   Color  Role                    Rar
  1  Village Rites           x2    B      Instant card draw       C
  1  Crawl from the Cellar   x2    B      Recursion + flashback   C
  1  Eaten Alive             x2    B      Exile removal           C
  1  Tragic Slip             x1    B      Morbid -13/-13 removal  C
  2  Infernal Grasp          x2    B      Instant destroy         U
  2  Murderous Compulsion    x1    B      Tapped removal          C
  2  Collective Brutality    x1    B      Escalate removal/drain  R
  5  Edgar's Awakening       x1    B      Reanimation             U
```

### OTHER SPELLS (3)
```
CMC  Card                    Qty   Color  Role                    Rar
  2  The Meathook Massacre   x1    B      Board wipe + drain      M
  3  Cryptolith Fragment     x1    C      Mana rock + life drain  U
     // Aurora of Emrakul
  4  Triskaidekaphobia      x1    B      Win at exactly 13       U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in     Rar
Boarded Window          x1    C      Anti-aggro (attackers -1/-0)  U
Killing Wave            x1    B      Sweeper vs wide boards        U
Morkrut Banshee         x1    B      Big creature removal            U
Sever the Bloodline     x1    B      Exile + flashback             U
Gisa's Bidding          x1    B      Token flood vs control        C
Olivia's Dragoon        x1    B      Flying blocker                C
Blood Artist            x1    B      Drain vs creature decks       U
Ecstatic Awakener       x1    C      Draw engine / sac outlet      C
Ghoulish Procession     x1    B      Tokens when creatures die     U
Desperate Farmer        x1    C      Lifelink blocker              C
// Depraved Harvester
```

## ANALYSIS

This deck executes a two-card deterministic win in 40-card limited: Tree of Perdition sets an opponent to exactly 13 life, and Triskaidekaphobia's upkeep trigger kills any player at exactly 13. The combo is mana-efficient (4B + 4B) and can be deployed as early as turn 5 with a clean curve.

The control shell maximizes survival and redundancy. Eight interactive spells clear blockers and protect the combo turn, while Crawl from the Cellar and Edgar's Awakening provide two layers of graveyard recursion if a piece is killed or milled. Collective Brutality is the most flexible spell in the deck: it can strip removal from the opponent's hand (mode 1), shrink an attacker (mode 2), or微调 life totals toward 13 (mode 3).

Cryptolith Fragment serves double duty: it accelerates to 4 mana and chips both players toward the 13-life breakpoint. Its transformed side, Aurora of Emrakul, becomes relevant if the game stalls at low life totals.

**Morbid math:** With Village Rites, Eaten Alive, and Butcher Ghoul, morbid is trivially active. Tragic Slip becomes a one-mana -13/-13 kill spell, and Morkrut Banshee (sideboard) becomes a 5-mana -4/-4 ETB. The deck is built to make creatures die on demand.

**Cards Considered but Excluded**

*Rares/mythics cut due to the 5-card limit:*
- **Skirsdag High Priest** (rare) — makes 5/5 flying Demons on morbid. Strong standalone threat but does not advance the combo; cut to make room for Edgar's Awakening (uncommon) which reanimates combo pieces directly.
- **Helvault** (rare) — can exile Tree to protect it from removal, but the 7-mana exile-opponent mode is too slow for 40-card. Not worth a rare slot.
- **Gravecrawler** (rare) — recurring Zombie, but "can't block" makes it awful in a control shell.
- **Conjurer's Closet** (rare) — blink effect that doesn't advance the combo meaningfully.

*Uncommons that are strong fits but a tier below:*
- **Archghoul of Thraben** — Zombie selection engine, but too tribal and slower than Asylum Visitor.
- **Demonic Taskmaster** — 3/3 flier, but the upkeep sacrifice tax is risky when we need to preserve bodies for morbid.
- **Restless Bloodseeker // Bloodsoaked Reveler** — Blood token generation, but the deck already has sufficient card draw without it.

*Sideboard-consideration cards left out:*
- **Demonmail Hauberk** — requires a creature to equip and then a sacrifice to move; too clunky for a low-creature combo deck.
- **Blazing Torch** — 2-damage removal, but most threats in the format are bigger than 2 toughness.
- **Epitaph Golem** — recycles graveyard, but the deck already has Crawl from the Cellar and Edgar's Awakening.
- **Soul Separator** — interesting with Tree (makes a 1/1 Spirit copy), but a 1/1 Tree only sets opponent to 1 life, breaking the 13-life combo.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     1.96   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand   0.0%  prod  87.5%  gap -87.5pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
commons_uncommons_max_2_copies     PASS
rares_mythics_max_1_copy           PASS
max_5_rares_mythics_total          PASS (3/5)
all_cards_from_working_pool        PASS
all_cards_B_or_colorless           PASS
```
