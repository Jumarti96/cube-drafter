---
deck_name: "rw-ragost-kitchen"
cube_id: "eoe"
cube_slug: "eoe"
colors: "RW"
format: "40-card"
built_at: "2026-08-03T00:55:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
8x Mountain                
5x Plains                  
2x Sacred Peaks            RW dual, enters tapped
1x Sacred Foundry          RW shock, only untapped-capable dual
```

### CREATURES (11)

```
CMC  Card                     Qty  Color  Role                                                                                           Rar
  1  Kavaron Harrier          x1   R      Engine — 1-drop that manufactures a doomed Robot token every attack                            U
  1  Rust Harvester           x1   R      Payoff — Ragost-independent repeatable reach fed by the deck own artifact graveyard            R
  1  Slagdrill Scrapper       x2   R      Engine — Ragost-independent sacrifice outlet; converts Munitions into damage + a card          C
  2  Chrome Companion         x2   C      Engine — colorless artifact body; lifegain on tap and mainboard graveyard interaction          C
  2  Oreplate Pangolin        x1   R      Payoff — grows off the deck's constant token production                                        C
  2  Ragost, Deft Gastronaut  x1   RW     Payoff — turns every artifact into 3 damage to each opponent                                   R
  3  Haliya, Guided by Light  x1   W      Engine — free lifegain per artifact ETB; pays Ragost's untap clause without spending a Food    R
  3  Weftstalker Ardent       x2   R      Payoff — Ragost-independent damage, 1 to each opponent per creature OR artifact ETB            U
```

### INSTANTS & SORCERIES (4)

```
CMC  Card                     Qty  Color  Role                                                                                           Rar
  1  Plasma Bolt              x2   R      Interaction — Void is permanently on in a deck that sacrifices every turn                      C
  3  Bombard                  x1   R      Interaction — unconditional 4 damage to a creature                                             C
  3  Ruinous Rampage          x1   R      Payoff — Ragost-independent reach, 3 damage to each opponent                                   U
```

### OTHER SPELLS (9)

```
CMC  Card                     Qty  Color  Role                                                                                           Rar
  1  Hardlight Containment    x1   W      Interaction — 1-mana exile; always has an artifact host here                                   R
  1  Nutrient Block           x2   C      Engine — 1-mana indestructible Food; gain 3 satisfies Ragost's untap clause, draws when eaten  C
  1  Squire's Lightblade      x2   W      Engine — 1-mana FLASH artifact; a Weapons Manufacturing trigger on the opponent's turn         C
  2  Melded Moxite            x2   R      Engine — artifact ETB, filters, then converts into a Robot token                               C
  2  Weapons Manufacturing    x1   R      Engine — Munitions token per nontoken artifact ETB; the ammunition                             R
  3  Banishing Light          x1   W      Interaction — exile any nonland permanent                                                      C
```

## SIDEBOARD (10)

```
Card                     Qty  Color  Role / When to board in                                                                        Rar
Focus Fire               x1   W      1-mana scaling removal on a wide board                                                         C
Cut Propulsion           x2   R      Double damage to fliers — vs the cube's 56 evasion cards                                       U
Dauntless Scrapbot       x1   C      Exile each opponent's graveyard — vs the cube's 31 graveyard cards                             U
Emergency Eject          x2   W      Instant-speed answer to any nonland permanent                                                  U
Ruinous Rampage          x1   R      Second reach spell vs lifegain/racing decks                                                    U
Scout for Survivors      x1   W      Post-sweeper rebuild — returns up to three 1-drops, or Ragost plus a one-drop                  U
Radiant Strike           x2   W      Destroy artifact or tapped creature; the 3 life also untaps Ragost                             C
```

## ANALYSIS

### DECK IDENTITY

An R/W deck that kills without attacking. Ragost, Deft Gastronaut rewrites every artifact you control into a Food, then eats them one at a time for 3 damage to each opponent — and because its untap clause checks at EACH end step, yours and the opponent's, a resolved Ragost fires twice per turn cycle. Weapons Manufacturing supplies the ammunition, minting a Munitions token off every nontoken artifact that enters, and each Munitions is worth 5 damage when Ragost eats it because it deals 2 more on the way to the graveyard. Crucially, Ragost is a single legendary rare, so the deck is built to win without ever drawing it: Weftstalker Ardent, Rust Harvester and Ruinous Rampage each deal damage to the opponent with no reference to Ragost at all, and Slagdrill Scrapper is a second sacrifice outlet that keeps converting Munitions into damage when Ragost is answered.

### THE ENGINE, WRITTEN OUT

Ragost, Deft Gastronaut does three separate things, and the third is the one people miss:

1. *"Artifacts you control are Foods in addition to their other types and have '{2}, {T}, Sacrifice this artifact: You gain 3 life.'"* — **13 of the 24 nonland cards** become Foods, plus every Munitions, Robot and Lander token.
2. *"{1}, {T}, Sacrifice a Food: Ragost deals 3 damage to each opponent."* — one mana, one artifact, three damage that cannot be blocked.
3. *"At the beginning of **each** end step, if you gained life this turn, untap Ragost."* — **each** end step, not "your end step." Yours and the opponent's. Two activations per turn cycle.

The third clause is why Haliya, Guided by Light is in the deck. Ragost's own gain-3 mode costs `{2}` and a whole artifact just to enable the untap — that is ammunition spent on logistics. Haliya's *"Whenever Haliya or another creature or artifact you control enters, you gain 1 life"* satisfies the same clause for free off any artifact the deck was casting anyway.

And Squire's Lightblade is in the deck for a reason that looks trivial on the card: it has **flash**. It is the deck's only way to make an artifact enter during the *opponent's* turn, which is how you gain life on their turn and untap Ragost at *their* end step. That is the difference between one activation per cycle and two.

### THE MUNITIONS ARE THE POINT

Weapons Manufacturing mints a Munitions token off every nontoken artifact entering — **13 of 24 nonland cards**. Feed one to Ragost and you get:

| Source | Damage |
|---|---|
| Ragost's ability | 3 to each opponent |
| Munitions leaving the battlefield | 2 to any target |
| **Total, one mana** | **5** |

The clause that makes this deck work rather than merely function is *"When this token **leaves the battlefield**"* — not "when you sacrifice this to Ragost." **Any** outlet fires it. Slagdrill Scrapper's `{2}, {T}, Sacrifice another artifact or land: Draw a card` turns a Munitions into 2 damage *and* a card, with Ragost nowhere in sight.

### BUILT AROUND A CARD IT DOESN'T NEED

Ragost is legendary **and** rare, so exactly one copy is legal in forty cards. It is drawn by turn six well under half the time. An independent shape judge reviewed three builds of this archetype and rejected the two that would have been dead without it — in both, every support card produced only life, cards or tokens, and Ragost's own ability was the *sole* damage output in the deck.

This list has three damage sources across four copies that never mention Ragost:

| Card | Oracle | Copies |
|---|---|---|
| Weftstalker Ardent | "Whenever another creature or artifact you control enters, this creature deals 1 damage to each opponent" | 2 |
| Rust Harvester | "{2}, {T}, Exile an artifact card from your graveyard: ... it deals damage equal to its power to any target" | 1 |
| Ruinous Rampage | "Ruinous Rampage deals 3 damage to each opponent" | 1 |

Oreplate Pangolin is a fourth payoff, but its damage is combat damage on a 2/2 base — it is the one card here that a blocker can stop, which is why it is a single copy and weighted at 0.6 in the assembly check.

### RUST HARVESTER EATS CARDS, NOT TOKENS

Worth stating precisely because it is easy to get backwards: Rust Harvester exiles *"an artifact **card** from your graveyard."* Munitions, Robot and Lander tokens cease to exist when they leave the battlefield and never reach the graveyard. Its fuel is only the **13 nontoken artifact cards** — which this deck is sacrificing every turn anyway, so its yard fills faster than any other build in this cube. That is also why it is weighted 0.85 rather than 1.0: on turn one the graveyard is empty.

### PLASMA BOLT IS A THREE-DAMAGE SPELL HERE

*"Void — Plasma Bolt deals 3 damage instead if a nonland permanent left the battlefield this turn."* This deck decides whether that is true. Ragost's granted Food ability works on any of 13 artifacts, Slagdrill Scrapper ×2 sacrifice on demand, and Nutrient Block ×2 and Melded Moxite ×2 can each sacrifice themselves. Void is on whenever the engine has run, which is every turn from about turn three.

### THE TENSION THE DECK CANNOT SOLVE

Life and damage come from the same 13 artifacts. `{2}, {T}, Sacrifice this artifact: You gain 3 life` and `{1}, {T}, Sacrifice a Food: 3 damage` consume identical resources. Every Food eaten to stay alive is three damage not dealt. Against a fast clock the deck can stabilise, but it stabilises by spending its win condition — and that is stated in the failure modes as an accepted cost rather than papered over, because the alternative (adding blockers and lifegain in place of artifacts) shrinks the denominator that Weapons Manufacturing, Weftstalker Ardent and Ragost all multiply against.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (combo):  [PASS]
  MV distribution (24 nonland):  1:11  2:7  3:6
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 6 copies (effective 5.35: Ragost, Deft Gastronaut@0.9, Oreplate Pangolin@0.6, Rust Harvester@0.85) → p=0.85 (need ≥ 0.75)
  PASS  enabler: 13 copies → p=0.99 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 88% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 92%  T2 99%  T3 100%
Coverage:  [PASS]
  CONCEDED  wide_boards: This deck's damage is non-combat and does not care how many creatures the opponent has: Ragost deals '3 damage to each opponent', Weftstalker Ardent deals '1 damage to each opponent', Ruinous Rampage deals '3 damage to each opponent' - none of them can be blocked. What a wide board does to this deck is race it, not block it. The only sweeper legal in R/W is Lithobraking, and its '2 damage to each creature' would kill 8 of the deck's 11 creature copies - Ragost (2/2), Oreplate Pangolin (2/2), Rust Harvester (1/1), Slagdrill Scrapper x2 (1/2), Chrome Companion x2 (2/1) and Kavaron Harrier (2/1) - including the payoff itself, sparing only Weftstalker Ardent x2 (2/3) and Haliya (3/3). Mitigating costs the engine, so the deck races instead and boards in Focus Fire and Cut Propulsion x2.
  OK        single_large_threat: Hardlight Containment, Banishing Light, Bombard, Plasma Bolt
  OK        noncreature_permanents: Banishing Light
  CONCEDED  stack: No counterspells exist in R/W in this pool at all - this is a colour-pair limitation, not a slot choice. The deck answers being interacted with by redundancy rather than protection: four independent damage sources across six payoff copies, none of which needs another to function.
  OK        graveyard: Chrome Companion
```

- No WARN-tier structural flags were raised; curve and goldfish both passed.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|------|---------|-----------|
| flood | mitigation | Four repeatable mana sinks, all of which also advance the plan. Slagdrill Scrapper's '{2}, {T}, Sacrifice another artifact OR LAND: Draw a card' literally eats the surplus land. Ragost's granted '{2}, {T}, Sacrifice this artifact: You gain 3 life' is live on all 13 artifacts. Nutrient Block has that same ability natively without Ragost, and Melded Moxite's '{3}, Sacrifice this artifact: Create a tapped 2/2 colorless Robot artifact creature token' converts spare mana into a fresh Ragost meal. |
| screw | mitigation | This is the lowest curve of the three builds: 11 of the 24 nonland cards cost one mana and 18 cost two or less, with nothing above three. The goldfish simulation plays something on turn 1 in 92% of hands and reaches three lands by turn 3 in 88%. A two-land hand operates the whole engine. |
| decapitation | mitigation | This is the failure mode the entire build was selected to answer. Ragost is legendary and rare, so exactly one copy is legal - the deck therefore never depends on it. THREE non-combat damage sources across four copies work with Ragost nowhere in sight: Weftstalker Ardent x2 ("Whenever another creature or artifact you control enters, this creature deals 1 damage to each opponent"), Rust Harvester ("it deals damage equal to its power to any target") and Ruinous Rampage ("deals 3 damage to each opponent"). Oreplate Pangolin is a fourth payoff but its damage is combat damage only, so it is not counted among the three. Most importantly, Weapons Manufacturing's Munitions deal their 2 damage when the token LEAVES THE BATTLEFIELD - through any sacrifice outlet, not just Ragost - so Slagdrill Scrapper x2 keeps the ammunition converting into damage after Ragost is answered. |
| gas-out | mitigation | Four of the 24 nonland cards replace themselves and the deck's accel_count is 4: Nutrient Block x2 ('When this artifact is put into a graveyard from the battlefield, draw a card' — it draws precisely when the engine consumes it), Melded Moxite x2 ('discard a card. If you do, draw two cards'). On top of that, Slagdrill Scrapper x2 converts any spare artifact or land into a card, and Haliya draws at end step whenever the deck gained 3 life — which Ragost's Food mode does in a single activation. |
| raced | accepted | The deck's life total and its damage output are drawn from the same 13 artifacts, and that is an unavoidable tension rather than an oversight. Ragost's granted '{2}, {T}, Sacrifice this artifact: You gain 3 life' can stabilise against an aggressive start, but every Food eaten for 3 life is 3 damage not dealt, so surviving is paid for directly in clock. Mitigating properly would mean adding dedicated lifegain or blockers in place of artifacts, which shrinks the denominator every payoff in the deck multiplies against — Weapons Manufacturing's trigger count, Weftstalker Ardent's ping count and Ragost's ammunition all fall together. Cut Propulsion x2, Radiant Strike x2 and Focus Fire are in the sideboard for the matchups where racing is the actual problem. |
| disruption-fizzle | mitigation | There is no critical turn to interact with. The damage is incremental and per-permanent rather than a single assembled chain: each artifact entering is independently a Weapons Manufacturing trigger, a Weftstalker Ardent ping and a future Ragost meal, and each Ragost activation is a separate 3 damage that has already resolved. A removal spell aimed at any one piece subtracts one increment rather than breaking a loop, and the deck has no turn on which it is all-in. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|------|--------|
| Sami, Wildcat Captain | 'Spells you cast have affinity for artifacts' at {4}{R}{W} — a 6-drop mythic against the 7-card rare cap in a deck whose plan is to SACRIFICE its artifacts. The affinity discount shrinks every time Ragost eats a meal, so the payoff fights the engine. |
| Devastating Onslaught | 'Create X tokens that are copies of target artifact or creature you control... Sacrifice them at the beginning of the next end step.' — copying a Munitions gives 2X damage, but X=3 costs seven mana for six damage, worse than simply activating Ragost twice. Mythic against the rare cap. |
| Terminal Velocity | {4}{R}{R} for a permanent sacrificed at your own end step. Six mana for one turn of a body is past this deck's clock, and the double-R pip is awkward alongside {W} costs. |
| Pinnacle Starcage | 'exile all artifacts and creatures with mana value 2 or less' — this list runs 12 permanents at MV 2 or less. It exiles half its own ammunition. |
| Systems Override | A three-mana Threaten. This deck's damage comes from sacrificing its own permanents, not from borrowing the opponent's for one attack. |
| Beyond the Quiet | 'Exile all creatures and Spacecraft' — exiles Ragost, which is the deck. Anti-synergy with the win condition, not merely symmetric. |
| Survey Mechan | '{10}, Sacrifice this creature... costs {X} less where X is the number of differently named lands you control' — this list runs 3 differently-named lands, so the ability costs {7}. |
| Cosmogrand Zenith / Sunstar Lightsmith / Brightspear Zealot | Spellslinger payoffs gated on casting a second spell each turn. This deck's second 'spell' each turn is usually a Ragost activation, which is an ability, not a spell. |
| Exalted Sunborn | 'If one or more tokens would be created under your control, twice that many of those tokens are created instead' doubles Munitions and is genuinely the strongest possible Ragost partner — but {3}{W}{W} is a double-W mythic, and the deck already spends its rare budget on Ragost, Weapons Manufacturing, Haliya and Sacred Foundry. |
| Astelli Reclaimer / Starfield Shepherd / Dawnstrike Vanguard | All 5-6 MV white creatures. Ragost's clock is 6 damage per turn cycle from turn 3; a five-drop body arrives after the race is decided and does not add an artifact. |
| The Seriema | {1}{W}{W} double-W. It would tutor Ragost, which is real, but the deck runs only 2 white sources that produce untapped white on turn 3, and a double pip on a three-mana engine piece is a mulligan risk. |
| Tezzeret, Cruel Captain | 'Whenever an artifact you control enters, put a loyalty counter on Tezzeret' ticks up nicely here, but its −3 fetches a 1-MV artifact and its −7 emblem is far past this deck's clock. A mythic slot better spent on Ragost's own support. |
| Pinnacle Kill-Ship / Extinguisher Battleship / Bygone Colossus | 7-9 MV colorless artifacts. Expensive artifacts are bad Ragost ammunition — the card costs 7 and produces the same 3 damage a one-mana Nutrient Block produces. |
| Mechan Assembler / Emissary Escort / Mm'menon, Uthros Exile | All blue. Adding U to this core would need WU and UR duals, both of which enter tapped, in a deck that wants Sacred Foundry untapped on turn 2 for {R}{W}. |
| Honored Knight-Captain | '{4}{W}{W}, Sacrifice this creature: Search your library for an Equipment card' — six mana to find one of the deck's two Equipment, both of which cost 1 and 5. The ETB Soldier token is not an artifact, so it is not Ragost food. |
| Rayblade Trooper | 'Whenever a nontoken creature you control with a +1/+1 counter on it dies, create a 1/1 white Human Soldier creature token' — the token is a creature, not an artifact, so it feeds nothing here, and only 1 of the deck's cards naturally puts counters on nontoken creatures. |
| Seam Rip | 'exile target nonland permanent an opponent controls with mana value 2 or less' — a one-mana answer, but capped at MV 2; Hardlight Containment costs the same and has no cap. |
| Kav Landseeker / Sunstar Expansionist / Orbital Plunge | All make a Lander token, which is fine Ragost food, but each is a 3-4 MV card whose Lander is conditional or temporary ('At the beginning of the end step on your next turn, sacrifice that token'). Lithobraking makes an unconditional Lander at instant speed and sweeps. |
| Adagia, Windswept Bastion / Kavaron, Memorial World | Both enter tapped and gate their payoff behind 12+ charge counters, and both are mythics against the 7-card cap. This deck has no Station enablers to charge them. |
| Secluded Starforge | '{T}: Add {C}' only, in a deck whose engine piece costs {R}{W} on turn two. A colourless land is a colour-screw source here, and it is a rare against the cap. |
| Command Bridge | 'sacrifice it unless you tap an untapped permanent you control' — the untapped permanents this deck controls are the ones Ragost and Slagdrill Scrapper want to tap for their own abilities. |
| Memorial Vault | "{T}, Sacrifice another artifact: Exile the top X cards of your library, where X is one plus the mana value of the sacrificed artifact." A genuinely better sacrifice outlet than Slagdrill Scrapper - it costs only the tap once in play - but at 4 mana it would be the single highest-cost card in a deck whose average mana value is 1.79 and whose curve otherwise tops out at 3. Adding it raises the computed land requirement in a deck already running one land above target. |
| Warmaker Gunship | "When this Spacecraft enters, it deals damage equal to the number of artifacts you control to target creature an opponent controls." The count is excellent here - 13 of 24 nonland cards are artifacts - but the damage goes to a CREATURE, not to the player. That makes it removal, not a kill condition, and this deck already runs five interaction cards while its problem is closing, not surviving. |
| Lumen-Class Frigate / Galvanizing Sawship / other Spacecraft | Station payoffs. Station taps a creature at sorcery speed, while Ragost wants to tap itself to activate and wants artifacts untapped for their granted Food ability. The two mechanics compete for the same untapped permanents, so the Station package belongs in a different build. |
| Lithobraking (maindeck) | "deals 2 damage to each creature" would kill 8 of this deck's 11 creature copies including Ragost itself (2/2). It is the one sweeper legal in R/W and it is anti-synergy here, unlike in the W/U/R Station build where every threat is a noncreature Spacecraft. |
| Bombard (second copy, sideboard) | CUT IN PHASE 9 for Scout for Survivors. One copy of unconditional 4-damage removal stays maindeck; the sideboard slot was better spent on the only post-sweeper rebuild effect available in these colours. |


## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 15 recommended  [PASS]
Avg CMC:     1.79   Ramp cards: 0   Cantrips: 4
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -1.61 adj [MV 1.79 vs 2.5, 4 accel, scaled N/60]  ->  15 lands  (P(2-4 in 7) = 0.776)

Color Balance (core):  [PASS]
  R  demand  72.7%  prod  68.8%  gap  +3.9pp  [OK]
  W  demand  27.3%  prod  50.0%  gap -22.7pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons: max 2 copies each
[PASS] Rares/mythics: max 1 copy each
[PASS (6 used: Ragost Deft Gastronaut, Weapons Manufacturing, Rust Harvester, Haliya Guided by Light, Hardlight Containment, Sacred Foundry)] Max 7 rares/mythics total across mainboard + sideboard
[PASS] All cards drawn from cube eoe mainboard
[PASS (8 Mountain, 5 Plains)] Basic lands format-supplied, exempt from copy limits
[PASS] Colour identity within core R/W, no splash
[PASS] Mainboard exactly 40 cards
[PASS] Sideboard exactly 10 cards
```
