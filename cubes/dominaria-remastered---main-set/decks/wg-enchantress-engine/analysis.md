---
deck_name: "wg-enchantress-engine"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "GW"
format: "40-card"
built_at: "2026-07-09T22:55:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
8x Plains
4x Forest
2x Radiant Grove       GW dual, enters tapped
1x Drifting Meadow     W source, enters tapped, cycling 2
1x Slippery Karst      G source, enters tapped, cycling 2
```

### CREATURES (6)
```
CMC  Card                    Qty   Color  Role                        Rar
  3  Mesa Enchantress         x2    W      Core draw engine            U
  3  Auramancer                x2    W      Enchantment recursion        C
  4  Voice of All               x1    W      Evasive protection threat   U
  5  Serra Angel                 x1    W      Evasive finisher            U
```

### INSTANTS & SORCERIES (5)
```
CMC  Card                    Qty   Color  Role                        Rar
  1  Enlightened Tutor          x1    W      Tutor enchantment to top    R
  1  Worldly Tutor               x1    G      Tutor creature to top       R
  1  Swords to Plowshares       x2    W      Premium removal              U
  3  Sevinne's Reclamation       x1    W      Rebuy MV<=3 permanent         R
```

### OTHER SPELLS (13)
```
CMC  Card                    Qty   Color  Role                        Rar
  1  Wild Growth                x2    G      Cheap ramp trigger           C
  1  Spirit Link                 x1    W      Cheap lifegain trigger       C
  2  Sylvan Library                x1    G      Card selection engine        M
  2  Pacifism                       x2    W      Removal / trigger            C
  2  Sun Clasp                       x1    W      Pseudo-removal / trigger     C
  3  Divine Sacrament                x1    W      White anthem payoff           R
  3  Squirrel Nest                    x2    G      Repeatable token engine        U
  3  Seton's Desire                    x2    G      Combat pump payoff             C
  3  Griffin Guide                      x1    W      Evasion payoff                  U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in           Rar
Tormod's Crypt            x1    C      Graveyard hate                    U
Break Asunder              x1    G      Artifact/enchantment removal      C
Wax // Wane                 x1    GW     Flex pump or enchant removal       U
Radiant's Judgment           x1    W      Big-creature removal                C
Congregate                    x1    W      Lifegain vs aggro/burn                U
Spirit Link                    x1    W      Extra lifegain vs aggro                C
Griffin Guide                   x1    W      Extra evasive payoff                    U
Icatian Javelineers               x1    W      Anti-small-creature tech                 C
Renewed Faith                      x1    W      Lifegain vs aggro/burn                    C
Vigilant Sentry                     x1    W      Grindy threshold beater                    C
```

## ANALYSIS

**Engine math.** 13 of the 40 cards are enchantment-type spells (Sylvan Library, Divine Sacrament, Squirrel Nest x2, Seton's Desire x2, Griffin Guide, Wild Growth x2, Spirit Link, Pacifism x2, Sun Clasp) — every one of them draws a card off Mesa Enchantress on cast. Auramancer (x2) is the only card that turns a resolved enchantment back into a fresh cast trigger; Sevinne's Reclamation reanimates a permanent directly onto the battlefield and does **not** re-trigger Mesa Enchantress, despite being a recursion piece. Realistic expectation: 2-4 Mesa Enchantress triggers per game once it's online, not a continuous chain — this is a grindy value/midrange shell, not a true storm-style engine.

**Sylvan Library's actual role.** Its card advantage comes from its own draw-step trigger, independent of casting enchantments — it happens to also be an enchantment (so it triggers Mesa Enchantress once, on cast), but its ongoing value has nothing to do with the enchantment-casting plan. Treat it as a standalone selection engine bolted onto the deck.

**Threshold sub-theme is present but unsupported.** Divine Sacrament, Seton's Desire (x2), and sideboard Vigilant Sentry all key off 7+ cards in your graveyard, but the deck has no self-mill or discard outlet — only the two cycling lands feed the yard, and cycling a land competes with needing it for mana in a 16-land deck. Treat every threshold bonus as a lucky late-game upside, not a plan.

**Aura-to-creature ratio.** 5 self-target auras (Griffin Guide, Seton's Desire x2, Spirit Link, Sun Clasp) against 6 creatures is close to 1:1 — tighter than ideal for an aura deck, since losing a creature with an aura attached is a 2-for-1. Auramancer mitigates this by rebuying the aura, which is the main reason it's a full 2-of.

**Curve.** 1cmc:7, 2cmc:4, 3cmc:11, 4cmc:1, 5cmc:1 (avg 2.38). Turn 3 is heavily loaded — Mesa Enchantress competes with 5 other 3-drops for the same turn, meaning the "land the engine, then chain enchantments" sequencing often can't happen exactly on-curve. This was flagged and partially corrected during the self-grill (see below) but the 3-CMC concentration remains the deck's single biggest structural weakness.

**Self-grill revision log.** The Phase 9 Challenger flagged three issues: (1) the 3-CMC curve clump with zero 4-drops, (2) thin mainboard interaction (originally 3 removal spells), and (3) two whiffed-synergy filler creatures (Cleric of the Forward Order scales with copies of itself but the deck runs only one; Savannah Lions is a synergy-free vanilla body). Resolution: cut Vigilant Sentry, Cleric of the Forward Order, and Savannah Lions; added Sun Clasp (cheap curve-filling Enchantress trigger), a 2nd Pacifism (more interaction), and Voice of All (fills the 4-drop gap). Vigilant Sentry was moved to the sideboard rather than fully cut, since its threshold ability still has a home in grindy matchups where the graveyard fills up naturally.

### Cards Considered but Excluded

*Rares/mythics cut for the 5-card cap:* Hunting Grounds (mythic, GW) — the strongest omission; excellent with Zur cheating it in, but weak on its own without the graveyard/threshold support this build lacks. Wrath of God (rare) — a real sweeper, but kills our own board in an anthem-based plan. Windborn Muse (rare) — solid taxing body, but not a card-advantage or payoff piece. Test of Endurance (mythic) — cute alt win-con, needs a dedicated lifegain shell this deck doesn't run. Birds of Paradise (rare) — would have smoothed the curve nicely, lost out to the 5 chosen rares.

*Uncommons a tier below the cut line:* Improvised Armor (payoff aura with cycling insurance — lost to Sun Clasp/Voice of All on curve fit). Mystic Enforcer (GW 4-drop, protection from black + threshold — close call against Voice of All for the 4-slot; Voice of All won on flexibility). Nantuko Monastery / Mishra's Factory (manlands — excluded because they only tap for colorless, hurting a manabase that needs real WW/GG on curve). Invigorating Boon (needs a cycling sub-theme this deck doesn't build toward).

*Sideboard-consideration cards not included:* 2nd Radiant's Judgment, Emerald Charm, Lull, Werebear, Cleric of the Forward Order and Savannah Lions (both cut from the mainboard during the self-grill for being vanilla/whiffed-synergy — either could return as SB filler against slow creature mirrors).

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.38   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  32.3%  prod  43.8%  gap  -11.5pp  [OK]
  W  demand  67.7%  prod  68.8%  gap  +0.2pp   [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons: max 2 copies each - no violations
[PASS] Rares/mythics: max 1 copy each - no violations
[PASS] Max 5 rares/mythics total (main+SB): exactly 5 - Sylvan Library,
       Divine Sacrament, Enlightened Tutor, Sevinne's Reclamation,
       Worldly Tutor - all mainboard, 0 in sideboard
```
