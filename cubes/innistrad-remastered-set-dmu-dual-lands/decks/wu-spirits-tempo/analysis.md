---
deck_name: "spirits-wu-tempo"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-07-08T02:33:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
8x Plains
7x Island
1x Idyllic Beachfront    WU dual, enters tapped
```

### CREATURES (17)
```
CMC  Card                                    Qty   Color  Role                                    Rar
  1  Lantern Bearer // Lanterns' Lift         x2    U      Resilient flyer, disturb backup            C
  1  Lunarch Veteran // Luminous Phantom       x2    W      Lifegain engine, fuels Voice counters      C
  1  Mausoleum Wanderer                        x1    U      Keystone: Spirit lord + soft counter       R
  2  Metallic Mimic                            x1    C      Tribal enabler, becomes a Spirit           R
  2  Twinblade Geist // Twinblade Invocation   x2    W      Resilient double-strike clock              U
  2  Voice of the Blessed                      x1    W      Payoff/finisher, lifegain to counters      R
  3  Nebelgast Herald                          x2    U      Keystone: repeatable flash tap-down        U
  3  Spectral Shepherd                         x2    W      Engine: bounce a Spirit to protect/rebuy   U
  3  Spell Queller                             x1    WU     Keystone: flash exile a spell MV<=4        R
  4  Apothecary Geist                          x2    W      Payoff: gain 3 life off Spirit trigger     C
  4  Restoration Angel                         x1    W      Flash flyer, blinks an ETB creature        R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                                    Qty   Color  Role                                    Rar
  1  Essence Flux                              x2    U      Blink enabler, re-trigger ETBs             C
  1  Silent Departure                          x1    U      Tempo bounce, flashback for value          C
  1  Syncopate                                 x2    U      Scalable soft/tax counterspell, exiles     C
  2  Valorous Stance                           x1    W      Protect a Spirit or kill a big blocker     U
  3  Geistlight Snare                          x1    U      Discount soft counterspell                 U
```

## SIDEBOARD (10)
```
Card                                    Qty   Color  Role / When to board in                     Rar
Soul-Guide Gryff                          x1    W      GY hate flyer; vs flashback/reanimator/mill     C
Geistlight Snare                          x1    U      2nd counterspell; vs control/combo              U
Cathar Commando                           x2    W      Flash artifact/enchantment removal              C
Angelic Purge                             x1    W      Flexible exile removal; vs indestructible/recursive threats  C
Imprisoned in the Moon                    x1    U      Neutralizes planeswalkers/problem permanents    C
Avacynian Priest                          x1    W      Repeatable tapper; vs non-Human swarms          C
Boarded Window                            x1    C      -1/-0 to attackers; vs wide aggro incl. Humans  U
Fiend Hunter                              x1    W      Conditional exile removal; vs big threats       U
Mist Raven                                x1    U      Flying tempo bounce; vs grindy control          U
```

## ANALYSIS

**Macro-Archetype: Tempo. Projected Avg CMC: 2.08 (actual: 2.08).**

**The tribal core.** 14 of the deck's 17 creatures are Spirit-typed, plus Metallic Mimic (which becomes one on ETB). That's enough density that Mausoleum Wanderer's +1/+1-on-Spirit-ETB and Nebelgast Herald's tap-on-Spirit-ETB both fire multiple times per game -- Nebelgast Herald alone re-triggers off its own flash ETB, then off every subsequent Spirit that lands, functionally locking down 1-2 blockers per turn cycle once it's down.

**The lifegain sub-loop.** Lunarch Veteran triggers on any creature ETB (not just Spirits), so it converts the entire curve into fuel for Voice of the Blessed's counters. Apothecary Geist adds a guaranteed 3-life trigger (conditional on controlling another Spirit, which is nearly always true by turn 4). Two lifegain sources isn't a huge engine, but Voice of the Blessed only needs 4 counters to pick up flying and vigilance -- realistically online by turn 4-5.

**Blink redundancy.** Essence Flux (1cmc instant) and Restoration Angel (4cmc flash creature) both re-trigger ETB effects on the same target pool: Apothecary Geist (rebuy the life gain), Nebelgast Herald (rebuy the tap-down), or dodge a removal spell entirely. This is a real 2-card synergy package, not just incidental overlap.

**Interaction is soft, not hard.** Syncopate and Geistlight Snare are both pay-X-or-counter effects, not unconditional counters -- against a well-stocked opponent late-game they may not stick. Spell Queller and Mausoleum Wanderer's sacrifice ability are the deck's only hard(er) answers. This is a real tempo-deck tradeoff: the counters are cheap and proactive early, weaker late.

**Mana base note.** Voice of the Blessed wants WW on turn 2. W sources sit at 9/16 (56%), which is good for a double-pip 2-drop, but there's zero card selection in the mainboard to smooth a bad draw -- if Voice of the Blessed doesn't show up, the rest of the deck still functions, but that specific growth-finisher plan has to wait.

**Cards Considered but Excluded**

Rares/mythics cut for the 5-card cap (this deck spends all 5 on Mausoleum Wanderer, Voice of the Blessed, Metallic Mimic, Spell Queller, Restoration Angel): Thalia, Heretic Cathar (excellent disruptive hatebear, but not a Spirit and would've meant cutting a keystone), Thing in the Ice // Awoken Horror, Odric, Lunarch Marshal, Hopeful Initiate, Wedding Announcement // Wedding Festivity, Memory Deluge (would've helped the card-selection gap noted above), Jace, Unraveler of Secrets, Gisela, the Broken Blade, Deadeye Navigator (too far off-curve at 6cmc for this shell anyway), Helvault, and Deserted Beach (the rare WU dual -- skipped in favor of spending the rare budget on spells; the common Idyllic Beachfront covers fixing).

Off-color exclusions from the original archetype brief: Lingering Souls is actually BW (flashback costs 1B), and Tamiyo, Field Researcher is GUW (Bant) -- both fall outside the WU identity and were dropped rather than splashed, per the chosen pure-WU path.

Strong commons/uncommons a tier below the chosen includes: Niblis of the Urn and Guardian of Pilgrims (solid Spirits, but Nebelgast Herald/Voice of the Blessed do more in the same slots), Drogskol Shieldmate (good anti-aggro flash body, close call for the sideboard), Tower Geist (the deck's only realistic source of card selection if consistency needs shoring up -- good swap-in for a 2nd Apothecary Geist if lifegain isn't coming up), Battleground Geist (on-theme Spirit anthem, cut purely for curve -- the deck already peaks at 4cmc).

Additional sideboard-consideration cards: Compelling Deterrence, Cackling Counterpart, Blazing Torch, Thraben Inspector.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.08   Ramp cards: 0

Color Balance (core):  [PASS]
  U  demand  48.0%  prod  50.0%  gap  -2.0pp  [OK]
  W  demand  52.0%  prod  56.2%  gap  -4.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons at max 2 copies each (highest observed: 2, multiple cards)
[PASS] Rares/mythics at max 1 copy each (5 rares, all singleton)
[PASS] Max 5 rares/mythics total across mainboard + sideboard (exactly 5, all mainboard, 0 in sideboard)
```
