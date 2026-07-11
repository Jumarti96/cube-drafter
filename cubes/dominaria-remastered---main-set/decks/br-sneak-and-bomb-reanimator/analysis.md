---
deck_name: "br-sneak-and-bomb-reanimator"
cube_id: "5358735b-23d6-4935-9f75-5b41c210c388"
cube_slug: "dominaria-remastered---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-09T23:52:41Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (25 spells + 15 lands = 40)

### LANDS (15)
```
  9x Swamp
  2x Mountain
  2x Geothermal Bog          BR dual, enters tapped
  1x Polluted Mire           B cycling land, flood insurance
  1x Smoldering Crater       R cycling land, flood insurance
```

### CREATURES (14)
```
CMC  Card                        Qty   Color  Role                                Rar
  2  Mogg War Marshal            x1    R      Fodder generator (2 bodies)        C
  3  Phyrexian Ghoul             x2    B      Sac outlet / combat pump           C
  3  Undead Gladiator            x2    B      Cycles early, self-recurs late     U
  4  Faceless Butcher            x2    B      ETB exile removal on a body        U
  4  Flametongue Kavu            x2    R      ETB 4 dmg + hasty attacker         U
  4  Juggernaut                  x1    C      Forced-attacker Sneak target       C
  5  Chainer, Dementia Master    x1    B      Repeatable reanimation engine      R
  6  Necrosavant                 x2    B      Self-reanimates from graveyard     U
  6  Worldgorger Dragon          x1    R      Flagship cheat target              M
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                        Qty   Color  Role                                Rar
  1  Entomb                      x1    B      Tutors any creature to graveyard   R
  1  Vampiric Tutor              x1    B      Finds the missing engine piece     M
  2  Chainer's Edict             x2    B      Edict removal, flashback late      U
  2  Terror                      x2    B      Efficient early removal            C
  4  Dread Return                x2    B      Backup reanimation + flashback     U
```

### OTHER SPELLS (3)
```
CMC  Card                        Qty   Color  Role                                Rar
  2  Zombie Infestation           x2    B      Discard outlet + token fodder      U
  4  Sneak Attack                 x1    R      Primary payoff engine              M
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                      Rar
Duress                       x2    B      Strip removal/counters vs. control/combo     C
Wall of Junk                 x1    C      Repeatable blocker vs. aggro                 U
Cackling Fiend                x1    B      Proactive hand disruption vs. control        C
Solar Blast                   x2    R      Flexible reach/removal, cycles when dead     C
Pain // Suffering             x1    BR     Discard vs. control / LD vs. greedy mana     U
Dark Withering                x2    B      Unconditional removal vs. big nonblack       U
Slice and Dice                x1    R      Sweeper vs. aggro/tokens, cycles when dead   U
```

## ANALYSIS

**Curve and sequencing.** The deck's real "combo" isn't two specific cards — it's a redundant web of enablers (Entomb, Zombie Infestation x2, Vampiric Tutor) feeding two independent cheat routes (Sneak Attack for hand-based haste, Chainer/Dread Return/Necrosavant for graveyard-based permanence). Curve: 2 one-drops, 7 two-drops, 4 three-drops, 8 four-drops (including Sneak Attack itself), 1 five-drop, 3 six-drops. Turn 4 is when the deck goes off: Sneak Attack, Dread Return, Faceless Butcher, and Flametongue Kavu are all live simultaneously, so a turn-1 Entomb into a turn-4 Dread Return or Sneak Attack activation is the deck's fastest clean line.

**Dual-purpose removal.** Flametongue Kavu and Faceless Butcher are counted as creatures in this list, but they're functionally removal spells that leave a body — their ETB triggers fire identically whether they're hard-cast, Sneak Attacked, or reanimated, so they bank their value before ever being sacrificed. This is why the deck can carry more "interaction-flavored" slots than a typical combo shell without diluting the plan: 4 of the 8 nominal removal effects (Flametongue Kavu x2, Faceless Butcher x2) are simultaneously payload creatures for the cheat plan.

**Worldgorger Dragon sequencing — read this before playing it.** Its ETB exiles all your other permanents (lands included) until it leaves the battlefield. Via Sneak Attack, this is safe: Sneak Attack's "sacrifice at next end step" trigger fires independently of Sneak Attack's own exile, so everything returns automatically at end of turn — but you're left with zero lands and no blockers until then, so avoid activating it during the opponent's end step (extends the exposure across their whole following turn). Via Chainer's reanimation ability, there is no automatic return — Worldgorger stays in play and your lands stay exiled indefinitely unless you have a sacrifice outlet ready to pop it on your own terms. This is exactly why the list runs 2x Phyrexian Ghoul (and Necrosavant's own sacrifice-fueled reanimation cost can double as an outlet) rather than 1 — a lone copy is a real risk of getting stuck with no lands.

**Chainer's downside is real.** Anything Chainer reanimates becomes a Nightmare, and "when Chainer leaves the battlefield, exile all Nightmares" — so losing Chainer to removal blows out whatever he brought back. Faceless Butcher is natively a Nightmare Horror too, so it's exposed to this even without ever being reanimated by Chainer. Play Chainer as a value engine to protect, not a one-time trigger to jam in immediately.

**Mana base.** Black is overwhelmingly the deeper color (81% of colored pips: Chainer's BBB activation, Necrosavant's 3BB reanimation cost, and the bulk of the removal suite are all black), while red carries only Sneak Attack, Flametongue Kavu, and Mogg War Marshal — all single-R costs. Sources are 12 B / 5 R out of 15 lands, intentionally oversupplying red relative to its raw pip share (33% production vs. 19% demand) because Sneak Attack needs to be a reliably repeatable turn-after-turn engine, not just castable once.

**Sideboard shape.** Three matchup axes: aggro (Wall of Junk, Slice and Dice), control/combo disruption (Duress x2, Cackling Fiend, Pain // Suffering's discard mode), and big nonblack threats (Dark Withering x2). Solar Blast is a flexible include that never gets stuck dead thanks to cycling.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card budget:** Gamble and Body Snatcher (both rare) were the next tutoring/reanimation candidates after the core five — Gamble's random discard is less controllable than Entomb, and Body Snatcher's "discard a creature or sacrifice it, then reanimate on death" is clunkier than the Chainer/Dread Return/Necrosavant trio already included. Shivan Dragon (rare) was in the initial build but was cut during the self-grill review in favor of Entomb, trading a vanilla 5/5 for the archetype's best enabler. Yawgmoth, Thran Physician (mythic) is a powerful engine but wants to stick around rather than be cheated in and sacrificed — off-plan for this build. Triskelion, Siege-Gang Commander, Pashalik Mons, Mindslicer, Nantuko Shade, Royal Assassin, and Grim Lavamancer (all rare) are all reasonable Sneak Attack targets or removal but didn't clear the bar over the five chosen. Arcanis the Omnipotent and Denizen of the Deep (both rare, blue) were flagged in the initial archetype brief as "textbook cheat targets," but they're both rare (over budget) and blue with no accompanying splash or fixing — excluded on both counts.

**Uncommons/commons a tier below the cut:** Gempalm Incinerator (cycling removal, but its damage scales off Goblins we don't have many of), Storm Entity (payoff needs more spell density than this deck runs), Coal Stoker (ramp only matters if hard-cast, off-plan), Dragon Whelp (fine evasive body, but Flametongue Kavu/Faceless Butcher generate more value per slot), and Urborg Uprising/Oversold Cemetery (recur creatures to hand — strictly weaker than Dread Return/Necrosavant recurring straight to the battlefield).

**Sideboard-tier considerations:** Chain Lightning and Ichor Slick were cut from the maindeck this round (traded for a second Phyrexian Ghoul and Undead Gladiator) but are reasonable swap-ins if a matchup wants more raw spot removal over sac-outlet redundancy. Gempalm Incinerator and Royal Assassin (rare, budget-locked) would be sideboard removal upgrades against Goblin or tapped-creature-heavy decks if the rare budget ever opens up.


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  15 / 16 recommended  [PASS]
Avg CMC:     3.32   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  81.1%  prod  80.0%  gap  +1.1pp  [OK]
  R  demand  18.9%  prod  33.3%  gap -14.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
- Commons/uncommons up to 2 copies each: PASS - no card exceeds 2 copies.
- Rares/mythics up to 1 copy each: PASS - Worldgorger Dragon, Sneak Attack, Vampiric Tutor, Entomb, Chainer all at exactly 1.
- Maximum 5 rares/mythics total (main + sideboard): PASS - exactly 5, all in the mainboard; sideboard is 100% commons/uncommons.
```
