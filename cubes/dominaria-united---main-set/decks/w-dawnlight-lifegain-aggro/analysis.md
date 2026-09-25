---
deck_name: "w-dawnlight-lifegain-aggro"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "W"
format: "40-card"
built_at: "2026-08-18T20:44:05Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (23 spells + 17 lands = 40)

### LANDS (17)

```
x17  Plains   basic W -- the entire mana base
```

### CREATURES (20)

```
CMC  Card                      Qty   Color  Role                               Rar
  2  Guardian of New Benalia   x1    W      Scry 2 + indestructible            R
  2  Knight of Dawn's Light    x2    W      PAYOFF: +1 to every gain           U
  2  Phyrexian Missionary      x2    W      2/3 lifelink blocker               U
  2  Resolute Reinforcements   x2    W      Two bodies, flash                  U
  2  Samite Herbalist          x2    W      Gain 1 + scry on every tap         C
  2  Valiant Veteran           x1    W      Soldier lord (9 bodies)            R
  3  Argivian Cavalier         x2    W      Two bodies, enlist                 C
  3  Charismatic Vanguard      x2    W      3/2 + team pump sink               C
  3  Mesa Cavalier             x2    W      Flier + gain 2                     C
  4  Archangel of Wrath        x1    W      3/4 flying lifelink                R
  4  Coalition Skyknight       x1    W      Flier; enlist taps Herbalist       U
  4  Serra Paragon             x1    W      Replays 16/23 from the yard        M
  5  Danitha, Benalia's Hope   x1    W      4/4 FS vigilance lifelink          R
```

### INSTANTS & SORCERIES (3)

```
CMC  Card                      Qty   Color  Role                               Rar
  2  Destroy Evil              x1    W      Kills a toughness-4+ wall          C
  2  Take Up the Shield        x2    W      Trick: lifelink + indestructible   C
```

## SIDEBOARD (10)

```
Card                      Qty   Color  Role / When to board in                        Rar
Captain's Call            x2    W      rebuilding after a sweeper -- In against decks C
Citizen's Arrest          x2    W      a single large creature or a planeswalker -- I C
Destroy Evil              x1    W      a toughness-4+ wall, or an enchantment -- In a C
Prayer of Binding         x2    W      any noncreature permanent -- the cube's 15 art U
Runic Shot                x2    W      any creature, with no size ceiling -- In again U
Stall for Time            x1    W      a stalled board, and an empty hand -- In when  C
```

## ANALYSIS

### DECK IDENTITY

Mono-white lifegain aggro. Twenty creatures, five of them fliers and four with lifelink or first strike, present a clock from turn 2 and keep attacking because the life total climbs faster than the opponent can race it. Knight of Dawn's Light upgrades every lifegain event by 1, Samite Herbalist fires on every attack, Danitha gains 4 per swing, and Take Up the Shield converts a single attack into a blowout and a large gain at once. Seventeen Plains means no tapped land, no painland, no colour screw. Stated plainly: white has no card that converts life into another resource, so the life total here buys extra attack steps, not cards -- this is aggro with a lifegain sub-theme and one amplifier, not a lifegain engine deck.


### THE HONEST FRAMING: A LIFEGAIN SUB-THEME, NOT A LIFEGAIN ENGINE

Both grill agents independently searched all 271 pool cards for oracle text that *cares* about
gaining life. There are exactly three in the whole cube:

```
Knight of Dawn's Light   {1}{W}   -- in this deck
Shanna, Purifying Blade  {G}{W}{U} -- needs green and blue
Sheoldred's Restoration  {3}{B}   -- needs black
```

So mono-white has **one** lifegain payoff, and it is an amplifier: *"If you would gain life, you gain
that much life plus 1 instead."* It does not convert life into anything. **Zero of the 23 nonland
cards turn life into another resource** -- no draw off life, no damage off life, no threshold.
Stronghold Arena, the cube's only life-to-cards converter, requires black.

What the life total actually buys here is precise and worth stating: **extra attack steps.** It lets
all 20 creatures keep attacking instead of holding blockers back, it swings a mirror race by double
the power of each lifelink body, and Knight of Dawn's Light's +1 compounds across 11 sources into a
margin the opponent has to out-damage. Against an opponent who is not attacking us, the lifegain
does close to nothing and this is a 20-creature white weenie deck living on its curve.

### THERE IS NO WHITE ONE-DROP IN THIS CUBE

The structural check flags the curve: 0% of nonland cards cost 1, against a 15% band minimum for
aggro. That flag is accurate and unfixable. Here is every mana-value-1 card castable in mono-white,
enumerated from oracle text and independently re-verified by the grill:

```
Clockwork Drawbridge  {W}  Artifact Creature - Wall  0/3  Defender
Walking Bulwark       {1}  Artifact Creature - Golem 0/3  Defender
Runic Shot            {W}  Sorcery
Inscribed Tablet      {1}  Artifact
Vanquisher's Axe      {1}  Artifact - Equipment
```

The only two one-mana creatures white can cast are 0/3 walls. The band cannot be met by an aggro
deck without maindecking one of them. The compensation is real: **13 of 23 nonland cards cost
exactly 2** (56.5%, against the band's 25% minimum at that slot), and the goldfish sim reports a
play by turn 2 in 95% of hands. The cost is equally real: turn 1 is blank in 100% of games.

### THE MANA BASE IS THE BEST IN THE ARCHETYPE

Seventeen Plains. No land enters tapped, no land costs life, no land makes the wrong colour, and no
rare slot is spent on a dual. Both {W}{W} cards cast off any four lands. Compare the two WB builds,
which each spend a rare on Caves of Koilos and still run tapped duals, and the GWU build, which
cannot fix at all. This is the one dimension where mono-white wins outright, and it is why all five
rare slots could go to spells.

| | This deck | wb-lifelink-attrition | wb-aristocrats-drain |
|---|---|---|---|
| Colour-screw failure mode | none | real | real |
| Lands entering tapped | 0 | 2 | 2 |
| Lands that cost life | 0 | 0 | 1 |
| Rare slots spent on mana | 0 | 0 | 1 |

### SMALL INTERACTIONS WORTH KNOWING

**Enlist taps Samite Herbalist without attacking.** Herbalist reads *"Whenever this creature becomes
tapped"* -- not "whenever it attacks." Argivian Cavalier x2, Coalition Skyknight and Guardian of New
Benalia all have enlist, so 4 of 23 cards can tap the Herbalist on a turn you would rather hold it
back, gaining 1 (2 under Knight) and scrying. This is why Coalition Skyknight replaced Griffin
Protector during the grill repair.

**Take Up the Shield on an attacker is the deck's biggest single turn.** A +1/+1 counter plus
lifelink plus indestructible means the blocker dies, your creature lives, and you gain its boosted
power -- upgraded by 1 per Knight of Dawn's Light. On Danitha that is 5 power gaining 6.

**Guardian of New Benalia is a Soldier.** Easy to miss, and the build initially did: it is a Human
Soldier, so Valiant Veteran buffs it. The full Soldier census is 9 bodies from 5 cards.

### PLAY PATTERN

Curve out and attack. Do not hold Samite Herbalist back -- tapping it is the point. Keep one Take Up
the Shield for the turn the opponent finally blocks profitably. The deck's real weakness is the long
game: refuel is 1 of 23 cards maindeck, so if the turn-5 clock does not close, Stall for Time and
Captain's Call come in from the sideboard and the deck plays a slower, wider game instead.


### STRUCTURAL CHECKS

```
── Structural Checks: WARN ──────────────────────────────────
Curve (Aggro):  [WARN]
  MV distribution (23 nonland):  2:13  3:6  4:3  5:1
  WARN  MV 1 share: share 0% below band minimum 15%
Assembly (thesis turn 5, 12 cards seen):  [PASS]
  PASS  payoff: 14 copies → p=0.99 (need ≥ 0.75)
  PASS  lifegain_source: 11 copies (effective 10: Take Up the Shield@0.7, Take Up the Shield@0.7, Serra Paragon@0.6) → p=0.97 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 87% (need ≥ 80%)   3 lands by turn 3: 88%
  play by turn: T1 0%  T2 95%  T3 98%
Coverage:  [PASS]
  CONCEDED  wide_boards: Mono-white's only sweeper in this pool is Temporary Lockdown ('exile each nonland permanent with mana value 2 or less'), which would exile 10 of this deck's own 23 nonland cards -- the entire two-drop tier the plan is built on. Karn's Sylex is symmetric in the same way. This deck answers a wide board by being the wider one and winning the damage race: Charismatic Vanguard ('{4}{W}: Creatures you control get +1/+1 until end of turn') and Valiant Veteran's graveyard activation break a stall by pumping our team rather than clearing theirs, and Captain's Call x2 rebuilds from the sideboard after a wipe. Mitigating this class maindeck would mean playing a sweeper that kills our own board.
  OK        single_large_threat: Destroy Evil
  CONCEDED  noncreature_permanents: Destroy Evil's second mode ('Destroy target enchantment') covers enchantments only -- 0 of the cube's 15 artifacts and 0 of its 4 planeswalkers. Mono-white's answers to an artifact are Prayer of Binding and Leyline Binding, and Leyline Binding costs {4}{W} here because a mono-Plains base has domain 1 of 5. Prayer of Binding x2 covers the whole class from the sideboard at flash speed.
  CONCEDED  stack: The cube's counterspells are entirely blue; white contains none, so no mono-white deck can interact on the stack. This deck's substitutes are Resolute Reinforcements' flash and Take Up the Shield at instant speed, which let it act on the opponent's turn without interacting on the stack at all.
  CONCEDED  graveyard: The cube contains zero graveyard-hate cards in any colour, verified against oracle text: every 'exile ... graveyard' clause in the pool is a self-exile activation cost or a graveyard user. No deck in this pool can cover this class.
```

- curve WARN -- 'MV 1 share: share 0% below band minimum 15%': ACCEPTED, and it is a property of the pool rather than of the build. Every mana-value-1 card castable in mono-white was enumerated from oracle text and independently re-enumerated by the grill Challenger, which matched card-for-card: Clockwork Drawbridge ({W} 0/3 Defender), Walking Bulwark ({1} 0/3 Defender), Runic Shot ({W} sorcery), Inscribed Tablet ({1} artifact) and Vanquisher's Axe ({1} equipment). There is no white one-mana creature with any power at all in this cube -- the only two are 0/3 defensive walls. The band cannot be met by an aggro deck without maindecking one of them. The build compensates by loading the two-slot: 13 of 23 nonland cards cost exactly 2, which is 56.5% against the band's 25% minimum for mana value 2, and the goldfish sim reports a play by turn 2 in 95% of games. The honest cost is that turn 1 is blank in 100% of games.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Two repeatable mana sinks scale into the late game: Knight of Dawn's Light ('{1}{W}: This creature gets +1/+1 until end of turn') and Charismatic Vanguard x2 ('{4}{W}: Creatures you control get +1/+1 until end of turn'), the latter pumping the whole board so surplus lands convert into lethal rather than into one bigger creature. Valiant Veteran's '{3}{W}{W}, Exile this card from your graveyard: Put a +1/+1 counter on each Soldier you control' is a third outlet that works after it has already died. NOTE, corrected after the grill: Serra Paragon's land-replay clause is NOT counted here. It reads 'play a land from your graveyard OR cast a permanent spell with mana value 3 or less' -- one or the other -- and this deck has zero mill, zero fetch and one discard outlet, so lands rarely reach the graveyard and Paragon will always take the permanent mode. |
| screw | mitigation | Thirteen of 23 nonland cards cost exactly 2 and only one costs more than 4, so a two-land hand casts a spell on turn 2 and a three-land hand casts one every turn thereafter. All 17 lands produce white, so colour screw is structurally impossible -- only land count matters. The goldfish sim reports 87% keepable hands and 88% with 3 lands by turn 3, and Samite Herbalist x2 plus Guardian of New Benalia add scry to dig toward the third land. |
| decapitation | mitigation | Knight of Dawn's Light is the named payoff but the plan does not route through it: it is a replacement effect, so removing it costs 1 life per lifegain event rather than the plan. The 11 lifegain sources keep working and the 20 creatures keep attacking. Serra Paragon can recast a killed Knight from the graveyard -- it is mana value 2, inside the 'mana value 3 or less' clause, as are 16 of the 23 nonland cards. There is no single card whose removal stops the clock. |
| gas-out | accepted | Refuel is 1 of 23 nonland cards maindeck (Serra Paragon), plus scry from Samite Herbalist x2 and Guardian of New Benalia -- the thinnest of the four builds. Mitigating it maindeck means adding card-advantage spells at mana value 3 or 4, which is the curve the locked lowest-curve lens exists to avoid. The grill correctly noted that Stall for Time ({2}{W}: tap two creatures, draw a card) is a cheaper option than the build first credited, and it is now IN the sideboard for exactly this mode -- but maindecking it would cost a body from a plan that wins on board. The deck's answer to an empty hand is that at 20 creatures with a turn-5 goldfish it should have won; when it has not, it loses the long game, and that is the accepted price of the explosive build. |
| raced | mitigation | This is the build in the archetype that is actually good at being raced, which is the point of the pipeline. Five of 20 creatures fly (Mesa Cavalier x2, Coalition Skyknight, Archangel of Wrath, Serra Paragon) and four carry lifelink or first strike (Phyrexian Missionary x2, Archangel of Wrath, Danitha) with Knight of Dawn's Light x2 adding first strike of their own. Eleven of 23 nonland cards gain life, each event upgraded by 1 per Knight. Take Up the Shield at instant speed turns a race-losing block into a two-for-one plus a large gain ('a +1/+1 counter, lifelink and indestructible until end of turn'). Against the cube's 51 evasion cards, five fliers mean the air is contested rather than conceded. |
| disruption-fizzle | mitigation | There is no critical turn to interact with -- the clock accrues from turn 2 and every creature is independently a threat, so a removal spell delays one attack step. Resolute Reinforcements has flash and Take Up the Shield is an instant, so the deck can hold mana on the opponent's turn and deploy or blow out in response rather than tapping out into disruption. Serra Paragon replays a mana-value-3-or-less permanent from the graveyard every turn, undoing one piece of spot removal per turn, and Guardian of New Benalia's 'Discard a card: This creature gains indestructible until end of turn' makes it removal-proof on the turn it matters. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Anointed Peacekeeper | Cut during the Phase 9 repair. A 3/3 vigilance name-tax is mono-white's only interaction with a sweeper or combo piece, but it was spending one of only five rare slots on a card that never appears in the maindeck. The slot went to Danitha, Benalia's Hope -- the third and last mono-white lifegain payoff in the pool. Captain's Call x2 replaced its anti-sweeper role by rebuilding after a wipe instead of preventing one. |
| Argivian Phalanx | Cut. Affinity for creatures makes it cheap only when the board is already wide, which is the situation where a vanilla 4/4 changes least. |
| Artillery Blast | Domain -- with only Plains it deals 1+1 = 2 damage, and only to a TAPPED creature. |
| Automatic Librarian | A colourless 3/2 that scries 2 -- outclassed by white three-drops that make two bodies. |
| Benalish Faithbonder | Cut. A 1/3 vigilance body is defensive stats on an aggro curve; the two-slot it would occupy is already 13 cards deep with bodies that attack. Its enlist would tap Samite Herbalist, which is real, but Coalition Skyknight and Argivian Cavalier already provide 4 such enablers. |
| Benalish Sleeper | Its edict requires the {B} kicker, unavailable in mono-white -- a vanilla 3/1. |
| Cleaving Skyrider | Its damage clause requires the {2}{R} kicker, unavailable in mono-white -- a vanilla 2/2 flash flier. |
| Clockwork Drawbridge | A 0/3 defender in a deck that needs to attack. |
| Crystal Grotto | Its only relevant line is fixing, which a mono-white deck does not need; a Plains is strictly better here. |
| Defiler of Faith | Cut on the curve and the rare budget. 'Whenever you cast a white permanent spell, create a 1/1 white Soldier creature token' would trigger on 16 of the 23 nonland cards, but at {3}{W}{W} it is a 5-mana play in a turn-5 deck, and its cost reduction charges 2 life per spell in the archetype built around the life total. |
| Elas il-Kor, Sadistic Pilgrim | Requires {B}. The Phase 3 splash filter found 5 qualifying black candidates for the Lifegain cluster, above the 3-card ceiling, so black cannot be a bounded splash -- it would be a second core colour. |
| Gibbering Barricade | Requires {B}. |
| Golden Argosy | 'Whenever Golden Argosy attacks, exile each creature that crewed it this turn' removes our own attackers from combat. |
| Griffin Protector | Cut during the Phase 9 repair. Both grill agents independently named it the only mainboard card with no connection to the thesis -- it gains 0 life. Coalition Skyknight took the slot at the same mana value and the same evasion role, and its enlist clause additionally taps Samite Herbalist for a lifegain event. |
| Hero's Heirloom | Cut. Its trample-and-haste clause requires the equipped creature to be legendary, and this list runs exactly one legendary creature (Danitha). |
| Heroic Charge | Cut from the sideboard during the Phase 9 repair. Four mana for a one-shot +2/+1 whose trample clause requires an unavailable {1}{R} kicker, duplicating what Charismatic Vanguard does repeatably for {4}{W}. The Proposer named it the weakest card in the 50. |
| Inscribed Tablet | Land smoothing that costs a card; unnecessary at this curve. |
| Jodah's Codex | Domain-scaled draw; with one basic land type it costs {4} to activate. |
| Join Forces | Untaps two creatures and pumps them; a combat trick that does not gain life or add a body. |
| Juniper Order Rootweaver | Its +1/+1 counter requires the {G} kicker, which is unavailable in mono-white -- it is a vanilla 2/2 here. |
| Karn's Sylex | Its {X} sweeper mode destroys each nonland permanent with mana value X or less -- symmetric against the widest board in the matchup, which is ours. |
| Karn, Living Legacy | A 4-mana planeswalker whose +1 makes a Powerstone that cannot cast nonartifact spells; it does nothing for a white creature deck. |
| Leyline Binding | Domain-reduced -- with a mono-Plains mana base domain is 1 of 5, so it costs {4}{W} = 5 mana. |
| Love Song of Night and Day | Cut, and the grill was right that the first reason given was incomplete. Chapter I reads 'You and target opponent each draw two cards', and read ahead means that chapter can be SKIPPED by starting on II -- so the symmetric draw is optional, not forced. The real reason it is out: started on chapter II it is a 3-mana 1/1 flying Bird, and started on I it hands two cards to the player we are racing. |
| Meteorite | Five mana for 2 damage and a mana rock in a deck with a perfect mana base. |
| Plaza of Heroes | A rare land whose legendary-only mana is near-dead here, and a mono-colour deck gains nothing from fixing. |
| Relic of Legends | Mana fixing has no value in a mono-colour deck. |
| Salvaged Manaworker | Mana fixing has no value in a mono-colour deck. |
| Serra Redeemer | Cut on the curve and the rare budget, and the strongest excluded card in the deck. 'Whenever another creature you control with power 2 or less enters, put two +1/+1 counters on that creature' -- 16 of the 20 creature copies and all 4 Soldier tokens qualify, so it upgrades essentially the whole board. At {3}{W}{W} it arrives on turn 5, which is the goldfish turn, and all five rare slots are spent. The first card to try if you want a slower, higher-ceiling version. |
| Shalai's Acolyte | Its two +1/+1 counters require the {1}{G} kicker, unavailable in mono-white -- a 3/4 flier for 5. |
| Shanna, Purifying Blade | Costs {G}{W}{U} -- needs green and blue; not castable in a mono-white deck. |
| Sheoldred's Restoration | Requires {B}. |
| Sheoldred, the Apocalypse | Requires {B}{B}; see above -- black did not qualify as a splash. |
| Shield-Wall Sentinel | Tutors for a creature with defender; this is not a defenders deck. |
| Silverback Elder | The only card that qualified as a splash under the deterministic filter (green, 1 candidate), but {2}{G}{G}{G} is three green pips -- not a splash by any real definition. |
| Stronghold Arena | Requires {B}. This is the cost of the mono-white build stated plainly: Stronghold Arena is the only card in the cube that converts a life total into cards, and it is unavailable here. |
| Temporary Lockdown | 'exile each nonland permanent with mana value 2 or less' is catastrophic in a deck whose board is 1/1 Soldier tokens and 2-drops. |
| Thran Portal | A rare land that charges 1 life per activation in a deck built around its life total. |
| Timeless Lotus | Five-colour fixing in a mono-colour deck. |
| Urza Assembles the Titans | Chapters I and II look for planeswalkers; this deck runs none. |
| Vanquisher's Axe | Cut, but it is the honest answer to the zero-one-drop curve WARN. +2/+0 for {1} plus equip {2} is three mana across two turns for a pump that dies with the creature -- but it is the only mana-value-1 card in the pool that does anything on an aggressive board, and it doubles the swing on the deck's 5 lifelink instances. |
| Walking Bulwark | Its ability only helps creatures with defender; this list runs at most one. |
| Weatherlight Compleated | Needs 4 creature deaths to become a creature; this deck wants its creatures alive and attacking. |
| Wingmantle Chaplain | Cut. Its Bird count scales with 'each creature with defender you control' and this list runs zero defenders, so it enters as a 0/3 making nothing. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  17 / 17 recommended  [PASS]
Avg CMC:     2.65   Ramp cards: 0   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  +0.20 adj [MV 2.65 vs 2.5, 0 accel, scaled N/60]  ->  17 lands  (P(2-4 in 7) = 0.794)

Color Balance (core):  [PASS]
  W  demand 100.0%  prod 100.0%  gap  +0.0pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] pool_base: cube_mainboard of dominaria-united---main-set only; all 21 distinct names verified by exact string match against the working pool cache.
[PASS] copy_limits: commons/uncommons <= 2, rares/mythics <= 1 -- verified against cube_search.get_max_copies with a per_rarity policy and cross-checked against each pool card's max_copies. All 21 names pass. Destroy Evil is split 1 mainboard + 1 sideboard = 2 total, at its common limit.
[PASS] rare_mythic_cap: 5 of 5 used, ALL in the mainboard after the grill repair: Valiant Veteran (rare), Archangel of Wrath (rare), Danitha, Benalia's Hope (rare), Guardian of New Benalia (rare) and Serra Paragon (mythic). The pre-grill build spent one of these on a sideboard card (Anointed Peacekeeper) that never appeared in the 40; the grill correctly flagged that as the worst use of the scarcest resource in the build. No rare land is played, because a mono-colour deck needs no fixing.
[PASS] basics: Plains x17 are format-supplied and exempt from copy limits.
[PASS] colour_usability: All 23 nonland cards return a non-None effective_cost.best_mode(card, ['W'], []). Three mainboard cards and one sideboard card carry off-colour printed identities from kicker costs this deck can NEVER pay, and each is included for its base mode only with no plan resting on the kicked half: Phyrexian Missionary (identity BW; cast {1}{W}, {1}{B} kicker dead, so the graveyard-recursion clause never happens -- it is a 2/3 lifelink), Archangel of Wrath (identity BRW; cast {2}{W}{W}, {B}/{R} kickers dead, so both damage triggers never happen -- it is a 3/4 flying lifelink), Runic Shot (identity UW, sideboard; cast {W}, {U} kicker dead, so no scry), Stall for Time (identity UW, sideboard; cast {2}{W}, {1}{U} kicker dead, so no stun counters). Four of the 50 cards are played strictly as their unkicked halves and this is stated rather than assumed.
```