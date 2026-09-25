---
deck_name: "ug-hexproof-lock-voltron"
cube_id: "ecl"
cube_slug: "ecl"
colors: "GU"
format: "40-card"
built_at: "2026-08-11T22:30:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)

```
  8x Forest
  4x Island
  2x Evolving Wilds  (fetches a basic, tapped)
  2x Tangled Islet  (dual, enters tapped)
```

### CREATURES (12)

```
CMC  Card                     Qty   Color Role                 Rar
  1  Virulent Emissary        x1    G     Threat/Payoff        U
  2  Bloom Tender             x1    G     Engine               M
  2  Foraging Wickermaw       x1    C     Engine               C
  2  Gravelgill Scoundrel     x2    U     Threat/Payoff        C
  2  Great Forest Druid       x1    G     Engine               C
  2  Tam, Mindful First-Year  x1    GU    Threat/Payoff        R
  3  Crossroads Watcher       x1    G     Threat/Payoff        C
  3  Formidable Speaker       x1    G     Engine               R
  3  Glen Elendra Guardian    x1    U     Interaction          R
  4  Chitinous Graspling      x1    GU    Threat/Payoff        C
  5  Glister Bairn            x1    GU    Threat/Payoff        U
```

### INSTANTS & SORCERIES (5)

```
CMC  Card                     Qty   Color Role                 Rar
  1  Blossoming Defense       x2    G     Interaction          U
  1  Spell Snare              x1    U     Interaction          U
  2  Assert Perfection        x1    G     Interaction          C
  3  Unforgiving Aim          x1    G     Interaction          C
```

### OTHER SPELLS (7)

```
CMC  Card                     Qty   Color Role                 Rar
  2  Aquitect's Defenses      x2    U     Threat/Payoff        C
  2  Puca's Eye               x1    C     Engine               U
  2  Stalactite Dagger        x2    C     Threat/Payoff        C
  3  Gilt-Leaf's Embrace      x2    G     Threat/Payoff        C
```

## SIDEBOARD (10)

```
Card                     Qty   Color Role / When to board in  Rar
Wild Unraveling          x2    U     Hate — Against removal aimed at Tam that Spell Snare cannot reach — Spell Snare is live against only 72 of 260 unique nonland cube cards (27.7%), and this counters a spell of any mana value. Pay the {1} alternative cost, not blight 2.  [C]
Chomping Changeling      x2    G     Hate — The deck's ONLY artifact answer — 'destroy up to one target artifact or enchantment' against the cube's 11 artifacts and 21 enchantments. 'Up to one' means it is castable with no target, so the 1/2 changeling body is never stranded.  [U]
Dawn's Light Archer      x2    G     Hate — Against fliers — 'Flash / Reach' on a 4/2 ambushes 10 of the cube's 13 non-G/U fliers (those with toughness 4 or less) at instant speed.  [C]
Unforgiving Aim          x1    G     Hate — Second copy, against the cube's 13 non-G/U fliers ('Destroy target creature with flying') and 21 enchantments. It has NO artifact mode.  [C]
Rooftop Percher          x2    C     Hate — Against the cube's 39 graveyard cards — 'exile up to two target cards from graveyards'; colourless, so it casts off any lands.  [C]
Selfless Safewright      x1    G     Flex — Against sweepers and edicts — the residual exposure the lock genuinely does not cover. Tam's type line is Legendary Creature - Gorgon Wizard, so naming Gorgon or Wizard reaches Tam, and Stalactite Dagger's 'is all creature types' makes an equipped Tam covered by any name. Do not convoke it by tapping Tam.  [R]
```

## ANALYSIS

### DECK IDENTITY

A green-primary G/U Voltron deck whose protection is a lock rather than a spell. Tam, Mindful First-Year has two abilities that compose: 'Each other creature you control has hexproof from each of its colors' and '{T}: Target creature you control becomes all colors until end of turn'. A creature that is all five colours therefore has hexproof from all five, and no COLOURED spell or ability an opponent controls can target it. The second half of the engine is Glister Bairn, whose 'X is the number of colors among permanents you control' reads 2 in an ordinary two-colour deck but 5 the moment Tam has made a permanent all colours. THREE LIMITS, stated after the grill rather than glossed: (1) Tam gets ONE {T} per turn cycle, so the precombat activation that feeds Glister Bairn and the untapped Tam that answers removal on the opponent's turn compete for the same tap — Formidable Speaker's '{1}, {T}: Untap another target permanent' is the only card in the deck that resolves that contention, and it is in the list for that reason as much as for its tutor. (2) Tam's static says each OTHER creature, so Tam never protects itself; six mainboard copies (Blossoming Defense x2, Aquitect's Defenses x2, Gilt-Leaf's Embrace x2) can grant Tam a one-shot protection at instant speed, and Glen Elendra Guardian can counter the spell outright. (3) Hexproof is not evasion — an untargetable creature can still be chump-blocked, which is what the trample on Gilt-Leaf's Embrace and Crossroads Watcher is for.


### THE LOCK, STATED PRECISELY

Tam, Mindful First-Year has two abilities that only matter together:

```
Each other creature you control has hexproof from each of its colors.
{T}: Target creature you control becomes all colors until end of turn.
```

Tap Tam targeting your suited carrier. That creature is now all five colours, so the static grants it hexproof *from each of its colours* — all five. No **coloured** spell or ability an opponent controls can target it. The cube contains essentially no colourless targeted removal, so in practice that is every removal spell in the format.

**What the lock does not stop.** These are the lines to play around, and all four were surfaced by the grill rather than by the build:

| Not stopped | Why |
|---|---|
| Anything on the opponent's turn, unless Tam is untapped | The grant lasts *"until end of turn"* — see the tap problem below |
| Sweepers and edicts | They don't target. 5 of 260 unique nonland cards (1.9%) |
| Blockers | Untargetable is not unblockable |
| Tam itself | The static says *each **other** creature* |
| Foraging Wickermaw, and the Shapeshifter token | Both are colourless — hexproof from *zero* colours is nothing |

### THE TAP PROBLEM — THE MOST IMPORTANT THING TO KNOW

**Tam gets one `{T}` per turn cycle, and the deck wants it twice.**

- Spend it **precombat** → Glister Bairn's X reads 5 and you swing with +5/+5. But Tam is now tapped, and on the opponent's turn your carrier has reverted to hexproof from its own colour only — which for **8 of 12 creature copies** is a single colour. Eighteen non-G/U targeted removal spells in the cube can then kill it.
- **Hold it** → Tam's ability is instant-speed, so you can re-activate in response to removal and fizzle it. But Glister Bairn saw X = 2 or 3 that combat.

**Formidable Speaker is the only card in the deck that lets you do both:** `{1}, {T}: Untap another target permanent`. Activate Tam precombat for the pump, then untap Tam and hold the protection window. That is why it's in the list — the tutor half is a bonus.

### GLISTER BAIRN, AND WHY IT ISN'T THE WHOLE PLAN

```
Vivid — At the beginning of combat on your turn, another target creature you
control gets +X/+X until end of turn, where X is the number of colors among
permanents you control.
```

X is 2 in a bare G/U board and **5** once Tam has made a permanent all colours. The timing works: Tam's ability is instant-speed and untimed, X is computed on resolution, so activate in your first main phase.

But that flagship line needs **both singletons on the battlefield**, and P(drawing two specific one-ofs in the 13 cards you see by turn 6) is **(13×12)/(40×39) = 10%**. So the deck does not rely on it. **Two** permanents raise X *without* Tam:

| Card | Clause | Effect on X |
|---|---|---|
| Puca's Eye | *"choose a color. This artifact becomes the chosen color"* | +1, permanently |
| Foraging Wickermaw | *"This creature becomes that color until end of turn"* | +1, for `{1}`, at instant speed |

That does **not** improve the 10% — X = 5 requires Tam, full stop. What it improves is the *fallback*:

| Bairn's X without Tam | Requires | Rate by turn 6 |
|---|---|---|
| 2 (+2/+2) | neither raiser | 45% |
| 3 (+3/+3) | one raiser | 45% |
| 4 (+4/+4) | both | 10% |

So Glister Bairn went from a flat +2/+2 in *every* no-Tam game to **+3/+3 or better in 55%** of them.

Puca's Eye is the sharper of the two: its `{3}, {T}: Draw a card` activates **only if there are five colors among permanents you control** — a condition that in this deck exists exclusively because Tam created it. It is the one card in the pool that pays you for having the lock online.

**Bloom Tender is *not* an X-raiser**, despite looking like one. It *reads* the colour count and produces **mana** — mana is not a permanent and changes no permanent's colour. It's in the deck purely as acceleration (2 mana off a two-drop, 5 in five colours with Tam online).

### THE DEATHTOUCH REMOVAL LINE

Assert Perfection reads *"Target creature you control gets +1/+0 until end of turn. It deals damage equal to its power to up to one target creature an opponent controls"* — one-sided, **no damage back**, unlike a fight. Point it at Virulent Emissary (`{G}` 1/1 **deathtouch**) and any nonzero damage is lethal: two mana kills any creature in the cube and you keep both bodies. Caveat: it's a *sorcery*, so it can't be held up alongside the flash Auras.

### WHY THIS DECK IS GREEN WITH A BLUE LOCK PIECE

Pip demand is **11 green to 6 blue**. That's forced by the cube's fixing:

- Tangled Islet is the **only** G/U dual in the entire cube, and it enters tapped.
- There is no rare G/U dual — compare W/U (Hallowed Fountain) and G/W (Temple Garden), both untapped-capable.

Tam being `{1}{G/U}` rescues the plan: the lock piece casts off two Forests, so it's never colour-screwed. Three any-colour producers on bodies do the work the land slot can't. The white splash was declined despite two legal candidates for the same reason.

### PLAY PATTERN

Deploy a carrier, then Tam, then suit. Hold Tam back if the opponent has removal up — six mainboard copies (Blossoming Defense ×2, Aquitect's Defenses ×2, Gilt-Leaf's Embrace ×2) can protect Tam at instant speed, and Glen Elendra Guardian can counter the spell outright, but none of them is persistent. Prefer Chitinous Graspling and Glister Bairn as carriers when you can't spare the tap: they're **hybrid**, so Tam's static gives them hexproof from *two* colours with no activation and no expiry.

### HOW THE THREE VOLTRON DECKS DIFFER

| | Protection method | Evasion method | Fixing | Colour gaps |
|---|---|---|---|---|
| G/W Ground | Indestructible while attacking | Trample | GOOD (2 free duals) | −3.8 / −8.6pp |
| W/U Skies | Counterspells + flash hexproof | Flying and unblockable-by-text | GOOD (2 free duals) | +5.9 / −12.2pp |
| **G/U Lock** | **Untargetable by every coloured spell** | Trample + unblockable-by-tap | **THIN (1 dual, enters tapped)** | **+2.2 / −2.2pp** |

This is the most resilient of the three against targeted removal, the least resilient against a sweeper, and — despite having the worst raw fixing — it ended up with the tightest colour balance of the three, because the repair put three any-colour producers on bodies.


### STRUCTURAL CHECKS

```
── Structural Checks: PASS ──────────────────────────────────
Curve (midrange):  [PASS]
  MV distribution (24 nonland):  1:4  2:12  3:6  4:1  5:1
Assembly (thesis turn 6, 13 cards seen):  [PASS]
  PASS  payoff: 7 copies (effective 6.5: Glister Bairn@0.5) → p=0.90 (need ≥ 0.75)
  PASS  enabler: 7 copies (effective 6.5: Tam, Mindful First-Year@0.7, Formidable Speaker@0.8) → p=0.90 (need ≥ 0.75)
Goldfish (1000 hands, seed 0):  [PASS]
  keepable 84% (need ≥ 80%)   3 lands by turn 3: 84%
  play by turn: T1 54%  T2 97%  T3 99%
Coverage:  [PASS]
  CONCEDED  wide_boards: G/U holds no mass removal in this pool. The deck's answer is that a single untargetable creature outclasses a wide board rather than clearing it: Gilt-Leaf's Embrace x2 grants trample and indestructible so chump blocks convert to face damage, and Crossroads Watcher carries the same maths with native trample. Note the honest limit the lock does NOT cover: hexproof is not evasion, so an untargetable creature can still be chump-blocked.
  OK        single_large_threat: Assert Perfection, Virulent Emissary
  CONCEDED  noncreature_permanents: PARTIALLY CONCEDED, corrected after the grill. Unforgiving Aim's modes are 'Destroy target creature with flying', 'Destroy target enchantment' and a 2/2 token — it has NO artifact mode, so against the cube's 11 artifacts the mainboard answer count is 0 (10 opposing, after excluding this deck's own Stalactite Dagger). Enchantments (21 cards) are answered by Unforgiving Aim x1; artifacts are conceded to the sideboard, where Chomping Changeling x2 ('destroy up to one target artifact or enchantment') carries the class.
  OK        stack: Spell Snare, Glen Elendra Guardian
  CONCEDED  graveyard: No G/U mainboard graveyard hate at this curve. Rooftop Percher ('exile up to two target cards from graveyards') is colourless and sits in the sideboard for the cube's 39 graveyard cards; at mana value 5 it would compete with Glister Bairn at the top of the curve.
```

No WARN-tier flags were raised on either the pre-grill or the post-repair run: curve, assembly, goldfish and coverage all returned PASS.

### FAILURE MODES

| Mode | Verdict | Reasoning |
|---|---|---|
| flood | mitigation | Stalactite Dagger's 'Equip {2}' x2 re-suits a fresh carrier after the first dies without recasting a card; Formidable Speaker's '{1}, {T}: Untap another target permanent' converts a spare mana into a second Tam activation or an untapped mana creature; and Puca's Eye's '{3}, {T}: Draw a card. Activate only if there are five colors among permanents you control' turns surplus mana into cards in exactly the board state the lock creates. Four of 24 nonland cards absorb extra mana, up from three before the grill. |
| screw | mitigation | Four of 24 nonland cards cost 1 and twelve cost 2. Three separate any-colour producers sit on two-mana bodies — Great Forest Druid ('{T}: Add one mana of any color', 0/4), Bloom Tender ('for each color among permanents you control, add one mana of that color') and Foraging Wickermaw ('{1}: Add one mana of any color') — which is the deck's answer to a pair whose only dual enters tapped. Evolving Wilds x2 fetches whichever basic is missing, and Tam is {1}{G/U}, castable off two Forests, so the lock piece is never colour-screwed. Goldfish sim: 84% keepable, 84% on three lands by turn 3. |
| decapitation | mitigation | REWRITTEN after the grill, which marked the previous ACCEPTED entry UNSATISFIED because it rested on a false count. The key piece is Tam, and the claim that nothing protected it was wrong: Blossoming Defense x2 ('Target creature you control gets +2/+2 and gains hexproof until end of turn'), Aquitect's Defenses x2 ('Flash / Enchant creature you control / ... gains hexproof until end of turn') and Gilt-Leaf's Embrace x2 ('Flash / ... gains trample and indestructible until end of turn') are all legal on Tam at instant speed = 6 of 24 copies, and Glen Elendra Guardian was added at the grill to counter the removal spell outright rather than spend a protection card. Tam can also protect itself indirectly by staying untapped: its ability is instant-speed, so re-activating in response to a targeted removal spell aimed at the CARRIER fizzles it. What none of that covers, and what is genuinely accepted, is non-targeting mass removal — sweepers and edicts, 5 of 260 unique nonland cards in this cube (1.9%) — and that is what Selfless Safewright answers from the board. |
| gas-out | mitigation | REWRITTEN after the grill, which marked the previous ACCEPTED entry UNSATISFIED because its stated cost was false (it claimed the pool offered only two draw effects in these colours at mana value 5 and 3; there are 17, six at mana value 2 or less). Repaired by taking the cheapest and most synergistic of them: Puca's Eye ('When this artifact enters, draw a card' plus a repeatable '{3}, {T}: Draw a card' that turns on only under the five-colour board Tam creates) and Formidable Speaker's ETB tutor. Alongside them, Glister Bairn's combat trigger is a recurring pump that costs no cards at all, and Stalactite Dagger re-equips for {2}. PRECISION (Challenger R1): the deck holds ONE unconditional draw — Puca's Eye's ETB — plus one repeatable conditional draw (its '{3}, {T}: Draw a card', live only under the five-colour board Tam creates) plus one conditional tutor (Formidable Speaker's ETB, which is card-neutral selection contingent on a spare card, not a draw). The mitigation stands on Puca's Eye; it held 0 before. |
| raced | mitigation | The cube's fastest clocks are evasive (threat_profile: 41 evasion cards, 15.8%, 13 of them blue). This deck blocks rather than races: Great Forest Druid is a 0/4 wall that also makes mana, Virulent Emissary has deathtouch so it trades with any attacker regardless of size, Gravelgill Scoundrel x2 are 1/3s with vigilance that attack and still block, Chitinous Graspling is a 3/4 with REACH, and Glen Elendra Guardian is a 3/4 flash FLIER that ambushes most of the cube's fliers. Unforgiving Aim answers a flier directly — 13 non-G/U fliers in the pool, not the whole 41-card evasion class. Dawn's Light Archer x2 comes in from the board when the matchup is airborne. |
| disruption-fizzle | mitigation | CORRECTED after the grill. The kill turn is a combat step, so there is no chain to break, and one piece of interaction on that turn meets Blossoming Defense x2 ({G}, hexproof), Gilt-Leaf's Embrace x2 ({2}{G} flash, indestructible), Spell Snare x1, or Glen Elendra Guardian's counter. The previous entry also claimed the lock means 'a coloured removal spell cannot legally target it at all' — that is TEMPORALLY FALSE and is the deck's real exposure: the all-colours grant lasts 'until end of turn', so on the opponent's turn the carrier reverts to hexproof from its own colours only, which for 8 of 12 creature copies is a single colour, and 18 non-G/U targeted removal spells in the cube can then target it. Tam's ability is instant-speed and can be re-activated in response — but only if Tam is untapped, which means the tap was NOT spent precombat feeding Glister Bairn. That is a genuine one-tap-two-jobs contention, and Formidable Speaker's untap is the single card that resolves it. |

### CARDS CONSIDERED BUT EXCLUDED

| Card | Reason |
|---|---|
| Oko, Lorwyn Liege // Oko, Shadowmoor Scion | MYTHIC, and named in the winning sketch's keystone package before being declined at FILL. Its '+2: Up to one target creature gains all creature types' grants creature TYPES, not colours — it does NOT feed Tam's all-colours lock and does not raise Glister Bairn's X, which is the single reason it looked like a fit. The remaining modes (a -2/-0 shrink; back-face mill and two 3/3 Elks; a -6 emblem) are a grindy attrition package in a deck whose thesis turn is 6. THE MOST TEMPTING CUT TO REVISIT if you want to take this list grindier. |
| Lofty Dreams | The archetype context named this a keystone and both surviving sketches wanted it: '+2/+2 and has flying' plus 'When this Aura enters, draw a card' is the best raw Aura in the cube. Declined on mana: {3}{U}{U} in a deck running 3 Islands and 7 blue sources total, and its convoke taps the carrier it is enchanting. Glister Bairn occupies the one 5-drop slot this curve can hold and does more. |
| Selfless Safewright | RARE — SIDEBOARD. The ONLY card in the pool that covers Tam itself (Tam's static excludes Tam; Safewright naming Gorgon or Wizard reaches it, since Tam is a Legendary Creature - Gorgon Wizard). Not maindecked because at mana value 5 it would be a second five-drop on a curve that already tops at 5. |
| Bristlebane Battler | RARE. {1}{G} 6/6 trample ward {2}, but 'enters with five -1/-1 counters' shed one per other-creature ETB — it needs five separate creature entries to reach printed size, which is the opposite of a fast clock. |
| Mirrormind Crown | RARE. 'the first time you would create one or more tokens each turn, you may instead create that many tokens that are copies of equipped creature' — a real engine with Stalactite Dagger, but {4} to cast plus {2} to equip is 6 mana before it copies anything. |
| Glen Elendra Guardian | RARE. A 3/4 flash flier that counters a noncreature spell — genuinely good, and it was in the winning sketch's rare budget. Declined because the deck runs only 7 blue sources and its {2}{U} plus a {1}{U} activation is a heavy blue commitment in a 15-green-pip deck. |
| Wistfulness | MYTHIC. {3}{G/U}{G/U} 6/5 whose ETB exiles an artifact or enchantment if {G}{G} was spent, or draws two if {U}{U} was. A fine card, but mana value 5 and the deck's blue count cannot reliably turn on the {U}{U} half. |
| Champions of the Perfect | RARE. 'Whenever you cast a creature spell, draw a card' on a 6/6 — but the deck runs 8 creature copies in 24 nonland cards, so the trigger fires rarely, and 'behold an Elf and exile it' is card disadvantage. |
| Bloom Tender | MYTHIC. 'For each color among permanents you control, add one mana of that color' — note this DOES scale with Tam's all-colours grant to five mana. Declined because it is a 1/1 that dies to everything and the lock has to already be online for the payoff, which inverts the dependency. |
| Sapling Nursery / Aurora Awakener / Sunderflock | All rare/mythic at mana value 7-9 — far outside a turn-6 thesis. |
| Illusion Spinners | 'This creature has hexproof as long as it's untapped' — but attacking taps it, so the hexproof is off exactly when the carrier is exposed. Redundant with Tam's lock in any case. |
| Bristlebane Outrider | 'can't be blocked by creatures with power 2 or less' fails against any 3-power blocker, and the +2/+0 is conditional on another creature having entered that turn. |
| Safewright Cavalry | 'can't be blocked by more than one creature' is not evasion — a single chump blocker still absorbs the attack. |
| Vinebred Brawler | 'This creature must be blocked if able' forces a block, which is only good with trample already attached; as a 4/2 it dies to the block it forces. |
| Chitinous Graspling | {3}{G/U} 3/4 changeling with reach — a fine blocker and a fine carrier, and the closest card to making the cut. Excluded because adding it as the 24th nonland card pushed avg MV to 2.375 and the land recommendation to 17 while the build held 16; Spell Snare took the slot instead and brought the two into exact agreement. |
| Moon-Vigil Adherents | A 0/0 that grows with creature count and graveyard creatures — this deck runs 8 creature copies and does not self-mill, so it is a small body most turns. |
| Eclipsed Realms | 'Add one mana of any color. Spend this mana only to cast a spell of the chosen type' — locked to ONE creature type. This deck's 8 creature copies span 7 distinct types, and the mana cannot cast an Aura, Spell Snare, or Assert Perfection at all. It would be a colourless land here. |
| Springleaf Drum | '{T}, Tap an untapped creature you control: Add one mana of any color' — real fixing, but it competes for the same untapped body as Gravelgill Scoundrel's unblockable cost, and Great Forest Druid taps itself for any colour without that conflict. |
| Thirst for Identity | 'Draw three cards. Then discard two cards unless you discard a creature card' — the deck's best card draw, but at {2}{U} with only 7 blue sources it is awkward, and it does nothing to the board on a turn the deck wants to develop the lock. |
| Wild Unraveling | '{U}{U} Counter target spell' — double blue is unreachable on most turns in a 3-Island deck. |
| Rimekin Recluse / Run Away Together / Temporal Cleansing | Blue bounce and tuck effects. All are reasonable interaction, but each is {2}{U} or heavier in a deck whose blue is a splash in all but name. |
| Blossombind / Noggle the Mind | Blue removal Auras rather than Voltron pieces; Noggle the Mind also turns off the target's abilities but leaves a 1/1 blocker. |
| Thoughtweft Charge | SIDEBOARD. '+3/+3 and draw a card if a creature entered' — a bigger pump than Blossoming Defense but without hexproof, so it does not answer the removal spell that a Voltron deck actually loses to. |
| Chomping Changeling | SIDEBOARD. 'destroy up to one target artifact or enchantment' on a 1/2 changeling — the deck's artifact answer, boarded rather than maindecked because the cube's artifact density is 4.2%. |
| Dawn's Light Archer | SIDEBOARD. 'Flash / Reach' 4/2 — the ambush blocker for the cube's 41-card evasion class, boarded because the maindeck already holds Unforgiving Aim for fliers. |
| Evershrike's Gift | SPLASH CANDIDATE (white), declined. '+1/+0 and has flying' with graveyard recursion is a fine Aura, but adding a third colour to the cube's THINNEST pair — Tangled Islet is the only G/U dual and there is no rare backup — is the worst mana trade available in this cube. |
| Bark of Doran | SPLASH CANDIDATE (white), declined. Its damage-swap would work well on Gravelgill Scoundrel 1/3 and Great Forest Druid 0/4, but same mana objection: a white source in a 9-Forest / 3-Island base is a land that casts nothing else. |

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.29   Ramp cards: 3   Cantrips: 0
  Derivation: base 17 (argmax P(2-4 in 7) = 0.794)  -0.78 adj [MV 2.29 vs 2.5, 3 accel, scaled N/60]  ->  16 lands  (P(2-4 in 7) = 0.790)

Color Balance (core):  [PASS]
  G  demand  64.7%  prod  62.5%  gap  +2.2pp  [OK]
  U  demand  35.3%  prod  37.5%  gap  -2.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
Pool base: cube_mainboard (ecl)                                    PASS
Commons/uncommons max 2 copies                                     PASS
Rares/mythics max 1 copy                                           PASS
Max 5 rare/mythic cards (main+side): 5 used -> Bloom Tender, Formidable Speaker, Glen Elendra Guardian, Selfless Safewright, Tam, Mindful First-Year   PASS
Every card present in the cube by exact name                       PASS
Colour usability via effective_cost.best_mode                      PASS
Mainboard = 40                                                    PASS
Sideboard = 10                                                    PASS
```
