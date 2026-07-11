---
deck_name: "ugb-emerge-eldrazi-go-wide-token-swarm"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "UGB"
format: "40-card"
built_at: "2026-07-09T03:12:13Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)
```
5x Swamp
3x Forest
2x Island
2x Contaminated Aquifer      UB dual, enters tapped
2x Haunted Mire              BG dual, enters tapped
2x Tangled Islet             GU dual, enters tapped
1x Evolving Wilds            Fetches any basic, fixes/thins
```

### CREATURES (18)
```
CMC  Card                          Qty   Color  Role                                  Rar
  1  Young Wolf                    x2    G      Undying fodder                        C
  2  Butcher Ghoul                 x2    B      Undying fodder                        C
  2  Blood Artist                  x1    B      Death-trigger life drain              U
  2  Ambush Viper                  x1    G      Flash deathtouch removal/blocker      C
  2  Skirsdag High Priest          x1    B      Morbid -> 5/5 flier via 2 taps        R
  2  Vilespawn Spider              x1    GU     Reach blocker, self-mill, sac-tokens  U
  3  Morbid Opportunist            x1    B      Repeatable draw off other deaths      U
  3  Biolume Egg // Biolume Serpent x2   U      Self-returns when sacrificed          U
  4  Drunau Corpse Trawler         x1    U      ETB 2/2 Zombie token, BU fixing       U
  7  Wretched Gryff                x1    U      Emerge payoff - draws a card          C
  8  Elder Deep-Fiend              x1    C      Emerge payoff - flash mass tap        R
  8  Distended Mindbender          x1    C      Emerge payoff - hand disruption       R
  8  Abundant Maw                  x1    C      Emerge payoff - life swing            C
  8  It of the Horrid Swarm        x1    C      Emerge payoff - makes 2 fodder        C
 10  Decimator of the Provinces    x1    C      Emerge payoff - team pump finisher    R
```

### INSTANTS & SORCERIES (3)
```
CMC  Card                    Qty   Color  Role                                 Rar
  1  Tragic Slip              x1    B      Morbid removal (-13/-13 when active)  C
  2  Infernal Grasp           x2    B      Unconditional removal                 U
```

### OTHER SPELLS (2)
```
CMC  Card                    Qty   Color  Role                                 Rar
  2  Cryptolith Rite           x1    G      Board-wide mana engine (needs a body) R
  2  Ghoulish Procession       x1    B      Death -> 2/2 zombie, once/turn        U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in              Rar
Ambush Viper             x1    G      2nd copy vs aggro/big creatures       C
Syncopate                x1    U      Counter vs bombs/combo                C
Summary Dismissal        x1    U      Blowout answer vs wraths/combo turns  U
Clear Shot               x1    G      Extra removal vs big creatures        U
Sever the Bloodline      x1    B      Exile removal vs recursive/tribal     U
Essence Flux             x1    U      Protect a key creature from removal   C
Ghoulish Procession       x1    B      2nd copy vs grindy matchups           U
Vilespawn Spider          x1    GU     2nd copy vs grindy matchups           U
Killing Wave              x1    B      Edict sweeper vs opposing go-wide     U
Imprisoned in the Moon    x1    U      Catch-all vs hexproof/lands/PWs       C
```

## ANALYSIS

Six colorless Emerge Eldrazi are the finishers: sacrifice a creature, pay a reduced generic cost, get a cast-trigger. Cheap undying/self-returning fodder (Young Wolf, Butcher Ghoul, Biolume Egg) and token generators (Ghoulish Procession, Skirsdag High Priest, Vilespawn Spider, Drunau Corpse Trawler) keep feeding the sacrifice engine, while Blood Artist and Morbid Opportunist turn every one of those deaths into life drain and card advantage. Cryptolith Rite converts the resulting board into mana to help close the gap on Elder Deep-Fiend's UU, Distended Mindbender's BB, and Decimator's GGG.

**Macro-Archetype: Midrange (combo-leaning).** Slot allocation deviates from standard Midrange guidance on purpose: Payoffs+Engine+Aristocrats together run ~52% of the 23 nonland slots (vs. the 30-40% guidance range), because several core pieces (Distended Mindbender, Cryptolith Rite) are tagged Combo as well as Midrange in this cube's taxonomy — the deck is closer to "assemble an engine, then win" than a card-quality-based Midrange grind. Removal sits at 13% of nonland (below the 20-30% guidance) by design: the deck's own undying/self-returning fodder (Young Wolf, Butcher Ghoul, Biolume Egg) functions as pseudo-interaction via repeated chump-blocking, and four more removal-adjacent answers live in the sideboard to bring in by matchup rather than clog the maindeck.

**Land count: 17 (42.5% of N=40).** Baseline Midrange range is 38-42%; this deck sits one land above the tool's own 16-land recommendation because three of its six payoffs cost 8-10 generic (before Emerge reduction) and one of them (Decimator of the Provinces) needs GGG in colored pips specifically — Emerge only discounts the generic portion of the cost, never the colored pips. No cantrip/mana-dork/MDFC modifiers applied (Cryptolith Rite requires a creature already in play, so it isn't counted as an independent ramp source).

**Mana base derivation.** Pip demand across all core-color spells: B=12 (42.9%), G=9 (32.1%), U=7 (25.0%) — black leads on the strength of the removal suite plus Distended Mindbender's BB. Land sources: B=9 (5 Swamp + 2 Contaminated Aquifer + 2 Haunted Mire), G=7 (3 Forest + 2 Haunted Mire + 2 Tangled Islet), U=6 (2 Island + 2 Contaminated Aquifer + 2 Tangled Islet). All three colors sit comfortably above their pip-demand share (gaps of -9 to -10pp), which is intentional buffer for Decimator's GGG and Elder Deep-Fiend's UU — a flat proportional split would leave those double/triple-pip costs too exposed even with a passing aggregate gap.

**The sacrifice loop, concretely.** Every Emerge cast is itself a sacrifice — Biolume Egg returns transformed at end of turn when sacrificed this way, and Young Wolf/Butcher Ghoul return bigger via undying whether they die to Emerge, combat, or removal. Blood Artist and Morbid Opportunist sit on top of that loop for free: they don't care *why* a creature died, only that it did, so casting an Emerge Eldrazi drains 1 life and can draw a card in the same turn it kills something in combat. Skirsdag High Priest is worth calling out precisely: it does *not* sacrifice anything — it taps two untapped creatures once Morbid is live (which it will be, constantly, given how much dies in this deck) to make a 5/5 flying Demon, giving the deck a second win axis that doesn't compete with Emerge for fodder.

**Known fragility (surfaced by internal review, not fully solved).** The curve still has a real gap at CMC 5-6 — no UGB common/uncommon in this pool filled it cleanly, so Drunau Corpse Trawler (CMC4) is the only patch between the 1-3 drops and the 7-10 drop Eldrazi. Dedicated "throwaway" fodder is 6 cards (Young Wolf x2, Butcher Ghoul x2, Biolume Egg x2) — enough given undying/self-return lets each be sacrificed more than once, but a hand with 2+ Eldrazi and zero fodder is a real (if uncommon) failure mode. The sideboard also can't address artifact/enchantment threats or true graveyard exile — no UGB common/uncommon in this cube pool does either.

**Data note.** Elder Deep-Fiend / Distended Mindbender / Decimator / Wretched Gryff / Abundant Maw / It of the Horrid Swarm show a colorless `colors` field in the pool data despite requiring colored Emerge pips — this is correct, not a bug (Eldrazi are Devoid, making them colorless cards even with colored costs).

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap:**
- **Gravecrawler** (B, rare) — near-infinite recurring fodder once any Zombie is out (Ghoulish Procession's tokens qualify). Arguably a stronger fodder engine than Skirsdag High Priest; cut purely for budget, strongest candidate to swap in if you want to try a different 5-rare mix.
- **Heartless Summoning** (B, rare) — the original archetype brief flagged this as a fit, but its actual text is "Creatures you control get -1/-1," which kills this deck's own 1/1 tokens (It of the Horrid Swarm's Insects, Vilespawn Spider's Insects) outright. Correctly excluded, not just a budget cut.
- **Eldritch Evolution** (G, rare) — sac a creature, tutor one at MV+2. With fodder topping out at CMC 3, it can only fetch up to MV 5 — none of the six Eldrazi payoffs (CMC 7-10) are reachable. Excluded on merits.
- **Docent of Perfection, Necroduality, Bloodline Keeper, Wrenn and Seven, Tireless Tracker, Mayor of Avabruck, The Gitrog Monster, Garruk Relentless, Gisa and Geralf** — all legal UGB rares, all off-theme (spells-matter, vampire tribal, lands-matter, werewolf tribal) rather than sacrifice/Emerge-specific.

**Uncommons/commons a tier below the chosen includes:**
- **Ecstatic Awakener // Awoken Demon** (B, common) — a second repeatable card-draw sac outlet, close runner-up to Morbid Opportunist.
- **Murderous Compulsion** (B, common) — solid conditional removal, cut from the maindeck in the self-grill revision to make room for Blood Artist/Drunau Corpse Trawler; still SB-quality.
- **Spontaneous Mutation** (U, common) — flash -X/-0 scaling off your own graveyard size; weakest early against the aggro decks it's meant to answer, cut from the sideboard for Killing Wave.
- **Restless Bloodseeker // Bloodsoaked Reveler** (B, uncommon) — Blood token generator, but conditioned on gaining life first; this deck has no dedicated lifegain package to turn it on consistently.
- **Gisa's Bidding** (B, common) — 2 Zombie tokens for 4 (or Madness 2B); fine filler, redundant with Drunau Corpse Trawler/Ghoulish Procession.

## MANA AUDIT: PASS
```
-- Mana Audit: PASS --------------------------------------
Land Count:  17 / 16 recommended  [PASS]
Avg CMC:     3.7   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  42.9%  prod  52.9%  gap -10.0pp  [OK]
  G  demand  32.1%  prod  41.2%  gap  -9.1pp  [OK]
  U  demand  25.0%  prod  35.3%  gap -10.3pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Rare/mythic global cap <= 5: exactly 5 (Elder Deep-Fiend,
       Distended Mindbender, Decimator of the Provinces, Cryptolith
       Rite, Skirsdag High Priest)
[PASS] Commons/uncommons <= 2 copies each (main+SB combined): no
       violations (Ambush Viper 1+1, Ghoulish Procession 1+1,
       Vilespawn Spider 1+1, all others within cap)
[PASS] Rares/mythics <= 1 copy each: no violations
[PASS] All cards within U/G/B color identity
```
