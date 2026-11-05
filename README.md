# GeoCARphy (v1.21 · Nov 4, 2026)

One road trip a day on the real US map. Same trip for everyone. Live on the web, Nov 4. Plus game.

## Ready to go live
Upload to a new repo SmAisle/GeoCARphy (site: smaisle.app/GeoCARphy/, Jeff creates it): index.html, owner.html, icon-180/192/512/1024.png.
Then add it to daily/games.js and copy icon-512.png to daily/icons/geocarphy.png. Add to the app in ios/prepare.py.
Check-ins: mm_devices (Firebase aislerun-88e79); no rules change needed. Owner page: owner.html.

## How the daily works
Everything comes from the date, so it runs forever with no Claude: 86 cities, 178 roads, 616 city questions (life.mjs), plus map and capital questions made in the game.
Monday short (about 4 legs) up to Sunday long (about 9). Types rotate: Mon Budget, Tue One tank, Wed Clock, Thu Budget, Fri Clock, Sat One tank, Sun rotates.
Simulated 366 days: every day builds a valid trip, 346 different trips, and the game tries to avoid repeating a city within 9 days.
Rebuild: `node build.mjs` (needs Natural Earth 50m states file; public domain). Balance: `node sim.mjs 366`.

## Known limits
- Mileages are straight-line × 1.16, rounded to 5, with 9 hand fixes. Within about 15% of real driving; not exact.
- Roads on the map are curves between cities, not the true highway lines.
- Gas price is a daily formula, $2.95 to $3.55, not live.
- "You beat 72%" stores scores in the open dg_shares list under ids starting mm (no Firebase step for Jeff). Not tested live: this workspace can't reach Firebase. Shows only once 10 or more players have finished.
- Balance is simulated, not playtested by people.
- Name chosen Nov 4, for now; said Gee-oh-car-fee. Formerly Mile Marker. App Store and lawyer checks still open. The project folder stays mile-marker.

## v1.22 (Nov 4)
Out of gas, time or money: a yellow ‹ smAisle Daily button sits under Menu and Try again, so one tap always leaves. Replaces branch finish-back-button (v1.15.3), which was built before the planning screens.
Changed in source/page.html and, by the same edit, in index.html, because build.mjs needs the usatlas map files that aren't in this repo.
