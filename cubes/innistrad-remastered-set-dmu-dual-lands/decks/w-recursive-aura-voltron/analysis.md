---
deck_name: "w-recursive-aura-voltron"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "W"
format: "40-card"
built_at: "2026-08-28T02:58:44Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  16x Plains                                     basic, untapped
```

### CREATURES (15)

```
CMC  Card                                       Qty  Color  Role                      Rar
  1  Hopeful Initiate                           x1   W      threat-host               R
  1  Lunarch Veteran // Luminous Phantom        x2   C      threat-host               C
  1  Thraben Inspector                          x2   W      threat-host               C
  2  Cathar Commando                            x2   W      threat-host               C
  2  Twinblade Geist // Twinblade Invocation    x2   C      payoff-recursive-aura     U
  3  Dauntless Cathar                           x2   W      threat-host               C
  3  Fiend Hunter                               x2   W      interaction-removal       U
  4  Gisela, the Broken Blade                   x1   W      threat-evasive-host       M
  4  Restoration Angel                          x1   W      threat-host               R
```

### INSTANTS & SORCERIES (2)

```
CMC  Card                                       Qty  Color  Role                      Rar
  2  Valorous Stance                            x2   W      interaction-protection    U
```

### OTHER SPELLS (7)

```
CMC  Card                                       Qty  Color  Role                      Rar
  1  Gryff's Boon                               x2   W      payoff-recursive-aura     U
  3  Cathar's Call                              x2   W      payoff-recursive-aura     U
  3  Wedding Announcement // Wedding Festivity  x1   C      engine-card-flow          R
  4  Faith Unbroken                             x2   W      payoff-removal-aura       U
```

## SIDEBOARD (10)

```
Card                                       Qty  Color  Role / When to board in   Rar
Blazing Torch                              x1   C      flex-reach                C
Avacynian Priest                           x2   W      hate-nonhuman-blockers    C
Bound by Moonsilver                        x2   W      hate-single-large-threat  C
Mausoleum Guard                            x1   W      hate-evasion-blockers     U
Slayer of the Wicked                       x2   W      hate-tribal-creatures     U
Soul-Guide Gryff                           x1   W      hate-graveyard            C
Subjugator Angel                           x1   W      hate-wide-boards          U
```

## ANALYSIS

### DECK IDENTITY

A mono-white midrange Voltron deck built on a single rule: every Aura in it either comes back, replaces itself, or brings a body. Gryff's Boon returns from the graveyard for {3}{W}, Twinblade Invocation is recast via Disturb and then exiles itself rather than dying again, Cathar's Call banks a 1/1 Human every end step whether or not the host survives, and Faith Unbroken exiles an opposing creature on the way in so it is removal and a suit on one card. The opponent's removal spell therefore trades one-for-one at worst instead of two-for-one'ing, and a fresh host is already on the board when it resolves. Sixteen untapped Plains means zero fixing cost and no tapland tax -- the price is no access to the stack and no reach.

This is the consistency build. It gives up reach, speed and any access to the stack, and in exchange it gets three things no other colour pair in this cube can offer at once.

### Every Aura in the deck answers the question Voltron always loses to

The archetype's defining failure is a removal spell that eats the creature and every attachment with it. Eight of the twenty-four nonland cards are Auras, and six of them refuse that trade:

| Aura | Copies | What happens when the host dies |
|---|---|---|
| Gryff's Boon | 2 | Returns for `{3}{W}` attached to a new creature |
| Twinblade Invocation (Twinblade Geist's Disturb side) | 2 | Recast from the graveyard; then "exile it instead" means it never dies twice |
| Cathar's Call | 2 | The 1/1 Human tokens it already made stay on the battlefield |
| Faith Unbroken | 2 | **The exception** — the exiled creature comes back |

Faith Unbroken is the one Aura here that can be two-for-one'd, and it earns the slot anyway because it is simultaneously the deck's only unconditional removal and a `+2/+2`. That trade-off is why it is 2 copies and not 4.

### The mana base is a real, measurable edge

Sixteen Plains. No taplands, no rare land eating one of the five rare/mythic slots, no colour screw. The mana audit reports **W 100% demanded against W 100% produced — a gap of exactly 0.0pp**, the only perfect colour balance of the four builds. The Phase 6b goldfish simulation puts keepability at **85%**, also the highest of the four. Against the WU build's two unconditional taplands and the RW build's `-10.5pp` red gap, this deck simply functions more often.

### Gisela was nearly cut for a reason that was simply false

The Phase 9 grill caught the worst error in this build's record. Gisela, the Broken Blade had been cut with the note "it is a MYTHIC and would consume one of the five rare/mythic slots, and this deck spends three of them" — but spending three of five leaves **two free**, which the same document said in its own restrictions checklist two paragraphs later. The Challenger recounted what she actually offers against the finished list: creature copies with innate evasion **1 of 15**, with lifelink **0 of 15**, with first strike **0 of 15**. A `{2}{W}{W}` 4/3 with all three is the best Voltron host in the mono-white pool, and lifelink is the one mitigation this colour has for the racing problem the deck otherwise just accepts. She is now maindecked; Angelic Purge came out for her.

### Cathar Commando is a format-level card here, not a filler two-drop

Per the cube dossier, the entire 300-card pool contains **4 artifact answers and 2 enchantment answers**. Cathar Commando is one of each. Hopeful Initiate is the *other* enchantment answer. This deck maindecks both. In a cube where every rival Voltron, Equipment and Enchantress deck depends on permanents sticking to the battlefield, a mono-white deck holding three of the format's six total answers to those permanents — on bodies that also carry Auras — is a structural position, not a card choice.

### The trap the shape judge caught

Two of the three sketchers wanted Restoration Angel as protection: flash it in, blink the suited creature, dodge the removal. That is oracle-false and actively catastrophic here. "Exile target non-Angel creature you control, then return that card to the battlefield" removes the creature from the battlefield, so every Aura falls off. Blinking a **Faith Unbroken** host is worse than losing the Aura: it makes "until this Aura leaves the battlefield" expire and hands the opponent their exiled creature back. And blinking a **Twinblade Invocation** host sends the Aura to the graveyard, where its own "exile it instead" clause deletes it permanently. Restoration Angel is in this deck as a 3/4 flash flier and a Fiend Hunter re-trigger. Its blink is a "may", and the correct answer is almost always no. Conjurer's Closet was cut outright for the same reason — a repeating end-step blink cannot be declined.

### What it gives up

Zero reach, zero countermagic, and one instant-speed effect in the whole deck. Goldfish turn 6 makes it the slowest of the four. Against a genuine turn-4 aggro start it boards two Avacynian Priest and a Blazing Torch and will sometimes just lose. The bet is that in a 300-card cube where the largest threat class is graveyard value at 27% and the format is generally grindy, a deck that never floods, never gets colour-screwed, and never loses two cards to one removal spell wins more games than a faster deck that does all three.

### What "recursive" actually buys, stated honestly

An earlier draft of this record claimed six of the eight Auras survive the host being answered. The grill showed that is wrong, and wrong in an instructive way. Twinblade Invocation's "If Twinblade Invocation would be put into a graveyard from anywhere, exile it instead" is a **denial** of survival, not a grant — when the host dies the Aura is exiled permanently, and the recursion runs one way only, creature to Aura, once. The true split across the eight:

| Outcome when the host is answered | Auras | Which |
|---|---|---|
| Genuinely returns | 2 | Gryff's Boon, for `{3}{W}` |
| Leaves residue but is itself lost | 2 | Cathar's Call — the banked tokens stay |
| Exiled permanently | 2 | Twinblade Invocation |
| Hands the opponent's creature back | 2 | Faith Unbroken |

So the deck's resilience does not actually live in the Auras. It lives in **host redundancy**: 2 Gryff's Boon return, 2 Lunarch Veteran come back via Disturb, 2 Dauntless Cathar make a flying Spirit from the graveyard, 2 Cathar's Call stream tokens, and 2 Valorous Stance grant indestructible at instant speed — **10 of 24 nonland cards that either replace a host or save one**. That is still the strongest answer to the two-for-one of the four builds, but it is a different mechanism from the one the deck's name implies, and it is worth knowing which one you are actually relying on when you sequence.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (24 nonland):  1:7  2:6  3:7  4:4
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 8 copies → p=0.94 (need ≥ 0.75)
  PASS  enabler: 13 copies (effective 12.8: Fiend Hunter@0.9, Fiend Hunter@0.9) → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 80%  T2 97%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper below MV 8 exists in mono-white, and Vanquish the Horde at MV 8 destroys the suited host and takes 6 of 8 attachments with it, which is this deck's own loss condition. The answer is to go tall and evasive rather than trade: Gryff's Boon grants flying, Gisela is a printed 4/3 flier, and Cathar's Call adds a 1/1 blocker every end step so the ground has to be survived rather than won. Subjugator Angel ('tap all creatures your opponents control'), 2 Avacynian Priest and Mausoleum Guard (two 1/1 flying Spirits on death) are the sideboard answers.
  OK        single_large_threat: Faith Unbroken, Fiend Hunter, Valorous Stance, Gisela, the Broken Blade
  OK        noncreature_permanents: Cathar Commando, Hopeful Initiate
  CONCEDED  stack: Mono-white contains no counterspell anywhere in this pool -- every piece of countermagic in the cube (Syncopate, Geistlight Snare, Mausoleum Wanderer, Overcharged Amalgam, Summary Dismissal) is mono-blue. Mitigating would require abandoning the locked mono-white identity, which is precisely what this build exists to test: zero fixing cost and 16 untapped Plains in exchange for no access to the stack.
  CONCEDED  graveyard: Soul-Guide Gryff ('exile up to one target card from a graveyard') is the only card in mono-white that answers an OPPONENT's graveyard, and at MV 5 it is far above a curve at avg MV 2.33, so it is sideboarded. This is a pool limit, not a build choice: the dossier shows mono-white holds 6 graveyard-touching cards in total and 4 of those 6 (Gryff's Boon, Dauntless Cathar, Lunarch Veteran, Twinblade Geist) are this deck's own maindeck engine. Against the cube's 27.1%-density graveyard decks this deck races rather than interacts. NOTE (Challenger F7): an earlier version of this concession also claimed a graveyard answer would be 'symmetric' and risk this deck's own yard -- that was oracle-false and has been struck, since Soul-Guide Gryff targets one card of its controller's choosing.
```

- No WARN-tier flags were raised, before or after the Phase 9 repairs. Phase 6b returned PASS on all four checks on the final list, so there is no deviation to respond to.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Excess lands convert to action five ways, and mono-white's 16 untapped Plains make every one of them reliably payable: 2 Gryff's Boon have '{3}{W}: Return this card from your graveyard to the battlefield attached to target creature'; 2 Twinblade Geist have 'Disturb {2}{W}' and 2 Lunarch Veteran have 'Disturb {1}{W}', so four cards are castable a second time from the graveyard; 2 Dauntless Cathar have '{1}{W}, Exile this card from your graveyard: Create a 1/1 white Spirit creature token with flying'; 2 Thraben Inspector each leave a Clue ('{2}, Sacrifice this token: Draw a card'); and 2 Cathar's Call plus Wedding Announcement turn every subsequent turn into a free body for no mana at all. |
| screw | mitigation | Keepable on two lands: 7 of 24 nonland cost 1 and 6 cost 2, and because the deck is mono-colour every land in the deck casts every spell -- there is no scenario where the right number of lands is the wrong colour, which is the single largest keepability advantage of this build over the other three. Phase 6b goldfish measures 85% keepable, the highest of the four, and 84% to have three lands by turn three. Thraben Inspector's Clue digs toward the third land. |
| decapitation | mitigation | This is the mode the deck is designed around, stated with the Challenger's F5 correction applied. The earlier claim that '6 of the 8 Auras survive the host being answered' was wrong, and wrong in a specific way worth recording: Twinblade Invocation's 'If Twinblade Invocation would be put into a graveyard from anywhere, exile it instead' is a DENIAL of survival, not a grant -- when its host dies the Aura is exiled permanently, and the recursion runs one way only (creature to Aura, once). True figures across the 8 Auras: 2 genuinely return (Gryff's Boon, for {3}{W}), 2 leave residue but are themselves lost (Cathar's Call, whose already-banked tokens stay), 2 are exiled (Twinblade Invocation), 2 hand the opponent's creature back (Faith Unbroken -- admitted, and the reason it is 2 copies rather than more). What the mode actually rests on is HOST redundancy, which is real and verified: 2 Gryff's Boon return, 2 Lunarch Veteran come back via Disturb, 2 Dauntless Cathar make a flying Spirit from the graveyard, 2 Cathar's Call stream tokens, and 2 Valorous Stance grant indestructible at instant speed = 10 of 24 nonland cards that either replace a host or save one. |
| gas-out | mitigation | Net-positive or self-replacing cards: 2 Thraben Inspector (Clue = a card), 2 Gryff's Boon (returns itself), 2 Twinblade Geist and 2 Lunarch Veteran (Disturb = a second use each), 2 Dauntless Cathar (a flying token from the graveyard), 2 Cathar's Call (a body every end step, indefinitely) and 1 Wedding Announcement (a card or a body every end step, then an anthem) = 13 of 24 nonland cards that produce a second card, a second use, or ongoing board. That is the highest ratio of the four builds, and it is what 'grindy value' meant. |
| raced | accepted | Against the cube's fastest clocks (dossier: 58 evasion cards at 21% density, 23 Vampires) this is the slowest of the four Voltron builds -- goldfish turn 6 at avg MV 2.33. CORRECTED per Challenger F13, which ran AGAINST this deck's own pessimism: the earlier text said 'nothing at instant speed except Valorous Stance', but Cathar Commando x2 has 'Flash' and its '{1}, Sacrifice this creature: Destroy target artifact or enchantment' is instant-speed removal, and Restoration Angel has 'Flash' -- 5 of 24 cards are castable at instant speed, not 2. What mitigating further would cost: mono-white has no burn, no bounce and no counterspell anywhere in this pool, so adding reach means adding a second colour, which is the identity this build exists to test -- 16 untapped Plains, zero colour screw, and the highest keepability of the four at 85.5%. The one in-colour mitigation that DID exist has now been taken: Gisela, the Broken Blade brings 'lifelink' on a 4/3 flier, and lifelink on a suited creature is the single best racing tool mono-white offers. Residual: against a genuine turn-4 kill the deck boards 2 Avacynian Priest, Blazing Torch and Mausoleum Guard, and it will sometimes still lose. |
| disruption-fizzle | mitigation | The critical turn is the turn the suited creature attacks, and mono-white cannot protect a spell on the stack -- every counterspell in this cube is mono-blue. What it does instead is make the critical turn REPEATABLE rather than protected. Valorous Stance ('Target creature gains indestructible until end of turn') is the one instant-speed answer, 2 of 24. Behind it, the plan retries: 8 Auras of which 2 return and 2 leave banked tokens behind (the corrected figures from Challenger F5), 10 hosts of which 4 come back from the graveyard, and two token streams that manufacture a fresh legal target every end step. A removal spell in response to an Aura costs this deck a turn and a card; the same removal spell against the RW build costs it the game. That asymmetry is the whole reason this build exists. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Bruna, the Fading Light, Brisela, Voice of Nightmares | Meld halves: Bruna is MV 7 and Brisela MV 11, and each requires owning and controlling the named partner. Neither is reachable on a 16-17 land mono-white curve, and each would consume a rare/mythic slot the deck spends on Auras and hosts. |
| Vanquish the Horde | Vanquish the Horde: 'Destroy all creatures' destroys the suited host and every Aura on it, which is this deck's own loss condition -- a sweeper is anti-synergistic with a one-big-creature plan regardless of what its cost reduction makes it cost. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.33   Ramp cards: 0   Cantrips: 2
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.56 adj [MV 2.33 vs 2.5, 2 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Mainboard size            40 / 40
[PASS] Sideboard size            10 / 10
[PASS] Copy limits               commons/uncommons max 2 copies, rares/mythics max 1 copy, basics unlimited and rarity-exempt.
                                 Phase 5C check 3 cross-checked every distinct card's mainboard+sideboard total against cube_search.get_max_copies. PASS.
[PASS] Rare/mythic cap           4 / 5 -> Gisela, the Broken Blade, Hopeful Initiate, Restoration Angel, Wedding Announcement // Wedding Festivity
[PASS] Colour usability          every nonland card usable in W via effective_cost.best_mode
[PASS] Splash cap                splash_colors = [] (no off-colour card in the list)
[PASS] Basic lands               16 Plains are format-supplied and exempt from the rarity cap and the copy limit. This is the only one of the four builds with no nonbasic land at all.
[PASS] Cube membership           every card matched by exact name in the working pool
```