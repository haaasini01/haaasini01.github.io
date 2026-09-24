import { writeFile } from 'node:fs/promises';

const username = 'haaasini01';
const response = await fetch(`https://github.com/users/${username}/contributions`, {
  headers: { 'User-Agent': 'hasini-portfolio-activity-updater' },
});

if (!response.ok) throw new Error(`GitHub returned ${response.status}`);

const html = await response.text();
const levels = [...html.matchAll(/data-level="([0-4])"/g)].slice(0, -5).map(match => match[1]).join('');
const count = [...html.matchAll(/>(\d+) contributions? on /g)]
  .reduce((total, match) => total + Number(match[1]), 0);

if (levels.length < 360 || count === 0) throw new Error('Could not read GitHub contribution data');

const today = new Date();
const priorYear = today.getFullYear() - 1;
const data = {
  count,
  range: `${priorYear}–${String(today.getFullYear()).slice(-2)}`,
  levels,
};

await writeFile('public/github-activity.json', `${JSON.stringify(data, null, 2)}\n`);
console.log(`Updated ${username}'s activity: ${data.count} contributions.`);
