---
deck_name: "gw-humans-tokens-into-counters"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "GW"
format: "40-card"
built_at: "2026-07-08T18:42:46Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
10x Plains
4x  Forest
2x  Radiant Grove          GW dual, enters tapped
```

### CREATURES (14)
```
CMC  Card                          Qty  Color  Role                                Rar
  1  Hopeful Initiate               x1   W     Counters payoff / utility removal    R
  1  Thraben Inspector              x2   W     Human body + card draw (Clue)        C
  2  Metallic Mimic                 x1   C     Human lord + counter engine          R
  2  Cathar Commando                x2   W     Flash artifact/ench removal (Human)  C
  3  Torens, Fist of the Angels     x1   GW    Token+counter engine payoff          R
  3  Tireless Tracker               x1   G     Card draw / counters engine          R
  3  Fiend Hunter                   x2   W     Exile removal (Human body)           U
  3  Crusader of Odric              x2   W     Board-count-scaling threat           C
  3  Mentor of the Meek             x2   W     Card draw engine                     U
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                    Qty  Color  Role                                  Rar
  2  Gather the Townsfolk     x2   W     Human token generator                  C
  2  Join the Dance           x2   GW    Human token generator (flashback)      U
  2  Duel for Dominance       x2   G     Removal (Coven-conditional +1/+1)      C
  2  Travel Preparations      x1   G     Counter distribution (flashback)       U
```

### OTHER SPELLS (3)
```
CMC  Card                Qty  Color  Role                              Rar
  2  Intangible Virtue     x2   W    Token anthem (+1/+1, vigilance)    U
  5  Cathars' Crusade      x1   W    Counter snowball payoff            R
```

## SIDEBOARD (10)
```
Card                    Qty  Color  Role / When to board in                    Rar
Slayer of the Wicked     x2   W     Vs Vampire/Werewolf/Zombie tribal decks     U
Valorous Stance          x2   W     Protect a payoff or kill a big blocker      U
Soul-Guide Gryff         x2   W     Vs graveyard/flashback/reanimator decks     C
Clear Shot               x2   G     Vs big/evasive threats outsizing our board  U
Bound by Moonsilver      x2   W     Lock down a threat (also stops transform)   C
```

## ANALYSIS

**The core loop.** 13 of the 24 nonland cards are Human creatures (Hopeful Initiate, 2x Thraben Inspector, 2x Fiend Hunter, 2x Cathar Commando, 2x Crusader of Odric, 2x Mentor of the Meek, Torens, Tireless Tracker), plus Gather the Townsfolk, Join the Dance, and Torens itself all mint additional Human tokens. Metallic Mimic named "Human" turns every one of those ETBs into a free +1/+1 counter; Cathars' Crusade turns every one of them into a counter on *every* creature you control simultaneously. With 5 creatures already on board, casting one more creature or Gather the Townsfolk with Cathars' Crusade in play adds 6 total counters in a single trigger.

**Why Intangible Virtue over the originally-planned Mausoleum Guard.** The self-grill (Proposer + Challenger agents) independently flagged that Crusader of Odric is a self-scaling threat, not a team anthem — nothing in the original list buffed the token swarm as a group. Mausoleum Guard's death-trigger tokens are also Spirits, not Humans, so they fed the "wide" half of the plan but not the "Humans" or Metallic Mimic half. Swapping 2x Mausoleum Guard for 2x Intangible Virtue ("Creature tokens you control get +1/+1 and have vigilance") gives every token from Gather the Townsfolk, Join the Dance, and Torens a real, permanent team buff, and lowered the curve (avg CMC 2.5 to 2.33) without changing pip demand.

**Duel for Dominance caveat.** Its bonus +1/+1 counter only fires under Coven (3+ creatures with different power). Because the deck runs a lot of paired duplicates early, don't count on the counter mode turn 2-3 — treat it as clean removal first, upside second.

**Mana base.** W pips 22 (75.9%) / G pips 7 (24.1%) across the 24 nonland cards, giving 12 W sources / 6 G sources of 16 lands (the 2x Radiant Grove count toward both). Green is genuinely a light support color here (Torens, Tireless Tracker, Duel for Dominance x2, Travel Preparations) rather than a co-equal partner — the audit passed at exactly the recommended 16 lands with no color-balance flags, but a slow green draw still just means the white half of the plan (which carries 22 of 29 total pips) keeps functioning.

**Matchup gaps.** The sideboard has strong, specific answers for tribal decks, graveyard/flashback strategies, and big/evasive threats — the cube's second- and third-most common tags after aggro. It does not carry a dedicated anti-aggro tool (no lifegain, no sweeper); against the cube's most common archetype (aggro, 81 tag-count) the deck relies on its own low curve and removal density rather than a sideboard plan.

**Cards Considered but Excluded**

*Rares/mythics cut by the 5-card cap* (all legal GW/colorless fits, cut only for budget — any could replace Hopeful Initiate or Tireless Tracker in a rebuild): Odric, Lunarch Marshal (keyword-sharing payoff — belongs to the alternate "keyword-soup" path that was not chosen); Mayor of Avabruck // Howlpack Alpha (Human anthem lord, arguably a stronger "Humans matter" payoff than anything in the final 5 — top alternate if cutting Tireless Tracker's looser tribal tie); Wedding Announcement // Wedding Festivity (token generator that flips into a true team anthem — rated as possibly stronger than Hopeful Initiate during the grill); Second Harvest (explosive token-doubler, high ceiling with Cathars' Crusade, higher variance than Tireless Tracker); Voice of the Blessed, Thalia Heretic Cathar, Restoration Angel, Gisela the Broken Blade, Sigarda Host of Herons, Wrenn and Seven, Cryptolith Rite, Eldritch Evolution, Hermit Druid; Overgrown Farmland (strictly better than Radiant Grove late-game, cut only to save the rare slot for a payoff).

*Commons/uncommons a tier below the chosen includes*: Hamlet Captain and Dawnhart Disciple (Human combat-buff bodies, redundant with Crusader of Odric/Intangible Virtue's anthem effects); Cathar's Call and Ulvenwald Mysteries (alternate token engines, slightly clunkier than Gather the Townsfolk/Join the Dance); Duskwatch Recruiter // Krallenhorde Howler (strong card selection but loses "Human" on the back face); Mausoleum Guard (cut via the swap above); Young Wolf, Howlpack Resurgence, Ambitious Farmhand, Somberwald Sage, Groundskeeper, Niblis of the Urn, Drogskol Shieldmate, Lunarch Veteran, Apothecary Geist, Intrepid Provisioner, Twinblade Geist, Lunarch Mantle, Strength of Arms, Angelic Purge, Ambush Viper, Boarded Window.

*Sideboard-consideration cards not included*: Moonlight Hunt (cut — its damage mode requires Wolf/Werewolf creatures you control, which this deck runs none of); Vanquish the Horde (rare, blocked by the 5-card cap — would be the sweeper the anti-aggro gap above is missing).

## MANA AUDIT: PASS
```
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.33   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  24.1%  prod  37.5%  gap -13.4pp  [OK]
  W  demand  75.9%  prod  75.0%  gap  +0.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] commons/uncommons up to 2 copies each
[PASS] rares/mythics up to 1 copy each
[PASS] max 5 rares/mythics total across main+sideboard (exactly 5:
       Hopeful Initiate, Metallic Mimic, Torens Fist of the Angels,
       Tireless Tracker, Cathars' Crusade -- 0 in sideboard)
```
