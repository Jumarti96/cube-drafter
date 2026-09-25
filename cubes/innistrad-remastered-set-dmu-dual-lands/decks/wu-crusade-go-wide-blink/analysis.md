---
deck_name: "wu-crusade-go-wide-blink"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-08-27T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  2x Idyllic Beachfront          WU dual, always enters tapped
  4x Island
  11x Plains
```

### CREATURES (10)

```
CMC  Card                                     Qty   Color  Role                                       Rar
  1  Thraben Inspector                        x1    W      Threat: 1-drop entry + Clue                C
  2  Niblis of the Urn                        x1    W      Threat: flier, taps on attack              U
  3  Fiend Hunter                             x1    W      Interaction: exile on an entry             U
  3  Nebelgast Herald                         x2    U      Interaction: taps on each Spirit entry     U
  3  Spell Queller                            x1    UW     Threat: flash flier + counter              R
  3  Thalia, Heretic Cathar                   x1    W      Threat: blockers enter tapped              R
  4  Odric, Lunarch Marshal                   x1    W      Payoff: board-wide flying + first strike   R
  4  Restoration Angel                        x1    W      Threat: flash blink, two entries           R
  6  Subjugator Angel                         x1    W      Threat: alpha-strike enabler               U
```

### INSTANTS & SORCERIES (8)

```
CMC  Card                                     Qty   Color  Role                                       Rar
  1  Essence Flux                             x2    U      Engine: 1-mana instant entry               C
  2  Gather the Townsfolk                     x2    W      Threat: two entries for two mana           C
  2  Valorous Stance                          x2    W      Interaction: modal protect / kill          U
  3  Lingering Souls                          x2    W      Threat: two flying Spirit tokens           U
```

### OTHER SPELLS (5)

```
CMC  Card                                     Qty   Color  Role                                       Rar
  2  Intangible Virtue                        x2    W      Payoff: anthem for the 8 tokens            U
  3  Angel's Tomb                             x1    C      Payoff: 3/3 flier on every entry           U
  3  Cathar's Call                            x1    W      Engine: an entry every end step            U
  5  Cathars' Crusade                         x1    W      Payoff: permanent +1/+1 on every entry     R
```

## SIDEBOARD (10)

```
Card                                     Qty   Color  Role / When to board in                     Rar
Cathar Commando                          x2    W      Artifacts (24) / enchantments (25)          C
Angelic Purge                            x2    W      Catch-all exile, any permanent type         C
Bound by Moonsilver                      x1    W      Recursive threats; stops transform          C
Imprisoned in the Moon                   x1    U      The cube's 7 planeswalkers                  C
Faith Unbroken                           x1    W      Exile removal plus a pump                   U
Slayer of the Wicked                     x1    W      Vampire / Werewolf / Zombie decks           U
Soul-Guide Gryff                         x2    W      Graveyard decks (27% of cube)               C
```

## ANALYSIS

### DECK IDENTITY

A WU go-wide aggro deck whose payoff is an ETB trigger. Cathars' Crusade reads "Whenever a creature you control enters, put a +1/+1 counter on EACH creature you control", so a board that is already wide grows quadratically: Gather the Townsfolk and Lingering Souls each put two bodies down at once, and Cathar's Call adds one every end step. The deck's real floor is not the singleton rare - it is 8 guaranteed creature tokens under two Intangible Virtue anthems, with Odric, Lunarch Marshal handing the whole board flying and first strike every combat. Essence Flux and Restoration Angel are the Blink/ETB half of the constraint: they manufacture an extra creature entry, which in this shell is a free board-wide pump at instant speed. The counters connect because the deck removes blockers rather than creatures - Nebelgast Herald on each of 8 Spirit entries, Niblis of the Urn on attack, Thalia making fresh blockers arrive tapped, and Subjugator Angel tapping the whole opposing board.

### KEY OBSERVATIONS

**The singleton rare is the ceiling, not the plan.** This is the most important correction the grill
produced. Hypergeometric on 40 cards / 17 lands, on the play: Cathars' Crusade is castable on turn 5
in **14.9%** of games and drawn at all by turn 7 in **32.5%**; Subjugator Angel is castable on turn 6
in **11.6%**. My first draft's prose presented both as load-bearing pillars. They are not. The deck's
floor is **8 guaranteed creature tokens** under **two Intangible Virtue anthems**, plus 9 creature
cards, with 10+ of the bodies flying — and Odric handing the whole board flying and first strike every
combat. Crusade turns a good board into an unbeatable one; it does not create the board.

**Where the counters come from, counted.**

| Source | Entries | Notes |
|---|---|---|
| Gather the Townsfolk ×2 | 4 | two bodies per card, {1}{W} |
| Lingering Souls ×2 | 4 | two *flying* Spirit tokens per card |
| Cathar's Call ×1 | 1 per turn | the only unconditional recurring entry in the pool |
| Essence Flux ×2 | 1 each, instant | a board-wide +1/+1 for {U} under Crusade |
| Restoration Angel ×1 | 2 (itself + a blink) | flash |
| creature cards | 9 | Thraben Inspector through Subjugator Angel |

**Why blue, when it is only 5 pips of 26.** The Challenger computed the mono-white alternative
explicitly. Going mono-white buys **+1.81pp** on the turn-2 white play, **+0.28pp** on turn-5
`{3}{W}{W}` Cathars' Crusade, and **+0.02pp** on turn-6 `{4}{W}{W}` Subjugator Angel — under two
points, total. It surrenders **5 of 23 nonland cards (21.7%)**: Nebelgast Herald ×2, Spell Queller,
Essence Flux ×2. Nebelgast Herald alone taps a blocker on each of **8 Spirit entries**, and the
mono-white pool's nearest equivalent (Avacynian Priest) cannot tap Humans at all. Blue earns its six
sources.

**Nebelgast Herald is interaction, not a threat.** I originally filed it as a threat, which put the
interaction bucket at a comfortable in-band 13.0%. Its own `taxonomic_profile` lists
`Interaction/Disruption` and nothing else. Refiled honestly, interaction is **21.7%** — over band, and
that is what the deck actually is.

**Cathars' Crusade has one genuine anti-synergy, worth knowing.** It puts a counter on *each* creature
simultaneously, so a board's power values **converge**. Any "creatures with different powers" payoff
(Coven, on Ambitious Farmhand) gets *harder* to turn on as the payoff works. Nothing in the final list
depends on that, but it is why Ambitious Farmhand is not here.

**Rare budget.** Cathars' Crusade, Odric Lunarch Marshal, Restoration Angel, Spell Queller, Thalia
Heretic Cathar — 5 of 5, all mainboard, so the sideboard is all commons and uncommons by necessity.
Deserted Beach (the only untapped WU dual) was declined for the same reason: a land does not convert
into damage.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (aggro):  [PASS]
  MV distribution (23 nonland):  1:3  2:7  3:9  4:2  5:1  6:1
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 4.8: Angel's Tomb@0.8, Odric, Lunarch Marshal@0.7, Subjugator Angel@0.7, Intangible Virtue@0.8, Intangible Virtue@0.8) → p=0.83 (need ≥ 0.75)
  PASS  enabler: 15 copies → p=1.00 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 41%  T2 93%  T3 99%
Coverage:  [PASS]
  OK        wide_boards: Subjugator Angel, Nebelgast Herald, Thalia, Heretic Cathar
  OK        single_large_threat: Valorous Stance, Fiend Hunter
  CONCEDED  noncreature_permanents: 0 of 23 nonland cards answer a RESOLVED artifact or enchantment against a cube holding 49 of them (24 artifacts + 25 enchantments = 17.7% of 277 nonland cards). Conceded maindeck: the rare cap is fully spent on the payoff and the cards that make it connect, and an aggro deck at goldfish 7 would rather add a body. 2x Cathar Commando and 2x Angelic Purge board in.
  OK        stack: Spell Queller
  CONCEDED  graveyard: No maindeck graveyard answer against the cube's largest threat class (75 of 277 nonland cards, 27.1%). 2x Soul-Guide Gryff board in - they are Spirits, so they also feed Nebelgast Herald. Conceded maindeck to keep the 23 nonland slots on bodies that trigger the payoff.
```

- No WARN-tier flags after the Phase 9 repair: curve PASS and goldfish PASS (87% keepable, 88% to three lands by turn three).
- The mana audit dropped to WARN (+10.2pp white gap) immediately after the repair, because Odric and Cathar's Call are both white and replaced a colourless artifact and a rare. Repaired by moving one Island to a Plains (10/5 to 11/4); the audit is PASS at +4.3pp. A 12/3 split was tested and rejected - it fixes white but drops blue production to 29.4%, stranding the five blue pips the deck needs on curve.
- Phase 9 approval round raised two BLOCKING stale-text defects introduced by the repair itself: failure_modes.gas-out still named Wedding Announcement (cut), and the top-level restrictions_checklist mirror still enumerated it in place of Odric. Both fixed here. Six further stale derivations (payoff-copies-reading-the-trigger 3->2, MV-4+ cards 3->4, white sources 12->13, avg MV 2.700->2.739, Angelic Purge 1x->2x, creature cards 9->10) were corrected in the same pass. None changed a computed gate result.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | Cathar's Call creates a 1/1 Human token at the beginning of every end step at no further cost, which under Cathars' Crusade is a free board-wide +1/+1 every turn. Thraben Inspector's Clue ('{2}, Sacrifice this token: Draw a card') and Essence Flux (converts a spare {U} into a creature entry) are the other two sinks. Angel's Tomb needs no mana to animate. |
| `screw` | mitigation | Ten cards at mana value 2 or less of 23 nonland (curve 1:3, 2:7), and the deck's two widest cards - Gather the Townsfolk at {1}{W} and Lingering Souls at {2}{W} - are both castable off basics. Thirteen of seventeen lands produce white and only 2 of 17 enter tapped. Goldfish reports 87% keepable and 88% to three lands by turn three. |
| `decapitation` | mitigation | Cathars' Crusade is a singleton rare, so the payoff is layered rather than duplicated - and the layering is honest about what each piece does. Only TWO of the six credited payoff copies read the payoff's own trigger 'whenever a creature you control enters': Cathars' Crusade and Angel's Tomb (reduced to 1 copy in the Phase 9 repair). The other four convert the board differently - Intangible Virtue x2 is an anthem for 8 of roughly 18 bodies, Odric grants the whole board flying and first strike each combat, and Subjugator Angel taps the opposing board. Six copies at effective 4.8. Angel's Tomb is an ARTIFACT and Intangible Virtue an ENCHANTMENT, so creature removal answers neither. |
| `gas-out` | mitigation | The deck's bodies come in pairs, so each card is two entries: Gather the Townsfolk x2 and Lingering Souls x2 are four cards producing eight bodies. Cathar's Call ('At the beginning of your end step, create a 1/1 white Human creature token') refuels UNCONDITIONALLY every turn - it replaces Wedding Announcement here and is strictly better for this mode, because Wedding Announcement made a body only on turns the deck did not attack wide. Thraben Inspector leaves a Clue ('{2}, Sacrifice this token: Draw a card'), and Cathars' Crusade means a topdecked 1/1 token still pumps the entire board. |
| `raced` | accepted | The deck has 4 cards at mana value 4 or more (Restoration Angel 4, Odric 4, Cathars' Crusade 5, Subjugator Angel 6) and 5 interaction slots, none of which is unconditional removal - Valorous Stance kills only toughness 4 or greater and Fiend Hunter's exile reverses if it dies. Mitigating would mean adding removal at the cost of the bodies that trigger the payoff, and since Cathars' Crusade pays out per ENTRY, cutting entries reduces the payoff itself, not merely the deck's speed. That is a cost to the kill mechanism, not to tempo. Taken deliberately: Nebelgast Herald x2, Niblis, Thalia, Odric and Subjugator Angel are blocker-denial rather than removal, which is how this build converts a race it cannot win into an unblocked alpha strike. The cube's lifegain class (15 of 277, 5.4%) is unanswered and unanswerable - the WU pool contains no burn or drain reach. |
| `disruption-fizzle` | mitigation | The critical turn is the alpha strike, not a spell. Spell Queller ('Flash / When this creature enters, exile target spell with mana value 4 or less') and Restoration Angel ('Flash') can both be deployed at instant speed on the opponent's end step, and each is also a creature entry, so holding them up costs the deck nothing. Essence Flux protects a targeted creature by exiling and returning it, and Valorous Stance grants indestructible. Disclosed limit: indestructible answers destroy and damage only, not exile or bounce. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wedding Announcement // Wedding Festivity | Cut in the grill for Odric. Its own reliability discount conceded it 'makes a body only on turns you did NOT attack with two or more creatures' - it stops producing creature entries exactly when the aggro plan is working, in a deck whose payoff pays per entry. |
| Conjurer's Closet, Deadeye Navigator | The two dedicated blink engines, both rares at 5 and 6 mana. Each manufactures ONE extra entry per turn; Gather the Townsfolk manufactures two immediately for two mana. Against a 5-card cap this build buys its Crusade triggers from token makers. These are the engines Path B is built on. |
| Helvault | Its mass return only fires 'when Helvault is put into a graveyard from the battlefield', and the only WU enabler is Cathar Commando - a 3-card, 2-turn, one-shot sequence costing a rare slot. |
| Metallic Mimic, Voice of the Blessed, Mausoleum Wanderer, Hopeful Initiate, Docent of Perfection, Thing in the Ice, Jace Unraveler of Secrets | Rares and mythics cut on the 5-card cap. Metallic Mimic is the closest call - naming Spirit reaches 8 bodies, naming Human 7+ - but the cap is spent on the payoff itself and the cards that make it connect. |
| Battleground Geist | 'Other Spirit creatures you control get +1/+0' - 7 of the 8 Spirit bodies qualify, and it is itself a flier that triggers both Nebelgast Heralds on entry. A genuine count that the original 'top-end at 5+ mana' reason never stated. Cut on the curve once Odric took the 4-slot; the strongest common still on the outside. |
| Mausoleum Guard | 'When this creature dies, create two 1/1 white Spirit creature tokens with flying' - one card, three creature entries, and sweeper-proof. The strongest remaining absence; 4 mana and it must die first. |
| Drogskol Shieldmate | 'Flash / When this creature enters, other creatures you control get +0/+1' - a flash Spirit that would take Spirit entries from 8 to 10 and add a Crusade trigger on the opponent's end step. Cut for curve; live swap on iteration. |
| Geistlight Snare | 'costs {1} less if you control a Spirit... also {1} less if you control an enchantment' - both live here (8 Spirit bodies, 4 mainboard enchantments), so it is routinely a {U} counterspell. Cut only because interaction is already 6.7pp over band at 21.7%. |
| Lunarch Mantle | '+2/+2 and "{1}, Sacrifice a permanent: This creature gains flying"' - fodder is fed nine times over (8 tokens + a Clue). It was originally cut in a group whose stated mechanism was 'Equipment wants one big creature' - it is an Aura, not an Equipment, and that reason was false. The real reason is that it buffs one body where Odric grants flying to all of them. |
| Stitched Mangler, Overcharged Amalgam | Originally cut under a reason claiming their text 'reads Zombie or requires exiling a creature card from the graveyard' - FALSE for both; neither oracle text contains either, they merely carry the Zombie type. Real reasons: Stitched Mangler is a non-flying body that enters tapped in a build selected for reach and evasion; Overcharged Amalgam's exploit sacrifices a body in a deck whose payoff counts bodies, and it is a rare against a full cap. |
| Crusader of Odric | 'power and toughness each equal to the number of creatures you control' - frequently a 4/4 to 6/6 for three mana against 8 tokens plus 9 creature cards. Cut on evasion, not size: it has no flying, and this build was selected precisely because it makes the counters CONNECT. |
| Mentor of the Meek | 13 of ~18 bodies qualify for 'another creature you control with power 2 or less enters' - the strongest count in the deck. Cut because the {1} tax competes with deploying another body on the turns a turn-7 clock must be widening the board. |
| Ambitious Farmhand // Seasoned Cathar | An instructive anti-count: 'Coven - three or more creatures with different powers' gets HARDER as Cathars' Crusade works, because the Crusade puts a counter on EACH creature simultaneously and the board's powers converge. |
| Guardian of Pilgrims | A {1}{W} common Spirit with an ETB that would take Spirit entries from 8 to 9. It has empty synergy_clusters in the tagged data, so the Phase 5A seed never surfaced it - a genuine seed gap, disclosed. Its curve slot is held by Niblis of the Urn, which flies. |
| Torens Fist of the Angels, Young Wolf, Duel for Dominance | The green splash candidates, declined by all three sketchers. Torens is a rare against a full cap, and the other two add no width and no evasion. A third colour would also add tapped lands to a curve that wants untapped white on turns 1-3. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.74   Ramp cards: 0   Cantrips: 1
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.15 adj [MV 2.74 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  U  demand  19.2%  prod  35.3%  gap -16.1pp  [OK]
  W  demand  80.8%  prod  76.5%  gap  +4.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Commons / uncommons, max 2 copies ............ PASS  (no card above 2)
Rares / mythics, max 1 copy .................. PASS  (all 5 rares appear once)
Rare + mythic total across MB + SB, max 5 .... PASS  (exactly 5, all mainboard:
                                                     Cathars' Crusade, Odric Lunarch Marshal,
                                                     Restoration Angel, Spell Queller,
                                                     Thalia Heretic Cathar. Sideboard is all
                                                     commons/uncommons by necessity.)
All cards from the cube pool ................. PASS  (exact-name match; Plains/Island are
                                                     format-supplied basics)
Colour legality (W/U, no splash) ............. PASS  (effective_cost.best_mode non-None for
                                                     all nonland cards; Lingering Souls prints
                                                     B/W but casts for {2}{W} and its
                                                     flashback is counted at zero throughout)
Mainboard size 40 / sideboard size 10 ........ PASS
```
