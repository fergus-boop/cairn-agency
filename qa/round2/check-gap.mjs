import fs from 'node:fs/promises';
import vm from 'node:vm';
import { transform } from '../../client/node_modules/esbuild/lib/main.js';
import * as data from '../../client/src/data/site.js';

// Source-level interaction check, not a replacement for browser QA.
const source = (await fs.readFile(new URL('../../client/src/components/site/GapCheck.jsx', import.meta.url), 'utf8')).replace(/^import .*;\r?\n/gm, '').replace('export default function', 'function');
const compiled = await transform(source, {loader: 'jsx', jsxFactory: 'createElement', jsxFragment: 'Fragment'});
let values = [], cursor = 0;
const context = { ...data, Set,
  createElement: (type, props, ...children) => ({type, props: props || {}, children: children.flat(Infinity)}), Fragment: 'Fragment',
  useState: initial => {const key = cursor++; if (!(key in values)) values[key] = typeof initial === 'function' ? initial() : initial; return [values[key], next => {values[key] = typeof next === 'function' ? next(values[key]) : next;}];},
  useMemo: factory => factory(), useReducedMotion: () => true,
  Link: 'Link', AnimatePresence: 'AnimatePresence', motion: {li: 'motion.li'}, Check: 'Check', Mail: 'Mail', ArrowRight: 'ArrowRight',
};
vm.createContext(context);
vm.runInContext(compiled.code, context);
const render = () => {cursor = 0; return context.GapCheck();};
const flatten = tree => tree && typeof tree === 'object' ? [tree, ...tree.children.flatMap(flatten)] : [];
const nodes = () => flatten(render());
const input = () => nodes().find(n => n.type === 'textarea');
const box = () => nodes().find(n => n.type === 'input');
const email = () => nodes().find(n => n.type === 'a' && n.props.href.startsWith('mailto:'));
const details = () => {const link = email(); if (!link) return null; const url = new URL(link.props.href); return {recipient: url.pathname, subject: url.searchParams.get('subject'), body: url.searchParams.get('body')};};
const results = [];
results.push({case: 'empty', email: details()});
input().props.onChange({target: {value: '  \n  '}});
results.push({case: 'whitespace only', email: details()});
input().props.onChange({target: {value: 'My booking form drops café orders & dates.\nPlease check it.'}});
results.push({case: 'text only, Unicode and newline', email: details()});
box().props.onChange();
results.push({case: 'ticks plus text', email: details()});
input().props.onChange({target: {value: ''}});
results.push({case: 'ticks only', email: details()});
input().props.onChange({target: {value: 'Clear this too'}});
nodes().find(n => n.type === 'button' && n.children.includes('Clear')).props.onClick();
results.push({case: 'clear both', email: details(), text: input().props.value, checked: box().props.checked});
console.log(JSON.stringify(results, null, 2));
