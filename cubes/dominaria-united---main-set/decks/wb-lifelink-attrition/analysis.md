---
deck_name: "wb-lifelink-attrition"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WB"
format: "40-card"
built_at: "2026-08-18T19:55:13Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x8   Swamp            basic B
x6   Plains           basic W
x2   Sunlit Marsh     WB dual, enters tapped
x1   Crystal Grotto   scry 1 on ETB; any colour for {1}
```

### CREATURES (13)

```
CMC  Card                           Qty   Color  Role                               Rar
  1  Cult Conscript                 x2    B      Renewable fodder                   U
  2  Elas il-Kor, Sadistic Pilgrim  x2    BW     Payoff: gain + drain               U
  2  Phyrexian Missionary           x2    W      Lifelink blocker                   U
  3  Gibbering Barricade            x2    B      Wall + sac-to-draw engine          C
  3  Mesa Cavalier                  x2    W      Evasive body + 2 life              C
  4  Archangel of Wrath             x1    W      Lifelink flier + removal           R
  4  Serra Paragon                  x1    W      Engine: graveyard replay           M
  4  Sheoldred, the Apocalypse      x1    B      Payoff: draw-step clock            M
```

### INSTANTS & SORCERIES (6)

```
CMC  Card                      Qty   Color  Role                               Rar
  1  Cut Down                  x2    B      Turn-1 removal                     U
  1  Urborg Repossession       x2    B      Recursion + 2 life                 C
  4  Extinguish the Light      x2    B      Removal + 3 life                   C
```

### OTHER SPELLS (4)

```
CMC  Card                      Qty   Color  Role                               Rar
  2  Stronghold Arena          x1    B      Engine: life -> cards              R
  3  Liliana of the Veil       x1    B      Edict + hand attrition             M
  4  Prayer of Binding         x2    W      Flash catch-all + 2 life           U
```

## SIDEBOARD (10)

```
Card                      Qty   Color  Role / When to board in                        Rar
Choking Miasma            x2    B      wide boards / go-wide tokens -- In against any U
Destroy Evil              x2    W      enchantments and toughness-4+ creatures -- In  C
Knight of Dusk's Shadow   x2    B      opposing lifegain / the lifegain mirror -- In  U
Pilfer                    x2    B      the card our removal cannot touch -- In agains C
Tribute to Urborg         x2    B      fast evasive aggro -- In against the cube's de C
```

## ANALYSIS

### DECK IDENTITY

WB lifelink attrition. Thirteen creatures, six of them lifelink or deathtouch, make combat unprofitable for the opponent while seven pieces of removal answer whatever refuses to trade. The life total that accumulates is not a buffer but a resource: Stronghold Arena spends it for a card on every combat connection, and Sheoldred, the Apocalypse taxes the opponent 2 life on their own draw step while paying us 2 for ours. Cult Conscript and Urborg Repossession make the attrition renewable -- bodies come back, and the three mana-value-4 singletons the plan leans on can be rebought. The deck does not race; it makes every turn worse for the opponent than the last and wins with evasive bodies once the card differential is unbridgeable.


### WHY THIS IS A LIFEGAIN DECK AND NOT JUST A GOOD-STUFF PILE

The distinction matters, because "gain life" is only an archetype when life is spent on something.
**18 of the 23 nonland cards produce at least one lifegain event** -- Archangel of Wrath, Elas il-Kor x2,
Extinguish the Light x2, Gibbering Barricade x2, Mesa Cavalier x2, Phyrexian Missionary x2,
Prayer of Binding x2, Serra Paragon, Sheoldred, Stronghold Arena itself, and Urborg Repossession x2.
Against that, the deck has exactly **one** card that converts life back into a resource:

```
Stronghold Arena -- "Whenever one or more creatures you control deal combat damage to a player,
you may reveal the top card of your library and put it into your hand. If you do, you lose life
equal to its mana value."
```

That 18-to-1 ratio is the honest shape of this archetype in Dominaria United. There is no second
sink, which is why the build cut Knight of Dawn's Light (an amplifier of a resource with one outlet)
during the grill repair, and why Sheoldred rather than the lifegain cluster is the deck's actual
engine of inevitability.

### THE SHEOLDRED / ARENA INTERACTION DOES NOT WORK THE WAY IT LOOKS LIKE IT DOES

This is the most important play-pattern note in the deck, and the grill caught the build getting it wrong.
Stronghold Arena says **"put it into your hand"**, not "draw". Sheoldred says **"Whenever you draw a card,
you gain 2 life."** Putting a card into your hand is not drawing it, so **Arena does not trigger Sheoldred.**
Neither does Serra Paragon's replay. Of the deck's card-advantage effects, only Gibbering Barricade
("You gain 1 life and draw a card") actually feeds her.

Practical consequence: with Sheoldred out and Arena online, every Arena activation is a straight
*loss* of life equal to the revealed card's mana value, uncompensated. The top of this curve is 4,
so the worst single payment is 4 life. Sequence accordingly -- Arena is a resource conversion, not
a free roll, and against an aggressive deck you should decline the trigger more often than you take it.

### MANA: THE 5-RARE CAP IS WHAT SHAPES THE LAND BASE

Caves of Koilos is the only untapped WB dual in this cube, and it is a rare. With Sheoldred,
Stronghold Arena, Serra Paragon, Archangel of Wrath and Liliana of the Veil consuming all five
rare/mythic slots, the mana base runs no rare land at all. The concrete cost:

| Metric | Value |
|---|---|
| Strict W sources (no extra mana) | 8 of 17 -- Plains x6 + Sunlit Marsh x2 |
| Strict B sources | 10 of 17 -- Swamp x8 + Sunlit Marsh x2 |
| Cards demanding {W}{W} | 2 -- Serra Paragon, Archangel of Wrath |
| Cards demanding {B}{B} | 4 -- Sheoldred, Liliana, Extinguish the Light x2 |
| P(turn-2 Elas il-Kor, given drawn, on the play) | ~0.74 |

Crystal Grotto is counted by the audit as both a W and a B source, but its coloured mana costs an
extra {1} -- it cannot cast a turn-2 Elas il-Kor by itself. If you relax the rare cap, Caves of Koilos
is the single best card to add to this list.

### PLAY PATTERN

The deck does not race and should not try to. Six of 13 creatures carry lifelink or deathtouch and
two more are 2/4 defender walls, so the correct line against almost everything is to trade profitably,
let the life total climb, and let Sheoldred convert the opponent's own draw step into a two-per-turn
clock they cannot switch off. Cult Conscript and Urborg Repossession are what make that grind
one-sided: bodies come back, and the three mana-value-4 singletons the plan leans on can be rebought
for one mana. The four fliers -- Mesa Cavalier x2, Archangel of Wrath, Serra Paragon -- are the
reliable Stronghold Arena connections; keep at least one alive rather than chump-blocking with it.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (Midrange):  [PASS]
  MV distribution (23 nonland):  1:6  2:5  3:5  4:7
Assembly (thesis turn 7, 14 cards seen):  [PASS]
  PASS  payoff: 11 copies → p=0.99 (need ≥ 0.75)
  PASS  engine: 7 copies (effective 5.4: Serra Paragon@0.8, Gibbering Barricade@0.7, Gibbering Barricade@0.7, Urborg Repossession@0.6, Urborg Repossession@0.6) → p=0.87 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 85% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 73%  T2 95%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: No maindeck sweeper is castable in WB: the cube's six sweepers are Choking Miasma (BG), Karn's Sylex (C), Smash to Dust (R), Temporal Firestorm (R), The Elder Dragon War (R) and The Phasing of Zhalfir (U), and the only WB-castable one, Choking Miasma ({1}{B}{B}, all creatures -2/-2), would also kill 6 of this deck's own 13 creatures (Elas il-Kor x2, Mesa Cavalier x2, Cult Conscript x2). Maindeck the class is blocked, not swept -- Gibbering Barricade x2 (2/4 defender) and three deathtouch bodies (Sheoldred, Elas il-Kor x2) trade up in combat -- and Choking Miasma x2 comes in from the sideboard where the board state justifies the symmetry.
  OK        single_large_threat: Extinguish the Light, Prayer of Binding, Liliana of the Veil, Sheoldred, the Apocalypse, Elas il-Kor, Sadistic Pilgrim
  OK        noncreature_permanents: Prayer of Binding, Liliana of the Veil
  CONCEDED  stack: The cube's counterspells are entirely blue; W and B contain none, so no WB deck can interact on the stack. This deck answers after resolution instead -- Prayer of Binding has flash and exiles any nonland permanent, and Extinguish the Light is an instant.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards. Verified against oracle text, not just the census: every 'exile ... graveyard' clause in the pool is a self-exile activation cost (Eerie Soultender, Valiant Veteran) or a graveyard user (Serra Paragon, Writhing Necromass); no card in any colour touches an opponent's graveyard. No deck in this pool can cover this class.
```

_No WARN-tier flags were raised: curve, assembly, goldfish and coverage all returned PASS, so there are no structural responses to record._

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Gibbering Barricade x2 ('{2}{B}, Sacrifice a creature: You gain 1 life and draw a card') is a repeatable mana sink that converts surplus lands into cards, and Cult Conscript x2 ('{1}{B}: Return this card from your graveyard to the battlefield') is a second recurring sink that turns spare mana back into a body every turn a non-Skeleton died. Stronghold Arena adds a card per combat connection regardless of how many lands are in play. NOTE: the grill repairs removed Knight of Dawn's Light's {1}{W} pump, so the deck now has two black-mana sinks rather than one of each colour. |
| screw | mitigation | Eleven of 23 nonland cards cost 2 or less after the repairs (Cut Down x2, Cult Conscript x2, Urborg Repossession x2, Stronghold Arena, Elas il-Kor x2, Phyrexian Missionary x2), against 9 before -- a two-land hand acts on turns 1 and 2 rather than sitting. Crystal Grotto x2 scries 1 on entry to dig toward the third land. The goldfish sim on the repaired list reports 85% keepable hands, 88% with 3 lands by turn 3, and a turn-1 play rate of 74% (up from 34%). |
| decapitation | mitigation | The kill is not routed through one card, and after the repairs the key cards can be rebought. If Sheoldred is answered on sight, Urborg Repossession x2 returns her for {B} (Serra Paragon's clause reads 'mana value 3 or less' and cannot reach her, which is exactly the hole the repair closed). Independently, Stronghold Arena still converts combat into cards, Serra Paragon still replays MV<=3 permanents with a 2-life rider, and Elas il-Kor x2 still drains 1 per creature death. The assembly check on the repaired list reports the engine role at 7 copies, 5.4 reliability-weighted (Serra Paragon 0.8, Gibbering Barricade x2 0.7, Urborg Repossession x2 0.6), p=0.87 by turn 7 -- that figure is computed over Stronghold Arena, Sheoldred, Serra Paragon, Gibbering Barricade x2 and Urborg Repossession x2, which is the set it names. |
| gas-out | mitigation | Six of 23 nonland cards refuel: Serra Paragon (a free graveyard permanent or land every turn), Stronghold Arena (a card per combat connection), Gibbering Barricade x2 (a card per spare creature), Urborg Repossession x2 (converts a dead creature into a live card). Cult Conscript x2 is not a draw but is a renewable board resource that costs no card to redeploy. Sheoldred pays 2 life only for actual draws -- the Barricade pair -- not for Arena or Serra Paragon, which put cards into hand or onto the battlefield without drawing. |
| raced | mitigation | Against the cube's deepest threat class -- 51 evasion cards, 21% of the pool -- this deck blocks rather than races. Six of its 13 creatures carry lifelink or deathtouch: Phyrexian Missionary x2 (2/3 lifelink, blanks a 2-power attacker while gaining), Archangel of Wrath (3/4 flying lifelink), Sheoldred (4/5 deathtouch) and Elas il-Kor x2 (2/2 deathtouch). Gibbering Barricade x2 adds two 2/4 defender walls, Cut Down x2 is a turn-1 answer, and Tribute to Urborg x2 comes in from the sideboard as {1}{B} instant-speed -2/-2 against the 2-power fliers this class is built on. |
| disruption-fizzle | mitigation | There is no critical turn to interact with -- the deck has no combo turn. Its advantage accrues one trigger at a time (each Arena connection, each opponent draw step under Sheoldred, each Elas il-Kor death trigger), so a single removal spell or discard delays an increment rather than fizzling a line. Prayer of Binding has flash, which lets the deck hold interaction up on the opponent's turn instead of tapping out into it, and Cult Conscript x2 and Urborg Repossession x2 mean a creature answered on the critical turn comes back on a later one. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Anointed Peacekeeper | Cut on the rare budget. A 3/3 vigilance that taxes their best card by {2} is strong, but every rare slot is spent and it does nothing for the lifegain plan. |
| Argivian Phalanx | Affinity for creatures; with an average of ~2 creatures on board it costs 4-5 mana for a vanilla 4/4. |
| Aron, Benalia's Ruin | {W}{W}{B} sacrifice engine -- belongs to the Aristocrats build, and its sac cost fights this list's small creature count. |
| Automatic Librarian | Cut. A 3/2 that scries 2 is colourless filler; the deck's 3-drop slot went to Gibbering Barricade x2 (a 2/4 wall that draws cards repeatedly) and Mesa Cavalier x2 (evasion for Arena). |
| Battle-Rage Blessing | Cut. Deathtouch plus indestructible turns any body into a removal spell in combat, but 6 of the 13 creatures already have deathtouch or lifelink, so the effect is redundant on the bodies most likely to be blocking. |
| Benalish Sleeper | Kicked edict makes each player sacrifice -- we are the deck with creatures we want to keep. |
| Blight Pile | Needs a critical mass of defenders to drain for meaningful amounts; this list runs at most 1 defender. |
| Bone Splinters | Cut. '{B}, sacrifice a creature: Destroy target creature' is the cheapest unconditional removal in the pool and the deck feeds the additional cost 8 of 13. It lost to Cut Down x2 on the same slot because Cut Down costs no card and no board; against the pool's 150 numeric-P/T creatures Cut Down answers 87 (58%), so Bone Splinters' edge is only the other 42%, bought with a two-for-one. |
| Braids, Arisen Nightmare | Strong value engine but wants expendable permanents to sacrifice each turn; this list's permanents are all cards it wants to keep. |
| Caves of Koilos | Cut on the rare budget, and this is the most consequential cut in the deck. It is the ONLY untapped WB dual in the cube; without it the turn-2 Elas il-Kor ({W}{B}) is roughly a 71% play on the play. The only rare it could displace is Archangel of Wrath, and trading a 3/4 flying lifelink that also deals 2 damage for a single land is a worse deck. If you relax the 5-rare cap, this is the first card to add. |
| Citizen's Arrest | Cut during the build. Replaced one-for-one by Prayer of Binding x2, which costs one white pip instead of two, has flash, exiles ANY nonland permanent rather than only a creature or planeswalker, and gains 2 life. |
| Danitha, Benalia's Hope | Cut on the rare budget. 4/4 first strike vigilance lifelink for {4}{W} is a genuine threat, but the 5 rare/mythic slots went to Sheoldred, Stronghold Arena, Serra Paragon, Archangel of Wrath and Liliana of the Veil. Danitha is the 6th-best rare in these colours and is the swap to make if you want a bigger creature over Liliana. |
| Defiler of Faith | Costs 2 life per white permanent spell -- runs against a plan whose engine (Stronghold Arena) already spends life. |
| Defiler of Flesh | Same life-as-a-cost tension as Defiler of Faith, and it wants a wide board to pump. |
| Drag to the Bottom | Domain -X/-X sweeper; with only Plains and Swamp basic types (2 of 5) it is -3/-3 symmetric, killing our own Elas il-Kor, Knight of Dawn's Light and Mesa Cavalier. |
| Evolved Sleeper | Excellent mana sink, but its scaling costs {1}{B}{B} increments and it competes for a rare slot against Sheoldred and Stronghold Arena. |
| Inscribed Tablet | Cut. Land-smoothing that costs a card; with 17 lands, a 2.57 avg MV and 85% keepable hands, the deck does not need it. |
| Karn's Sylex | Its static line 'Players can't pay life to cast spells or activate abilities' shuts off our own Caves of Koilos and Thran Portal. |
| Knight of Dawn's Light | Cut during the Phase 9 repair, and the most debatable cut in the deck. 'If you would gain life, you gain that much life plus 1 instead' is well supported at 18 of 23 nonland cards producing a lifegain event -- but only ONE card in the 40 (Stronghold Arena) converts life into cards, so the amplifier raises a resource with a single sink. It is a fine 2-mana 2/2 first striker with a {1}{W} pump; it is not a payoff. Put it back over Urborg Repossession x2 if you add a second life-to-cards outlet. |
| Leyline Binding | Cut on the rare budget and on a domain count. 'Domain -- this spell costs {1} less for each basic land type among lands you control': this mana base has only Plains and Swamp (Sunlit Marsh is 'Land - Plains Swamp' and adds no new type; Crystal Grotto has no land type), so domain = 2 of 5 and it costs {3}{W} = 4 mana. At 4 mana it is Prayer of Binding without the 2 life, and it is a rare against a fully spent budget. |
| Phyrexian Rager | Cut during the Phase 9 repair. A self-replacing 2/2 is real value, but Gibbering Barricade x2 had 8 expendable bodies of which none returned, and Cult Conscript's self-recursion converts each Barricade activation from a permanent board -1 into a renewable one. |
| Plaza of Heroes | Cut. Rare land against a spent budget. It would also be thin: only 4 of the 23 nonland cards are legendary (Sheoldred, Liliana of the Veil, Elas il-Kor x2). |
| Ratadrabik of Urborg | Token-copies dying legendary creatures; this list runs 4 legendary creatures total and cannot spend a rare slot on it. |
| Rona, Sheoldred's Faithful | U splash candidate; its drain triggers on instants and sorceries and this list runs few, plus {1}{U}{B}{B} is unpayable. |
| Runic Shot | Cut. '{W}: Destroy target tapped creature' has no size ceiling, which covers the 42% of the cube's creatures Cut Down cannot reach. Sorcery speed is the cost: it only answers creatures that attacked or tapped, so it is dead against a defensive board and against anything with vigilance. |
| Samite Herbalist | Cut. 'Whenever this creature becomes tapped, you gain 1 life and scry 1' repeats on every attack, and this deck runs 0 other card-selection effects -- the strongest of the dropped candidates. It lost the slot to Mesa Cavalier x2 because Mesa Cavalier flies and Stronghold Arena's trigger needs creatures to connect: 4 of 13 creatures have flying and losing 2 of them would halve the deck's reliable Arena connections. A 2/1 ground body that scries is worse here than a 2/1 flier that gains 2. |
| Sengir Connoisseur | Cut during the build. Replaced one-for-one by Archangel of Wrath; its '+1/+1 counter whenever creatures die' needs a death engine this list does not run. |
| Shadow-Rite Priest | Cleric lord + tutor, but only 3 other Clerics would be in the list and the tutor costs {3}{B}{B} plus a Cleric. |
| Shanna, Purifying Blade | Not castable. {G}{W}{U} needs green AND blue. The archetype brief named it a keystone, but its colour identity rules it out of any WB deck -- this is the single most important correction to that brief. |
| Sheoldred's Restoration | Cut. Kicked it is {3}{B}+{2}{W} = 6 mana to reanimate Sheoldred and gain 4 life -- both pips in-colour and the largest single lifegain event available. Unkicked at 4 mana it LOSES life equal to the creature's mana value, which fights the plan. Urborg Repossession does the same job for 1 mana and always gains 2, so it took the recursion slots; Restoration is the first card to bring back if you want a bigger top end. |
| Silverback Elder | Qualified as a G splash candidate, but {2}{G}{G}{G} is three green pips -- not a splash by any real definition. |
| Splatter Goblin | -1/-1 on death is too small a removal effect for a deck with 8+ real removal spells. |
| Take Up the Shield | Cut. A combat two-for-one that also fires a lifegain event, but this deck already runs 7 removal spells and a trick is the wrong card in a list whose plan is to block and grind rather than to win a combat step. |
| Tattered Apparition | Cut. A 2/2 flier with a {1}{B} pump is a fine Arena connection and mana sink, but at MV4 it competes with Sheoldred, Serra Paragon, Archangel of Wrath and Extinguish the Light x2 -- the deck already has 7 cards at MV4 and needed cheaper cards, not more. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' is symmetric: 11 of this deck's nonland cards have MV<=2, so it exiles more of ours than theirs. |
| The Cruelty of Gix | Five mana over three turns and chapter II costs 3 life; too slow for a competitive 40-card list and it works against the life plan. |
| Thran Portal | Cut. Rare land against a spent budget, it enters tapped once you control three other lands, and its mana costs 1 life per activation on top of Caves-style pain. |
| Toxic Abomination | Cut. A 3/2 for {1}{B} is an efficient rate, but 'When this creature enters, you lose 2 life' is the one card in the pool that runs directly against a plan whose engine spends life. |
| Tyrannical Pitlord | 6/6 flier for 6 that sacrifices a chosen creature of ours when it leaves -- a removal spell on it two-for-ones us. |
| Uurg, Spawn of Turg | Qualified as a G splash candidate, but {B}{B}{G} into a pair with 1 tapped dual is unpayable on curve. |
| Valiant Veteran | Soldier lord; this list has 0 other Soldiers. |
| Vohar, Vodalian Desecrator | U splash candidate; its loot drains only on discarding an instant or sorcery. |
| Weatherlight Compleated | Needs 7 creature deaths to start drawing; this list is not a sacrifice deck. |
| Wingmantle Chaplain | Bird count scales with creatures with defender you control; this list is not a defenders deck. |
| Writhing Necromass | Cut. Its discount is 'costs {1} less for each creature card in your graveyard'; at the point in the game where it costs 4 or less this deck would rather have rebought a real card with Urborg Repossession. |
| Zur, Eternal Schemer | Qualified as a U splash candidate; {W}{U}{B} needs a third color on turn 3 and this list runs 0 non-Aura enchantment creatures to animate. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.57   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.09 adj [MV 2.57 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  B  demand  61.3%  prod  64.7%  gap  -3.4pp  [OK]
  W  demand  38.7%  prod  52.9%  gap -14.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool_base: cube_mainboard of dominaria-united---main-set only; every one of the 23 distinct names verified by exact string match against the working pool cache.
[PASS] copy_limits: commons/uncommons <= 2, rares/mythics <= 1 -- verified programmatically against cube_search.get_max_copies with a per_rarity policy AND cross-checked against each pool card's own max_copies field. All 23 distinct names pass. (The first version of the validator passed card_pool_rules to get_max_copies, which silently fell through to default=4; it was caught by running the validator against a known-bad fixture containing 3 copies of a mythic, and fixed.)
[PASS] rare_mythic_cap: 5 of 5 used, all in the mainboard: Sheoldred, the Apocalypse (mythic), Serra Paragon (mythic), Liliana of the Veil (mythic), Stronghold Arena (rare), Archangel of Wrath (rare). The 10-card sideboard is entirely commons and uncommons, so the combined total is exactly 5.
[PASS] basics: Plains x6 and Swamp x8 are format-supplied and exempt from copy limits.
[PASS] colour_usability: All 23 nonland cards return a non-None effective_cost.best_mode(card, ['W','B'], []). Four carry off-colour printed identities and are in for in-colour modes only: Stronghold Arena (identity BGW; base cast {1}{B}, and the {W} kicker is ALSO in-colour so {1}{W}{B} for 3 life is available -- only the {G} half is unreachable); Archangel of Wrath (identity BRW; base {2}{W}{W}, and the {B} kicker is in-colour so {2}{W}{W}{B} for 2 damage is available -- only the {R} kicker and the double-kick line are unreachable); Urborg Repossession (identity BG; base {B}, {1}{G} kicker declined). Sideboard adds Choking Miasma (identity BG; {1}{B}{B}, {G} kicker declined) and Tribute to Urborg (identity BU; {1}{B}, {1}{U} kicker declined).
```