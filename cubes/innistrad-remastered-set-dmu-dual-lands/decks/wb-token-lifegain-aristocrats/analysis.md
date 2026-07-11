---
deck_name: "bw-token-lifegain-aristocrats"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BW"
format: "40-card"
built_at: "2026-07-08T21:12:33Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
1x  Westvale Abbey // Ormendahl, Profane Prince   Colorless utility/finisher land, 5-sac transform
2x  Sunlit Marsh                                  BW dual, enters tapped
9x  Swamp
4x  Plains
```

### CREATURES (12)
```
CMC  Card                          Qty   Color  Role                                                               Rar
  1  Indulgent Aristocrat          x2    B      1-drop lifelink outlet, Vampire counters payoff                    U  
  2  Blood Artist                  x2    B      Death-drain payoff                                                 U
  2  Fleshtaker                    x2    BW     Repeatable sac outlet + lifegain                                   U
  2  Skirsdag High Priest          x1    B      Morbid payoff - taps 2 creatures into a 5/5 flier (not an outlet)  R
  3  Morbid Opportunist            x2    B      Card-draw payoff                                                   U
  4  Mausoleum Guard               x2    W      Self-replacing fodder (dies into 2 tokens)                         U  
  5  Liesa, Forgotten Archangel    x1    BW     Recursive flying lifelink threat                                   R
```

### INSTANTS & SORCERIES (10)
```
CMC  Card                    Qty   Color  Role                            Rar
  1  Village Rites            x2    B      Free sac outlet, card draw      C
  1  Tragic Slip              x2    B      Cheap removal (morbid synergy)  C
  2  Infernal Grasp           x2    B      Unconditional removal           U
  2  Valorous Stance          x2    W      Flexible protection/removal     U
  3  Lingering Souls          x2    W      Token fodder engine (4 bodies)  U
```

### OTHER SPELLS (2)
```
CMC  Card                         Qty   Color  Role                                   Rar
  2  The Meathook Massacre        x1    B      Board wipe + drain engine              M
  3  Sorin, Imperious Bloodlord   x1    B      Vampire sac outlet + removal/lifegain  M 
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in                    Rar
Killing Wave            x1    B      Symmetrical mass-sac-or-pay-life sweeper -  U
                                      vs. token mirrors/decks that can't pay life
Murderous Compulsion    x1    B      Anti-aggro removal (kills tapped attackers) C
Angelic Purge           x1    W      Artifact/enchantment/creature exile hate    C
Slayer of the Wicked    x1    W      Anti-tribal (Vampire/Werewolf/Zombie decks) U
Sever the Bloodline     x1    B      Anti-duplicate-name hate (token mirrors,    U
                                      not true legends - legend rule already
                                      caps those at one)
Soul-Guide Gryff        x1    W      Graveyard hate (1 card) + flying blocker    C
Boarded Window          x1    C      Anti-aggro damage reduction                 U
Eaten Alive             x1    B      Flexible exile removal, hits planeswalkers  C
Fiend Hunter            x1    W      Temporary exile removal - do NOT feed it    U
                                      to your own sac outlets, it un-exiles
Ghoulish Procession     x1    B      Extra go-wide engine for grindy matchups    U
```

## ANALYSIS

**Vampire density and Sorin.** After swapping Gather the Townsfolk for Indulgent Aristocrat, the deck runs 5 Vampires (Blood Artist x2, Indulgent Aristocrat x2, plus Sorin, Imperious Bloodlord himself as a sac target for his own +1) - enough that his "if it's a Vampire, put a +1/+1 counter on it" and "sacrifice a Vampire" modes are live most games, rather than dead text.

**Skirsdag High Priest is a payoff, not an outlet.** Its ability taps two creatures - it does not sacrifice them. It only turns on after something else (Village Rites, Fleshtaker, a combat trade, Westvale Abbey) has already caused a death this turn. Sequence outlets first, then convert the leftover bodies into a 5/5 flier with Skirsdag.

**True repeatable sac outlets: Fleshtaker and Indulgent Aristocrat.** Village Rites, Sorin's +1, and Westvale Abbey's 5-sac mode are each once-per-turn-or-one-shot. Fleshtaker ({1}: sac for +2/+2, life, scry) and Indulgent Aristocrat ({2}: sac for counters) are the only "sac at will" engines - with 4 copies between them, the deck can reliably find an outlet even after its one-shots are spent.

**Liesa vs. The Meathook Massacre - a real anti-synergy.** Liesa's static ability exiles opponents' creatures instead of letting them die. While she's in play, opposing deaths stop triggering Blood Artist's drain and Meathook's "you gain 1 life" clause. This only matters once Liesa (a single 5-drop) resolves, but it's worth knowing before you cast her into a board stall where you were relying on Meathook's lifegain side.

**Morbid math.** Tragic Slip wants a death before it resolves to go from -1/-1 to a -13/-13 blowout. Between 4 copies of true sac outlets (Fleshtaker/Indulgent Aristocrat), 2x Village Rites, combat trades from 12 creatures, and Mausoleum Guard's own death trigger, enabling Morbid by turn 2-3 is close to automatic - treat Tragic Slip as a 1-mana kill spell, not a combat trick.

**Curve and removal count.** Avg CMC 2.25, with half the mainboard's noncreature slots and half the creatures sitting at CMC 1-2 - this is an aggressive Midrange shape. 6 pieces of interaction (Infernal Grasp x2, Tragic Slip x2, Valorous Stance x2) is on the lean side for a "competitive" tag; the sideboard's Murderous Compulsion, Killing Wave, and Eaten Alive are the first cards to bring in against decks that punish that.

### Cards Considered but Excluded

**Rares/mythics cut solely for the 5-card budget** (all 5 slots went to Meathook Massacre, Skirsdag High Priest, Liesa, Sorin, Westvale Abbey):
- Bloodline Keeper (mythic) - a Vampire lord + recurring 2/2 flier token engine; would have been the single best fit for the Vampire subtheme, cut only on budget.
- Cathars' Crusade (rare) - every creature ETB counters up the whole board; excellent with the token plan, but a 5th mainboard rare would have bumped something already locked in.
- Voldaren Bloodcaster (rare) - on-cluster Aristocrats/Sacrifice Blood-token engine, close alternative to Restless Bloodseeker.
- Distended Mindbender (rare) - emerge discard payoff that wants excess fodder; a fine top-end for a slower build of this deck.
- Captivating Vampire (rare) - Vampire lord, another Vampire-density option in the same design space as Bloodline Keeper.
- Griselbrand (mythic) and Gisela, the Broken Blade (mythic) - powerful but need dedicated reanimation/meld support this build doesn't run; excluded on both budget and fit.

**Uncommons/commons a tier below the chosen includes:**
- Falkenrath Torturer - the other "true repeatable outlet" candidate; lost out to Indulgent Aristocrat mainly because it doesn't add Vampire density for Sorin.
- Gluttonous Guest - Blood token + lifegain-on-sac; close alternative fodder piece to Mausoleum Guard.
- Thraben Inspector / Butcher Ghoul - cheap fodder-with-upside, both viable 1-2 drop swaps if the curve needs to go even lower.
- Restless Bloodseeker - Blood token engine with a late-game drain mode; close alternative to Fleshtaker.
- Asylum Visitor - card-draw threat, similar role to Morbid Opportunist but madness-dependent.

**Sideboard-consideration cards that didn't make the 10:**
- Demonic Taskmaster - forces a sacrifice every upkeep; strong payoff engine but risky as a two-way hatebear.
- Cathar Commando - flash artifact/enchantment hate creature, alternative to Angelic Purge with a body attached.
- Bound by Moonsilver - sac-cost removal aura, redundant with Angelic Purge's role.
- Drogskol Shieldmate - flash anti-aggro combat trick + fodder body.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS ----------------------------------------
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.25   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  65.5%  prod  68.8%  gap  -3.3pp  [OK]
  W  demand  34.5%  prod  37.5%  gap  -3.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
copy_cap_common_uncommon_2:    PASS
copy_cap_rare_mythic_1:        PASS
max_5_rares_mythics_total:     PASS (5/5)
no_excluded_cards:             PASS (excluded list empty)
```
