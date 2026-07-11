---
deck_name: "wbr-meld-reanimator"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WBR"
format: "40-card"
built_at: "2026-07-09T17:44:42Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

A Mardu (W/R/B) reanimator-midrange shell built around cheating and reanimating an uncastable Griselbrand — via Through the Breach's one-shot cheat or Edgar's Awakening's hard reanimation — while two Innistrad meld pairs (Bruna/Gisela and Graf Rats/Midnight Scavengers) ride along as independently-playable value creatures whose meld upside (Brisela, Chittering Host) is a bonus, never a dependency. A dense sacrifice/death subtheme (Blood Artist, Morbid Opportunist, Fleshtaker, Liesa) turns every creature death — including the forced sacrifice from Through the Breach — into card advantage or damage, giving the deck a grindy backup plan independent of ever assembling the reanimator package.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
5x Swamp
2x Mountain
2x Plains
2x Sunlit Marsh          WB dual, enters tapped
2x Geothermal Bog        BR dual, enters tapped
2x Sacred Peaks          WR dual, enters tapped
1x Evolving Wilds        Fetches any basic, tapped
```

### CREATURES (14)

```
CMC  Card                       Qty   Color  Role                              Rar
  1  Sanitarium Skeleton        x1    B      Recursive discard fodder          C
  1  Thraben Inspector          x1    W      Card advantage curve-filler       C
  2  Graf Rats                  x2    B      Meld half; cheap enabler          U
  2  Blood Artist               x1    B      Death payoff, drain               U
  2  Bloodtithe Harvester       x1    BR     Blood token now, sac-removal late U
  2  Fleshtaker                 x1    WB     Sac outlet + life/scry payoff     U
  3  Morbid Opportunist         x1    B      Death payoff, card draw           U
  4  Gisela, the Broken Blade   x1    W      Meld half; evasive threat         M
  5  Liesa, Forgotten Archangel x1    WB     Death-value engine                R
  5  Midnight Scavengers        x2    B      Meld half; GY recursion to hand   C
  7  Bruna, the Fading Light    x1    W      Meld half; cast-trigger reanim.   R
  8  Griselbrand                x1    B      Primary cheat/reanim. payoff      M
```

### INSTANTS & SORCERIES (10)

```
CMC  Card                    Qty   Color  Role                              Rar
  1  Faithless Looting       x1    R      GY filling / filtering            C
  1  Village Rites           x1    B      Sac outlet, draw 2                C
  1  Tragic Slip             x1    B      Removal, morbid -13/-13           C
  1  Lightning Axe           x1    R      Removal + discard outlet          U
  2  Infernal Grasp          x1    B      Unconditional removal             U
  2  Abrade                  x1    R      Removal / artifact hate           U
  3  Fiery Temper            x1    R      Removal, madness-discountable     U
  5  Through the Breach      x1    R      Cheat enabler for Griselbrand     M
  5  Edgar's Awakening       x2    B      Reanimation from graveyard        U
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in            Rar
Soul-Guide Gryff        x1    W      Vs. opposing reanimator/flashback  C
Slayer of the Wicked    x1    W      Vs. Vampire/Werewolf/Zombie tribal U
Killing Wave             x1   B      Vs. token swarm aggro (sweeper)    U
Angelic Purge            x1   W      Broad artifact/creature/ench. ans. C
Cathar Commando           x1  W      Flash artifact/enchantment answer  C
Valorous Stance           x1  W      Protect bombs / kill big toughness U
Murderous Compulsion      x1  B      Extra removal, grindy matchups     C
Sever the Bloodline       x1  B      Vs. token-copy / legend strategies U
Boarded Window            x1  C      Anti-aggro damage brake            U
Fiend Hunter              x1  W      Exile evasive/recursive threats    U
```

## ANALYSIS

**The rare/mythic budget shapes the meld choice.** With a hard cap of 5 rares/mythics across main+sideboard, all three Innistrad meld pairs couldn't fit: Hanweir Garrison + Hanweir Battlements alone cost 2 rare slots, and adding them to Griselbrand + Through the Breach + Bruna + Gisela would blow the budget. Graf Rats + Midnight Scavengers (melds into Chittering Host) is the "free" pair — uncommon/common, costs nothing — so it's an auto-include. The second pair had to be chosen: Bruna/Gisela (1 rare + 1 mythic) over Hanweir (2 rares), because Bruna's cast-trigger reanimation and Gisela's evasive body reinforce the reanimator plan, where Hanweir's token generation would have been an unrelated sub-theme.

**Brisela, Hanweir the Writhing Township, and Chittering Host are NOT decklist entries.** All three appear in the cube's card pool as separate database rows (an artifact of how Scryfall represents meld back-faces), but none can legally be included as a standalone card in a paper decklist — they only exist as a battlefield-state result when you control both front halves simultaneously. This deck plays only the six real front-half cards; the melds are a bonus that can happen in-game, not a 41st/42nd slot.

**Bruna cannot reanimate Griselbrand.** Bruna's cast-trigger only targets "Angel or Human" creature cards in the graveyard — Griselbrand is a Demon, so this specific interaction doesn't exist. Bruna's real reanimation targets in this list are Liesa (Angel), Thraben Inspector (Human), Midnight Scavengers (Human), and Fleshtaker (Human). The deck's actual routes to Griselbrand are Through the Breach (cheat) and Edgar's Awakening (hard reanimation) only — worth knowing so you don't misplay around a Bruna-into-Griselbrand line that isn't real.

**Through the Breach's sacrifice clause is answered by Liesa.** Through the Breach forces you to sacrifice the cheated-in creature "at the beginning of the next end step." Liesa, Forgotten Archangel's "whenever another nontoken creature you control dies, return that card to its owner's hand at the beginning of the next end step" triggers off that same death — with Liesa in play, a cheated Griselbrand comes back to your hand one turn later instead of being gone for good, turning a one-shot effect into a repeatable engine. This is the single best interaction in the deck and isn't obvious from reading the cards in isolation.

**Discard is not just card disadvantage here.** Lightning Axe ("discard a card or pay {5}") and Faithless Looting both turn "pitch a card" into "put Griselbrand or Bruna in the graveyard as a live Edgar's Awakening target." Fiery Temper and Murderous Compulsion (sideboard) both have madness, so a discarded copy is never fully wasted. The deck wants to discard its own bombs almost as much as it wants to draw removal.

**Death payoffs stack on the same trigger.** A single creature death (from combat, a sac outlet, or the Through the Breach sacrifice) can simultaneously trigger Blood Artist (drain 1), Morbid Opportunist (draw a card, once per turn), Fleshtaker (gain 1, scry 1, if you did the sacrificing), and enable Tragic Slip's morbid -13/-13 mode — the deck converts "something died" into 3+ separate value triggers without needing them to combo off each other.

**Curve shape:** 6 cards at CMC 1 (Sanitarium Skeleton, Thraben Inspector, Faithless Looting, Village Rites, Tragic Slip, Lightning Axe), 7 at CMC 2 (Graf Rats x2, Blood Artist, Bloodtithe Harvester, Fleshtaker, Infernal Grasp, Abrade), 2 at CMC 3 (Morbid Opportunist, Fiery Temper), 1 at CMC 4 (Gisela), 6 at CMC 5 (Through the Breach, Edgar's Awakening x2, Liesa, Midnight Scavengers x2), and 2 true top-end payoffs at CMC 7-8 (Bruna, Griselbrand) that are never expected to be hard-cast on curve. Avg CMC 3.12 across nonland cards — high for "Midrange" but justified: 13 of 24 nonland spells (54%) sit at CMC 1-2, providing early interaction and graveyard fuel, while the CMC 5+ cluster is where the deck's redundant reanimation plays converge.

### Cards Considered but Excluded

- **Hanweir Garrison + Hanweir Battlements** (both Rare) — the third meld pair. Cut purely for the 5-rare/mythic budget; thematically as strong a fit as Bruna/Gisela. If you want to swap in the Hanweir pair instead of Bruna/Gisela, that's a clean 1-for-1 rare-budget trade — Hanweir Battlements' haste-granting ability actually synergizes with Edgar's Awakening (reanimated creatures have no haste by default; Battlements fixes that).
- **Emrakul, the Promised End** (Mythic) — a spectacular Through the Breach target on raw stats (15/15 flying trample), but its signature "take control of a turn" ability triggers only "when you cast this spell" — Through the Breach puts creatures onto the battlefield without casting them, so that ability would never fire. Downgraded from a near-auto-include to a marginal one once the oracle text was checked; not worth a 6th rare-budget slot over Liesa.
- **Archangel Avacyn // Avacyn, the Purifier** (Mythic) and **Edgar Markov** (Mythic) — strong Mardu-colored bombs, but neither advances the reanimator plan; cut for budget reasons in favor of cards that double as engine pieces.
- **Crawl from the Cellar** (Common) — a graveyard-to-hand recursion spell, cut as redundant with Midnight Scavengers and Edgar's Awakening, both of which do more (to battlefield, or a bigger body attached).
- **Demonic Taskmaster** (Uncommon, B) — a solid sac-payoff body, but its forced "sacrifice a creature each upkeep" is a liability once the early graveyard-fodder creatures run out; passed over for Bloodtithe Harvester's more controlled sac trigger.
- Sideboard-consideration tier that didn't make the final 10: **Fiery Temper** was almost sideboard-only before being kept maindeck for its madness synergy; **Voldaren Ambusher** and **Morkrut Banshee** were considered as extra conditional removal but cut for the more broadly-applicable Infernal Grasp/Abrade already in the 40.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.12   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  58.3%  prod  56.2%  gap  +2.1pp  [OK]
  R  demand  19.4%  prod  37.5%  gap -18.1pp  [OK]
  W  demand  22.2%  prod  37.5%  gap -15.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: all <= 2 copies (Graf Rats x2, Midnight
       Scavengers x2, Edgar's Awakening x2 all at cap; all others
       at or under cap)
[PASS] Rares/mythics: all exactly 1 copy each
[PASS] Total rares/mythics (main+sideboard): 5 of 5 max
       (Griselbrand, Through the Breach, Bruna, Gisela, Liesa)
[PASS] Every card verified present in the filtered cube pool by
       exact name
[PASS] Color identity: all 50 cards within W/R/B, no splash
[PASS] No meld back-face cards (Brisela, Hanweir the Writhing
       Township, Chittering Host) included as standalone slots
```
