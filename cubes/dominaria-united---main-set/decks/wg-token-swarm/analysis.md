---
deck_name: "wg-token-swarm"
cube_id: "3d026208-ab69-4a10-8ebb-9788d2b1c925"
cube_slug: "dominaria-united---main-set"
colors: "WG"
format: "40-card"
built_at: "2026-07-11T08:03:19Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

# DECK: wg-token-swarm | 40-card | WG | 40 cards

White-green Soldiers & Go-Wide Tokens midrange: token producers flood the board while Queen Allenal of Ruadach amplifies every batch and grows with the creature count. Valiant Veteran and King Darien XLVIII stack anthems on the swarm, Serra Redeemer converts entering 1/1s into permanent 3/3s, and King Darien's sacrifice mode insures the army against board wipes. Bite Down and Citizen's Arrest clear the way for anthem-fueled alpha strikes.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
9x Plains
5x Forest
2x Radiant Grove         GW dual, enters tapped
```

### CREATURES (15)
```
CMC  Card                        Qty   Color  Role                                           Rar
  1  Llanowar Stalker            x1    G      Grows with every entering body                 C
  2  Resolute Reinforcements     x2    W      Two bodies at flash speed                      U
  2  Quirion Beastcaller         x1    G      Counters engine off creature spells            R
  2  Valiant Veteran             x1    W      Soldier lord anthem                            R
  3  Queen Allenal of Ruadach    x2    GW     Token amplifier + creature-count body          U
  3  King Darien XLVIII          x1    GW     Anthem + token sink + wipe insurance           R
  3  Argivian Cavalier           x2    W      Body + Soldier token; enlist reach             C
  4  Griffin Protector           x2    W      Flyer that grows during token flurries         C
  5  Serra Redeemer              x1    W      Turns entering 1/1s into 3/3s                  R
  5  Defiler of Faith            x1    W      Top-end token engine                           R
  6  Argivian Phalanx            x1    W      Affinity for creatures; near-free big body     C
```

### INSTANTS & SORCERIES (7)
```
CMC  Card                        Qty   Color  Role                                           Rar
  1  Strength of the Coalition   x1    G      Trick; kicked: permanent team-wide counters    U
  2  Bite Down                   x2    G      Removal via own creature's power               C
  3  Scout the Wilderness        x2    G      Ramp/fixing; kicked adds two Soldiers          C
  4  Captain's Call              x2    W      Three Soldier tokens (four with Allenal)       C
```

### OTHER SPELLS (2)
```
CMC  Card                        Qty   Color  Role                                           Rar
  3  Citizen's Arrest            x2    W      Exile removal for creatures/planeswalkers      C
```

## SIDEBOARD (10)
```
Card                        Qty   Color  Role / When to board in                             Rar
Broken Wings                x2    G      Artifact/enchantment/flyer hate                     C
Destroy Evil                x2    W      Enchantment removal + big-toughness answer          C
Prayer of Binding           x2    W      Flexible exile answer for bombs                     U
Artillery Blast             x2    W      Cheap instant removal vs tapped attackers           C
Take Up the Shield          x2    W      Protect a lord from removal/wipes                   C
```

## ANALYSIS

**Queen Allenal multiplies everything.** Her replacement effect ("those tokens plus a 1/1 white Soldier are created instead") turns Captain's Call into four Soldiers, a kicked Scout the Wilderness into three, and — with Defiler of Faith out — every white permanent spell into two bodies. Meanwhile her power/toughness equal your creature count, so she is routinely a 5/5+ that also makes Bite Down a kill spell for almost anything.

**The anthem stack.** Valiant Veteran (+1/+1 to other Soldiers) and King Darien XLVIII (+1/+1 to other creatures) stack: the deck's 1/1 Soldier tokens attack as 3/3s. Darien's activated ability keeps converting flood mana into counters and Soldiers, and his sacrifice mode ("creature tokens you control gain hexproof and indestructible until end of turn") blanks a board wipe or targeted removal at the cost of one anthem — the single most important insurance line in the deck.

**Serra Redeemer sequencing.** Redeemer triggers only for entering creatures with power 2 or less. Deploy her before the anthems come down (or count anthems before casting token spells): with both Veteran and Darien in play, new tokens enter as 3/3s and no longer trigger her. Early Redeemer converts every 1/1 into a permanent 3/3; late Redeemer can brick — sequence accordingly.

**Affinity endgame.** Argivian Phalanx costs {1} less per creature: with five creatures out it costs {W}, and it is itself a Soldier under the Veteran anthem. Quirion Beastcaller grows off the 15 creature spells (note: token creation does not trigger her — only cast creature spells) and her death trigger redistributes all counters, punishing spot removal.

**Interaction is deliberately light (16.7% of non-lands, below the 20-30% midrange band).** The plan is proactive: flood, anthem, swing. Bite Down leans on the deck's own big bodies, Citizen's Arrest is the unconditional answer, and eight of ten sideboard slots are removal/protection for matchups where game 1 speed doesn't hold up.

**What kills this deck.** Temporary Lockdown exiles every token (MV 0) and most 2-drops; The Elder Dragon War chapter I sweeps unpumped tokens. Answers: Destroy Evil / Broken Wings (side) for the enchantments, Darien's sacrifice mode plus Take Up the Shield for damage-based sweeps, and Valiant Veteran's graveyard mode to rebuild.

**Audit footnotes.** The audit's `ramp_count: 0` is a tooling artifact — Scout the Wilderness genuinely ramps (puts a basic onto the battlefield) but the audit reads a `tags` field the cache doesn't carry; the land count conclusion is unaffected. Kicker costs (Scout {1}{W}, Strength of the Coalition {2}{W}) are uncounted pip demand on top of the audited 70% white share — the 11 white sources cover it.

### Cards Considered but Excluded

**Rares/mythics cut by the 5-card cap:**
- Silverback Elder (M) — a value trigger on every creature spell; the strongest card cut. Swap in over Defiler of Faith if you want raw power over token velocity.
- Guardian of New Benalia (R) — premium 2-drop but its enlist/scry package pulls toward the WR enlist shell rather than this one.
- Llanowar Loamspeaker (R) — any-color mana dork plus land animation; lost to Quirion Beastcaller for the 2-slot rare.
- Herd Migration (R) — "Beast per basic land type" only makes 2 with this manabase.
- Defiler of Vigor (R) — green permanents are the minority here; the white Defiler makes tokens instead of sizing.
- Ajani, Sleeper Agent (M), Briar Hydra (R), Threats Undetected (R) — playable but off-plan.
- Temporary Lockdown (R) — anti-synergy: exiles our own MV-0 tokens.

**Uncommons/commons a tier below the chosen includes:**
- Zar Ojanen, Scion of Efrava (U) — counters when tapped, but only for creatures with toughness below your basic-type count (2) — anthems turn it off immediately.
- Wingmantle Chaplain (U) — needs a defender package the deck doesn't run.
- Juniper Order Rootweaver (C), Shalai's Acolyte (U), Nishoba Brawler (U) — kicker bodies with less token relevance.
- Love Song of Night and Day (U) — makes a Bird but gifts the opponent two cards.
- Knight of Dawn's Light (U) — cut from the sideboard in the grill (lifegain line nearly blank here) for the second Take Up the Shield.

**Sideboard considerations that missed the cut:**
- Gaea's Might (C) — +2/+2 for {G} at two basic types; fine trick, Strength of the Coalition took the slot.
- Snarespinner (C) — anti-flyer blocker; Broken Wings answers flyers while hitting artifacts too.
- Tail Swipe (U), Hexbane Tortoise (C), Charismatic Vanguard (C) — playable filler, no matchup earns them a slot.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.04   Ramp cards: 0

Color Balance (core):  [PASS]
  G  demand  30.3%  prod  43.8%  gap -13.5pp  [OK]
  W  demand  69.7%  prod  68.8%  gap  +0.9pp  [OK]
```

## RESTRICTIONS COMPLIANCE
```
[PASS] Commons/uncommons max 2 copies each (across main + side)
[PASS] Rares/mythics max 1 copy each
[PASS] Max 5 rares/mythics total across main + side: 5/5 used
       (Quirion Beastcaller, Valiant Veteran, King Darien XLVIII,
        Serra Redeemer, Defiler of Faith)
[PASS] All cards from cube mainboard (basic lands exempt)
[PASS] Color identity within W/G for all cards
```
