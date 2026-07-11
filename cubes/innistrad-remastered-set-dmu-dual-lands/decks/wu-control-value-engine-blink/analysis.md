---
deck_name: "wu-control-value-engine-blink"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WU"
format: "40-card"
built_at: "2026-07-09T04:08:57Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
  9x Plains
  7x Island
  1x Idyllic Beachfront    WU dual, enters tapped
```

### CREATURES (12)
```
CMC  Card                              Qty   Color  Role                                   Rar
  1  Lunarch Veteran//Luminous Phantom x1    W      Cheap lifegain ETB payoff, Disturb     C
  1  Thraben Inspector                 x1    W      Clue fuels Angelic Purge's sac cost    C
  3  Fiend Hunter                      x2    W      Pseudo-removal, prime blink target     U
  3  Spell Queller                     x1    WU     Counter+exile; blink locks it in       R
  3  Spectral Shepherd                 x1    W      Self-bounce protects a Spirit          U
  4  Restoration Angel                 x1    W      Keystone flash blink engine            R
  4  Apothecary Geist                  x1    W      Lifegain payoff (needs another Spirit) C
  4  Mist Raven                        x2    U      Tempo bounce, top blink target         U
  6  Deadeye Navigator                 x1    U      Keystone instant-speed blink engine    R
  6  Subjugator Angel                  x1    W      Top-end tap-down finisher              U
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                     Qty   Color  Role                                  Rar
  1  Essence Flux             x2    U      Self-blink protection/re-trigger      C
  1  Syncopate                x1    U      Early counter, exiles to dodge GY     C
  2  Valorous Stance          x2    W      Flexible removal/protection           U
  2  Think Twice              x1    U      Card advantage w/ flashback           C
  2  Compelling Deterrence    x1    U      Tempo bounce                          U
  3  Angelic Purge            x1    W      Unconditional exile removal (sac)     C
```

### OTHER SPELLS (3)
```
CMC  Card                Qty   Color  Role                                       Rar
  3  Helvault             x1    C      Cheap blink outlet / late removal / bank  R
  3  Angel's Tomb          x1    C      Recurring 3/3 flying Angel on any ETB     U
  5  Conjurer's Closet    x1    C      Keystone end-step blink engine            R
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                  Rar
Soul-Guide Gryff        x1    W      GY hate; vs graveyard/flashback/reanim.   C
Slayer of the Wicked    x1    W      Removal vs Vampire/Werewolf/Zombie tribal U
Summary Dismissal       x1    U      Mass GY exile + counter-all; vs combo     U
Cathar Commando         x1    W      Flash artifact/enchantment removal        C
Geistlight Snare        x1    U      Extra counterspell; vs control/combo      U
Boarded Window          x1    C      Blunts wide attacks; vs aggro/tokens      U
Niblis of the Urn       x1    W      Repeatable tapper (any creature); vs aggro U
Spontaneous Mutation    x1    U      Cheap flash shrink; vs aggro 1-2 drops    C
Bound by Moonsilver     x1    W      Unconditional lockdown removal            C
Imprisoned in the Moon  x1    U      Catch-all vs planeswalkers/hexproof       C
```

## ANALYSIS

**Macro-Archetype: Control. Projected Avg MV: 2.91.**

**Slot allocation.** Lands: 17 (42.5% of N=40) — no ramp, and a real top-end (Deadeye Navigator/Subjugator Angel at 6, Conjurer's Closet at 5), so one land over the recommended baseline is correct. Modifiers: -0 cantrips (no 1-mana filtering/draw spells in the pool selection), -0 mana-dork, -0 MDFC. Final: 17.

Primary-role tally over 23 nonland cards: Interaction 12 (52.2%), Threats/Payoffs 3 (13.0%), Engine/Infra 8 (34.8%). This deviates from standard Control ranges (Interaction 35-45%, Payoffs 5-10%, Engine 10-20%) in a specific, deliberate way: 7 of the 12 "interaction" cards are creature/permanent bodies that also serve as board presence (Fiend Hunter, Spell Queller, Helvault, Mist Raven, Subjugator Angel) — this deck's removal comes attached to a clock, so the Payoff count looks artificially low. Engine/Infra runs above the normal ceiling because the archetype's entire identity is the 3-engine package plus its enabler suite (Essence Flux, Spectral Shepherd) and card draw (Think Twice, Thraben Inspector) — there's no version of this deck that under-invests here without losing the plan.

**Mana base.** 14 W pips vs 12 U pips (53.8% / 46.2%) split across 10 W sources / 8 U sources (58.8% / 47.1%) — directionally correct and PASS on the audit. One real fragility the audit's aggregate math doesn't show: only 1 of 17 lands (Idyllic Beachfront, tapped) produces both colors, and four cards want a double pip (Mist Raven x2 at UU, Deadeye Navigator at UU, Subjugator Angel at WW). Expect an occasional turn-late cast on those against a slow draw — acceptable given WU fixing in this cube is thin everywhere, not just for this deck.

**Key interaction: the exile-lock.** Spell Queller's drawback ("owner may cast the exiled spell for free") only triggers when Spell Queller leaves the battlefield — not when it enters. Chaining a blink onto it (Deadeye Navigator's activated ability, or Restoration Angel's ETB) exiles a new spell without ever giving the first one back. The same logic makes Fiend Hunter a real permanent-removal engine once a blink outlet is live, not just a fragile O-Ring effect.

**Spirit density is thin.** Only 4 cards in the 23-spell list are Spirits (Spell Queller, Deadeye Navigator, Spectral Shepherd, and Apothecary Geist itself doesn't count toward its own trigger). Apothecary Geist's "gain 3 life if you control another Spirit" will whiff on an empty board, especially cast early — it's a fine body regardless (2/3 flier) but treat the lifegain as upside, not a plan.

**No red splash.** Zealous Conscripts and Voldaren Ambusher are both single-red-pip cards in the Blink/ETB cluster and were evaluated as splash candidates (WR/UR fixing exists at 1 common + 1 rare per pair). Rejected: WU fixing itself is already thin (1 common dual total), and a 40-card deck can't absorb the added inconsistency of a third color for two cards that are tempo/aggro-flavored, not control-flavored.

**Sideboard plan.** Graveyard/flashback/reanimator -> Soul-Guide Gryff, Summary Dismissal. Vampire/Werewolf/Zombie tribal -> Slayer of the Wicked, Bound by Moonsilver. Artifacts-matter/Enchantress -> Cathar Commando (thin but the only slot available in this pool at commons/uncommons). Control/combo mirrors -> Geistlight Snare, Summary Dismissal. Wide aggro/tokens (including Humans) -> Boarded Window, Niblis of the Urn, Spontaneous Mutation. Note: the original pick for the last slot was Avacynian Priest, but its tap ability explicitly excludes Human creatures -- useless against this cube's Humans-aggro archetype, which is the exact matchup it needed to answer. Swapped for Niblis of the Urn, which taps any creature.

### Cards Considered but Excluded

Rares/mythics cut by the 5-card cap (Spell Queller, Helvault, Restoration Angel, Conjurer's Closet, Deadeye Navigator used all 5 slots):
- Gisela, the Broken Blade (mythic, 4cmc, W) -- flying/first strike/lifelink, a genuinely excellent standalone closer. This is the strongest omission; if the deck ever feels short on a "just wins" body, swap it in for Helvault. Kept Helvault instead because the archetype rationale named it directly as the piece that "banks ETB creatures for a mass re-entry," and it does double duty as a cheap {1} blink outlet the deck otherwise lacks outside the two creature-based engines.
- Necroduality (mythic, U) -- token-copy engine, but only triggers off nontoken Zombies entering; dead in this build.
- Cathars' Crusade (rare, W) -- the "Counters go-wide" sub-archetype's keystone; better suited to that build than this one.
- Memory Deluge / Jace, Unraveler of Secrets -- excellent card advantage, but compete for the same 5-rare budget already spent on the engine package.
- Thing in the Ice (rare, U) -- wants a much higher instant/sorcery count than this creature-heavy build carries.

Uncommons a tier below the chosen includes:
- Nebelgast Herald (U) -- flash tapper, close alternative to Spectral Shepherd/Niblis of the Urn.
- Faith Unbroken (W) -- Oblivion-Ring-style removal aura; passed on aura 2-for-1 risk.
- Cackling Counterpart (U) -- copies a creature, re-triggering its ETB on a token; a real fifth blink-adjacent effect, cut for curve space.
- Cathar's Call / Soul Separator (U) -- alternate Engine/Payoff pieces, redundant with the chosen engine suite.
- Mentor of the Meek (U) -- draw engine, competes with Think Twice for the infrastructure slot.

Sideboard considerations not included:
- Vanquish the Horde (rare) -- would be the ideal anti-wide-aggro sweeper, blocked entirely by the rare cap.
- Faith Unbroken and Nebelgast Herald (above) are also reasonable alternate sideboard slots if a specific matchup calls for more removal or tempo.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     2.91   Ramp cards: 0

Color Balance (core):  [PASS]
  U  demand  46.2%  prod  47.1%  gap  -0.9pp  [OK]
  W  demand  53.8%  prod  58.8%  gap  -5.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
Commons up to 2 copies each -- PASS
Uncommons up to 2 copies each -- PASS
Rares/mythics up to 1 copy each -- PASS
Max 5 rares/mythics total (main+SB) -- PASS (5/5, at the cap exactly)
```
