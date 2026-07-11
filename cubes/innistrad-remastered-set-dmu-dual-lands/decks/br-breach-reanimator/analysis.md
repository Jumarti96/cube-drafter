---
deck_name: "br-breach-reanimator"
cube_id: "551c6382-d024-4039-8fce-1cf9c23135b3"
cube_slug: "innistrad-remastered-set-dmu-dual-lands"
colors: "BR"
format: "40-card"
built_at: "2026-07-09T17:48:30Z"
mana_audit_status: "PASS"
restrictions_status: "PASS"
---

BR Through-the-Breach Reanimator: a graveyard-combo hybrid that uses nine distinct discard outlets to stock the graveyard, then deploys Griselbrand via Edgar's Awakening or Through the Breach. Recursive Zombie fodder (Gravecrawler, Sanitarium Skeleton, Butcher Ghoul) provides early board presence, emerge fuel for Distended Mindbender and Abundant Maw, and triggers for Morbid Opportunist and Archghoul of Thraben. Lightning Axe and Collective Brutality double as interaction and enablers.

## MAINBOARD (24 spells + 16 lands = 40)

### LANDS (16)
```
 7x Swamp
 5x Mountain
 2x Geothermal Bog          BR dual, enters tapped
 2x Evolving Wilds          Fetches basic, enters tapped
```

### CREATURES (16)
```
CMC  Card                    Qty   Color  Role                    Rar
 1  Gravecrawler            x1    B      Recursive Fodder        R
 1  Sanitarium Skeleton     x2    B      Recursive Fodder        C
 2  Butcher Ghoul           x2    B      Recursive Fodder        C
 2  Olivia's Dragoon        x2    B      Discard Outlet          C
 3  Archghoul of Thraben    x2    B      Card Engine             U
 3  Morbid Opportunist      x2    B      Card Engine             U
 4  Haunted Dead            x2    B      Discard Outlet / Threat U
 8  Distended Mindbender    x1    B      Emerge Threat           R
 8  Abundant Maw            x1    B      Emerge Threat           C
 8  Griselbrand             x1    B      Reanimator Target       M
```

### INSTANTS & SORCERIES (8)
```
CMC  Card                    Qty   Color  Role                    Rar
 1  Faithless Looting       x2    R      Discard Outlet          C
 1  Lightning Axe           x2    R      Interaction             U
 1  Collective Brutality    x1    BR     Interaction             R
 3  Through the Breach      x1    R      Cheat Engine            M
 5  Edgar's Awakening       x2    B      Reanimation             U
```

## SIDEBOARD (10)
```
Card                    Qty   Color  Role / When to board in     Rar
Tragic Slip             x2    B      Morbid removal              C
Eaten Alive             x2    B      Exile recursive threats     C
Abrade                  x2    R      Artifacts / creatures       U
Blood Artist            x2    B      Anti-aggro lifedrain        U
Fiery Temper            x2    R      Madness burn                U
```

## ANALYSIS

This deck operates on two axes: sorcery-speed hard reanimation via Edgar's Awakening and instant-speed haste cheating via Through the Breach. With nine distinct discard effects across fourteen cards, the probability of seeing both a big target and an outlet in the first few turns is high in a 40-card format.

Griselbrand is the primary target because its activated ability is immediate: Pay 7 life, draw seven cards. When cheated via Through the Breach, it attacks the same turn and can activate before being sacrificed at end of step. When reanimated via Edgar's Awakening, it enters on turn 5+ and provides a massive card-advantage engine that stabilizes against aggro or refuels for a second reanimation.

The recursive Zombie package is not just filler. Gravecrawler returns indefinitely as long as a Zombie is on board (and it is itself a Zombie). Butcher Ghoul has undying, leaving a 2/2 body after the first death. Sanitarium Skeleton returns to hand for {2}{B}. These serve three purposes: chump-blocking early, sacrificing to emerge costs on Distended Mindbender or Abundant Maw, and triggering Morbid Opportunist and Archghoul of Thraben. Archghoul specifically turns Zombie deaths into card selection, which helps find the reanimation spell or another big target.

The mana base runs 16 lands because the deck's curve is heavily concentrated at 1-2 mana, with the only expensive spells being reanimation/cheat effects or emerge cards that are cast via sacrifice discounts. The two Geothermal Bog and two Evolving Wilds provide BR fixing; seven Swamps ensure consistent black mana for the recursive engine, while five Mountains plus the duals support the red requirements.

### Cards Considered but Excluded

*Rares/mythics cut due to the 5-card limit:* Bedlam Reveler (R) was the closest contender for the fifth rare slot — it draws three and costs less in a spells-dense deck — but Distended Mindbender was chosen because its emerge cost plays better with recursive fodder and its hand disruption is stronger in the blind cube environment. Bloodhall Priest (R, BR) and Sorin, Imperious Bloodlord (M, B) were evaluated as Vampire-themed payoffs but dilute the reanimator focus. The Meathook Massacre (M, B) is a powerful board wipe but conflicts with the reanimation plan by killing our own recursive creatures.

*Uncommons that are strong fits but a tier below:* Furyblade Vampire (R) is a solid discard outlet but requires attacking and competes with Olivia's Dragoon, which discards at instant speed and has flying. Stromkirk Occultist (R) provides trample and impulse draw but is slower than Faithless Looting. Asylum Visitor (B) draws cards but only when an opponent is empty-handed, making it inconsistent. Burning Vengeance (R) synergizes with flashback but the deck does not cast enough spells from the graveyard to justify it. Morkrut Banshee (B) is excellent removal but the mainboard already has Lightning Axe and Collective Brutality.

*Sideboard-consideration cards:* Geistcatcher's Rig (U, C) was initially included as anti-flying but was cut for being too narrow at six mana. Soul-Guide Gryff (C, W) is the best graveyard hate in the pool but is off-color white and cannot be played in a BR deck. Infernal Grasp (U, B) is efficient removal but the 2 life loss is painful against aggro when the deck already pays life to Griselbrand. Killing Wave (U, B) is a flexible board wipe but sorcery-speed and X-cost make it too slow for the sideboard.

## MANA AUDIT: PASS
```
── Mana Audit: PASS ─────────────────────────────────────────────
Land Count:  16 / 16 recommended  [PASS]
Avg CMC:     3.17   Ramp cards: 0

Color Balance (core):  [PASS]
  B  demand   0.0%  prod  56.2%  gap -56.2pp  [OK]
  R  demand   0.0%  prod  43.8%  gap -43.8pp  [OK]

Splash Check: [PASS]
```

## RESTRICTIONS COMPLIANCE
```
commons/uncommons up to 2 copies ........................... PASS
rares/mythics up to 1 copy ................................... PASS
max 5 rares/mythics total (Griselbrand, Through the Breach, Collective Brutality, Gravecrawler, Distended Mindbender)  PASS
```
