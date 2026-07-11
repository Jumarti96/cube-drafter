---
deck_name: "wb-lifegain-counters-voltron"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "WB"
format: "40-card"
built_at: "2026-07-09T00:00:00Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
  7x Plains
  7x Swamp
  2x Sunlit Marsh            WB dual (common), enters tapped
```

### CREATURES (16)
```
CMC  Card                          Qty   Color  Role                                              Rar
  1  Lunarch Veteran // Luminous   x1    W      ETB lifegain enabler; disturb side re-gains life   C
     Phantom                                    on death
  1  Indulgent Aristocrat          x1    B      Lifelink 1-drop; secondary sac->counters engine    U
  2  Voice of the Blessed          x1    W      Archetype centerpiece - one +1/+1 counter per      R
                                                 lifegain EVENT, threshold flying/vigilance/
                                                 indestructible
  2  Blood Artist                  x1    B      Drain payoff on any death, doubles with sac        U
  2  Fleshtaker                    x1    WB     Sac payoff - life + scry                            U
  2  Restless Bloodseeker //       x1    B      Converts "gained life this turn" into a Blood       U
     Bloodsoaked Reveler                        token; backside is a recurring drain finisher
  2  Ambitious Farmhand //         x1    W      Plains-fetch consistency that flips into a          U
     Seasoned Cathar                            lifelink threat
  2  Niblis of the Urn             x1    W      Spirit tempo flyer; taps blockers, Spirit-count     U
                                                 support for Apothecary Geist
  3  Gluttonous Guest              x1    B      Blood token generator; cracking it gains 1 life     C
                                                 (triggers Voice)
  3  Falkenrath Torturer           x1    B      Sac outlet that self-buffs with +1/+1 counters      C
  3  Fiend Hunter                  x1    W      ETB exile removal on a body                          U
  3  Desperate Farmer //           x1    B      Cheap lifelink body, upgrades to a bigger lifelink  C
     Depraved Harvester                         body on a teammate's death
  4  Apothecary Geist              x1    W      Flying body, one-time 3-life gain off Spirit count  C
                                                 (1 lifegain event = 1 Voice counter, not 3)
  4  Restoration Angel             x1    W      Flash flyer; blinks Lunarch Veteran/Apothecary      R
                                                 Geist/Fiend Hunter to re-trigger their ETBs
  4  Slayer of the Wicked          x1    W      Conditional removal vs the cube's dominant           U
                                                 Vampire/Werewolf/Zombie tribal decks
  5  Liesa, Forgotten Archangel    x1    WB     Top-end flying lifelink threat; recurs dying         R
                                                 creatures, turns opposing removal into exile
```

### INSTANTS & SORCERIES (4)
```
CMC  Card                  Qty   Color  Role                                            Rar
  1  Tragic Slip           x1    B      Cheap conditional removal (-13/-13 with morbid) C
  2  Infernal Grasp        x1    B      Unconditional creature removal                  U
  2  Valorous Stance       x1    W      Flexible protection or removal vs big toughness U
  4  Sever the Bloodline   x1    B      Exile removal that also hits token copies of    U
                                        the same name

```

### OTHER SPELLS (4)
```
CMC  Card                        Qty   Color  Role                                              Rar
  2  The Meathook Massacre        x1    B      Sweeper + repeatable drain engine, every          M
                                                opposing death triggers Voice of the Blessed
  3  Chalice of Life // Chalice   x1    C      Repeatable guaranteed lifegain engine - one       U
     of Death                                  Voice trigger every turn it's activated
  3  Sorin, Imperious Bloodlord   x1    B      Planeswalker payoff - grants deathtouch/lifelink   M
                                                (+counter if Vampire), or sac a Vampire to drain
                                                3 (gains life, triggers Voice)
  3  Butcher's Cleaver             x1    C      Voltron/equipment payoff granting lifelink to     U
                                                Humans (retriggers Voice every combat)
```

## SIDEBOARD (10)

```
Card                    Qty   Color  Role / When to board in                              Rar
Slayer of the Wicked    x1    W      2nd copy - board vs Vampire/Werewolf/Zombie tribal    U
                                     decks (dominant cube archetypes)
Soul-Guide Gryff        x1    W      Graveyard hate - exile a card from any graveyard,     C
                                     flying body vs flashback/reanimator/self-mill decks
Cathar Commando         x1    W      Flash artifact/enchantment removal vs Voltron         C
                                     equipment and artifact-matters decks
Killing Wave            x1    B      Scalable edict vs go-wide token swarm decks           U
Murderous Compulsion    x1    B      Cheap removal for tapped attackers, board vs aggro    C
Boarded Window          x1    C      Damage prevention vs aggro/burn decks                 U
Angelic Purge           x1    W      Flexible exile answer for problematic artifacts,      C
                                     creatures, or enchantments (does not hit
                                     planeswalkers - Eaten Alive covers that)
Bound by Moonsilver     x1    W      Pacify a large uncontrollable threat, board vs        C
                                     Voltron/big creature decks
Avacynian Priest        x1    W      Repeatable tap-down vs non-Human tribal aggro         C
                                     (Vampires/Werewolves/Zombies/Spirits)
Eaten Alive             x1    B      Cheap exile removal that also hits planeswalkers,     C
                                     board vs control matchups
```

## ANALYSIS

**Slot allocation.** Lands: 16 (40% of N=40) — squarely in the Midrange
Land 38-42% band for this classification. Interaction: 4 dedicated removal
spells (Tragic Slip, Infernal Grasp, Valorous Stance, Sever the Bloodline)
plus Fiend Hunter and Slayer of the Wicked as removal-on-a-body and The
Meathook Massacre as a sweeper — roughly 29% of the 24 nonland slots,
appropriate for a competitive-power Midrange seat that needs to survive to
its lifegain payoffs. Threats/Payoffs + Engine: the remaining ~17 nonland
cards are almost entirely tagged Payload/Payoff or Engine/Outlet for the
Lifegain and Counters (+1/+1) synergy clusters — this deck's engine budget
is absorbed directly into its threat slots rather than run as separate
value/ramp pieces, consistent with the Midrange proportions table.

**The Voice math.** Voice of the Blessed converts *lifegain events*, not
life-point totals, into +1/+1 counters — Apothecary Geist's one-time 3-life
ETB is one counter, not three (see its role text, corrected during the
self-grill below). Ten of the 24 nonland cards independently produce a
lifegain event: Lunarch Veteran (both sides), Indulgent Aristocrat,
Fleshtaker, Ambitious Farmhand's back face, Chalice of Life, Gluttonous
Guest, Sorin's second +1, Desperate Farmer (both sides), Apothecary Geist,
Restoration Angel (via blinking any of the above), and Butcher's Cleaver
(retriggers Seasoned Cathar/any Human's lifelink combat damage). At
threshold (4 counters) Voice becomes an evasive, vigilant 6/6+; at 10
counters it's also indestructible.

**Double-dip drain.** Blood Artist and The Meathook Massacre both trigger
on *any* creature death (yours or an opponent's) — every sacrifice from
Falkenrath Torturer, Fleshtaker, or Sorin's second +1 is simultaneously a
Voice-relevant lifegain event and a Blood Artist/Meathook drain trigger,
so the same board action compounds two payoffs at once, per the user's
original archetype rationale.

**Mana base note.** Pip demand is a clean 50/50 W/B split (14 pips each),
so the land base is a flat 7 Plains / 7 Swamp / 2x Sunlit Marsh with no
skew needed — see Mana Audit below.

**Post-grill revision.** An independent two-agent self-grill (Proposer/
Challenger, each reading only the deck + pool bundle) caught two role-text
errors and one card swap:
- Apothecary Geist's role text originally implied its 3-life ETB would
  trigger 3 Voice counters; corrected to reflect that a single lifegain
  event is 1 counter regardless of the life total gained.
- Angelic Purge's sideboard role text implied it answered planeswalkers;
  its oracle text ("Exile target artifact, creature, or enchantment")
  cannot target planeswalkers, so the note was corrected to point to
  Eaten Alive as the actual planeswalker answer in the same sideboard.
- Guardian of Pilgrims was swapped for Chalice of Life // Chalice of
  Death — a colorless, budget-neutral upgrade that adds a genuine
  repeatable Voice trigger instead of a body with no lifegain/counters
  synergy.

Both grill agents independently flagged Niblis of the Urn as the weakest
mainboard fit (Spirit-count support for Apothecary Geist, but no direct
lifegain/counters synergy of its own); it was kept because no clearly
better on-color, in-budget replacement was found after the Chalice swap.

### Cards Considered but Excluded

**Rares/mythics cut for the 5-card cap** (mainboard already spends all 5
on Voice of the Blessed, The Meathook Massacre, Sorin Imperious Bloodlord,
Restoration Angel, and Liesa, Forgotten Archangel):
- Cathars' Crusade (rare) — "Whenever a creature you control enters, put
  a +1/+1 counter on each creature you control." The single best card left
  out per the self-grill Challenger, but it wants a wide board this list
  doesn't build (no dedicated token generators beyond incidental Blood
  tokens); swapping it in would require cutting one of the five named
  keystones from an already-maxed budget.
- Bloodline Keeper // Lord of Lineage (mythic) — a strong repeatable
  Vampire token engine, but it's a go-wide payoff, not a lifegain/counters
  one; off-plan for this sub-archetype.
- Captivating Vampire (rare) — Vampire tribal lord/steal effect; the deck
  only runs 3-4 Vampires, too thin to support a lord.
- Wedding Announcement // Wedding Festivity (rare) — solid value engine,
  but its payoff (card draw or tokens) doesn't touch lifegain or counters.
- Westvale Abbey // Ormendahl, Profane Prince (rare land) — a real
  alternate win condition, but competes with the 5-rare cap against
  higher-priority spell keystones and the deck doesn't reliably assemble
  five sacrifice fodder.
- Voldaren Bloodcaster // Bloodbat Summoner (rare) — excellent Blood-token
  engine, but it's an Aristocrats/tribal payoff rather than a lifegain/
  Voice payoff; also already covered by Gluttonous Guest and Restless
  Bloodseeker at cheaper cost.
- Shattered Sanctum (rare dual land) — initially included, then dropped
  during the build to stay under the 5-rare/mythic cap once Sorin,
  Restoration Angel, and Liesa were all confirmed; 2x Sunlit Marsh
  (common) covers the same fixing role for free.

**Uncommons/commons a tier below the chosen includes:**
- Mausoleum Guard (uncommon) — dies into two 1/1 flying Spirit tokens,
  which would have doubled as Spirit-count support for Apothecary Geist
  and death triggers for Blood Artist/Meathook, but it doesn't itself gain
  life or generate counters.
- Butcher Ghoul (common) — Undying naturally produces a +1/+1 counter on
  return, tangential synergy with the Counters cluster, but no lifegain
  tie-in at all.
- Lingering Souls (uncommon) — two 1/1 flying Spirits for cheap, strong
  Spirit-count and sacrifice fodder, but zero lifegain/counters text of
  its own; cut in favor of cards that touch Voice directly.
- Demonmail Hauberk / Neglected Heirloom // Ashmouth Blade / Gryff's Boon
  (uncommons) — alternate Voltron equipment/aura options to Butcher's
  Cleaver, none of which grant lifelink or otherwise feed Voice.
- Triskaidekaphobia (uncommon) — a lifegain-adjacent alternate win
  condition, but too slow and situational (exact-13-life trigger) for a
  competitive 40-card shell.

**Sideboard considerations not included:**
- Village Rites (common) — cheap card advantage off a sacrifice, a
  reasonable value swap for a grindier matchup, but the current sideboard
  already covers the graveyard/artifact/tribal/aggro answers this pool
  supports.
- Soul Separator (uncommon) — a graveyard-value artifact, too slow and
  off-plan compared to Soul-Guide Gryff's more direct graveyard hate.
- Morbid Opportunist / Morkrut Banshee (uncommons) — Aristocrats-cluster
  cards that reward a wide sacrifice plan more than this Voltron-leaning
  build actually runs.

## MANA AUDIT: PASS

```
── Mana Audit: PASS ────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     2.62   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand  50.0%  prod  56.2%  gap  -6.2pp  [OK]
  W  demand  50.0%  prod  56.2%  gap  -6.2pp  [OK]
```

## RESTRICTIONS COMPLIANCE

```
[PASS] Commons/uncommons <=2 copies: only 2x Sunlit Marsh (land) exceeds
       1 copy; every nonland card is a 1-of.
[PASS] Rares/mythics <=1 copy each: Voice of the Blessed, The Meathook
       Massacre, Sorin Imperious Bloodlord, Restoration Angel, Liesa
       Forgotten Archangel - each exactly 1 copy.
[PASS] Max 5 rares/mythics total (main+SB): exactly 5/5 used, all in the
       mainboard; sideboard is 100% common/uncommon.
[PASS] No excluded cards (exclusion list was empty).
```
