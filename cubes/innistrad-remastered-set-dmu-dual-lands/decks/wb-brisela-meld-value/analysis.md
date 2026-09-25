---
deck_name: "wb-brisela-meld-value"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-08-31T21:06:59Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
  x4   Plains
  x9   Swamp
  x2   Evolving Wilds                               fetches a basic
  x2   Sunlit Marsh                                 Plains Swamp, taps for BW, enters tapped
```

### CREATURES (14)

```
CMC  Card                                         Qty   Color Role                           Rar
  2  Ambitious Farmhand // Seasoned Cathar        x1    W     Engine/Infrastructure          U
  2  Blood Artist                                 x2    B     Threat/Payoff                  U
  2  Graf Rats                                    x2    B     Threat/Payoff                  U
  2  Olivia's Dragoon                             x2    B     Engine/Infrastructure          C
  2  Skirsdag High Priest                         x1    B     Threat/Payoff                  R
  3  Gluttonous Guest                             x1    B     Engine/Infrastructure          C
  4  Gisela, the Broken Blade                     x1    W     Threat/Payoff                  M
  4  Haunted Dead                                 x1    B     Engine/Infrastructure          U
  5  Midnight Scavengers                          x2    B     Engine/Infrastructure          C
  7  Bruna, the Fading Light                      x1    W     Threat/Payoff                  R
```

### INSTANTS & SORCERIES (9)

```
CMC  Card                                         Qty   Color Role                           Rar
  1  Crawl from the Cellar                        x1    B     Engine/Infrastructure          C
  1  Tragic Slip                                  x2    B     Interaction                    C
  2  Collective Brutality                         x1    B     Interaction                    R
  2  Infernal Grasp                               x2    B     Interaction                    U
  3  Lingering Souls                              x2    W     Threat/Payoff                  U
  5  Edgar's Awakening                            x1    B     Engine/Infrastructure          U
```

## SIDEBOARD (10)

```
Card                                         Qty   Color Role / When to board in                        Rar
Killing Wave                                 x1    B     Flex: vs INDESTRUCTIBLE threats - 'For each cr U
Cathar Commando                              x2    W     Hate: vs artifacts and enchantments - 24 artif C
Valorous Stance                              x2    W     Flex: vs removal-heavy decks - 'Target creatur U
Angelic Purge                                x1    W     Hate: vs any permanent-based threat this deck  C
Invasion of Innistrad // Deluge of the Dead  x1    B     Hate: vs graveyard decks - 75 graveyard cards, R
Sever the Bloodline                          x1    B     Hate: vs token swarms and recursive threats -  U
Soul-Guide Gryff                             x2    W     Hate: vs graveyard decks - 75 graveyard cards, C
```

## ANALYSIS

### DECK IDENTITY

A white-black attrition deck that plays the Gisela / Bruna meld pair as its ceiling and an aristocrats drain engine as its floor. It trades one-for-one with cheap removal, keeps a board of Spirit tokens, and converts that board into damage two ways that need no meld at all: Blood Artist turns every chump block and every removal trade into a point of drain, and Skirsdag High Priest taps two spare bodies for a 5/5 flier whenever anything has died. The meld line runs through the graveyard rather than through the draw step - Crawl from the Cellar and Edgar's Awakening return a creature card at any mana value, and Bruna's cast trigger returns an Angel or Human directly to the battlefield, so a Gisela answered by removal comes back. Two figures the archetype label hides: the Gisela/Bruna pair is 1 copy plus 1 copy and assembles 13.5% of the time by turn 8, while the Graf Rats / Midnight Scavengers pair is 2 plus 2 and assembles 36.9% - so at least one meld pair is drawn in roughly 45% of games, and Brisela specifically in 13.5%. The deck is built so that the rest are still winnable.

### THE TWO NUMBERS THAT SHAPED THIS BUILD

Hypergeometric, N=40, 15 cards seen (opening seven plus eight draws at the thesis turn):

| Line | Copies | P(both halves by turn 8) |
|---|---|---|
| Gisela, the Broken Blade + Bruna, the Fading Light -> Brisela | 1 + 1 | **13.5%** |
| Graf Rats + Midnight Scavengers -> Chittering Host | 2 + 2 | **36.9%** |
| At least one pair | | **~45%** |

Three of the cube's five meld halves are rares or mythics and are capped at one copy, so no deck in
this format can make the Brisela pair reliable. That single number is why this list is an aristocrats
deck that contains the Brisela pair rather than a Brisela deck with filler. Blood Artist and Skirsdag
High Priest are the win conditions in the majority of games where the lock never appears.

### WHAT THE RECURSION ACTUALLY REACHES

The four retrieval effects are not interchangeable, and the differences decided the slots:

| Card | Clause | Reaches (of 14 creature cards) |
|---|---|---|
| Crawl from the Cellar | "Return target creature card from your graveyard to your hand" | **14** — no restriction; 1 copy, so 2 uses via Flashback {3}{B} |
| Edgar's Awakening | "Return target creature card from your graveyard to the battlefield" | **14** — and it is the only card that puts Bruna in play for 5 instead of casting her for 7 |
| Midnight Scavengers | "return target creature card with **mana value 3 or less**" | **9** — and it can reach neither half of the Brisela pair |
| Bruna's cast trigger | "return target **Angel or Human** creature card ... to the battlefield" | **5 targetable** — Gisela, Ambitious Farmhand, Skirsdag High Priest, Midnight Scavengers x2 (6 Angel-or-Human cards, but Bruna is on the stack when her own trigger resolves) |

The asymmetry matters. Graf Rats is MV 2, so Midnight Scavengers fetches its own meld partner back —
the Chittering Host pair partially self-rebuys. Gisela at MV 4 is outside that range entirely, so the
Brisela pair is served only by Crawl from the Cellar, Edgar's Awakening and Bruna's own trigger.

None of it recovers a half that was **exiled** rather than killed, and none of it finds a half that was
never drawn.

### WHY LIESA AND ODRIC ARE NOT HERE

This is the only one of the three builds with spare rare slots, so it was the natural home for the two
cards the Mardu list cannot afford. Both were drafted in and both were cut on oracle text, not budget:

- **Liesa, Forgotten Archangel** — "Whenever another nontoken creature you control **dies**, return that
  card to its owner's hand." Gisela and Bruna do not die when they meld; both read "**exile** them, then
  meld them." Liesa can never recur a successful meld. Her second clause — "If a creature an opponent
  controls would die, **exile it instead**" — additionally suppresses Tragic Slip's Morbid on every
  opposing creature this deck kills.
- **Odric, Lunarch Marshal** — he copies a keyword only if a creature you control already has one, and
  the drafted list supplied 5 of 23 keyword-bearing cards, three of them singletons. And on the exact
  turn the plan executes, Gisela has melded away at the end step and is not there to copy from.

The freed slots went to Skirsdag High Priest and Collective Brutality.

### THE ARISTOCRATS FLOOR

Blood Artist reads "Whenever this creature **or another creature** dies" — no controller restriction, so
the deck's 5 killing removal spells drain on their side too. Lingering Souls x2 supply up to 8 flying
Spirit tokens across their front faces and flashbacks: chump blockers that protect Gisela through her
end-step meld window, Blood Artist fodder, Skirsdag tap-fodder, and Angelic Purge sacrifice fodder out
of the board.

Skirsdag High Priest is more expensive than it reads: it taps **itself plus two others**, so it needs
three untapped creatures, and Morbid needs a death that has already happened. Realistic output is 2 to 4
Demons a game.

The honest limitation is that the mainboard has **no sacrifice outlet**, so deaths cannot be manufactured
on demand. Guaranteed death events are the 5 killing removal spells plus combat. Both melds read "exile
them, then meld them", so assembling either one gives Blood Artist nothing and does not turn on Morbid.

### THE DISCARD PROBLEM, AND WHAT IT COST TO FIX

The first version of this deck claimed the graveyard plan was powered by "two discard outlets". It was
not: Olivia's Dragoon was the only at-will outlet, and Collective Brutality's escalate is a **cost** paid
to add a mode, not something you activate when you want Gisela in the yard. Declaring discard_outlet as
a structural role and testing it put a number on the problem — p=0.60 against a 0.75 threshold.

Fixing it took three cards, not one: a second Olivia's Dragoon (it is common, so two are legal), Haunted
Dead ("{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield tapped" — a
repeatable outlet that recurs itself), and Gluttonous Guest, whose Blood token is "{1}, {T}, Discard a
card, Sacrifice this token: Draw a card" — card-neutral rather than card-negative. That reached p=0.80.

### THE MANA

The audit counts printed costs only and sees B 19 / W 7. That model is blind to the alternate costs this
deck actually pays: Lingering Souls' Flashback {1}{B} twice over, Crawl from the Cellar's Flashback
{3}{B}, and Haunted Dead's {1}{B} recursion. Counting those gives **B 23 / W 7 — about 77% black**, and
the manabase is built to the corrected figure rather than the printed one: Swamp 9 plus Sunlit Marsh 2 =
11 direct black sources of 17.

White is deliberately over-supplied against its share, because its pips are concentrated: Gisela
{2}{W}{W} and Bruna {5}{W}{W} each want two in a single turn. Even so, P(two white sources by turn 4) is
about 73% counting Evolving Wilds and about 57% counting only lands that tap for {W} directly. Turn-4
Gisela is not a reliable curve play; the deck is built to cast her on 5 or 6 alongside a removal spell,
and Ambitious Farmhand ("search your library for a basic Plains card") exists to shorten that gap.

### TWO CORRECTIONS MADE DURING THE GRILL

Both were factual errors of mine, and both are worth recording because they were the same kind of error.

**Graveyard hate.** I wrote that Soul-Guide Gryff was the only graveyard-exile effect available in white
or black in this pool. That is false. Four cards inside W/B exile from a graveyard; two of them reach
only your own. Invasion of Innistrad // Deluge of the Dead is colour identity black and reads "{2}{B}:
Exile target card from a graveyard" — repeatable and opponent-facing, where the Gryff is one-shot.
Against a cube that is 27.1% graveyard cards it is now in the sideboard, over The Meathook Massacre,
which was a third answer to wide boards behind Killing Wave and Sever the Bloodline.

**Stack interaction.** I marked the stack class answered and named Collective Brutality. Its three modes
are hand attack, −2/−2, and a 2-life drain. None of them responds to a spell. **Zero** of the 23 nonland
cards here can interact with the stack, and this pool contains no counterspell in white or black, so
there is no remedy — a resolved threat must be answered afterwards on the battlefield or not at all.

### PLAY NOTES

- Discarding Gisela or Bruna is a tutor, not a loss: Crawl from the Cellar and Edgar's Awakening both
  reach any creature card at any mana value.
- Killing Wave answers indestructible, not hexproof. Sigarda, Host of Herons reads "Spells and abilities
  your opponents control can't cause you to sacrifice permanents" — she is written to blank it, and being
  hexproof nothing else in the board can target her either. Against Sigarda, chump-block and race.
- Never point Valorous Stance's destroy mode at Mirrorwing Dragon: it copies the spell onto every other
  creature its controller could target, which here means our own Bruna, Chittering Host and Brisela.
- The Graf Rats meld is mandatory ("exile them, then meld them"), so once Midnight Scavengers is down the
  pair is consumed on the game's schedule, not yours. Plan around Chittering Host's "other creatures you
  control get +1/+0 and gain menace until end of turn".
- Crawl from the Cellar's second clause ("+1/+1 counter on up to one target Zombie you control") is NOT dead
  here, though it nearly was: Haunted Dead is a Creature - Zombie, and it is the only one in the list.
- Brisela is summoning-sick the turn it forms. The lock ("Your opponents can't cast spells with mana
  value 3 or less") applies immediately at your end step; the 9/10 body does not attack until next turn.

### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:3  2:11  3:3  4:2  5:3  7:1
Assembly (thesis turn 8, 15 cards seen):  [PASS]
  PASS  board_presence: 10 copies → p=0.99 (need ≥ 0.75)
  PASS  removal: 5 copies (effective 4.6: Collective Brutality@0.6) → p=0.84 (need ≥ 0.75)
  PASS  graveyard_recursion: 6 copies (effective 4.4: Haunted Dead@0.5, Bruna, the Fading Light@0.5, Midnight Scavengers@0.7, Midnight Scavengers@0.7) → p=0.83 (need ≥ 0.75)
  PASS  discard_outlet: 5 copies (effective 4.1: Gluttonous Guest@0.7, Collective Brutality@0.4) → p=0.80 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 48%  T2 95%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No mainboard sweeper. Against a wide board the mainboard plan is attrition rather than a mass answer: Blood Artist x2 ('Whenever this creature or another creature dies, target player loses 1 life and you gain 1 life') makes every chump block drain them, Lingering Souls supplies up to 8 flying blockers across two casts and their flashbacks, and Tragic Slip's Morbid turns on the moment anything dies. Sever the Bloodline (exile, and 'all other creatures with the same name') and Killing Wave are the sideboard answers. Maindecking a sweeper is a real cost here because this deck's own board IS the token board a sweeper would kill - which is also why The Meathook Massacre was cut from the sideboard at Phase 9: it was a third answer to a class already covered twice, and its slot went to the cube's largest threat class instead.
  OK        single_large_threat: Infernal Grasp, Tragic Slip
  CONCEDED  noncreature_permanents: No mainboard artifact or enchantment removal. Artifact density is 24 cards (8.7%) and enchantment density 25 cards (9.0%). Cathar Commando x2 and Angelic Purge are the sideboard response, and Cathar Commando is specifically chosen because its flash body means boarding it in costs no board presence.
  CONCEDED  stack: CORRECTED at Phase 9. An earlier version marked this class answered and named Collective Brutality. That was oracle-false: its three modes are 'Target opponent reveals their hand. You choose an instant or sorcery card from it. That player discards that card', 'Target creature gets -2/-2 until end of turn', and 'Target opponent loses 2 life and you gain 2 life'. The first is proactive, sorcery-speed hand attack - it strips a card BEFORE it is cast and cannot respond to a spell already on the stack. 0 of the 23 nonland cards in this deck can interact with the stack. There is no remedy: this pool contains no counterspell in white or black. The cost is real and is accepted - against a deck holding a single game-breaking spell this deck must answer the permanent afterwards with Infernal Grasp, Tragic Slip or a sideboard Angelic Purge, or lose to it.
  CONCEDED  graveyard: No mainboard graveyard hate, and the reason is symmetry: this deck's own plan runs through the graveyard (Crawl from the Cellar, Edgar's Awakening, Haunted Dead's self-return, Bruna's return trigger, Lingering Souls flashback, Midnight Scavengers' ETB), so a maindeck hate piece would be drawn in games where a threat would serve better. CORRECTION, self-caught at Phase 9: an earlier version of this declaration called Soul-Guide Gryff 'the only graveyard-exile effect available in white or black in this pool'. That is false. Scanning the working pool for colour identities inside W/B returns four cards whose oracle text exiles from a graveyard, and one of them - Invasion of Innistrad // Deluge of the Dead, colour identity [B] - reads '{2}{B}: Exile target card from a graveyard', which is repeatable and opponent-facing where the Gryff is one-shot. (The other two, Dauntless Cathar and Soul Separator, only exile from YOUR OWN graveyard and are not hate.) The class is answered in the sideboard by Soul-Guide Gryff x2 plus Invasion of Innistrad.
```

_No WARN-tier structural flags were raised._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| `flood` | mitigation | CORRECTED at the approval round - an earlier version named Crawl from the Cellar x2 and Thraben Inspector's Clue, and neither is in the shipped list. Actual sinks: three of the 23 nonland cards are castable a second time from the graveyard - Crawl from the Cellar (Flashback {3}{B}) and Lingering Souls x2 (Flashback {1}{B}). The deck's best flood sink is Haunted Dead, '{1}{B}, Discard two cards: Return this card from your graveyard to the battlefield tapped' - repeatable, and it converts surplus lands into a body plus a flying Spirit every time. Skirsdag High Priest's activation costs no mana but turns spare bodies into 5/5 fliers, and Edgar's Awakening at {3}{B}{B} is a five-mana use for a graveyard a long game has filled. |
| `screw` | mitigation | CORRECTED at the approval round - an earlier version claimed six one-mana cards including Thraben Inspector x2, which is not in the shipped list. The true curve is 3 one-drops (Crawl from the Cellar, Tragic Slip x2) and 11 two-drops, and stated honestly, NONE of the three one-drops is a proactive turn-one play: Crawl needs a creature card already in the graveyard and Tragic Slip is reactive. What actually makes two-land hands keepable is the eleven two-mana cards - Graf Rats x2, Blood Artist x2, Olivia's Dragoon x2, Infernal Grasp x2, Ambitious Farmhand, Skirsdag High Priest, Collective Brutality - so the deck acts from turn 2 rather than turn 1. Seventeen lands with only Sunlit Marsh x2 entering tapped, plus Evolving Wilds x2 fetching from 13 basics, and Ambitious Farmhand fetching a Plains to hand. The goldfish simulation on the shipped list reports 85% keepable and 88% for three lands by turn 3. |
| `decapitation` | mitigation | CORRECTED at the approval round to the shipped list - an earlier version counted Crawl from the Cellar at 2 copies and used a 13-card creature denominator. The meld halves are singletons and the recursion is stated with its limits rather than oversold. Crawl from the Cellar (1 copy, 2 uses via Flashback {3}{B}) and Edgar's Awakening each return any of the 14 creature cards at any mana value, and Edgar's Awakening returns to the BATTLEFIELD. Midnight Scavengers x2 rebuy 9 of the 14 at MV 3 or less. Bruna's cast trigger reaches 6 Angel-or-Human cards of the 14, of which 5 are legal targets since she is on the stack when her own trigger resolves. Three limits, all stated: Midnight Scavengers cannot reach Gisela (MV 4) or Bruna (MV 7), so the Brisela pair is served only by Crawl, Edgar's Awakening and Bruna herself - 2 cards, 3 uses; none of it recovers a half that was exiled rather than killed; and none of it finds a half that was never drawn. The structural answer to decapitation is that the deck does not need the meld at all: Blood Artist x2 and Skirsdag High Priest are independent, oracle-supported win conditions on the same board. |
| `gas-out` | mitigation | CORRECTED at the approval round - an earlier version counted Thraben Inspector x2 and Crawl from the Cellar x2, neither of which matches the shipped list. Actual self-replacing or self-recurring cards: 4 of the 23 nonland - Crawl from the Cellar (flashback), Lingering Souls x2 (flashback), and Haunted Dead, which returns ITSELF from the graveyard for {1}{B} and two discards. Gluttonous Guest's Blood token is card-neutral: '{1}, {T}, Discard a card, Sacrifice this token: Draw a card'. Midnight Scavengers x2 each return one of 9 legal creature cards on entry, and Collective Brutality's escalate converts a surplus card into an extra mode. Blood Artist is the answer to a genuinely empty hand: with no cards left, a board of tokens still drains every time anything dies on either side. |
| `raced` | accepted | Against the cube's fastest starts this deck is behind for the first four turns and answers with removal and chump blockers, not a faster clock. Mitigating would mean cutting Bruna (MV 7), Midnight Scavengers x2 (MV 5) and Edgar's Awakening (MV 5) for two-drops - which deletes the Brisela pair, the Chittering Host pair and the reanimation package, i.e. everything that makes this a meld deck rather than a generic W/B aristocrats list. The cost of mitigating is the archetype. The partial offset is not purchased but structural: Blood Artist's lifegain half and Gisela's lifelink both swing a race, and 8 flying Spirit tokens block well. |
| `disruption-fizzle` | mitigation | The critical turn is casting Bruna at seven mana, and it is unusually resilient: her trigger reads 'When you CAST this spell', so it resolves and returns Gisela to the battlefield even if Bruna herself is countered or killed in response - which still leaves Gisela, a 4/3 flying first-strike lifelinker, on an empty-handed opponent's board. The Graf Rats meld is a triggered ability with no spell on the stack to interact with at all. Where the plan does fold is exile: an exiled Bruna is unreachable by Crawl from the Cellar and Edgar's Awakening alike, and the deck accepts that. |

### CARDS CONSIDERED BUT EXCLUDED

| Card(s) | Reason |
|---|---|
| Wretched Gryff, Distended Mindbender, Elder Deep-Fiend, Abundant Maw, It of the Horrid Swarm, Emrakul, the Promised End | Emerge and colossal Eldrazi: every emerge cost demands {U}, {G} or {B}{B} on top of 5-6 generic ('Emerge {5}{U}', 'Emerge {5}{U}{U}', 'Emerge {6}{G}'), which a W/B manabase cannot pay, and each emerge cast additionally sacrifices a creature - which in this deck would eat a meld half. Emrakul at {13} minus card types is not reachable at 17 lands. |
| Gravecrawler, Archghoul of Thraben, Gisa's Bidding | Zombie-tribal cards: each reads 'Zombie' explicitly ('as long as you control a Zombie', 'If it's a Zombie card', 'a 2/2 black Zombie creature token with decayed'), and this list's creature base is Angels, Humans and Spirit tokens. Crawl from the Cellar's own Zombie clause is likewise dead here and the card is included only for its unrestricted first mode. |
| Asylum Visitor, Indulgent Aristocrat, Captivating Vampire, Restless Bloodseeker // Bloodsoaked Reveler, Voldaren Bloodcaster // Bloodbat Summoner, Gluttonous Guest, Desperate Farmer // Depraved Harvester, Demonic Taskmaster, Ecstatic Awakener // Awoken Demon | Vampire-tribal and sacrifice-cost bodies whose text keys off Vampire count or demands a sacrifice this deck cannot spare: 'Put a +1/+1 counter on each Vampire you control', 'Other Vampire creatures you control get +1/+1', and Demonic Taskmaster's mandatory 'At the beginning of your upkeep, sacrifice a creature other than this creature', which would exile a meld half. COUNT CORRECTED at Phase 9: this deck runs 3 Vampire CARDS (Blood Artist x2, Olivia's Dragoon x2 = 4 copies), not zero. The conclusion survives - 4 copies is far below the five-Vampire threshold Bloodline Keeper and Captivating Vampire read - but the stated count was false. |
| Niblis of the Urn, Twinblade Geist // Twinblade Invocation, Drogskol Shieldmate, Spectral Shepherd, Town Gossipmonger // Incited Rabble, Avacynian Priest, Strength of Arms, Lunarch Mantle, Cathar's Call, Cobbled Wings, Neglected Heirloom // Ashmouth Blade, Stitcher's Graft, Demonmail Hauberk, Rally the Peasants | Single-creature investments and narrow bodies: the auras and equipment put two cards into one creature, which is the losing side of a removal trade in a deck whose two legendary meld halves already draw every removal spell; Spectral Shepherd's ability costs {1}{U} and Rally the Peasants' flashback costs {2}{R}, both off-identity; Avacynian Priest taps only non-Humans and 6 of this deck's 13 creature cards are Humans. |
| Heartless Summoning, Helvault, Tamiyo's Journal, Soul Separator, Epitaph Golem, Boarded Window, Galvanic Juggernaut, Lupine Prototype, Chalice of Life // Chalice of Death, Cryptolith Fragment // Aurora of Emrakul, Triskaidekaphobia, Tree of Perdition, Deadly Allure, Geistcatcher's Rig, Hopeful Initiate | Anti-synergistic or off-plan: Heartless Summoning's 'Creatures you control get -1/-1' kills every 1/1 Spirit token this deck makes; Deadly Allure's flashback costs {G}, off-identity; Lupine Prototype 'can't attack or block unless a player has no cards in hand'; Triskaidekaphobia and Chalice of Life need a life-total threshold this deck does not pursue; Tree of Perdition and Geistcatcher's Rig cost 4-6 mana for a single conditional effect. (Bloodline Keeper was previously argued against here in error - it is on the INCLUDE side of this partition, not this one, and its verdict belongs there. For the record its flip needs five Vampires and this list runs 3 Vampire cards: Blood Artist x2 and Olivia's Dragoon x2.) |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.78   Ramp cards: 1   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.21 adj [MV 2.78 vs 2.5, 1 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  73.1%  prod  64.7%  gap  +8.4pp  [OK]
  W  demand  26.9%  prod  35.3%  gap  -8.4pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```

```