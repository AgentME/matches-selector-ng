/* @flow */

import matches from './';

const ul = document.createElement('ul');
ul.innerHTML = '<li><em>foo</em></li>';
const li = ul.children[0];
const em = li.children[0];

test('matchesSelector(el, selector)', () => {
  expect(matches(em, 'ul li em')).toBe(true);
  expect(matches(em, 'ul em')).toBe(true);
  expect(matches(em, 'ul > li > em')).toBe(true);
  expect(matches(em, 'ul ul em')).toBe(false);

  expect(matches(li, 'ul li')).toBe(true);
  expect(matches(li, 'ul > li')).toBe(true);
  expect(matches(li, 'li')).toBe(true);
  expect(matches(li, 'div > li')).toBe(false);

  expect(matches(ul, 'ul')).toBe(true);
  expect(matches(ul, 'body > ul')).toBe(false);
});
