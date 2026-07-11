---
deck_name: "br-garna-braids-death-value"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "BR"
format: "40-card"
built_at: "2026-07-10T23:37:54Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

# BR Death-Trigger Sacrifice (Garna/Braids)

Black-red midrange that converts a stream of expendable bodies into cards, removal and reach damage. Garna, Bloodfist of Keld turns every attacking creature that dies into a card and every other death into a ping; Braids, Arisen Nightmare grinds resource attrition every end step. Cult Conscript, Splatter Goblin and Lagomos's hasty tokens are near-free sacrifice fuel, and Ragefire Hellkite converts leftover fodder into a double-strike finish.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
 7x Swamp
 6x Mountain
 2x Geothermal Bog        BR dual, enters tapped
 1x Sulfurous Springs     BR painland (rare)
```

### CREATURES (16)
```
CMC  Card                      Qty   Color  Role                                      Rar
  1  Cult Conscript            x2    B      Recursive fodder                          U
  2  Splatter Goblin           x2    B      Fodder + removal rider on death           C
  2  Phyrexian Vivisector      x2    B      Death-trigger scry engine                 C
  3  Gibbering Barricade       x1    B      Cheap repeatable sac outlet: draw         C
  3  Braids, Arisen Nightmare  x1    B      Sacrifice engine / card advantage         R
  3  Lagomos, Hand of Hatred   x2    BR     Free sac fodder each combat + late tutor  U
  3  Balduvian Berserker       x2    R      Death-damage payoff / enlist attacker     U
  4  Garna, Bloodfist of Keld  x2    BR     Keystone payoff: draw on attacking deaths U
  5  Hurler Cyclops            x1    R      Repeatable sacrifice outlet               U
  6  Ragefire Hellkite         x1    R      Sac outlet finisher (double strike)       R
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                      Qty   Color  Role                                      Rar
  1  Bone Splinters            x2    B      Removal / sacrifice outlet                C
  1  Cut Down                  x2    B      Cheap removal                             U
  2  Lightning Strike          x2    R      Removal / reach                           C
  3  Warhost's Frenzy          x1    R      Mass pump + kicked death-draw payoff      U
```

### OTHER SPELLS (1)
```
CMC  Card                      Qty   Color  Role                                      Rar
  3  Liliana of the Veil       x1    B      Interaction: symmetric discard + edicts   M
```

## SIDEBOARD (10)
```
Card                      Qty   Color  Role / When to board in                       Rar
Pilfer                    x2    B      Discard vs control/combo                      C
Extinguish the Light      x2    B      Unconditional removal vs big threats          C
Aggressive Sabotage       x1    B      Discard + reach vs control                    C
Smash to Dust             x1    R      Artifact removal / defenders / mini-sweep     C
Jaya's Firenado           x1    R      Big removal vs midrange fatties               C
In Thrall to the Pit      x1    R      Steal-and-sac vs big threats                  C
Battle-Rage Blessing      x1    B      Protect Garna/Braids from removal             C
Drag to the Bottom        x1    B      Sweeper vs go-wide tokens                     R
```

## ANALYSIS

**Garna's two modes are timing-dependent, and the deck is built around that.** Garna only draws when the dying creature was *attacking* — so deaths in combat (bad blocks forced by Splatter Goblin/Balduvian Berserker, or mid-combat sacrifices to Hurler Cyclops and Gibbering Barricade) are the draw engine, while end-step deaths (Lagomos's token, Braids's sacrifice) are pings to each opponent instead. Both modes are profitable, but when you want cards, sacrifice attackers *during* combat with an instant-speed outlet; when you just want reach, let the token expire. Note that Bone Splinters is a sorcery and never triggers Garna's draw mode.

**The fodder loop:** Cult Conscript returns for {1}{B} any turn a non-Skeleton creature died — which in this deck is nearly every turn. Conscript into Bone Splinters or Gibbering Barricade, then rebuy it, gives repeatable removal/draw at a one-mana body's cost. Lagomos manufactures a free 2/1 trample-haste attacker every combat; it attacks, deals 2, and its end-step death still pings via Garna.

**Braids's attrition math:** each end step you trade your worst permanent (usually a recurring Conscript or an expired token — note tokens die at end of combat, so sac the Conscript) against the opponent's choice of sacrificing or giving you a card plus 2 life loss. In a 40-card format most decks can't afford either half for long.

**Warhost's Frenzy kicked is the burst-finish:** +2/+0 team-wide, then every creature death that turn draws a card — combined with Ragefire Hellkite's attack-sac or a Hurler Cyclops chain, an all-out attack refuels the hand even if the board trades away.

**Enlist synergy:** Balduvian Berserker's enlist can tap the summoning-sick or defensive body (a tapped Cult Conscript can't be enlisted, but Vivisector can) to hit harder; if it dies attacking it deals its (boosted-base) power in damage and draws you a card via Garna.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap:**
- Defiler of Flesh — real engine text (cast-trigger pump + menace, life-for-B discount) but the deck's rare slots owed more to Braids (engine), Liliana (interaction) and Ragefire Hellkite (finisher). First swap-in if you drop Liliana.
- Weatherlight Compleated — colorless death-payoff that scries/draws on every sacrifice; excellent here, cut purely on the cap. Swap for Sulfurous Springs (accepting slower mana) or Drag to the Bottom if you want it.
- Sheoldred, the Apocalypse — highest raw power in black but zero sacrifice synergy; a "good card" splash, not a pipeline piece.
- Tyrannical Pitlord — its leave-the-battlefield sacrifice rider is technically a death-trigger enabler, but 6 MV with a built-in 2-for-1 risk is too clunky at competitive weight.
- Squee, Dubious Monarch / Rundvelt Hordemaster — the recursive-goblin package; deliberately reserved for the BR Goblin-recursion build of this same archetype.

**Strong uncommons a tier below the includes:**
- Braids's Frightful Return — sac + discard + recursion saga; the closest cut. Take out Warhost's Frenzy or 1 Cut Down for it in grindy metas.
- Sengir Connoisseur — 5-MV flying death-counter payoff; competes with Hurler Cyclops and lost on outlet utility.
- Balduvian Atrocity — kicked mini-reanimation is nice but the 3-drop slot was full.
- Knight of Dusk's Shadow, Dragon Whelp — solid bodies, no pipeline text.

**Sideboard-consideration cards:** Battlefly Swarm (evasive fodder vs control), Flowstone Infusion / Furious Bellow (combat tricks vs aggro mirrors), Toxic Abomination (raw fodder body if you need a 15th creature).

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.54   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  55.9%  prod  62.5%  gap  -6.6pp  [OK]
  R  demand  44.1%  prod  56.2%  gap -12.1pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] All cards from cube mainboard pool (verified vs working pool; basics exempt)
[PASS] Commons/uncommons <= 2 copies each (checked across main + sideboard)
[PASS] Rares/mythics <= 1 copy each
[PASS] Max 5 rares/mythics total: exactly 5 (Braids, Arisen Nightmare; Liliana of the
       Veil; Ragefire Hellkite; Sulfurous Springs; Drag to the Bottom)
[PASS] All color identities within B/R
[PASS] Mana audit PASS (16 lands, color balance OK)
```
